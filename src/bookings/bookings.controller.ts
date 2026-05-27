import { Body, Controller, Get, Param, Post, Put, UseGuards, ParseIntPipe } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  findAll() {
    return this.bookingsService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get('my')
  findMyBookings(@CurrentUser() user: any) {
    return this.bookingsService.findMyBookings(user.sub);
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bookingsService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Post()
  create(@CurrentUser() user: any, @Body() dto: CreateBookingDto) {
    return this.bookingsService.create(user.sub, dto);
  }

  @UseGuards(JwtGuard)
  @Put(':id/cancel')
  cancel(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: any) {
    return this.bookingsService.cancel(id, user.sub);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Put(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { status: string },
  ) {
    return this.bookingsService.updateStatus(id, body.status);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Put(':id/confirm-payment')
  confirmPayment(@Param('id', ParseIntPipe) id: number) {
    return this.bookingsService.confirmPayment(id);
  }
}