import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Users } from './entity/users';

import {TypeOrmModule} from '@nestjs/typeorm';
import { UserDto } from './dto/userDto';
import { OwnCardsModule } from 'src/ownCards/ownCards.module';
import { RegisteredCardsModule } from 'src/registeredCards/registeredCards.module';


@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[TypeOrmModule.forFeature([Users]),OwnCardsModule, RegisteredCardsModule],
  exports:[UserService]
})
export class UserModule {}
