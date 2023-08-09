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
    async machine(@Args('machineId') machineId: string): Promise<Machine> {
        return this.machineService.findMachine(machineId)
    }

    @ResolveField()
    sweetsProducedByMachine(@Parent() machine: Machine) {
        return this.machineService.findSweetsForMachine(machine)
    }
}
