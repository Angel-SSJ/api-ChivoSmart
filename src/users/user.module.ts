import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Users } from './entity/users';

import {TypeOrmModule} from '@nestjs/typeorm';
import { UserDto } from './dto/userDto';


@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[TypeOrmModule.forFeature([Users])],
  exports:[UserService]
})
export class UserModule {}
