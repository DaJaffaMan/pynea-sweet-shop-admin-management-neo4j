import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineResolver } from './machine.resolver';

@Module({
  providers: [MachineService],
  controllers: [MachineResolver]
})
export class MachineModule {}
