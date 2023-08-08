import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { MachineService } from './machine.service';
import { Machine } from './machine.types';

@Resolver(() => Machine)
export class MachineResolver {
    constructor(private readonly machineService: MachineService) {

    }
    @Query(() => [Machine])
    async machines() {
    }

    @Query(() => Machine)
    async machine(@Args('id') id: string) {
        return this.machineService.findMachine(id)
    }

    // @ResolveField()
    // sweetsProducedByMachine(@Parent() machine: Machine) {
    //     this.machineService.findSweetsForMachine(machine)
    // }
}
