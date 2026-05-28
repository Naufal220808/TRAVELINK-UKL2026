import { IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class ChangeRoleDto {
  @ApiProperty({ enum: Role, example: Role.VENDOR })
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}