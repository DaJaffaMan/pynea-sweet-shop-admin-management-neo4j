// https://github.com/MichalLytek/type-graphql/issues/43 could be improved, may be worth raising a PR to solve this and enable query and mutation generation from object and inputs,
// also need to add support for things like relationships and other documented directives listed from neo4j but could be a huge win in time
import { Field, ObjectType } from "@nestjs/graphql";
import { Integer, Node, Relationship } from "neo4j-driver";
import { Sweet } from "../sweet/sweet.types";

export type NeoOrder = Node<Integer, {
    id: string;
    customerName: string;
    status: number;
}>

export type Contains = Relationship<Integer, {}>

export interface OrdersContainingSweet {
    o: NeoOrder[];
    r: Contains;
    s: Sweet;
}

@ObjectType("Order")
export class Order {
    @Field(() => String)
    id: string;

    @Field(() => String)
    customerName: string;

    @Field(() => String)
    status: string;
}