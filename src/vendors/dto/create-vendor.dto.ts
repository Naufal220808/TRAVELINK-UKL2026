import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVendorDto {
  @ApiProperty({ example: 'Budi Transport Bali' })
  @IsNotEmpty()
  @IsString()
  businessName: string;

  @ApiPropertyOptional({ example: 'Jl. Raya Kuta No. 10' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ example: 'Bali' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ example: 'BCA' })
  @IsOptional()
  @IsString()
  bankName?: string;

  @ApiPropertyOptional({ example: '1234567890' })
  @IsOptional()
  @IsString()
  bankAccount?: string;
}