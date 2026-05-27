import { IsString, IsOptional } from 'class-validator';

export class UpdateVehicleCategoryDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsString()
  icon?: string;
}