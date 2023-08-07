import { Injectable } from '@nestjs/common';
import { Neo4jService } from '../../neo4j/neo4j.service';
import { FieldResolver } from 'type-graphql';

@Injectable()
export class SweetService {

    constructor(
        private readonly neo4jService: Neo4jService) {
        }

    @FieldResolver()
    async sweetsProducedInMachine(id: string): Promise<any> {
        
    }
}
