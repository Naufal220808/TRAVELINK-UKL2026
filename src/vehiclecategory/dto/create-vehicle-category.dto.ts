import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVehicleCategoryDto {
  @ApiProperty({ example: 'Jeep' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'jeep' })
  @IsNotEmpty()
  @IsString()
  slug: string;

  @ApiPropertyOptional({ example: 'https://example.com/icon-jeep.png' })
  @IsOptional()
  @IsString()
  icon?: string;
}