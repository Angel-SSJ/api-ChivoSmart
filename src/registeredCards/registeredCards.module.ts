import { forwardRef, Module } from '@nestjs/common';
import { RegisteredCardsService,UserRegisteredCardsService,TypeRegisteredCardsService,BanksService } from './registeredCards.service';
import { RegisteredCardsController,UserRegisteredCardsController,TypeRegisteredCardsController, BanksController } from './registeredCards.controller';
import { UserModule } from 'src/users/user.module';
import { OwnCardsModule } from 'src/ownCards/ownCards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banks, RegisteredCards, TypesRegisteredCards, UserRegisteredCards } from './entity/registeredCards';

@Module({
  controllers: [RegisteredCardsController,UserRegisteredCardsController,TypeRegisteredCardsController, BanksController ],
  providers: [RegisteredCardsService,UserRegisteredCardsService,TypeRegisteredCardsService,BanksService],
  exports: [RegisteredCardsService],
  imports: [forwardRef(()=>UserModule),TypeOrmModule.forFeature([
    RegisteredCards,
    UserRegisteredCards,
    TypesRegisteredCards,
    Banks,
  ]),]
})
export class RegisteredCardsModule {}
