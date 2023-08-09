import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
};

export type Query = {
  __typename?: "Query";
  health: Scalars["String"];
  machines: Array<Machine>;
  machine: Machine;
  sweets: Array<Sweet>;
  sweetsConnection: SweetsConnection;
  sweetsAggregate: SweetAggregateSelection;
  machinesConnection: MachinesConnection;
  machinesAggregate: MachineAggregateSelection;
};

export type QueryMachinesArgs = {
  where?: InputMaybe<MachineWhere>;
  options?: InputMaybe<MachineOptions>;
};

export type QueryMachineArgs = {
  machineId: Scalars["String"];
};

export type QuerySweetsArgs = {
  where?: InputMaybe<SweetWhere>;
  options?: InputMaybe<SweetOptions>;
};

export type QuerySweetsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<SweetWhere>;
  sort?: InputMaybe<Array<InputMaybe<SweetSort>>>;
};

export type QuerySweetsAggregateArgs = {
  where?: InputMaybe<SweetWhere>;
};

export type QueryMachinesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<MachineWhere>;
  sort?: InputMaybe<Array<InputMaybe<MachineSort>>>;
};

export type QueryMachinesAggregateArgs = {
  where?: InputMaybe<MachineWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createSweets: CreateSweetsMutationResponse;
  deleteSweets: DeleteInfo;
  updateSweets: UpdateSweetsMutationResponse;
  createMachines: CreateMachinesMutationResponse;
  deleteMachines: DeleteInfo;
  updateMachines: UpdateMachinesMutationResponse;
};

export type MutationCreateSweetsArgs = {
  input: Array<SweetCreateInput>;
};

export type MutationDeleteSweetsArgs = {
  where?: InputMaybe<SweetWhere>;
};

export type MutationUpdateSweetsArgs = {
  where?: InputMaybe<SweetWhere>;
  update?: InputMaybe<SweetUpdateInput>;
};

export type MutationCreateMachinesArgs = {
  input: Array<MachineCreateInput>;
};

export type MutationDeleteMachinesArgs = {
  where?: InputMaybe<MachineWhere>;
};

