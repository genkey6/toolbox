import gql from 'graphql-tag';
import * as Urql from 'urql';
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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Animal = {
  __typename?: 'Animal';
  classis: Classis;
  classisAggregate?: Maybe<AnimalClassisClassisAggregationSelection>;
  classisConnection: AnimalClassisConnection;
  name: Scalars['String'];
  zoos: Array<Zoo>;
  zoosAggregate?: Maybe<AnimalZooZoosAggregationSelection>;
  zoosConnection: AnimalZoosConnection;
};

export type AnimalClassisArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ClassisOptions>;
  where?: InputMaybe<ClassisWhere>;
};

export type AnimalClassisAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ClassisWhere>;
};

export type AnimalClassisConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AnimalClassisConnectionSort>>;
  where?: InputMaybe<AnimalClassisConnectionWhere>;
};

export type AnimalZoosArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ZooOptions>;
  where?: InputMaybe<ZooWhere>;
};

export type AnimalZoosAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ZooWhere>;
};

export type AnimalZoosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AnimalZoosConnectionSort>>;
  where?: InputMaybe<AnimalZoosConnectionWhere>;
};

export type AnimalAggregateSelection = {
  __typename?: 'AnimalAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
};

export type AnimalClassisAggregateInput = {
  AND?: InputMaybe<Array<AnimalClassisAggregateInput>>;
  OR?: InputMaybe<Array<AnimalClassisAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<AnimalClassisNodeAggregationWhereInput>;
};

export type AnimalClassisClassisAggregationSelection = {
  __typename?: 'AnimalClassisClassisAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<AnimalClassisClassisNodeAggregateSelection>;
};

export type AnimalClassisClassisNodeAggregateSelection = {
  __typename?: 'AnimalClassisClassisNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
};

export type AnimalClassisConnectFieldInput = {
  connect?: InputMaybe<ClassisConnectInput>;
  where?: InputMaybe<ClassisConnectWhere>;
};

export type AnimalClassisConnection = {
  __typename?: 'AnimalClassisConnection';
  edges: Array<AnimalClassisRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AnimalClassisConnectionSort = {
  node?: InputMaybe<ClassisSort>;
};

export type AnimalClassisConnectionWhere = {
  AND?: InputMaybe<Array<AnimalClassisConnectionWhere>>;
  OR?: InputMaybe<Array<AnimalClassisConnectionWhere>>;
  node?: InputMaybe<ClassisWhere>;
  node_NOT?: InputMaybe<ClassisWhere>;
};

export type AnimalClassisCreateFieldInput = {
  node: ClassisCreateInput;
};

export type AnimalClassisDeleteFieldInput = {
  delete?: InputMaybe<ClassisDeleteInput>;
  where?: InputMaybe<AnimalClassisConnectionWhere>;
};

export type AnimalClassisDisconnectFieldInput = {
  disconnect?: InputMaybe<ClassisDisconnectInput>;
  where?: InputMaybe<AnimalClassisConnectionWhere>;
};

export type AnimalClassisFieldInput = {
  connect?: InputMaybe<AnimalClassisConnectFieldInput>;
  create?: InputMaybe<AnimalClassisCreateFieldInput>;
};

export type AnimalClassisNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AnimalClassisNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AnimalClassisNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type AnimalClassisRelationship = {
  __typename?: 'AnimalClassisRelationship';
  cursor: Scalars['String'];
  node: Classis;
};

export type AnimalClassisUpdateConnectionInput = {
  node?: InputMaybe<ClassisUpdateInput>;
};

export type AnimalClassisUpdateFieldInput = {
  connect?: InputMaybe<AnimalClassisConnectFieldInput>;
  create?: InputMaybe<AnimalClassisCreateFieldInput>;
  delete?: InputMaybe<AnimalClassisDeleteFieldInput>;
  disconnect?: InputMaybe<AnimalClassisDisconnectFieldInput>;
  update?: InputMaybe<AnimalClassisUpdateConnectionInput>;
  where?: InputMaybe<AnimalClassisConnectionWhere>;
};

export type AnimalConnectInput = {
  classis?: InputMaybe<AnimalClassisConnectFieldInput>;
  zoos?: InputMaybe<Array<AnimalZoosConnectFieldInput>>;
};

export type AnimalConnectWhere = {
  node: AnimalWhere;
};

export type AnimalCreateInput = {
  classis?: InputMaybe<AnimalClassisFieldInput>;
  name: Scalars['String'];
  zoos?: InputMaybe<AnimalZoosFieldInput>;
};

export type AnimalDeleteInput = {
  classis?: InputMaybe<AnimalClassisDeleteFieldInput>;
  zoos?: InputMaybe<Array<AnimalZoosDeleteFieldInput>>;
};

export type AnimalDisconnectInput = {
  classis?: InputMaybe<AnimalClassisDisconnectFieldInput>;
  zoos?: InputMaybe<Array<AnimalZoosDisconnectFieldInput>>;
};

export type AnimalEdge = {
  __typename?: 'AnimalEdge';
  cursor: Scalars['String'];
  node: Animal;
};

export type AnimalOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more AnimalSort objects to sort Animals by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AnimalSort>>;
};

export type AnimalRelationInput = {
  classis?: InputMaybe<AnimalClassisCreateFieldInput>;
  zoos?: InputMaybe<Array<AnimalZoosCreateFieldInput>>;
};

/** Fields to sort Animals by. The order in which sorts are applied is not guaranteed when specifying many fields in one AnimalSort object. */
export type AnimalSort = {
  name?: InputMaybe<SortDirection>;
};

export type AnimalUpdateInput = {
  classis?: InputMaybe<AnimalClassisUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  zoos?: InputMaybe<Array<AnimalZoosUpdateFieldInput>>;
};

export type AnimalWhere = {
  AND?: InputMaybe<Array<AnimalWhere>>;
  OR?: InputMaybe<Array<AnimalWhere>>;
  classis?: InputMaybe<ClassisWhere>;
  classisAggregate?: InputMaybe<AnimalClassisAggregateInput>;
  classisConnection?: InputMaybe<AnimalClassisConnectionWhere>;
  classisConnection_NOT?: InputMaybe<AnimalClassisConnectionWhere>;
  classis_NOT?: InputMaybe<ClassisWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  /** @deprecated Use `zoos_SOME` instead. */
  zoos?: InputMaybe<ZooWhere>;
  zoosAggregate?: InputMaybe<AnimalZoosAggregateInput>;
  /** @deprecated Use `zoosConnection_SOME` instead. */
  zoosConnection?: InputMaybe<AnimalZoosConnectionWhere>;
  zoosConnection_ALL?: InputMaybe<AnimalZoosConnectionWhere>;
  zoosConnection_NONE?: InputMaybe<AnimalZoosConnectionWhere>;
  /** @deprecated Use `zoosConnection_NONE` instead. */
  zoosConnection_NOT?: InputMaybe<AnimalZoosConnectionWhere>;
  zoosConnection_SINGLE?: InputMaybe<AnimalZoosConnectionWhere>;
  zoosConnection_SOME?: InputMaybe<AnimalZoosConnectionWhere>;
  /** Return Animals where all of the related Zoos match this filter */
  zoos_ALL?: InputMaybe<ZooWhere>;
  /** Return Animals where none of the related Zoos match this filter */
  zoos_NONE?: InputMaybe<ZooWhere>;
  /** @deprecated Use `zoos_NONE` instead. */
  zoos_NOT?: InputMaybe<ZooWhere>;
  /** Return Animals where one of the related Zoos match this filter */
  zoos_SINGLE?: InputMaybe<ZooWhere>;
  /** Return Animals where some of the related Zoos match this filter */
  zoos_SOME?: InputMaybe<ZooWhere>;
};

