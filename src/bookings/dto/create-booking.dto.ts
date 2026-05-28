import { IsNotEmpty, IsInt, IsOptional, IsString, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateBookingDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  vehicleId: number;

  @ApiProperty({ example: '2026-06-01' })
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @ApiProperty({ example: '2026-06-03' })
  @IsNotEmpty()
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional({ example: 'Tolong siapkan helm ekstra' })
  @IsOptional()
  @IsString()
  notes?: string;
}