import { Injectable } from '@nestjs/common';
import { Neo4jService } from '../../neo4j/service';
import { NeoOrder, Order } from './order.types';

@Injectable()
export class OrderService {
  constructor(private readonly neo4jService: Neo4jService) { }

  async orders(): Promise<Order[]> {
    const driver = this.neo4jService.getDriver()

    const session = driver.session();
    const orderNodes = await session.executeRead((tx) => {
      return tx.run<NeoOrder>({
        text: `MATCH (o:Order) RETURN o`,
      })
    }
    );

    return orderNodes.records.map((record) => record.toObject()).map((order) => order["o"].properties);
  }
}