export type AnimalZooZoosAggregationSelection = {
  __typename?: 'AnimalZooZoosAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<AnimalZooZoosNodeAggregateSelection>;
};

export type AnimalZooZoosNodeAggregateSelection = {
  __typename?: 'AnimalZooZoosNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
};

export type AnimalZoosAggregateInput = {
  AND?: InputMaybe<Array<AnimalZoosAggregateInput>>;
  OR?: InputMaybe<Array<AnimalZoosAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<AnimalZoosNodeAggregationWhereInput>;
};

export type AnimalZoosConnectFieldInput = {
  connect?: InputMaybe<Array<ZooConnectInput>>;
  where?: InputMaybe<ZooConnectWhere>;
};

export type AnimalZoosConnection = {
  __typename?: 'AnimalZoosConnection';
  edges: Array<AnimalZoosRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AnimalZoosConnectionSort = {
  node?: InputMaybe<ZooSort>;
};

export type AnimalZoosConnectionWhere = {
  AND?: InputMaybe<Array<AnimalZoosConnectionWhere>>;
  OR?: InputMaybe<Array<AnimalZoosConnectionWhere>>;
  node?: InputMaybe<ZooWhere>;
  node_NOT?: InputMaybe<ZooWhere>;
};

export type AnimalZoosCreateFieldInput = {
  node: ZooCreateInput;
};

export type AnimalZoosDeleteFieldInput = {
  delete?: InputMaybe<ZooDeleteInput>;
  where?: InputMaybe<AnimalZoosConnectionWhere>;
};

export type AnimalZoosDisconnectFieldInput = {
  disconnect?: InputMaybe<ZooDisconnectInput>;
  where?: InputMaybe<AnimalZoosConnectionWhere>;
};

export type AnimalZoosFieldInput = {
  connect?: InputMaybe<Array<AnimalZoosConnectFieldInput>>;
  create?: InputMaybe<Array<AnimalZoosCreateFieldInput>>;
};

export type AnimalZoosNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AnimalZoosNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AnimalZoosNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type AnimalZoosRelationship = {
  __typename?: 'AnimalZoosRelationship';
  cursor: Scalars['String'];
  node: Zoo;
};

export type AnimalZoosUpdateConnectionInput = {
  node?: InputMaybe<ZooUpdateInput>;
};

export type AnimalZoosUpdateFieldInput = {
  connect?: InputMaybe<Array<AnimalZoosConnectFieldInput>>;
  create?: InputMaybe<Array<AnimalZoosCreateFieldInput>>;
  delete?: InputMaybe<Array<AnimalZoosDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AnimalZoosDisconnectFieldInput>>;
  update?: InputMaybe<AnimalZoosUpdateConnectionInput>;
  where?: InputMaybe<AnimalZoosConnectionWhere>;
};

export type AnimalsConnection = {
  __typename?: 'AnimalsConnection';
  edges: Array<AnimalEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum Area {
  Chugoku = 'CHUGOKU',
  Hokuriku = 'HOKURIKU',
  Kanto = 'KANTO',
  Kinki = 'KINKI',
  Koshinetsu = 'KOSHINETSU',
  Kyusyu = 'KYUSYU',
  Shikoku = 'SHIKOKU',
  Tohoku = 'TOHOKU',
  Tokai = 'TOKAI',
}

export type ClassesConnection = {
  __typename?: 'ClassesConnection';
  edges: Array<ClassisEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Classis = {
  __typename?: 'Classis';
  animals: Array<Animal>;
  animalsAggregate?: Maybe<ClassisAnimalAnimalsAggregationSelection>;
  animalsConnection: ClassisAnimalsConnection;
  name: Scalars['String'];
};

export type ClassisAnimalsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<AnimalOptions>;
  where?: InputMaybe<AnimalWhere>;
};

export type ClassisAnimalsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AnimalWhere>;
};

export type ClassisAnimalsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ClassisAnimalsConnectionSort>>;
  where?: InputMaybe<ClassisAnimalsConnectionWhere>;
};

export type ClassisAggregateSelection = {
  __typename?: 'ClassisAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
};

export type ClassisAnimalAnimalsAggregationSelection = {
  __typename?: 'ClassisAnimalAnimalsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ClassisAnimalAnimalsNodeAggregateSelection>;
};

export type ClassisAnimalAnimalsNodeAggregateSelection = {
  __typename?: 'ClassisAnimalAnimalsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
};

export type ClassisAnimalsAggregateInput = {
  AND?: InputMaybe<Array<ClassisAnimalsAggregateInput>>;
  OR?: InputMaybe<Array<ClassisAnimalsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ClassisAnimalsNodeAggregationWhereInput>;
};

export type ClassisAnimalsConnectFieldInput = {
  connect?: InputMaybe<Array<AnimalConnectInput>>;
  where?: InputMaybe<AnimalConnectWhere>;
};

