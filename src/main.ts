import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  //const app=await NestFactory.create(AppModule);
  //await app.listen(process.env.PORT ?? 3000);
  //const app = await NestFactory.create(AppModule);
  //app.useGlobalPipes(new ValidationPipe());
  //await app.listen(3000);

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000)
  //const configService = app.get(ConfigService);
  //const port = configService.get<number>('APP_PORT');
  //await app.listen(port);

}
bootstrap();
