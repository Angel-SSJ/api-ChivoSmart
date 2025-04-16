import { Module } from '@nestjs/common';
import { RegisteredCardsService } from './registeredCards.service';
import { RegisteredCardsController } from './registeredCards.controller';
import { UserModule } from 'src/users/user.module';
import { OwnCardsModule } from 'src/ownCards/ownCards.module';

@Module({
  controllers: [RegisteredCardsController],
  providers: [RegisteredCardsService],
  exports: [RegisteredCardsService,OwnCardsModule],
  imports: [UserModule]
})
export class RegisteredCardsModule {}
