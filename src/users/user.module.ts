import { forwardRef, Module } from '@nestjs/common';
import { UserController ,UserPreferenceController,UserSessionsController,SuggestionsController,NotificationsController} from './user.controller';
import { UserService,UserPreferenceService, UserSessionsService, SuggestionsService,NotificationsService } from './user.service';
import { Users,UserPreference,UserSessions,Suggestions,Notifications } from './entity/users';

import {TypeOrmModule} from '@nestjs/typeorm';
import { UserDto } from './dto/userDto';
import { OwnCardsModule } from 'src/ownCards/ownCards.module';
import { RegisteredCardsModule } from 'src/registeredCards/registeredCards.module';


@Module({
  controllers: [UserController,UserPreferenceController,UserSessionsController,SuggestionsController,NotificationsController],
  providers: [UserService,UserPreferenceService, UserSessionsService, SuggestionsService,NotificationsService],
  imports:[TypeOrmModule.forFeature([Users,UserPreference,UserSessions,Suggestions,Notifications]),forwardRef(()=> RegisteredCardsModule),forwardRef(()=>OwnCardsModule)],
  exports:[UserService]
})
export class UserModule {}
