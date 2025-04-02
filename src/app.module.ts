import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { Users } from './users/entity/users';
import { validate } from './config/env.validation';
import { AuthModule } from './auth/auth.module';




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
        entities: [Users],
        synchronize: false,
        // configService.get<boolean>('DB_SYNCHRONIZATION'),
        logging: configService.get<boolean>('DB_LOGGING'),
      })
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}