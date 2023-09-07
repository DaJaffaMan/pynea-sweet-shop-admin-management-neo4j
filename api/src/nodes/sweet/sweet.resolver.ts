import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { SweetService } from './sweet.service';
import { Sweet } from './sweet.types';

@Resolver(() => Sweet)
export class SweetResolver {
  constructor(private readonly sweetService: SweetService) {}

  @Query(() => Sweet)
  async sweet(@Args('name') name: string) {
    return this.sweetService.sweet(name);
  }

  @Query(() => [Sweet])
  async sweets() {
    return this.sweetService.sweets();
  }

  @Query(() => [Sweet])
  async sweetsWithQuantityLessThan(@Args('quantity') quantity: number) {
    return this.sweetService.sweets();
  }

  @ResolveField()
  async ordersContainingSweet(@Parent() sweet: Sweet) {
    return this.sweetService.ordersForSweet(sweet);
  }
}
