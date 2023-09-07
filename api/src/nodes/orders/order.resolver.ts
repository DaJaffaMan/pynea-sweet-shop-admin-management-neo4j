import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from './order.types';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(() => [Order])
  async orders() {
    return this.orderService.orders();
  }

  @Query(() => [Order])
  async deliveredOrPendingOrders() {
    return this.orderService.findPendingAndDeliveredOrders();
  }
}
