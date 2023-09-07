import { Test, TestingModule } from '@nestjs/testing';
import { MachineService } from './machine.service';
import { mock, MockProxy } from 'jest-mock-extended';
import { Neo4jService } from '../../neo4j/service';

describe('MachineService', () => {
  let service: MachineService;

  beforeEach(async () => {
    const mockNeo4jService: MockProxy<MachineService> = mock<MachineService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachineService, { provide: Neo4jService, useValue: mockNeo4jService }],
    }).compile();

    service = module.get<MachineService>(MachineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
