import { IsNotEmpty, IsInt, IsOptional, IsString, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  bookingId: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  @Type(() => Number)
  rating: number;

  @IsOptional()
  @IsString()
  comment?: string;
}