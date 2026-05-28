import { IsString, IsOptional, IsInt, IsNumber, Min, IsEnum } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { VehicleStatus } from '@prisma/client';

export class UpdateVehicleDto {
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  categoryId?: number;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  destinationId?: number;

  @ApiPropertyOptional({ example: 'Jeep Wrangler 2022' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'Jeep tangguh cocok untuk medan off-road' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 4 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  capacity?: number;

  @ApiPropertyOptional({ example: 350000 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  pricePerDay?: number;

  @ApiPropertyOptional({ enum: VehicleStatus, example: VehicleStatus.ACTIVE })
  @IsOptional()
  @IsEnum(VehicleStatus)
  status?: VehicleStatus;
}