import { Module } from '@nestjs/common';
import { RegisteredCardsService,UserRegisteredCardsService,TypeRegisteredCardsService,BanksService } from './registeredCards.service';
import { RegisteredCardsController,UserRegisteredCardsController,TypeRegisteredCardsController, BanksController } from './registeredCards.controller';
import { UserModule } from 'src/users/user.module';
import { OwnCardsModule } from 'src/ownCards/ownCards.module';

@Module({
  controllers: [RegisteredCardsController,UserRegisteredCardsController,TypeRegisteredCardsController, BanksController ],
  providers: [RegisteredCardsService,UserRegisteredCardsService,TypeRegisteredCardsService,BanksService],
  exports: [RegisteredCardsService,OwnCardsModule],
  imports: [UserModule]
})
export class RegisteredCardsModule {}
