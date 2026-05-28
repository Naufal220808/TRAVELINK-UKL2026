import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { DestinationService } from './destinations.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Destinations')
@Controller('destinations')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) { }

  @ApiOperation({ summary: 'Lihat semua destinasi wisata' })
  @Get()
  findAll() {
    return this.destinationService.findAll();
  }

  @ApiOperation({ summary: 'Lihat detail destinasi beserta kendaraan' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.destinationService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Tambah destinasi — body: name, slug, type, city, image?' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  create(@Body() dto: CreateDestinationDto) {
    return this.destinationService.create(dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Edit destinasi' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateDestinationDto) {
    return this.destinationService.update(id, dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Hapus destinasi' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.destinationService.remove(id);
  }
}