import { OGM } from '@neo4j/graphql-ogm';
import {
  Injectable,
  Logger
} from '@nestjs/common';
import { readFile } from 'fs/promises';
import { MachineModel, ModelMap } from '../../gql/ogm-types';
import { Neo4jService } from '../../neo4j/service';
import { Machine, NeoMachine } from './machine.types';
import { ManagedTransaction } from 'neo4j-driver';
import { Sweet } from '../sweet/sweet.types';


@Injectable()
export class MachineService {
  private readonly logger = new Logger(MachineService.name)

  constructor(private readonly neo4j: Neo4jService) { }

  async findMachine(machineId: string): Promise<any> {
    this.logger.log("ID for machine", machineId)

    try {
      const typeDefs = await readFile('./src/gql/schema.gql', 'utf-8')
      const driver = this.neo4j.getDriver()
      const ogm = new OGM<ModelMap>({ typeDefs, driver })
      await ogm.init()

      const session = driver.session();
      const machineNodes = await session.executeRead((tx) => {
        return tx.run<NeoMachine>({
          text: `MATCH (m:Machine {machineId: $id}) RETURN m`,
          parameters: { id: machineId },
        })
      });

      const machines = machineNodes.records.map((record) => { return { ...record.toObject() } })
      this.logger.log("Found Machines", { data: machines })


      return machines[0]["m"].properties
    } catch (error) {
      this.logger.error(error)
    }
  }

  async findSweetsForMachine(machine: Machine): Promise<Sweet[]> {
    this.logger.log("Machine", machine)
    const session = this.neo4j.getDriver().session()

    const sweetNodes = await session.executeRead((tx: ManagedTransaction) => {
      return tx.run({
        text: `MATCH (m:Machine {machineId: $id})-[PRODUCES]->(s:Sweet)
      RETURN s`, parameters: { id: machine.machineId }
      })
    })
    const sweets = sweetNodes.records.map((record) => { return { ...record.toObject() } })

    this.logger.log({ sweets })

    return sweets.map((sweet) => { return sweet["s"].properties })
  }
}
