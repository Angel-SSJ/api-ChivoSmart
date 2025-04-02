import { BadRequestException, Injectable, Post } from '@nestjs/common';
import { UserService } from '../users/user.service';

import { RegisterDto } from './Dto/registerDto';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
constructor(private readonly userService: UserService){}


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
      password: await bcrypt.hash(password, 2)
    })

  }

  login(){
    return 'testing login';
  }


}
