import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import neo4j, { Driver, Transaction } from 'neo4j-driver';
import { Neo4jConfig } from './config.interface';
import { NEO4J_CONFIG, NEO4J_DRIVER } from './constants';

@Injectable()
export class Neo4jService implements OnApplicationShutdown {
    constructor(
        @Inject(NEO4J_CONFIG) private readonly config: Neo4jConfig,
        @Inject(NEO4J_DRIVER) private readonly driver: Driver,
    ) {
    }

    getDriver(): Driver {
        return this.driver;
    }

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
