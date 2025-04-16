import { Module } from '@nestjs/common';
import { OwnCardsService,UserOwnCardsService,TypeOwnCardsService } from './ownCards.service';
import { OwnCardsController,UserOwnCardsController, TypeOwnCardsController } from './ownCards.controller';
import { UserModule } from 'src/users/user.module';

@Module({
  controllers: [OwnCardsController,UserOwnCardsController, TypeOwnCardsController],
  providers: [OwnCardsService, UserOwnCardsService,TypeOwnCardsService],
  imports:[UserModule],
})
export class OwnCardsModule {}
