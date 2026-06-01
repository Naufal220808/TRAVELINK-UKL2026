import { IsInt, IsString, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateVehicleImageDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @Type(() => Number)
  vehicleId: number;

  @ApiProperty({ example: 'https://example.com/jeep.jpg' })
  @IsString()
  url: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;
}