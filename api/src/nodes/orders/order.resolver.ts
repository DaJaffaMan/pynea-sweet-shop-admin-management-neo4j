import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Order } from "./order.types";
import { Sweet } from "../sweet/sweet.types";
import { OrderService } from "./order.service";


@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {
  }

  @Query(() => [Order])
  async orders() {
    return this.orderService.orders();
  }
}
