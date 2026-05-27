import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  generateBookingCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'BK-';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  calculateDays(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  async findAll() {
    return this.prisma.booking.findMany({
      include: {
        user: { select: { id: true, name: true, email: true } },
        vehicle: { include: { destination: true, category: true } },
        payment: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findMyBookings(userId: number) {
    return this.prisma.booking.findMany({
      where: { userId },
      include: {
        vehicle: { include: { destination: true, category: true } },
        payment: true,
        review: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true } },
        vehicle: { include: { destination: true, category: true } },
        payment: true,
        review: true,
      },
    });

    if (!booking) {
      throw new NotFoundException('Booking tidak ditemukan');
    }

    return booking;
  }

  async create(userId: number, dto: CreateBookingDto) {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: { id: dto.vehicleId },
    });

    if (!vehicle) {
      throw new NotFoundException('Kendaraan tidak ditemukan');
    }

    if (vehicle.status !== 'ACTIVE') {
      throw new BadRequestException('Kendaraan tidak tersedia');
    }

    const totalDays = this.calculateDays(dto.startDate, dto.endDate);

    if (totalDays < 1) {
      throw new BadRequestException('Tanggal tidak valid');
    }

    const totalPrice = Number(vehicle.pricePerDay) * totalDays;
    const bookingCode = this.generateBookingCode();

    const booking = await this.prisma.booking.create({
      data: {
        bookingCode,
        userId,
        vehicleId: dto.vehicleId,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        totalDays,
        totalPrice,
        notes: dto.notes,
      },
      include: {
        vehicle: { include: { destination: true, category: true } },
      },
    });

    await this.prisma.payment.create({
      data: {
        bookingId: booking.id,
        amount: totalPrice,
        status: 'PENDING',
      },
    });

    return booking;
  }

  async cancel(id: number, userId: number) {
    const booking = await this.findOne(id);

    if (booking.userId !== userId) {
      throw new BadRequestException('Anda tidak berhak membatalkan booking ini');
    }

    if (booking.status !== 'PENDING_PAYMENT') {
      throw new BadRequestException('Booking tidak bisa dibatalkan');
    }

    return this.prisma.booking.update({
      where: { id },
      data: { status: 'CANCELLED' },
    });
  }

  async updateStatus(id: number, status: string) {
    await this.findOne(id);

    return this.prisma.booking.update({
      where: { id },
      data: { status: status as any },
    });
  }

  async confirmPayment(id: number) {
    const booking = await this.findOne(id);

    await this.prisma.payment.update({
      where: { bookingId: id },
      data: {
        status: 'PAID',
        paidAt: new Date(),
        method: 'MANUAL',
      },
    });

    return this.prisma.booking.update({
      where: { id },
      data: { status: 'CONFIRMED' },
      include: {
        payment: true,
        vehicle: true,
      },
    });
  }
}