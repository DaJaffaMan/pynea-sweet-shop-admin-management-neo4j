import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule, GraphQLSchemaHost } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { Neo4jConfig } from './neo4j/neo4j-config.interface';
import { Neo4jModule } from './neo4j/neo4j.module';
import { Neo4jService } from './neo4j/neo4j.service';
import { MachineModule } from './nodes/machine/machine.module';
import { MachineResolver } from './nodes/machine/machine.resolver';
import { MachineService } from './nodes/machine/machine.service';

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
      autoSchemaFile: true,
    }),
    MachineModule,
  ],
  controllers: [AppResolver, MachineResolver],
  providers: [MachineService, GraphQLSchemaHost],
})
export class AppModule {
  constructor(private readonly neo4jService: Neo4jService) {
    // this.neo4jService.generateOGM();
  }
}
//"neo4j-admin database import full --overwrite-destination "--nodes=Machine=import/machines.csv,Sweet=import/sweets.csv,Order=import/orders.csv"