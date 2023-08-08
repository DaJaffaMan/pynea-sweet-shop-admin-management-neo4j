import { INestApplication, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from './app.module';
import { GraphQLSchemaHost } from "@nestjs/graphql";

async function bootstrap() {
  const port = process.env.PORT;
  if (!port) {
    throw new Error("PORT environment variable not set");
  }

  const app = await NestFactory.create<INestApplication<AppModule>>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  
  await app.listen(port)
}

bootstrap();