import { Body, Controller, Delete, Get, Param, Post, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) { }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Lihat semua review' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  findAll() {
    return this.reviewsService.findAll();
  }

  @ApiOperation({ summary: 'Lihat semua review per kendaraan' })
  @Get('vehicle/:vehicleId')
  findByVehicle(@Param('vehicleId', ParseIntPipe) vehicleId: number) {
    return this.reviewsService.findByVehicle(vehicleId);
  }

  @ApiOperation({ summary: 'Lihat detail review' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Buat review — body: bookingId, rating (1-5), comment?' })
  @UseGuards(JwtGuard)
  @Post()
  create(@CurrentUser() user: any, @Body() dto: CreateReviewDto) {
    return this.reviewsService.create(user.sub, dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Hapus review' })
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.remove(id);
  }
}