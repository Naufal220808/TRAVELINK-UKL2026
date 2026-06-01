import { Body, Controller, Get, Param, Post, Put, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';

@ApiTags('Bookings')
@ApiBearerAuth()
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Get all bookings (Admin only)' })
  @Get()
  findAll() {
    return this.bookingsService.findAll();
  }

  @UseGuards(JwtGuard)
  @ApiOperation({ summary: 'Get my bookings' })
  @Get('my')
  findMyBookings(@CurrentUser() user: any) {
    return this.bookingsService.findMyBookings(user.sub);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('VENDOR')
  @ApiOperation({ summary: 'Get vendor bookings (Vendor only)' })
  @Get('vendor')
  findVendorBookings(@CurrentUser() user: any) {
    return this.bookingsService.findVendorBookings(user.sub);
  }

  @UseGuards(JwtGuard)
  @ApiOperation({ summary: 'Get booking by ID' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bookingsService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @ApiOperation({ summary: 'Create a new booking' })
  @Post()
  create(@CurrentUser() user: any, @Body() dto: CreateBookingDto) {
    return this.bookingsService.create(user.sub, dto);
  }

  @UseGuards(JwtGuard)
  @ApiOperation({ summary: 'Cancel a booking' })
  @Put(':id/cancel')
  cancel(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: any) {
    return this.bookingsService.cancel(id, user.sub);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Update booking status (Admin only)' })
  @Put(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { status: string },
  ) {
    return this.bookingsService.updateStatus(id, body.status);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Confirm payment (Admin only)' })
  @Put(':id/confirm-payment')
  confirmPayment(@Param('id', ParseIntPipe) id: number) {
    return this.bookingsService.confirmPayment(id);
  }
}