import { Body, Controller, Delete, Get, Param, Post, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  findAll() {
    return this.reviewsService.findAll();
  }

  @Get('vehicle/:vehicleId')
  findByVehicle(@Param('vehicleId', ParseIntPipe) vehicleId: number) {
    return this.reviewsService.findByVehicle(vehicleId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Post()
  create(@CurrentUser() user: any, @Body() dto: CreateReviewDto) {
    return this.reviewsService.create(user.sub, dto);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.remove(id);
  }
}