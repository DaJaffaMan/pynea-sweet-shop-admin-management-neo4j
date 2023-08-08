// https://github.com/MichalLytek/type-graphql/issues/43 could be improved, may be worth raising a PR to solve this and enable query and mutation generation from object and inputs,
// also need to add support for things like relationships and other documented directives listed from neo4j but could be a huge win in time
import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { Sweet } from "../sweet/sweet.types";

@ObjectType()
export class Machine {
    @Field(() => String)
    id: string;
    @Field(() => String)
    type: string;
    @Field(() => String)
    capacity: string;
    @Field(() => String)
    status: string;
    @Field(() => [Sweet])
    sweetsProducedByMachine: Sweet[]
}

@InputType()
export class MachineInput extends PickType(Machine, ['type', 'capacity', 'status']) {}