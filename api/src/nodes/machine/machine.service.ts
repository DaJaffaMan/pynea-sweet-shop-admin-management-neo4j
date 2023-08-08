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

  async findMachine(id: string): Promise<Machine> {
    this.logger.log("ID for machine", id)

    const typedefs = await readFile('./src/gql/schema.gql', 'utf-8')
    const driver = this.neo4j.getDriver()
    const ogm = new OGM({ typeDefs: typedefs, driver })
    await ogm.init()

    const machine = await ogm.model("Machine").find({ where: { id } });

    this.logger.log("Found Machines", { data: machine })

    if (machine.length > 1) {
      // handle error in gql manner
      this.logger.error("Found more than one machine with id", id)
    }

    return { ...machine[0] }
  }

  async findSweetsForMachine(machine: Machine): Promise<any> {
    this.logger.log("Machine", machine)
    const session = this.neo4j.getDriver().session()

    // const sweetsForMachine = await session.executeRead((tx: ManagedTransaction) => {
    //   return tx.run({text: `MATCH (m:Machine {id: $id})-[PRODUCES]->(s:Sweet)
    //   RETURN s`}, {id: machine.id})
    // })
    
    // this.logger.log({ [sweetsForMachine] })

    // return sweetsForMachine.records.map((record) => {return {...record.get('s:Sweet')}})
  }
}
