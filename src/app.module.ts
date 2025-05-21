import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { Users,UserPreference,UserSessions,Suggestions,Notifications } from './users/entity/users';
import { validate } from './config/env.validation';
import { AuthModule } from './auth/auth.module';
import { OwnCardsModule } from './ownCards/ownCards.module';
import { OwnCards , UserOwnCards, TypesOwnCard} from './ownCards/entity/ownCards';
import { RegisteredCardsModule } from './registeredCards/registeredCards.module';
import { RegisteredCards, UserRegisteredCards, TypesRegisteredCards,Banks } from './registeredCards/entity/registeredCards';
import { TransactionsModule } from './transactions/transactions.module';
import { Transactions, TypeTransactions, CategoryTransactions,ScheduleTransactions  } from './transactions/entity/transactions';





@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate }),
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        //socketPath:`/cloudsql/${configService.get<string>('INSTANCE_CONNECTION_NAME')}`,
        entities: [Users,UserPreference,UserSessions,Suggestions,Notifications,OwnCards, UserOwnCards, TypesOwnCard,RegisteredCards, UserRegisteredCards,TypesRegisteredCards,Banks,Transactions, TypeTransactions, CategoryTransactions,ScheduleTransactions],
        synchronize: false,
        // configService.get<boolean>('DB_SYNCHRONIZATION'),
        logging: configService.get<boolean>('DB_LOGGING'),
      })
    }),
    AuthModule,
    OwnCardsModule,
    RegisteredCardsModule,
    TransactionsModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}