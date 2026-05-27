import { IsEnum, IsNotEmpty } from 'class-validator';
import { Role } from '@prisma/client';

export class ChangeRoleDto {
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}