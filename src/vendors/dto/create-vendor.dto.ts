import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateVendorDto {
  @IsNotEmpty()
  @IsString()
  businessName: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  bankName?: string;

  @IsOptional()
  @IsString()
  bankAccount?: string;
}