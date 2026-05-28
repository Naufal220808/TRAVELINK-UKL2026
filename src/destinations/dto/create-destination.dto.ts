import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDestinationDto {
  @ApiProperty({ example: 'Pantai Kuta' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'pantai-kuta' })
  @IsNotEmpty()
  @IsString()
  slug: string;

  @ApiProperty({ example: 'BEACH' })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({ example: 'Bali' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiPropertyOptional({ example: 'https://example.com/pantai-kuta.jpg' })
  @IsOptional()
  @IsString()
  image?: string;
}