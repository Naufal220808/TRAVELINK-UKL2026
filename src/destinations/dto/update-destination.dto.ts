import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateDestinationDto {
  @ApiPropertyOptional({ example: 'Pantai Kuta' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'BEACH' })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiPropertyOptional({ example: 'Bali' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ example: 'https://example.com/pantai-kuta.jpg' })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}