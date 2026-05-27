import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateDestinationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  image?: string;
}