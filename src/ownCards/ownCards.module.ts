import { forwardRef, Module } from '@nestjs/common';
import { OwnCardsService,UserOwnCardsService,TypeOwnCardsService } from './ownCards.service';
import { OwnCardsController,UserOwnCardsController, TypeOwnCardsController } from './ownCards.controller';
import { UserModule } from 'src/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnCards, TypesOwnCard, UserOwnCards } from './entity/ownCards';

@Module({
  controllers: [OwnCardsController,UserOwnCardsController, TypeOwnCardsController],
  providers: [OwnCardsService, UserOwnCardsService,TypeOwnCardsService],
  imports:[forwardRef(()=>UserModule), TypeOrmModule.forFeature([OwnCards,UserOwnCards, TypesOwnCard])],
  exports:[OwnCardsService],
})
export class OwnCardsModule {}
