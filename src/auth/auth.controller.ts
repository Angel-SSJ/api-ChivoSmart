import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/userDto';
import { RegisterDto } from './Dto/registerDto';
import { LoginDto } from './Dto/loginDto';


@Controller('auth')
export class AuthController {

  constructor(private readonly authService:AuthService){}



  @Post('register')
  register(
    @Body()
    registerDto:RegisterDto
  ){
    console.log(registerDto)
    return this.authService.register(registerDto)
  }

  @Post('login')
  login(
    @Body()
    loginDto:LoginDto
  ){
    return this.authService.login(loginDto);
  }
}
