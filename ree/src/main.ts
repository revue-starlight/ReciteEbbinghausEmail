import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createClient } from 'redis'
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  // (async () => {
  //   const client = createClient();
  //   client.on('error', (err) => console.log('Redis Client Error', err));
  //   await client.connect();
  //   await client.set('key','value');
  // })();


  await app.listen(3000);
}
bootstrap();
