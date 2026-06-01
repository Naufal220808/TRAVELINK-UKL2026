import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { CreateVehicleImageDto } from './dto/create-vehicle-image.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @ApiOperation({ summary: 'Lihat semua kendaraan beserta kategori, destinasi, vendor' })
  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }

  @ApiOperation({ summary: 'Lihat kendaraan berdasarkan destinasi' })
  @Get('destination/:destinationId')
  findByDestination(@Param('destinationId', ParseIntPipe) destinationId: number) {
    return this.vehiclesService.findByDestination(destinationId);
  }

  @ApiOperation({ summary: 'Lihat detail kendaraan beserta review' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vehiclesService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Tambah kendaraan — body: vendorId, categoryId, destinationId, name, description?, capacity, pricePerDay' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN', 'VENDOR')
  @Post()
  create(@Body() dto: CreateVehicleDto) {
    return this.vehiclesService.create(dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Edit kendaraan — body: name?, description?, capacity?, pricePerDay?, status?, categoryId?, destinationId?' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN', 'VENDOR')
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateVehicleDto) {
    return this.vehiclesService.update(id, dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Hapus kendaraan' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vehiclesService.remove(id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Tambah gambar kendaraan (Admin/Vendor)' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN', 'VENDOR')
  @Post('images')
  addImage(@Body() dto: CreateVehicleImageDto) {
    return this.vehiclesService.addImage(dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Hapus gambar kendaraan (Admin/Vendor)' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN', 'VENDOR')
  @Delete('images/:id')
  removeImage(@Param('id', ParseIntPipe) id: number) {
    return this.vehiclesService.removeImage(id);
  }
}