export type ClassisAnimalsConnection = {
  __typename?: 'ClassisAnimalsConnection';
  edges: Array<ClassisAnimalsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClassisAnimalsConnectionSort = {
  node?: InputMaybe<AnimalSort>;
};

export type ClassisAnimalsConnectionWhere = {
  AND?: InputMaybe<Array<ClassisAnimalsConnectionWhere>>;
  OR?: InputMaybe<Array<ClassisAnimalsConnectionWhere>>;
  node?: InputMaybe<AnimalWhere>;
  node_NOT?: InputMaybe<AnimalWhere>;
};

export type ClassisAnimalsCreateFieldInput = {
  node: AnimalCreateInput;
};

export type ClassisAnimalsDeleteFieldInput = {
  delete?: InputMaybe<AnimalDeleteInput>;
  where?: InputMaybe<ClassisAnimalsConnectionWhere>;
};

export type ClassisAnimalsDisconnectFieldInput = {
  disconnect?: InputMaybe<AnimalDisconnectInput>;
  where?: InputMaybe<ClassisAnimalsConnectionWhere>;
};

export type ClassisAnimalsFieldInput = {
  connect?: InputMaybe<Array<ClassisAnimalsConnectFieldInput>>;
  create?: InputMaybe<Array<ClassisAnimalsCreateFieldInput>>;
};

export type ClassisAnimalsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ClassisAnimalsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ClassisAnimalsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type ClassisAnimalsRelationship = {
  __typename?: 'ClassisAnimalsRelationship';
  cursor: Scalars['String'];
  node: Animal;
};

export type ClassisAnimalsUpdateConnectionInput = {
  node?: InputMaybe<AnimalUpdateInput>;
};

export type ClassisAnimalsUpdateFieldInput = {
  connect?: InputMaybe<Array<ClassisAnimalsConnectFieldInput>>;
  create?: InputMaybe<Array<ClassisAnimalsCreateFieldInput>>;
  delete?: InputMaybe<Array<ClassisAnimalsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ClassisAnimalsDisconnectFieldInput>>;
  update?: InputMaybe<ClassisAnimalsUpdateConnectionInput>;
  where?: InputMaybe<ClassisAnimalsConnectionWhere>;
};

export type ClassisConnectInput = {
  animals?: InputMaybe<Array<ClassisAnimalsConnectFieldInput>>;
};

export type ClassisConnectWhere = {
  node: ClassisWhere;
};

export type ClassisCreateInput = {
  animals?: InputMaybe<ClassisAnimalsFieldInput>;
  name: Scalars['String'];
};

export type ClassisDeleteInput = {
  animals?: InputMaybe<Array<ClassisAnimalsDeleteFieldInput>>;
};

export type ClassisDisconnectInput = {
  animals?: InputMaybe<Array<ClassisAnimalsDisconnectFieldInput>>;
};

export type ClassisEdge = {
  __typename?: 'ClassisEdge';
  cursor: Scalars['String'];
  node: Classis;
};

export type ClassisOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ClassisSort objects to sort Classes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ClassisSort>>;
};

export type ClassisRelationInput = {
  animals?: InputMaybe<Array<ClassisAnimalsCreateFieldInput>>;
};

/** Fields to sort Classes by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClassisSort object. */
export type ClassisSort = {
  name?: InputMaybe<SortDirection>;
};

export type ClassisUpdateInput = {
  animals?: InputMaybe<Array<ClassisAnimalsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type ClassisWhere = {
  AND?: InputMaybe<Array<ClassisWhere>>;
  OR?: InputMaybe<Array<ClassisWhere>>;
  /** @deprecated Use `animals_SOME` instead. */
  animals?: InputMaybe<AnimalWhere>;
  animalsAggregate?: InputMaybe<ClassisAnimalsAggregateInput>;
  /** @deprecated Use `animalsConnection_SOME` instead. */
  animalsConnection?: InputMaybe<ClassisAnimalsConnectionWhere>;
  animalsConnection_ALL?: InputMaybe<ClassisAnimalsConnectionWhere>;
  animalsConnection_NONE?: InputMaybe<ClassisAnimalsConnectionWhere>;
  /** @deprecated Use `animalsConnection_NONE` instead. */
  animalsConnection_NOT?: InputMaybe<ClassisAnimalsConnectionWhere>;
  animalsConnection_SINGLE?: InputMaybe<ClassisAnimalsConnectionWhere>;
  animalsConnection_SOME?: InputMaybe<ClassisAnimalsConnectionWhere>;
  /** Return Classes where all of the related Animals match this filter */
  animals_ALL?: InputMaybe<AnimalWhere>;
  /** Return Classes where none of the related Animals match this filter */
  animals_NONE?: InputMaybe<AnimalWhere>;
  /** @deprecated Use `animals_NONE` instead. */
  animals_NOT?: InputMaybe<AnimalWhere>;
  /** Return Classes where one of the related Animals match this filter */
  animals_SINGLE?: InputMaybe<AnimalWhere>;
  /** Return Classes where some of the related Animals match this filter */
  animals_SOME?: InputMaybe<AnimalWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type CreateAnimalsMutationResponse = {
  __typename?: 'CreateAnimalsMutationResponse';
  animals: Array<Animal>;
  info: CreateInfo;
};

export type CreateClassesMutationResponse = {
  __typename?: 'CreateClassesMutationResponse';
  classes: Array<Classis>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreateReviewsMutationResponse = {
  __typename?: 'CreateReviewsMutationResponse';
  info: CreateInfo;
  reviews: Array<Review>;
};

export type CreateZoosMutationResponse = {
  __typename?: 'CreateZoosMutationResponse';
  info: CreateInfo;
  zoos: Array<Zoo>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type IntAggregateSelectionNonNullable = {
  __typename?: 'IntAggregateSelectionNonNullable';
  average: Scalars['Float'];
  max: Scalars['Int'];
  min: Scalars['Int'];
  sum: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnimals: CreateAnimalsMutationResponse;
  createClasses: CreateClassesMutationResponse;
  createReviews: CreateReviewsMutationResponse;
  createZoos: CreateZoosMutationResponse;
  deleteAnimals: DeleteInfo;
  deleteClasses: DeleteInfo;
  deleteReviews: DeleteInfo;
  deleteZoos: DeleteInfo;
  updateAnimals: UpdateAnimalsMutationResponse;
  updateClasses: UpdateClassesMutationResponse;
  updateReviews: UpdateReviewsMutationResponse;
  updateZoos: UpdateZoosMutationResponse;
};

export type MutationCreateAnimalsArgs = {
  input: Array<AnimalCreateInput>;
};

export type MutationCreateClassesArgs = {
  input: Array<ClassisCreateInput>;
};

export type MutationCreateReviewsArgs = {
  input: Array<ReviewCreateInput>;
};

export type MutationCreateZoosArgs = {
  input: Array<ZooCreateInput>;
};

export type MutationDeleteAnimalsArgs = {
  delete?: InputMaybe<AnimalDeleteInput>;
  where?: InputMaybe<AnimalWhere>;
};

export type MutationDeleteClassesArgs = {
  delete?: InputMaybe<ClassisDeleteInput>;
  where?: InputMaybe<ClassisWhere>;
};

export type MutationDeleteReviewsArgs = {
  delete?: InputMaybe<ReviewDeleteInput>;
  where?: InputMaybe<ReviewWhere>;
};

export type MutationDeleteZoosArgs = {
  delete?: InputMaybe<ZooDeleteInput>;
  where?: InputMaybe<ZooWhere>;
};

export type MutationUpdateAnimalsArgs = {
  connect?: InputMaybe<AnimalConnectInput>;
  create?: InputMaybe<AnimalRelationInput>;
  delete?: InputMaybe<AnimalDeleteInput>;
  disconnect?: InputMaybe<AnimalDisconnectInput>;
  update?: InputMaybe<AnimalUpdateInput>;
  where?: InputMaybe<AnimalWhere>;
};

export type MutationUpdateClassesArgs = {
  connect?: InputMaybe<ClassisConnectInput>;
  create?: InputMaybe<ClassisRelationInput>;
  delete?: InputMaybe<ClassisDeleteInput>;
  disconnect?: InputMaybe<ClassisDisconnectInput>;
  update?: InputMaybe<ClassisUpdateInput>;
  where?: InputMaybe<ClassisWhere>;
};

export type MutationUpdateReviewsArgs = {
  connect?: InputMaybe<ReviewConnectInput>;
  create?: InputMaybe<ReviewRelationInput>;
  delete?: InputMaybe<ReviewDeleteInput>;
  disconnect?: InputMaybe<ReviewDisconnectInput>;
  update?: InputMaybe<ReviewUpdateInput>;
  where?: InputMaybe<ReviewWhere>;
};

export type MutationUpdateZoosArgs = {
  connect?: InputMaybe<ZooConnectInput>;
  create?: InputMaybe<ZooRelationInput>;
  delete?: InputMaybe<ZooDeleteInput>;
  disconnect?: InputMaybe<ZooDisconnectInput>;
  update?: InputMaybe<ZooUpdateInput>;
  where?: InputMaybe<ZooWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  animals: Array<Animal>;
  animalsAggregate: AnimalAggregateSelection;
  animalsConnection: AnimalsConnection;
  classes: Array<Classis>;
  classesAggregate: ClassisAggregateSelection;
  classesConnection: ClassesConnection;
  reviews: Array<Review>;
  reviewsAggregate: ReviewAggregateSelection;
  reviewsConnection: ReviewsConnection;
  zoos: Array<Zoo>;
  zoosAggregate: ZooAggregateSelection;
  zoosConnection: ZoosConnection;
};

export type QueryAnimalsArgs = {
  options?: InputMaybe<AnimalOptions>;
  where?: InputMaybe<AnimalWhere>;
};

export type QueryAnimalsAggregateArgs = {
  where?: InputMaybe<AnimalWhere>;
};

export type QueryAnimalsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<AnimalSort>>>;
  where?: InputMaybe<AnimalWhere>;
};

export type QueryClassesArgs = {
  options?: InputMaybe<ClassisOptions>;
  where?: InputMaybe<ClassisWhere>;
};

export type QueryClassesAggregateArgs = {
  where?: InputMaybe<ClassisWhere>;
};

export type QueryClassesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ClassisSort>>>;
  where?: InputMaybe<ClassisWhere>;
};

export type QueryReviewsArgs = {
  options?: InputMaybe<ReviewOptions>;
  where?: InputMaybe<ReviewWhere>;
};

export type QueryReviewsAggregateArgs = {
  where?: InputMaybe<ReviewWhere>;
};

export type QueryReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
  where?: InputMaybe<ReviewWhere>;
};

export type QueryZoosArgs = {
  options?: InputMaybe<ZooOptions>;
  where?: InputMaybe<ZooWhere>;
};

export type QueryZoosAggregateArgs = {
  where?: InputMaybe<ZooWhere>;
};

export type QueryZoosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ZooSort>>>;
  where?: InputMaybe<ZooWhere>;
};

