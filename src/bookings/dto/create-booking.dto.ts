import { IsNotEmpty, IsInt, IsOptional, IsString, IsDateString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  vehicleId: number;

  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @IsNotEmpty()
  @IsDateString()
  endDate: string;

  @IsOptional()
  @IsString()
  notes?: string;
}