import { Body, Controller, Get, Post, UseGuards, Request, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './Dto/registerDto';
import { LoginDto } from './Dto/loginDto';
import { AuthGuard } from './guard/auth.guard';




@Controller('auth')
export class AuthController {

  constructor(private readonly authService:AuthService){}

  @Post('register')
  register(
    @Body()
    registerDto:RegisterDto
  ){
    return this.authService.register(registerDto)
  }

  @Post('login')
  login(
    @Body()
    loginDto:LoginDto,
  ){
    return this.authService.login(loginDto);
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  profile(
    @Request()
    req
  ){
    return req.user;
  }


}
