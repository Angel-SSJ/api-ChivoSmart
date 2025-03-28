import {DataSource} from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Ingredient, Recipe } from '../recipe/entity/recipe';
import {config} from 'dotenv';
import { Migrations1743193473917 } from '../migrations/1743193473917-migrations';


config();
const configService=new ConfigService();

export default new DataSource({
  type:'mysql',
  host:configService.get<string>('DB_HOST'),
  port:configService.get<number>('DB_PORT'),
  username:configService.get<string>('DB_USERNAME'),
  password:configService.get<string>('DB_PASSWORD'),
  database:configService.get<string>('DB_NAME'),
  logging: configService.get<boolean>('DB_LOGGING'),
  entities:[Recipe, Ingredient],
  migrations:[Migrations1743193473917],
});
