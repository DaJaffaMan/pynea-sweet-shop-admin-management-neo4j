import { OGM } from '@neo4j/graphql-ogm';
import {
  Injectable,
  Logger
} from '@nestjs/common';
import { readFile } from 'fs/promises';
import { Neo4jService } from '../../neo4j/service';
import { Machine } from './machine.types';

@Injectable()
export class MachineService {
  private readonly logger = new Logger(MachineService.name)

  constructor(private readonly neo4j: Neo4jService) { }

  async findMachine(id: string): Promise<any> {
    this.logger.debug("ID for machine", id)

    const driver = this.neo4j.getDriver()
    const typedefs = await readFile('./src/gql/schema.gql', 'utf-8')

    const ogm = new OGM({ typeDefs: typedefs, driver })
    await ogm.init()

    const data = await ogm.model("Machine").find({ where: { id } });
    this.logger.debug("Found Machines", { ...data })

    if (data.length > 1) {
      // handle error in gql manner
      this.logger.error("Found more than one machine with id", id)
    }

    return { ...data[0] }
  }

  async findSweetsForMachine(machine: Machine): Promise<any> {
    const neo4j = this.neo4j.getDriver();
    // const mapper = new OGM({ typeDefs: this.gqlConfigurationService.schema, driver: neo4j });
      
    // const sweet = mapper.model("Sweet")

    // this.logger.log({ sweet })
    
    // return await sweet.find({ where: { machine: { id: machine.id } } });
  }
}
