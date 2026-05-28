import { IsNotEmpty, IsInt, IsOptional, IsString, Min, Max } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateReviewDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  bookingId: number;

  @ApiProperty({ example: 5, minimum: 1, maximum: 5 })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  @Type(() => Number)
  rating: number;

  @ApiPropertyOptional({ example: 'Kendaraannya sangat nyaman dan bersih!' })
  @IsOptional()
  @IsString()
  comment?: string;
}