import { Body, Controller, Post, Get, Put, Param, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangeRoleDto } from './dto/change-role.dto';
import { JwtGuard } from './jwt.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { CurrentUser } from './current-user.decorator';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiOperation({ summary: 'Daftar akun baru — body: name, email, password, phone?, role?' })
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @ApiOperation({ summary: 'Login & dapat token — body: email, password' })
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Lihat profil user yang sedang login' })
  @UseGuards(JwtGuard)
  @Get('me')
  me(@CurrentUser() user: any) {
    return user;
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update nama & nomor telepon — body: name?, phone?' })
  @UseGuards(JwtGuard)
  @Put('profile')
  updateProfile(@CurrentUser() user: any, @Body() dto: UpdateProfileDto) {
    return this.authService.updateProfile(user.sub, dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Ubah role user — body: role (CUSTOMER/VENDOR/ADMIN)' })
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