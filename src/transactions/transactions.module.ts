import { Module } from '@nestjs/common';
import { TransactionsService,TypeTransactionsService,CategoryTransactionsService,ScheduleTransactionsService } from './transactions.service';
import { TransactionsController,TypeTransactionsController,CategoryTransactionsController, ScheduleTransactionsController } from './transactions.controller';
import { OwnCardsModule } from 'src/ownCards/ownCards.module';
import { RegisteredCardsModule } from 'src/registeredCards/registeredCards.module';

@Module({
  controllers: [TransactionsController,TypeTransactionsController,CategoryTransactionsController, ScheduleTransactionsController],
  providers: [TransactionsService,TypeTransactionsService,CategoryTransactionsService,ScheduleTransactionsService],
  imports:[OwnCardsModule, RegisteredCardsModule],
})
export class TransactionsModule {}
