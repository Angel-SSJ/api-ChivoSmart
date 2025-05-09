import { BadRequestException, Injectable,UnauthorizedException } from '@nestjs/common';
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

  }

  async login({email,password }:LoginDto){
  const user = await this.userService.findOneByEmail((email))
    if(!user){throw new UnauthorizedException('email is wrong');}

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){throw new UnauthorizedException('password is wrong'); }

    const payload={sub:user.id};
    const access_token = this.jwtService.sign(payload,{expiresIn:'1d'});

    return{
      accessToken: access_token,
      message: 'Login successfully',
    }

  }


}