export type Review = {
  __typename?: 'Review';
  isValid?: Maybe<Scalars['Boolean']>;
  score: Scalars['Int'];
  zoo: Zoo;
  zooAggregate?: Maybe<ReviewZooZooAggregationSelection>;
  zooConnection: ReviewZooConnection;
};

export type ReviewZooArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ZooOptions>;
  where?: InputMaybe<ZooWhere>;
};

export type ReviewZooAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ZooWhere>;
};

export type ReviewZooConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ReviewZooConnectionSort>>;
  where?: InputMaybe<ReviewZooConnectionWhere>;
};

export type ReviewAggregateSelection = {
  __typename?: 'ReviewAggregateSelection';
  count: Scalars['Int'];
  score: IntAggregateSelectionNonNullable;
};

export type ReviewConnectInput = {
  zoo?: InputMaybe<ReviewZooConnectFieldInput>;
};

export type ReviewConnectWhere = {
  node: ReviewWhere;
};

export type ReviewCreateInput = {
  isValid?: InputMaybe<Scalars['Boolean']>;
  score: Scalars['Int'];
  zoo?: InputMaybe<ReviewZooFieldInput>;
};

export type ReviewDeleteInput = {
  zoo?: InputMaybe<ReviewZooDeleteFieldInput>;
};

export type ReviewDisconnectInput = {
  zoo?: InputMaybe<ReviewZooDisconnectFieldInput>;
};

export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  cursor: Scalars['String'];
  node: Review;
};

export type ReviewOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ReviewSort objects to sort Reviews by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ReviewSort>>;
};

export type ReviewRelationInput = {
  zoo?: InputMaybe<ReviewZooCreateFieldInput>;
};

/** Fields to sort Reviews by. The order in which sorts are applied is not guaranteed when specifying many fields in one ReviewSort object. */
export type ReviewSort = {
  isValid?: InputMaybe<SortDirection>;
  score?: InputMaybe<SortDirection>;
};

export type ReviewUpdateInput = {
  isValid?: InputMaybe<Scalars['Boolean']>;
  score?: InputMaybe<Scalars['Int']>;
  score_DECREMENT?: InputMaybe<Scalars['Int']>;
  score_INCREMENT?: InputMaybe<Scalars['Int']>;
  zoo?: InputMaybe<ReviewZooUpdateFieldInput>;
};

export type ReviewWhere = {
  AND?: InputMaybe<Array<ReviewWhere>>;
  OR?: InputMaybe<Array<ReviewWhere>>;
  isValid?: InputMaybe<Scalars['Boolean']>;
  isValid_NOT?: InputMaybe<Scalars['Boolean']>;
  score?: InputMaybe<Scalars['Int']>;
  score_GT?: InputMaybe<Scalars['Int']>;
  score_GTE?: InputMaybe<Scalars['Int']>;
  score_IN?: InputMaybe<Array<Scalars['Int']>>;
  score_LT?: InputMaybe<Scalars['Int']>;
  score_LTE?: InputMaybe<Scalars['Int']>;
  score_NOT?: InputMaybe<Scalars['Int']>;
  score_NOT_IN?: InputMaybe<Array<Scalars['Int']>>;
  zoo?: InputMaybe<ZooWhere>;
  zooAggregate?: InputMaybe<ReviewZooAggregateInput>;
  zooConnection?: InputMaybe<ReviewZooConnectionWhere>;
  zooConnection_NOT?: InputMaybe<ReviewZooConnectionWhere>;
  zoo_NOT?: InputMaybe<ZooWhere>;
};

export type ReviewZooAggregateInput = {
  AND?: InputMaybe<Array<ReviewZooAggregateInput>>;
  OR?: InputMaybe<Array<ReviewZooAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ReviewZooNodeAggregationWhereInput>;
};

export type ReviewZooConnectFieldInput = {
  connect?: InputMaybe<ZooConnectInput>;
  where?: InputMaybe<ZooConnectWhere>;
};

