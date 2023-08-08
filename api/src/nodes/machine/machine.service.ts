import { OGM } from '@neo4j/graphql-ogm';
import {
  Injectable
} from '@nestjs/common';
import { Neo4jService } from '../../neo4j/neo4j.service';

export interface Genre {
  id: number;
  name: string;
}

@Injectable()
export class MachineService {
  constructor(private readonly neo4j: Neo4jService) {}

  async findSweetsForMachine(id: string): Promise<any> {
    
      const neo4j = this.neo4j.getDriver();

      // const mapper = new OGM({ typeDefs: this.schemaHost.schema, driver: neo4j });
      
    //   mapper.model("Sweet", {})
  }
}
