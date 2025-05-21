import { Module } from '@nestjs/common';
import { TransactionsService,TypeTransactionsService,CategoryTransactionsService,ScheduleTransactionsService } from './transactions.service';
import { TransactionsController,TypeTransactionsController,CategoryTransactionsController, ScheduleTransactionsController } from './transactions.controller';
import { OwnCardsModule } from 'src/ownCards/ownCards.module';
import { RegisteredCardsModule } from 'src/registeredCards/registeredCards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryTransactions, ScheduleTransactions, Transactions, TypeTransactions } from './entity/transactions';

@Module({
  controllers: [TransactionsController,TypeTransactionsController,CategoryTransactionsController, ScheduleTransactionsController],
  providers: [TransactionsService,TypeTransactionsService,CategoryTransactionsService,ScheduleTransactionsService],
  imports:[OwnCardsModule, RegisteredCardsModule, TypeOrmModule.forFeature([Transactions,TypeTransactions,CategoryTransactions,ScheduleTransactions])],
})
export class TransactionsModule {}
