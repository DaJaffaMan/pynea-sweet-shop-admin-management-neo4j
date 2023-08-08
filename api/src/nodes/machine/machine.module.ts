import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineResolver } from './machine.resolver';

@Module({
  providers: [MachineResolver, MachineService],
})
export class MachineModule {}
