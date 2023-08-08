import { OGM } from '@neo4j/graphql-ogm';
import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { readFile } from 'fs/promises';
import neo4j, { Driver, Transaction } from 'neo4j-driver';
import { Neo4jConfig } from './config.interface';
import { NEO4J_CONFIG, NEO4J_DRIVER, NEO4J_OGM } from './constants';

@Injectable()
export class Neo4jService implements OnApplicationShutdown {
    constructor(
        @Inject(NEO4J_CONFIG) private readonly config: Neo4jConfig,
        @Inject(NEO4J_DRIVER) private readonly driver: Driver,
        // @Inject(NEO4J_OGM)  private ogm: OGM
    ) {
    }

    getDriver(): Driver {
        return this.driver;
    }

    // async getOGM(): Promise<OGM> {
    //     if (!this.ogm) {
    //         const typeDefs = await readFile(__dirname + './src/gql/schema.gql', 'utf-8')
    //         const ogm = new OGM({ typeDefs, driver: this.driver })
                
    //         this.ogm = ogm
    //         await ogm.init()
    //     }
    //     return this.ogm
    // }

    getConfig(): Neo4jConfig {
        return this.config;
    }

    async get() {
    }

    beginTransaction(database?: string): Transaction {
        const session = this.getWriteSession(database)

        return session.beginTransaction()
    }

    getWriteSession(database?: string) {
        return this.driver.session({
            database: database || this.config.database,
            defaultAccessMode: neo4j.session.WRITE,
        })
    }

    onApplicationShutdown() {
        return this.driver.close()
    }

}
