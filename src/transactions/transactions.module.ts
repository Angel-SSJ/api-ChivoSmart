import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { OwnCardsModule } from 'src/ownCards/ownCards.module';
import { RegisteredCardsModule } from 'src/registeredCards/registeredCards.module';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports:[OwnCardsModule, RegisteredCardsModule],
})
export class TransactionsModule {}
