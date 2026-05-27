import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVehicleCategoryDto } from './dto/create-vehicle-category.dto';
import { UpdateVehicleCategoryDto } from './dto/update-vehicle-category.dto';

@Injectable()
export class VehicleCategoryService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.vehicleCategory.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const category = await this.prisma.vehicleCategory.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Kategori tidak ditemukan');
    }

    return category;
  }

  async create(dto: CreateVehicleCategoryDto) {
    return this.prisma.vehicleCategory.create({
      data: dto,
    });
  }

  async update(id: number, dto: UpdateVehicleCategoryDto) {
    await this.findOne(id);

    return this.prisma.vehicleCategory.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.vehicleCategory.delete({
      where: { id },
    });

    return { message: 'Kategori sudah dihapus' };
  }
}