export type ReviewZooConnection = {
  __typename?: 'ReviewZooConnection';
  edges: Array<ReviewZooRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReviewZooConnectionSort = {
  node?: InputMaybe<ZooSort>;
};

export type ReviewZooConnectionWhere = {
  AND?: InputMaybe<Array<ReviewZooConnectionWhere>>;
  OR?: InputMaybe<Array<ReviewZooConnectionWhere>>;
  node?: InputMaybe<ZooWhere>;
  node_NOT?: InputMaybe<ZooWhere>;
};

export type ReviewZooCreateFieldInput = {
  node: ZooCreateInput;
};

export type ReviewZooDeleteFieldInput = {
  delete?: InputMaybe<ZooDeleteInput>;
  where?: InputMaybe<ReviewZooConnectionWhere>;
};

export type ReviewZooDisconnectFieldInput = {
  disconnect?: InputMaybe<ZooDisconnectInput>;
  where?: InputMaybe<ReviewZooConnectionWhere>;
};

export type ReviewZooFieldInput = {
  connect?: InputMaybe<ReviewZooConnectFieldInput>;
  create?: InputMaybe<ReviewZooCreateFieldInput>;
};

export type ReviewZooNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReviewZooNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ReviewZooNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type ReviewZooRelationship = {
  __typename?: 'ReviewZooRelationship';
  cursor: Scalars['String'];
  node: Zoo;
};

export type ReviewZooUpdateConnectionInput = {
  node?: InputMaybe<ZooUpdateInput>;
};

export type ReviewZooUpdateFieldInput = {
  connect?: InputMaybe<ReviewZooConnectFieldInput>;
  create?: InputMaybe<ReviewZooCreateFieldInput>;
  delete?: InputMaybe<ReviewZooDeleteFieldInput>;
  disconnect?: InputMaybe<ReviewZooDisconnectFieldInput>;
  update?: InputMaybe<ReviewZooUpdateConnectionInput>;
  where?: InputMaybe<ReviewZooConnectionWhere>;
};

export type ReviewZooZooAggregationSelection = {
  __typename?: 'ReviewZooZooAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ReviewZooZooNodeAggregateSelection>;
};

export type ReviewZooZooNodeAggregateSelection = {
  __typename?: 'ReviewZooZooNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
};

export type ReviewsConnection = {
  __typename?: 'ReviewsConnection';
  edges: Array<ReviewEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC',
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String'];
  shortest: Scalars['String'];
};

export type UpdateAnimalsMutationResponse = {
  __typename?: 'UpdateAnimalsMutationResponse';
  animals: Array<Animal>;
  info: UpdateInfo;
};

export type UpdateClassesMutationResponse = {
  __typename?: 'UpdateClassesMutationResponse';
  classes: Array<Classis>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdateReviewsMutationResponse = {
  __typename?: 'UpdateReviewsMutationResponse';
  info: UpdateInfo;
  reviews: Array<Review>;
};

export type UpdateZoosMutationResponse = {
  __typename?: 'UpdateZoosMutationResponse';
  info: UpdateInfo;
  zoos: Array<Zoo>;
};

export type Zoo = {
  __typename?: 'Zoo';
  animals: Array<Animal>;
  animalsAggregate?: Maybe<ZooAnimalAnimalsAggregationSelection>;
  animalsConnection: ZooAnimalsConnection;
  area: Area;
  name: Scalars['String'];
  reviews: Array<Review>;
  reviewsAggregate?: Maybe<ZooReviewReviewsAggregationSelection>;
  reviewsConnection: ZooReviewsConnection;
};

export type ZooAnimalsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<AnimalOptions>;
  where?: InputMaybe<AnimalWhere>;
};

export type ZooAnimalsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AnimalWhere>;
};

export type ZooAnimalsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ZooAnimalsConnectionSort>>;
  where?: InputMaybe<ZooAnimalsConnectionWhere>;
};

export type ZooReviewsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ReviewOptions>;
  where?: InputMaybe<ReviewWhere>;
};

export type ZooReviewsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ReviewWhere>;
};

export type ZooReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ZooReviewsConnectionSort>>;
  where?: InputMaybe<ZooReviewsConnectionWhere>;
};

export type ZooAggregateSelection = {
  __typename?: 'ZooAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
};

export type ZooAnimalAnimalsAggregationSelection = {
  __typename?: 'ZooAnimalAnimalsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ZooAnimalAnimalsNodeAggregateSelection>;
};

export type ZooAnimalAnimalsNodeAggregateSelection = {
  __typename?: 'ZooAnimalAnimalsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
};

export type ZooAnimalsAggregateInput = {
  AND?: InputMaybe<Array<ZooAnimalsAggregateInput>>;
  OR?: InputMaybe<Array<ZooAnimalsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ZooAnimalsNodeAggregationWhereInput>;
};

export type ZooAnimalsConnectFieldInput = {
  connect?: InputMaybe<Array<AnimalConnectInput>>;
  where?: InputMaybe<AnimalConnectWhere>;
};

export type ZooAnimalsConnection = {
  __typename?: 'ZooAnimalsConnection';
  edges: Array<ZooAnimalsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ZooAnimalsConnectionSort = {
  node?: InputMaybe<AnimalSort>;
};

export type ZooAnimalsConnectionWhere = {
  AND?: InputMaybe<Array<ZooAnimalsConnectionWhere>>;
  OR?: InputMaybe<Array<ZooAnimalsConnectionWhere>>;
  node?: InputMaybe<AnimalWhere>;
  node_NOT?: InputMaybe<AnimalWhere>;
};

export type ZooAnimalsCreateFieldInput = {
  node: AnimalCreateInput;
};

export type ZooAnimalsDeleteFieldInput = {
  delete?: InputMaybe<AnimalDeleteInput>;
  where?: InputMaybe<ZooAnimalsConnectionWhere>;
};

export type ZooAnimalsDisconnectFieldInput = {
  disconnect?: InputMaybe<AnimalDisconnectInput>;
  where?: InputMaybe<ZooAnimalsConnectionWhere>;
};

export type ZooAnimalsFieldInput = {
  connect?: InputMaybe<Array<ZooAnimalsConnectFieldInput>>;
  create?: InputMaybe<Array<ZooAnimalsCreateFieldInput>>;
};

export type ZooAnimalsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ZooAnimalsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ZooAnimalsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type ZooAnimalsRelationship = {
  __typename?: 'ZooAnimalsRelationship';
  cursor: Scalars['String'];
  node: Animal;
};

export type ZooAnimalsUpdateConnectionInput = {
  node?: InputMaybe<AnimalUpdateInput>;
};

export type ZooAnimalsUpdateFieldInput = {
  connect?: InputMaybe<Array<ZooAnimalsConnectFieldInput>>;
  create?: InputMaybe<Array<ZooAnimalsCreateFieldInput>>;
  delete?: InputMaybe<Array<ZooAnimalsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ZooAnimalsDisconnectFieldInput>>;
  update?: InputMaybe<ZooAnimalsUpdateConnectionInput>;
  where?: InputMaybe<ZooAnimalsConnectionWhere>;
};

export type ZooConnectInput = {
  animals?: InputMaybe<Array<ZooAnimalsConnectFieldInput>>;
  reviews?: InputMaybe<Array<ZooReviewsConnectFieldInput>>;
};

export type ZooConnectWhere = {
  node: ZooWhere;
};

export type ZooCreateInput = {
  animals?: InputMaybe<ZooAnimalsFieldInput>;
  area: Area;
  name: Scalars['String'];
  reviews?: InputMaybe<ZooReviewsFieldInput>;
};

export type ZooDeleteInput = {
  animals?: InputMaybe<Array<ZooAnimalsDeleteFieldInput>>;
  reviews?: InputMaybe<Array<ZooReviewsDeleteFieldInput>>;
};

export type ZooDisconnectInput = {
  animals?: InputMaybe<Array<ZooAnimalsDisconnectFieldInput>>;
  reviews?: InputMaybe<Array<ZooReviewsDisconnectFieldInput>>;
};

export type ZooEdge = {
  __typename?: 'ZooEdge';
  cursor: Scalars['String'];
  node: Zoo;
};

export type ZooOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ZooSort objects to sort Zoos by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ZooSort>>;
};

