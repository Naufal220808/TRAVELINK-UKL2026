import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';

@Injectable()
export class DestinationService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.destination.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const destination = await this.prisma.destination.findUnique({
      where: { id },
      include: { vehicles: true },
    });

    if (!destination) {
      throw new NotFoundException('Destinasi tidak ditemukan');
    }

    return destination;
  }

  async create(dto: CreateDestinationDto) {
    return this.prisma.destination.create({
      data: dto,
    });
  }

  async update(id: number, dto: UpdateDestinationDto) {
    await this.findOne(id);

    return this.prisma.destination.update({
      where: { id },
      data: dto,
    });
  }

async remove(id: number) {
  await this.findOne(id);

  await this.prisma.destination.delete({
    where: { id },
  });

  return { message: 'Destinasi sudah dihapus' };
}
}