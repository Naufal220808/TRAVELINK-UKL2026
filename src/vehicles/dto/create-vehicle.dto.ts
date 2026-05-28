import { IsNotEmpty, IsString, IsOptional, IsInt, IsNumber, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateVehicleDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  vendorId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  categoryId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  destinationId: number;

  @ApiProperty({ example: 'Jeep Wrangler 2022' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'Jeep tangguh cocok untuk medan off-road' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 4 })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  capacity: number;

  @ApiProperty({ example: 350000 })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  pricePerDay: number;
}