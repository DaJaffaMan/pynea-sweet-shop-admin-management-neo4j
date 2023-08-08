import { Injectable } from '@nestjs/common';
import { Neo4jService } from '../../neo4j/service';
import { ResolveField } from '@nestjs/graphql';

@Injectable()
export class OrderService {
  constructor(private readonly neo4jService: Neo4jService) {}

  @ResolveField()
  async ordersOfSweet(id: string): Promise<any> {
    const neo4j = this.neo4jService.getDriver();

    const session = neo4j.session();

    const result = await session.run(
      `
      MATCH (s:Sweet {id: $id})<-[:ORDERS]-(o:Order)
      RETURN o
      `,
      { id }
    );

    return result.records.map((record) => record.get('o').properties);
  }
}