export type ZooRelationInput = {
  animals?: InputMaybe<Array<ZooAnimalsCreateFieldInput>>;
  reviews?: InputMaybe<Array<ZooReviewsCreateFieldInput>>;
};

export type ZooReviewReviewsAggregationSelection = {
  __typename?: 'ZooReviewReviewsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ZooReviewReviewsNodeAggregateSelection>;
};

export type ZooReviewReviewsNodeAggregateSelection = {
  __typename?: 'ZooReviewReviewsNodeAggregateSelection';
  score: IntAggregateSelectionNonNullable;
};

export type ZooReviewsAggregateInput = {
  AND?: InputMaybe<Array<ZooReviewsAggregateInput>>;
  OR?: InputMaybe<Array<ZooReviewsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ZooReviewsNodeAggregationWhereInput>;
};

export type ZooReviewsConnectFieldInput = {
  connect?: InputMaybe<Array<ReviewConnectInput>>;
  where?: InputMaybe<ReviewConnectWhere>;
};

export type ZooReviewsConnection = {
  __typename?: 'ZooReviewsConnection';
  edges: Array<ZooReviewsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ZooReviewsConnectionSort = {
  node?: InputMaybe<ReviewSort>;
};

export type ZooReviewsConnectionWhere = {
  AND?: InputMaybe<Array<ZooReviewsConnectionWhere>>;
  OR?: InputMaybe<Array<ZooReviewsConnectionWhere>>;
  node?: InputMaybe<ReviewWhere>;
  node_NOT?: InputMaybe<ReviewWhere>;
};

export type ZooReviewsCreateFieldInput = {
  node: ReviewCreateInput;
};

export type ZooReviewsDeleteFieldInput = {
  delete?: InputMaybe<ReviewDeleteInput>;
  where?: InputMaybe<ZooReviewsConnectionWhere>;
};

export type ZooReviewsDisconnectFieldInput = {
  disconnect?: InputMaybe<ReviewDisconnectInput>;
  where?: InputMaybe<ZooReviewsConnectionWhere>;
};

export type ZooReviewsFieldInput = {
  connect?: InputMaybe<Array<ZooReviewsConnectFieldInput>>;
  create?: InputMaybe<Array<ZooReviewsCreateFieldInput>>;
};

export type ZooReviewsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ZooReviewsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ZooReviewsNodeAggregationWhereInput>>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  score_EQUAL?: InputMaybe<Scalars['Int']>;
  score_GT?: InputMaybe<Scalars['Int']>;
  score_GTE?: InputMaybe<Scalars['Int']>;
  score_LT?: InputMaybe<Scalars['Int']>;
  score_LTE?: InputMaybe<Scalars['Int']>;
  score_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  score_MAX_GT?: InputMaybe<Scalars['Int']>;
  score_MAX_GTE?: InputMaybe<Scalars['Int']>;
  score_MAX_LT?: InputMaybe<Scalars['Int']>;
  score_MAX_LTE?: InputMaybe<Scalars['Int']>;
  score_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  score_MIN_GT?: InputMaybe<Scalars['Int']>;
  score_MIN_GTE?: InputMaybe<Scalars['Int']>;
  score_MIN_LT?: InputMaybe<Scalars['Int']>;
  score_MIN_LTE?: InputMaybe<Scalars['Int']>;
  score_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  score_SUM_GT?: InputMaybe<Scalars['Int']>;
  score_SUM_GTE?: InputMaybe<Scalars['Int']>;
  score_SUM_LT?: InputMaybe<Scalars['Int']>;
  score_SUM_LTE?: InputMaybe<Scalars['Int']>;
};

export type ZooReviewsRelationship = {
  __typename?: 'ZooReviewsRelationship';
  cursor: Scalars['String'];
  node: Review;
};

export type ZooReviewsUpdateConnectionInput = {
  node?: InputMaybe<ReviewUpdateInput>;
};

export type ZooReviewsUpdateFieldInput = {
  connect?: InputMaybe<Array<ZooReviewsConnectFieldInput>>;
  create?: InputMaybe<Array<ZooReviewsCreateFieldInput>>;
  delete?: InputMaybe<Array<ZooReviewsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ZooReviewsDisconnectFieldInput>>;
  update?: InputMaybe<ZooReviewsUpdateConnectionInput>;
  where?: InputMaybe<ZooReviewsConnectionWhere>;
};

