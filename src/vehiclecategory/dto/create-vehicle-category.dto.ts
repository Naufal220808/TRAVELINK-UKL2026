import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateVehicleCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  icon?: string;
}