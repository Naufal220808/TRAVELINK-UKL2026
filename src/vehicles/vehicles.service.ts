import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.vehicle.findMany({
      where: { status: 'ACTIVE' },
      include: {
        category: true,
        destination: true,
        vendor: true,
        images: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: { id },
      include: {
        category: true,
        destination: true,
        vendor: true,
        images: true,
        reviews: true,
      },
    });

    if (!vehicle) {
      throw new NotFoundException('Kendaraan tidak ditemukan');
    }

    return vehicle;
  }

  async findByDestination(destinationId: number) {
    return this.prisma.vehicle.findMany({
      where: { destinationId, status: 'ACTIVE' },
      include: {
        category: true,
        destination: true,
        images: true,
      },
    });
  }

  async create(dto: CreateVehicleDto) {
    return this.prisma.vehicle.create({
      data: dto,
      include: {
        category: true,
        destination: true,
      },
    });
  }

  async update(id: number, dto: UpdateVehicleDto) {
    await this.findOne(id);

    return this.prisma.vehicle.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.vehicle.delete({
      where: { id },
    });

    return { message: 'Kendaraan sudah dihapus' };
  }
}