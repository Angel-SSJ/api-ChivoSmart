import { Module } from '@nestjs/common';
import { UserController ,UserPreferenceController,UserSessionsController,SuggestionsController,NotificationsController} from './user.controller';
import { UserService,UserPreferenceService, UserSessionsService, SuggestionsService,NotificationsService } from './user.service';
import { Users } from './entity/users';

import {TypeOrmModule} from '@nestjs/typeorm';
import { UserDto } from './dto/userDto';
import { OwnCardsModule } from 'src/ownCards/ownCards.module';
import { RegisteredCardsModule } from 'src/registeredCards/registeredCards.module';


@Module({
  controllers: [UserController,UserPreferenceController,UserSessionsController,SuggestionsController,NotificationsController],
  providers: [UserService,UserPreferenceService, UserSessionsService, SuggestionsService,NotificationsService],
  imports:[TypeOrmModule.forFeature([Users]),OwnCardsModule, RegisteredCardsModule],
  exports:[UserService]
})
export class UserModule {}
