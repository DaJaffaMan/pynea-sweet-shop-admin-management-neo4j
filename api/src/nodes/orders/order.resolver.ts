import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Order } from './order.types';
import { OrderService } from './order.service';

@Resolver(() => Order)
export class OrderResolver {
    constructor(private readonly orderService: OrderService) {
    }

  @Query(() => Order)
  async order(@Args('id', { type: String }) id: string) {
  }
    
  @Query(() => [Order])
  async ordersOfSweet(@Args('sweetId', { type: String }) sweetId: string) {
    return this.orderService.ordersOfSweet(sweetId);
  }    

  @Mutation(() => Order)
  async processOrder(@Args('order') order: Order) {}
}
