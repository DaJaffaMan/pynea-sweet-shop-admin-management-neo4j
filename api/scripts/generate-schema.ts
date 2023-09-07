import { NestFactory } from '@nestjs/core';
import {
    GraphQLSchemaBuilderModule,
    GraphQLSchemaFactory,
} from '@nestjs/graphql';
import { writeFile } from 'fs/promises';
import { printSchema } from 'graphql';
import { MachineResolver } from '../src/nodes/machine/machine.resolver';
import { OrderResolver } from '../src/nodes/orders/order.resolver';
import { SweetResolver } from '../src/nodes/sweet/sweet.resolver';

async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([
    MachineResolver,
    OrderResolver,
    SweetResolver,
  ]);

  await writeFile('./schema.gql', printSchema(schema));
}

generateSchema();