/** Fields to sort Zoos by. The order in which sorts are applied is not guaranteed when specifying many fields in one ZooSort object. */
export type ZooSort = {
  area?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type ZooUpdateInput = {
  animals?: InputMaybe<Array<ZooAnimalsUpdateFieldInput>>;
  area?: InputMaybe<Area>;
  name?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<Array<ZooReviewsUpdateFieldInput>>;
};

export type ZooWhere = {
  AND?: InputMaybe<Array<ZooWhere>>;
  OR?: InputMaybe<Array<ZooWhere>>;
  /** @deprecated Use `animals_SOME` instead. */
  animals?: InputMaybe<AnimalWhere>;
  animalsAggregate?: InputMaybe<ZooAnimalsAggregateInput>;
  /** @deprecated Use `animalsConnection_SOME` instead. */
  animalsConnection?: InputMaybe<ZooAnimalsConnectionWhere>;
  animalsConnection_ALL?: InputMaybe<ZooAnimalsConnectionWhere>;
  animalsConnection_NONE?: InputMaybe<ZooAnimalsConnectionWhere>;
  /** @deprecated Use `animalsConnection_NONE` instead. */
  animalsConnection_NOT?: InputMaybe<ZooAnimalsConnectionWhere>;
  animalsConnection_SINGLE?: InputMaybe<ZooAnimalsConnectionWhere>;
  animalsConnection_SOME?: InputMaybe<ZooAnimalsConnectionWhere>;
  /** Return Zoos where all of the related Animals match this filter */
  animals_ALL?: InputMaybe<AnimalWhere>;
  /** Return Zoos where none of the related Animals match this filter */
  animals_NONE?: InputMaybe<AnimalWhere>;
  /** @deprecated Use `animals_NONE` instead. */
  animals_NOT?: InputMaybe<AnimalWhere>;
  /** Return Zoos where one of the related Animals match this filter */
  animals_SINGLE?: InputMaybe<AnimalWhere>;
  /** Return Zoos where some of the related Animals match this filter */
  animals_SOME?: InputMaybe<AnimalWhere>;
  area?: InputMaybe<Area>;
  area_IN?: InputMaybe<Array<Area>>;
  area_NOT?: InputMaybe<Area>;
  area_NOT_IN?: InputMaybe<Array<Area>>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  /** @deprecated Use `reviews_SOME` instead. */
  reviews?: InputMaybe<ReviewWhere>;
  reviewsAggregate?: InputMaybe<ZooReviewsAggregateInput>;
  /** @deprecated Use `reviewsConnection_SOME` instead. */
  reviewsConnection?: InputMaybe<ZooReviewsConnectionWhere>;
  reviewsConnection_ALL?: InputMaybe<ZooReviewsConnectionWhere>;
  reviewsConnection_NONE?: InputMaybe<ZooReviewsConnectionWhere>;
  /** @deprecated Use `reviewsConnection_NONE` instead. */
  reviewsConnection_NOT?: InputMaybe<ZooReviewsConnectionWhere>;
  reviewsConnection_SINGLE?: InputMaybe<ZooReviewsConnectionWhere>;
  reviewsConnection_SOME?: InputMaybe<ZooReviewsConnectionWhere>;
  /** Return Zoos where all of the related Reviews match this filter */
  reviews_ALL?: InputMaybe<ReviewWhere>;
  /** Return Zoos where none of the related Reviews match this filter */
  reviews_NONE?: InputMaybe<ReviewWhere>;
  /** @deprecated Use `reviews_NONE` instead. */
  reviews_NOT?: InputMaybe<ReviewWhere>;
  /** Return Zoos where one of the related Reviews match this filter */
  reviews_SINGLE?: InputMaybe<ReviewWhere>;
  /** Return Zoos where some of the related Reviews match this filter */
  reviews_SOME?: InputMaybe<ReviewWhere>;
};

export type ZoosConnection = {
  __typename?: 'ZoosConnection';
  edges: Array<ZooEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GetAllAnimalsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllAnimalsQuery = {
  __typename?: 'Query';
  animals: Array<{
    __typename?: 'Animal';
    name: string;
    classis: { __typename?: 'Classis'; name: string };
  }>;
};

export type RegisterAnimalMutationVariables = Exact<{
  animal: Array<AnimalCreateInput> | AnimalCreateInput;
}>;

export type RegisterAnimalMutation = {
  __typename?: 'Mutation';
  createAnimals: {
    __typename?: 'CreateAnimalsMutationResponse';
    animals: Array<{
      __typename?: 'Animal';
      name: string;
      classis: { __typename?: 'Classis'; name: string };
    }>;
  };
};

export type GetAllZoosQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllZoosQuery = {
  __typename?: 'Query';
  zoos: Array<{
    __typename?: 'Zoo';
    name: string;
    animals: Array<{
      __typename?: 'Animal';
      name: string;
      classis: { __typename?: 'Classis'; name: string };
    }>;
  }>;
};

export type RegisterZooMutationVariables = Exact<{
  zoo: Array<ZooCreateInput> | ZooCreateInput;
}>;

export type RegisterZooMutation = {
  __typename?: 'Mutation';
  createZoos: {
    __typename?: 'CreateZoosMutationResponse';
    zoos: Array<{
      __typename?: 'Zoo';
      name: string;
      area: Area;
      animals: Array<{ __typename?: 'Animal'; name: string }>;
    }>;
  };
};

export const GetAllAnimalsDocument = gql`
  query GetAllAnimals {
    animals {
      name
      classis {
        name
      }
    }
  }
`;

export function useGetAllAnimalsQuery(
  options?: Omit<Urql.UseQueryArgs<GetAllAnimalsQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetAllAnimalsQuery, GetAllAnimalsQueryVariables>({
    query: GetAllAnimalsDocument,
    ...options,
  });
}
export const RegisterAnimalDocument = gql`
  mutation RegisterAnimal($animal: [AnimalCreateInput!]!) {
    createAnimals(input: $animal) {
      animals {
        name
        classis {
          name
        }
      }
    }
  }
`;

export function useRegisterAnimalMutation() {
  return Urql.useMutation<
    RegisterAnimalMutation,
    RegisterAnimalMutationVariables
  >(RegisterAnimalDocument);
}
export const GetAllZoosDocument = gql`
  query GetAllZoos {
    zoos {
      name
      animals {
        name
        classis {
          name
        }
      }
    }
  }
`;

export function useGetAllZoosQuery(
  options?: Omit<Urql.UseQueryArgs<GetAllZoosQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetAllZoosQuery, GetAllZoosQueryVariables>({
    query: GetAllZoosDocument,
    ...options,
  });
}
export const RegisterZooDocument = gql`
  mutation RegisterZoo($zoo: [ZooCreateInput!]!) {
    createZoos(input: $zoo) {
      zoos {
        name
        area
        animals {
          name
        }
      }
    }
  }
`;

export function useRegisterZooMutation() {
  return Urql.useMutation<RegisterZooMutation, RegisterZooMutationVariables>(
    RegisterZooDocument
  );
}
import { IntrospectionQuery } from 'graphql';
export default {
  __schema: {
    queryType: {
      name: 'Query',
    },
    mutationType: {
      name: 'Mutation',
    },
    subscriptionType: null,
    types: [
      {
        kind: 'OBJECT',
        name: 'Animal',
        fields: [
          {
            name: 'classis',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Classis',
                ofType: null,
              },
            },
            args: [
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'options',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'classisAggregate',
            type: {
              kind: 'OBJECT',
              name: 'AnimalClassisClassisAggregationSelection',
              ofType: null,
            },
            args: [
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'classisConnection',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AnimalClassisConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sort',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'zoos',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Zoo',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'options',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'zoosAggregate',
            type: {
              kind: 'OBJECT',
              name: 'AnimalZooZoosAggregationSelection',
              ofType: null,
            },
            args: [
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'zoosConnection',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AnimalZoosConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sort',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AnimalAggregateSelection',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'StringAggregateSelectionNonNullable',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AnimalClassisClassisAggregationSelection',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'OBJECT',
              name: 'AnimalClassisClassisNodeAggregateSelection',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AnimalClassisClassisNodeAggregateSelection',
        fields: [
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'StringAggregateSelectionNonNullable',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AnimalClassisConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AnimalClassisRelationship',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AnimalClassisRelationship',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Classis',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AnimalEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Animal',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AnimalZooZoosAggregationSelection',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'OBJECT',
              name: 'AnimalZooZoosNodeAggregateSelection',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AnimalZooZoosNodeAggregateSelection',
        fields: [
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'StringAggregateSelectionNonNullable',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AnimalZoosConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AnimalZoosRelationship',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AnimalZoosRelationship',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Zoo',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AnimalsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AnimalEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ClassesConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ClassisEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Classis',
        fields: [
          {
            name: 'animals',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Animal',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'options',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'animalsAggregate',
            type: {
              kind: 'OBJECT',
              name: 'ClassisAnimalAnimalsAggregationSelection',
              ofType: null,
            },
            args: [
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'animalsConnection',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ClassisAnimalsConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sort',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ClassisAggregateSelection',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'StringAggregateSelectionNonNullable',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ClassisAnimalAnimalsAggregationSelection',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'OBJECT',
              name: 'ClassisAnimalAnimalsNodeAggregateSelection',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ClassisAnimalAnimalsNodeAggregateSelection',
        fields: [
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'StringAggregateSelectionNonNullable',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ClassisAnimalsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ClassisAnimalsRelationship',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ClassisAnimalsRelationship',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Animal',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ClassisEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Classis',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateAnimalsMutationResponse',
        fields: [
          {
            name: 'animals',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Animal',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'info',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'CreateInfo',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateClassesMutationResponse',
        fields: [
          {
            name: 'classes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Classis',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'info',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'CreateInfo',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateInfo',
        fields: [
          {
            name: 'bookmark',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'nodesCreated',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'relationshipsCreated',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateReviewsMutationResponse',
        fields: [
          {
            name: 'info',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'CreateInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'reviews',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Review',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateZoosMutationResponse',
        fields: [
          {
            name: 'info',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'CreateInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'zoos',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Zoo',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteInfo',
        fields: [
          {
            name: 'bookmark',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'nodesDeleted',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'relationshipsDeleted',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'IntAggregateSelectionNonNullable',
        fields: [
          {
            name: 'average',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'max',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'min',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'sum',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Mutation',
        fields: [
          {
            name: 'createAnimals',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'CreateAnimalsMutationResponse',
                ofType: null,
              },
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'createClasses',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'CreateClassesMutationResponse',
                ofType: null,
              },
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'createReviews',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'CreateReviewsMutationResponse',
                ofType: null,
              },
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'createZoos',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'CreateZoosMutationResponse',
                ofType: null,
              },
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'deleteAnimals',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'DeleteInfo',
                ofType: null,
              },
            },
            args: [
              {
                name: 'delete',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'deleteClasses',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'DeleteInfo',
                ofType: null,
              },
            },
            args: [
              {
                name: 'delete',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'deleteReviews',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'DeleteInfo',
                ofType: null,
              },
            },
            args: [
              {
                name: 'delete',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'deleteZoos',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'DeleteInfo',
                ofType: null,
              },
            },
            args: [
              {
                name: 'delete',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'updateAnimals',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UpdateAnimalsMutationResponse',
                ofType: null,
              },
            },
            args: [
              {
                name: 'connect',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'create',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'delete',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'disconnect',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'update',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'updateClasses',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UpdateClassesMutationResponse',
                ofType: null,
              },
            },
            args: [
              {
                name: 'connect',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'create',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'delete',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'disconnect',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'update',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'updateReviews',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UpdateReviewsMutationResponse',
                ofType: null,
              },
            },
            args: [
              {
                name: 'connect',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'create',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'delete',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'disconnect',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'update',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'updateZoos',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UpdateZoosMutationResponse',
                ofType: null,
              },
            },
            args: [
              {
                name: 'connect',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'create',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'delete',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'disconnect',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'update',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PageInfo',
        fields: [
          {
            name: 'endCursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'hasNextPage',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'hasPreviousPage',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'startCursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        fields: [
          {
            name: 'animals',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Animal',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'options',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'animalsAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AnimalAggregateSelection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'animalsConnection',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AnimalsConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sort',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'classes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Classis',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'options',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'classesAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ClassisAggregateSelection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'classesConnection',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ClassesConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sort',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'reviews',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Review',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'options',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'reviewsAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ReviewAggregateSelection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'reviewsConnection',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ReviewsConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sort',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'zoos',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Zoo',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'options',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'zoosAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ZooAggregateSelection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'zoosConnection',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ZoosConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sort',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Review',
        fields: [
          {
            name: 'isValid',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'score',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'zoo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Zoo',
                ofType: null,
              },
            },
            args: [
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'options',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'zooAggregate',
            type: {
              kind: 'OBJECT',
              name: 'ReviewZooZooAggregationSelection',
              ofType: null,
            },
            args: [
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'zooConnection',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ReviewZooConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sort',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ReviewAggregateSelection',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'score',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'IntAggregateSelectionNonNullable',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ReviewEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Review',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ReviewZooConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ReviewZooRelationship',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ReviewZooRelationship',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Zoo',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ReviewZooZooAggregationSelection',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'OBJECT',
              name: 'ReviewZooZooNodeAggregateSelection',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ReviewZooZooNodeAggregateSelection',
        fields: [
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'StringAggregateSelectionNonNullable',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ReviewsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ReviewEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'StringAggregateSelectionNonNullable',
        fields: [
          {
            name: 'longest',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'shortest',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateAnimalsMutationResponse',
        fields: [
          {
            name: 'animals',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Animal',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'info',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UpdateInfo',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateClassesMutationResponse',
        fields: [
          {
            name: 'classes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Classis',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'info',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UpdateInfo',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateInfo',
        fields: [
          {
            name: 'bookmark',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'nodesCreated',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'nodesDeleted',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'relationshipsCreated',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'relationshipsDeleted',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateReviewsMutationResponse',
        fields: [
          {
            name: 'info',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UpdateInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'reviews',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Review',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateZoosMutationResponse',
        fields: [
          {
            name: 'info',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UpdateInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'zoos',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Zoo',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Zoo',
        fields: [
          {
            name: 'animals',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Animal',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'options',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'animalsAggregate',
            type: {
              kind: 'OBJECT',
              name: 'ZooAnimalAnimalsAggregationSelection',
              ofType: null,
            },
            args: [
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'animalsConnection',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ZooAnimalsConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sort',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'area',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'reviews',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Review',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'options',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'reviewsAggregate',
            type: {
              kind: 'OBJECT',
              name: 'ZooReviewReviewsAggregationSelection',
              ofType: null,
            },
            args: [
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'reviewsConnection',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ZooReviewsConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'directed',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sort',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ZooAggregateSelection',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'StringAggregateSelectionNonNullable',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ZooAnimalAnimalsAggregationSelection',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'OBJECT',
              name: 'ZooAnimalAnimalsNodeAggregateSelection',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ZooAnimalAnimalsNodeAggregateSelection',
        fields: [
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'StringAggregateSelectionNonNullable',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ZooAnimalsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ZooAnimalsRelationship',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ZooAnimalsRelationship',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Animal',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ZooEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Zoo',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ZooReviewReviewsAggregationSelection',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'OBJECT',
              name: 'ZooReviewReviewsNodeAggregateSelection',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ZooReviewReviewsNodeAggregateSelection',
        fields: [
          {
            name: 'score',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'IntAggregateSelectionNonNullable',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ZooReviewsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ZooReviewsRelationship',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ZooReviewsRelationship',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Review',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ZoosConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ZooEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'Any',
      },
    ],
    directives: [],
  },
} as unknown as IntrospectionQuery;
