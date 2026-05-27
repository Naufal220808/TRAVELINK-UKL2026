import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ParseIntPipe } from '@nestjs/common';
import { DestinationService } from './destinations.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('destinations')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Get()
  findAll() {
    return this.destinationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.destinationService.findOne(id);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  create(@Body() dto: CreateDestinationDto) {
    return this.destinationService.create(dto);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateDestinationDto) {
    return this.destinationService.update(id, dto);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.destinationService.remove(id);
  }
}