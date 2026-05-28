import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { truncate } from 'fs';

@Injectable()
export class VendorsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.vendor.findMany({
      include: { user: { select: { id: true, name: true, email: true, phone: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const vendor = await this.prisma.vendor.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true, phone: true } },
        vehicles: true,
      },
    });

    if (!vendor) {
      throw new NotFoundException('Vendor tidak ditemukan');
    }

    return vendor;
  }

  async findByUserId(userId: number) {
    return this.prisma.vendor.findUnique({
      where: { userId },
      include: { vehicles: true },
    });
  }

  async create(userId: number, dto: CreateVendorDto) {
    const existing = await this.prisma.vendor.findUnique({
      where: { userId },
    });

    if (existing) {
      throw new BadRequestException('Anda sudah terdaftar sebagai vendor');
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: { role: 'VENDOR' },
    });

    return this.prisma.vendor.create({
      data: {
        userId,
        ...dto,
      },
    });
  }

  async update(id: number, dto: UpdateVendorDto) {
    await this.findOne(id);

    return this.prisma.vendor.update({
      where: { id },
      data: dto,
    });
  }

  async verify(id: number) {
    await this.findOne(id);

    return this.prisma.vendor.update({
      where: { id },
      data: { isVerified: true },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.vendor.delete({
      where: { id },
    });

    return { message: 'Vendor sudah dihapus' };
  }
}