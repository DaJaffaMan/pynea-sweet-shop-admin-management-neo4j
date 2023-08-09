// https://github.com/MichalLytek/type-graphql/issues/43 could be improved, may be worth raising a PR to solve this and enable query and mutation generation from object and inputs,
// also need to add support for things like relationships and other documented directives listed from neo4j but could be a huge win in time
import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { Sweet } from "../sweet/sweet.types";
import { Integer, Node, Relationship } from "neo4j-driver";

export type NeoMachine = Node<Integer, {
  machineId: string;
  type: string;
  capacity: number;
  status: string;
}>

export type Produced = Relationship<Integer, {}>

export interface SweetsProducedByMachine {
  m: NeoMachine;
  p: Produced;
  s: Sweet;
}

@ObjectType()
export class Machine {
  @Field(() => String)
  machineId: string;
  @Field(() => String, { nullable: true })
  type: string;
  @Field(() => Number, { nullable: true })
  capacity: number;
  @Field(() => String, { nullable: true })
  status: string;
  @Field(() => [Sweet], { nullable: true})
  sweetsProducedByMachine: Sweet[]
}

@InputType()
export class MachineInput extends PickType(Machine, ['type', 'capacity', 'status']) { }