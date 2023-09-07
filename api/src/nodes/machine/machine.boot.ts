import { NestFactory } from '@nestjs/core';
import { INestApplicationContext } from '@nestjs/common';
import { MachineModule } from './machine.module';
import { ApolloServer } from 'apollo-server-cloud-functions';

export let context: INestApplicationContext;

// maybe worth deploying schema.package_version.gql to GCloud storage and loading the schemas into the functions on boot, version management and leaves backwards compatibility for reverting deployments?
export async function bootstrap(): Promise<any> {
  context = await NestFactory.createApplicationContext(MachineModule); // Initialize Nest without starting a server (because we're running in GCloud functions)
  const app = context.get(MachineModule);
  const server = new ApolloServer({
    // typeDefs: app.typeDefs,
    // resolvers: app.resolvers,
    // schema: app.schema,
    introspection: true,
  });
  return server.createHandler();
}