export type MutationUpdateMachinesArgs = {
  where?: InputMaybe<MachineWhere>;
  update?: InputMaybe<MachineUpdateInput>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type CreateInfo = {
  __typename?: "CreateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
};

export type CreateMachinesMutationResponse = {
  __typename?: "CreateMachinesMutationResponse";
  info: CreateInfo;
  machines: Array<Machine>;
};

export type CreateSweetsMutationResponse = {
  __typename?: "CreateSweetsMutationResponse";
  info: CreateInfo;
  sweets: Array<Sweet>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type FloatAggregateSelectionNullable = {
  __typename?: "FloatAggregateSelectionNullable";
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  average?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
};

export type IntAggregateSelectionNullable = {
  __typename?: "IntAggregateSelectionNullable";
  max?: Maybe<Scalars["Int"]>;
  min?: Maybe<Scalars["Int"]>;
  average?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Int"]>;
};

export type Machine = {
  __typename?: "Machine";
  machineId: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
  capacity?: Maybe<Scalars["Float"]>;
  status?: Maybe<Scalars["String"]>;
  sweetsProducedByMachine?: Maybe<Array<Sweet>>;
};

export type MachineAggregateSelection = {
  __typename?: "MachineAggregateSelection";
  count: Scalars["Int"];
  machineId: StringAggregateSelectionNonNullable;
  type: StringAggregateSelectionNullable;
  capacity: FloatAggregateSelectionNullable;
  status: StringAggregateSelectionNullable;
};

export type MachineEdge = {
  __typename?: "MachineEdge";
  cursor: Scalars["String"];
  node: Machine;
};

export type MachinesConnection = {
  __typename?: "MachinesConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<MachineEdge>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"];
  longest: Scalars["String"];
};

export type StringAggregateSelectionNullable = {
  __typename?: "StringAggregateSelectionNullable";
  shortest?: Maybe<Scalars["String"]>;
  longest?: Maybe<Scalars["String"]>;
};

export type Sweet = {
  __typename?: "Sweet";
  name: Scalars["String"];
  ingredients?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  stock?: Maybe<Scalars["Int"]>;
};

export type SweetAggregateSelection = {
  __typename?: "SweetAggregateSelection";
  count: Scalars["Int"];
  name: StringAggregateSelectionNonNullable;
  ingredients: StringAggregateSelectionNullable;
  price: FloatAggregateSelectionNullable;
  stock: IntAggregateSelectionNullable;
};

export type SweetEdge = {
  __typename?: "SweetEdge";
  cursor: Scalars["String"];
  node: Sweet;
};

export type SweetsConnection = {
  __typename?: "SweetsConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<SweetEdge>;
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  nodesDeleted: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type UpdateMachinesMutationResponse = {
  __typename?: "UpdateMachinesMutationResponse";
  info: UpdateInfo;
  machines: Array<Machine>;
};

export type UpdateSweetsMutationResponse = {
  __typename?: "UpdateSweetsMutationResponse";
  info: UpdateInfo;
  sweets: Array<Sweet>;
};

export type MachineCreateInput = {
  machineId: Scalars["String"];
  type?: InputMaybe<Scalars["String"]>;
  capacity?: InputMaybe<Scalars["Float"]>;
  status?: InputMaybe<Scalars["String"]>;
};

export type MachineOptions = {
  /** Specify one or more MachineSort objects to sort Machines by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MachineSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

/** Fields to sort Machines by. The order in which sorts are applied is not guaranteed when specifying many fields in one MachineSort object. */
export type MachineSort = {
  machineId?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  capacity?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
};

export type MachineUpdateInput = {
  machineId?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  capacity?: InputMaybe<Scalars["Float"]>;
  status?: InputMaybe<Scalars["String"]>;
  capacity_ADD?: InputMaybe<Scalars["Float"]>;
  capacity_SUBTRACT?: InputMaybe<Scalars["Float"]>;
  capacity_DIVIDE?: InputMaybe<Scalars["Float"]>;
  capacity_MULTIPLY?: InputMaybe<Scalars["Float"]>;
};

export type MachineWhere = {
  OR?: InputMaybe<Array<MachineWhere>>;
  AND?: InputMaybe<Array<MachineWhere>>;
  NOT?: InputMaybe<MachineWhere>;
  machineId?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  machineId_NOT?: InputMaybe<Scalars["String"]>;
  machineId_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  machineId_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  machineId_CONTAINS?: InputMaybe<Scalars["String"]>;
  machineId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  machineId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  machineId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  machineId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  machineId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT?: InputMaybe<Scalars["String"]>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_CONTAINS?: InputMaybe<Scalars["String"]>;
  type_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  type_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  capacity?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  capacity_NOT?: InputMaybe<Scalars["Float"]>;
  capacity_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  capacity_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  capacity_LT?: InputMaybe<Scalars["Float"]>;
  capacity_LTE?: InputMaybe<Scalars["Float"]>;
  capacity_GT?: InputMaybe<Scalars["Float"]>;
  capacity_GTE?: InputMaybe<Scalars["Float"]>;
  status?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  status_NOT?: InputMaybe<Scalars["String"]>;
  status_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  status_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  status_CONTAINS?: InputMaybe<Scalars["String"]>;
  status_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  status_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  status_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  status_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  status_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
};

export type SweetCreateInput = {
  name: Scalars["String"];
  ingredients?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  stock?: InputMaybe<Scalars["Int"]>;
};

export type SweetOptions = {
  /** Specify one or more SweetSort objects to sort Sweets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SweetSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

/** Fields to sort Sweets by. The order in which sorts are applied is not guaranteed when specifying many fields in one SweetSort object. */
export type SweetSort = {
  name?: InputMaybe<SortDirection>;
  ingredients?: InputMaybe<SortDirection>;
  price?: InputMaybe<SortDirection>;
  stock?: InputMaybe<SortDirection>;
};

export type SweetUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  ingredients?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  stock?: InputMaybe<Scalars["Int"]>;
  price_ADD?: InputMaybe<Scalars["Float"]>;
  price_SUBTRACT?: InputMaybe<Scalars["Float"]>;
  price_DIVIDE?: InputMaybe<Scalars["Float"]>;
  price_MULTIPLY?: InputMaybe<Scalars["Float"]>;
  stock_INCREMENT?: InputMaybe<Scalars["Int"]>;
  stock_DECREMENT?: InputMaybe<Scalars["Int"]>;
};

export type SweetWhere = {
  OR?: InputMaybe<Array<SweetWhere>>;
  AND?: InputMaybe<Array<SweetWhere>>;
  NOT?: InputMaybe<SweetWhere>;
  name?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  ingredients?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ingredients_NOT?: InputMaybe<Scalars["String"]>;
  ingredients_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ingredients_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ingredients_CONTAINS?: InputMaybe<Scalars["String"]>;
  ingredients_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  ingredients_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ingredients_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ingredients_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ingredients_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  price_NOT?: InputMaybe<Scalars["Float"]>;
  price_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  price_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  price_LT?: InputMaybe<Scalars["Float"]>;
  price_LTE?: InputMaybe<Scalars["Float"]>;
  price_GT?: InputMaybe<Scalars["Float"]>;
  price_GTE?: InputMaybe<Scalars["Float"]>;
  stock?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  stock_NOT?: InputMaybe<Scalars["Int"]>;
  stock_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  stock_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  stock_LT?: InputMaybe<Scalars["Int"]>;
  stock_LTE?: InputMaybe<Scalars["Int"]>;
  stock_GT?: InputMaybe<Scalars["Int"]>;
  stock_GTE?: InputMaybe<Scalars["Int"]>;
};

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface SweetAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
  ingredients?: StringAggregateInputNullable;
  price?: FloatAggregateInputNullable;
  stock?: IntAggregateInputNullable;
}

export declare class SweetModel {
  public find(args?: {
    where?: SweetWhere;

    options?: SweetOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Sweet[]>;
  public create(args: {
    input: SweetCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateSweetsMutationResponse>;
  public update(args: {
    where?: SweetWhere;
    update?: SweetUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateSweetsMutationResponse>;
  public delete(args: {
    where?: SweetWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: SweetWhere;

    aggregate: SweetAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<SweetAggregateSelection>;
}

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface MachineAggregateSelectionInput {
  count?: boolean;
  machineId?: StringAggregateInputNonNullable;
  type?: StringAggregateInputNullable;
  capacity?: FloatAggregateInputNullable;
  status?: StringAggregateInputNullable;
}

export declare class MachineModel {
  public find(args?: {
    where?: MachineWhere;

    options?: MachineOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Machine[]>;
  public create(args: {
    input: MachineCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateMachinesMutationResponse>;
  public update(args: {
    where?: MachineWhere;
    update?: MachineUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateMachinesMutationResponse>;
  public delete(args: {
    where?: MachineWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: MachineWhere;

    aggregate: MachineAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<MachineAggregateSelection>;
}

export interface ModelMap {
  Sweet: SweetModel;
  Machine: MachineModel;
}
