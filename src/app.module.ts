import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { DestinationModule } from './destinations/destinations.module';
import { VehicleCategoryModule } from './vehiclecategory/vehicle-category.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { VendorsModule } from './vendors/vendors.module';
import { BookingsModule } from './bookings/bookings.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [PrismaModule, AuthModule, DestinationModule, VehicleCategoryModule, VehiclesModule, VendorsModule, BookingsModule, ReviewsModule],
})
export class AppModule {}