// https://github.com/MichalLytek/type-graphql/issues/43 could be improved, may be worth raising a PR to solve this and enable query and mutation generation from object and inputs,
// also need to add support for things like relationships and other documented directives listed from neo4j but could be a huge win in time
import { Field, Float, ID, InputType, Int, ObjectType, PickType } from "@nestjs/graphql";
import { Order } from "../orders/order.types";

@ObjectType()
export class Sweet {
    @Field(() => String)
    name: string;
    @Field(() => String, { nullable: true})
    ingredients: string;
    @Field(() => Float, { nullable: true})
    price: number;
    @Field(() => Int, { nullable: true})
    stock: number;
    @Field(() => [Order], { nullable: true})
    ordersContainingSweet: Order[];
}

@InputType()
export class SweetInput extends PickType(Sweet, ['name', 'ingredients', 'price', 'stock']) {}