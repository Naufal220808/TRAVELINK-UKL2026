import { Body, Controller, Post, Get, Put, Param, UseGuards, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ChangeRoleDto } from './dto/change-role.dto';
import { JwtGuard } from './jwt.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { CurrentUser } from './current-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @UseGuards(JwtGuard)
  @Get('me')
  me(@CurrentUser() user: any) {
    return user;
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('admin-only')
  adminOnly() {
    return { message: 'Hanya admin yang bisa akses ini' };
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Put('change-role/:id')
  changeRole(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ChangeRoleDto,
  ) {
    return this.authService.changeRole(id, dto.role);
  }
}