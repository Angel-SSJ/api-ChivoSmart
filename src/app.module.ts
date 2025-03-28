import { Module } from '@nestjs/common';
//import {AppController} from './app.controller'
import { RecipeController } from './recipe/recipe.controller';
import { RecipeService } from './recipe/recipe.service';
//import { RecipeModule } from './recipe/recipe.module';
//import { ConfigModule} from '@nestjs/config';
//import { validate } from './recipe/config/env.validation';


@Module({
  controllers:[RecipeController],
  providers:[RecipeService],

  //imports: [],



    //ConfigModule.forRoot({ isGlobal: true, validate }),
    //RecipeModule,
    //TypeOrmModule.forRootAsync({
    //inject:[ConfigService],
    //useFactory: [configService: ConfigService] => ({
    //type:'mysql',
    //host: configService.get<string>('DB_HOST'),
    //port: configService.get<number>('DB_PORT'),
    //username: configService.get<string>('DB_USERNAME'),
    //password: configService.get<string>('DB_PASSWORD'),
    //database: configService.get<string>('MYSQL_HOST'),
    //entities: [Recipe, Ingredient],
    //synchronize: configService.get<boolean>('DB_SYNCHRONIZATION'),
  //logging: configService.get<boolean>('DB_LOGGING'),
  //  })
    //}),
      //DELETE THIS LATER >:V
    //TypeOrmModule.forRoot({
    //type: 'mysql',
    //host: 'localhost',
    //port: 3306,
    //username: 'root',
    //password: 'password',
    //database: 'app',
    //entities: [Recipe, Ingredient],
    //synchronize:true,
    //logging:true,
    //})

 // ],
//  controllers:[],
  //providers:[],



})

export class AppModule {}
