import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/userDto';
import { RegisterDto } from './Dto/registerDto';


@Controller('auth')
export class AuthController {

  constructor(private readonly authService:AuthService){}

  @Post('login')
  login(){
    return this.authService.login();
  }

  @Post('register')
  register(
    @Body()
    registerDto:RegisterDto
  ){
    console.log(registerDto)
    return this.authService.register(registerDto)
  }
}