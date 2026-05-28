import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateVehicleCategoryDto {
  @ApiPropertyOptional({ example: 'Jeep' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'jeep' })
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiPropertyOptional({ example: 'https://example.com/icon-jeep.png' })
  @IsOptional()
  @IsString()
  icon?: string;
}