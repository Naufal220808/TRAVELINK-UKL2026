import { Module } from '@nestjs/common';
import { VehicleCategoryService } from './vehicle-category.service';
import { VehicleCategoryController } from './vehicle-category.controller';

@Module({
  providers: [VehicleCategoryService],
  controllers: [VehicleCategoryController],
})
export class VehicleCategoryModule {}