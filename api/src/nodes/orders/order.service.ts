import { Injectable, Logger } from '@nestjs/common';
import { Neo4jService } from '../../neo4j/service';
import { NeoOrder, Order } from './order.types';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  constructor(private readonly neo4jService: Neo4jService) {}

  async orders(): Promise<Order[]> {
    const session = this.neo4jService.getDriver().session();
    this.logger.debug('Finding all orders');

    const orderNodes = await session.executeRead((tx) => {
      return tx.run<NeoOrder>({
        text: `MATCH (o:Order) RETURN o`,
      });
    });

    return orderNodes.records
      .map((record) => record.toObject())
      .map((order) => order['o'].properties);
  }

  async findPendingAndDeliveredOrders(): Promise<Order[]> {
    const session = this.neo4jService.getDriver().session();
    this.logger.debug('Finding orders in pending or delivered state');

    const orderNodes = await session.executeRead((tx) => {
      return tx.run<NeoOrder>({
        text: `MATCH (o:Order) WHERE o.status = "Pending" OR o.status = "Delivered" RETURN o`,
      });
    });

    return orderNodes.records
      .map((record) => record.toObject())
      .map((order) => order['o'].properties);
  }
}
