import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';

@ApiTags('Vendors')
@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Lihat semua vendor' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  findAll() {
    return this.vendorsService.findAll();
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Lihat detail vendor' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vendorsService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Lihat profil vendor sendiri beserta kendaraan' })
  @UseGuards(JwtGuard)
  @Get('me/profile')
  myProfile(@CurrentUser() user: any) {
    return this.vendorsService.findByUserId(user.sub);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Daftar jadi vendor — body: businessName, address?, city?, bankName?, bankAccount?' })
  @UseGuards(JwtGuard)
  @Post('register')
  register(@CurrentUser() user: any, @Body() dto: CreateVendorDto) {
    return this.vendorsService.create(user.sub, dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Edit data vendor' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('VENDOR', 'ADMIN')
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateVendorDto) {
    return this.vendorsService.update(id, dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Verifikasi vendor — mengubah isVerified menjadi true' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Put(':id/verify')
  verify(@Param('id', ParseIntPipe) id: number) {
    return this.vendorsService.verify(id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Hapus vendor' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vendorsService.remove(id);
  }
}