// https://github.com/MichalLytek/type-graphql/issues/43 could be improved, may be worth raising a PR to solve this and enable query and mutation generation from object and inputs,
// also need to add support for things like relationships and other documented directives listed from neo4j but could be a huge win in time
import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Machine {
    @Field(() => ID)
    id: string;
    @Field(() => String)
    type: string;
    @Field(() => String)
    capacity: string;
    @Field(() => String)
    status: string;
}

@InputType()
export class MachineInput {
    @Field(() => String)
    type: string;
    @Field(() => String)
    capacity: string;
    @Field(() => String)
    status: string;
}