import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import neo4j, { Driver, Transaction } from 'neo4j-driver';
import { Neo4jConfig } from './neo4j-config.interface';
import { NEO4J_CONFIG, NEO4J_DRIVER } from './neo4j.constants';
import { OGM, Model, generate } from '@neo4j/graphql-ogm'
import path from 'path';

@Injectable()
export class Neo4jService implements OnApplicationShutdown {
    constructor(
        @Inject(NEO4J_CONFIG) private readonly config: Neo4jConfig,
        @Inject(NEO4J_DRIVER) private readonly driver: Driver
    ) {}

    getDriver(): Driver {
        return this.driver;
    }

    getConfig(): Neo4jConfig {
        return this.config;
    }

    // async generateOGM() {
    //     const outFile = path.join(__dirname, "ogm-types.ts");
    //     const ogm = new OGM({ typeDefs: this.schemaHost.schema, driver: this.driver })

    //     await generate({
    //         ogm,
    //         outFile,
    //     });
    // }

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
