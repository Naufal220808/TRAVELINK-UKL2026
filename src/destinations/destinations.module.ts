import { Module } from '@nestjs/common';
import { DestinationService } from './destinations.service';
import { DestinationController } from './destinations.controller';

@Module({
  providers: [DestinationService],
  controllers: [DestinationController],
})
export class DestinationModule {}