import { Module } from '@nestjs/common';
import { MachineResolver } from './machine.resolver';
import { MachineService } from './machine.service';

@Module({
  providers: [MachineResolver, MachineService],
  exports: [MachineService],
})
export class MachineModule {}
