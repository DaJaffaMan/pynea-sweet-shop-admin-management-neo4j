import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { loggerMiddleware } from './logger/logger.middleware';
import { Neo4jConfig } from './neo4j/config.interface';
import { Neo4jModule } from './neo4j/module';
import { MachineModule } from './nodes/machine/machine.module';
import { OrderModule } from './nodes/orders/order.module';
import { SweetModule } from './nodes/sweet/sweet.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    Neo4jModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): Neo4jConfig => ({
        scheme: configService.get('NEO4J_SCHEME'),
        host: configService.get('NEO4J_HOST'),
        port: configService.get('NEO4J_PORT'),
        username: configService.get('NEO4J_USERNAME'),
        password: configService.get('NEO4J_PASSWORD'),
        database: configService.get('NEO4J_DATABASE'),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), './src/gql/schema.gql'),
      buildSchemaOptions: {
        fieldMiddleware: [loggerMiddleware]
      }
    }),
    MachineModule,
    SweetModule,
    OrderModule
  ],
  providers: [AppResolver],
})
export class AppModule {

}