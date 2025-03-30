/*APP_PORT=3000
DB_PASSWORD=password
DB_USERNAME=root
DB_NAME=testing
DB_PORT=3306
DB_HOST=localhost
DB_LOGGING=true*/

import {DataSource} from 'typeorm';
import { ConfigService } from '@nestjs/config';
import {User} from '../user/entity/user';
import {config} from 'dotenv';
import {Migrations1743373783230} from  '../migrations/1743373783230-migrations';



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
  entities:[User],
  migrations:[Migrations1743373783230],
});