import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { VehicleCategoryService } from './vehicle-category.service';
import { CreateVehicleCategoryDto } from './dto/create-vehicle-category.dto';
import { UpdateVehicleCategoryDto } from './dto/update-vehicle-category.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Vehicle Categories')
@Controller('vehicle-categories')
export class VehicleCategoryController {
  constructor(private readonly vehicleCategoryService: VehicleCategoryService) {}

  @ApiOperation({ summary: 'Lihat semua kategori kendaraan (Jeep, Jetski, ATV, dll.)' })
  @Get()
  findAll() {
    return this.vehicleCategoryService.findAll();
  }

  @ApiOperation({ summary: 'Lihat detail kategori' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vehicleCategoryService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Tambah kategori — body: name, slug, icon?' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  create(@Body() dto: CreateVehicleCategoryDto) {
    return this.vehicleCategoryService.create(dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Edit kategori' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateVehicleCategoryDto) {
    return this.vehicleCategoryService.update(id, dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Hapus kategori' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vehicleCategoryService.remove(id);
  }
}