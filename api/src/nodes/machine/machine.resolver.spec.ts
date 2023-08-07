import { Test, TestingModule } from '@nestjs/testing';
import { MachineResolver } from './machine.resolver';

describe('Machine Resolver', () => {
  let provider: MachineResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachineResolver],
    }).compile();

    provider = module.get<MachineResolver>(MachineResolver);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
