import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class RegisterDto {
  @ApiProperty({ example: 'Budi Santoso' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'budi@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiPropertyOptional({ example: '08123456789' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ enum: Role, example: Role.CUSTOMER })
  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}