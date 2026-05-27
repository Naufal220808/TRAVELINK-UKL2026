import { IsNotEmpty, IsString, IsOptional, IsInt, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateVehicleDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  vendorId: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  categoryId: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  destinationId: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  capacity: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  pricePerDay: number;
}