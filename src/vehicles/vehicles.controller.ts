import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ParseIntPipe } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Get('destination/:destinationId')
  findByDestination(@Param('destinationId', ParseIntPipe) destinationId: number) {
    return this.vehiclesService.findByDestination(destinationId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vehiclesService.findOne(id);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN', 'VENDOR')
  @Post()
  create(@Body() dto: CreateVehicleDto) {
    return this.vehiclesService.create(dto);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN', 'VENDOR')
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateVehicleDto) {
    return this.vehiclesService.update(id, dto);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vehiclesService.remove(id);
  }
}