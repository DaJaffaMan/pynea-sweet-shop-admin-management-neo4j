import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Object)
export class SweetResolver {
    @Query(() => Object)
    async sweet(@Args('id', { type: String }) id: string) {
    }

    @Mutation(() => Object)
    async addSweet(@Args('sweet') sweet: Object) {
    }
}
