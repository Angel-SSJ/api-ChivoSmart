import { BadRequestException, Injectable, Post, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/user.service';

import { RegisterDto } from './Dto/registerDto';
import * as bcrypt from 'bcryptjs'
import { LoginDto } from './Dto/loginDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
constructor(private readonly userService: UserService,
            private readonly jwtService:JwtService){}


  async register({first_name, last_name,email,password,confirm_password }:RegisterDto){
  const user = await this.userService.findOneByEmail(email)

    if (user){
       throw new BadRequestException('user already exists')
    }
    if (password !== confirm_password){
       throw new BadRequestException('passwords do not match')
    }
    return await this.userService.createUser({
      first_name,
      last_name,
      email,
      password: await bcrypt.hash(password, 10)
    })

    return user
  }

  async login({email,password }:LoginDto){
  const user = await this.userService.findOneByEmail((email))
    if(!user){throw new UnauthorizedException('email is wrong');}

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){throw new UnauthorizedException('password is wrong'); }

    const payload={email:user.email, sub:user.id};
    return{
      access_token: await this.jwtService.signAsync(payload),
      email
    }

  }


}
