import { Test, TestingModule } from '@nestjs/testing';
import { MachineResolver } from './machine.resolver';
import { MockProxy, mock } from 'jest-mock-extended';

describe('Machine Resolver', () => {
  let provider: MachineResolver;

  beforeEach(async () => {
    const mockMachineService: MockProxy<MachineResolver> = mock<MachineResolver>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachineResolver, { provide: MachineResolver, useValue: mockMachineService }],
    }).compile();

    provider = module.get<MachineResolver>(MachineResolver);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
