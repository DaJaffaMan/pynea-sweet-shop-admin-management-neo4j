import { Injectable, Logger } from '@nestjs/common';
import { Integer, Node } from 'neo4j-driver';
import { Neo4jService } from '../../neo4j/service';
import { Sweet } from './sweet.types';
import { NeoOrder, Order, OrdersContainingSweet } from '../orders/order.types';

export type NeoSweet = Node<Integer, {
    name: string,
    ingredients: string[],
    price: number,
    stock: number
}>

@Injectable()
export class SweetService {
    private readonly logger = new Logger(SweetService.name)

    constructor(private readonly neo4jService: Neo4jService) { }

    async sweet(name: string): Promise<Sweet> {
        const driver = this.neo4jService.getDriver()

        const sweetNodes = await driver.session().executeRead((tx) => {
            return tx.run<NeoSweet>({
                text: `MATCH (s:Sweet {name: $name}) RETURN s`,
                parameters: { name: name },
            })
        });

        return sweetNodes.records.map((record) => record.toObject()).map((sweet) => sweet["s"].properties)[0];
    }

    async sweets(): Promise<Sweet[]> {
        this.logger.log("Finding all sweets")

        try {
            const driver = this.neo4jService.getDriver()

            const session = driver.session();
            const sweetNodes = await session.executeRead((tx) => {
                return tx.run<NeoSweet>({
                    text: `MATCH (s:Sweet) RETURN s`,
                })
            });

            const sweets = sweetNodes.records.map((record) => { return { ...record.toObject() } }).map(sweet => sweet["s"].properties)
            this.logger.log("Found Sweets", { data: sweets })

            return sweets;
        } catch (error) {
            this.logger.error(error)
        }
    }

    async ordersForSweet(sweet: Sweet): Promise<any> {
        const driver = this.neo4jService.getDriver()

        const orderNodes = (await driver.session().executeRead((tx) => {
            return tx.run<OrdersContainingSweet>({
                text: `MATCH (o:Order)-[:CONTAINS]->(s:Sweet {name: $name}) RETURN o`,
                parameters: { name: sweet.name },
            })
        })).records.map((record) => record.toObject());

        this.logger.log({ orderNodes })

        const orders = orderNodes.flatMap(node => node.o["properties"]);

        return orders;
    }
}
