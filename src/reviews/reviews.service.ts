import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.review.findMany({
      include: {
        user: { select: { id: true, name: true } },
        vehicle: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByVehicle(vehicleId: number) {
    return this.prisma.review.findMany({
      where: { vehicleId },
      include: {
        user: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const review = await this.prisma.review.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true } },
        vehicle: { select: { id: true, name: true } },
      },
    });

    if (!review) {
      throw new NotFoundException('Review tidak ditemukan');
    }

    return review;
  }

  async create(userId: number, dto: CreateReviewDto) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: dto.bookingId },
      include: { review: true },
    });

    if (!booking) {
      throw new NotFoundException('Booking tidak ditemukan');
    }

    if (booking.userId !== userId) {
      throw new BadRequestException(
        'Anda tidak berhak memberi review ini',
      );
    }

    if (
      booking.status !== 'CONFIRMED' &&
      booking.status !== 'COMPLETED'
    ) {
      throw new BadRequestException(
        'Hanya booking yang sudah dikonfirmasi yang bisa direview',
      );
    }

    if (booking.review) {
      throw new BadRequestException(
        'Booking ini sudah direview',
      );
    }

    return this.prisma.review.create({
      data: {
        rating: dto.rating,
        comment: dto.comment,
        userId,
        vehicleId: booking.vehicleId,
        bookingId: booking.id,
      },
    });
  }

  async remove(id: number) {
    const review = await this.prisma.review.findUnique({
      where: { id },
    });

    if (!review) {
      throw new NotFoundException('Review tidak ditemukan');
    }

    return this.prisma.review.delete({
      where: { id },
    });
  }
}