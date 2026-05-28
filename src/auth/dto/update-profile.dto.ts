import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProfileDto {
  @ApiPropertyOptional({ example: 'Budi Santoso' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: '08123456789' })
  @IsOptional()
  @IsString()
  phone?: string;
}