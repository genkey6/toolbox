import gql from 'graphql-tag';
import * as Urql from 'urql';
import { IntrospectionQuery } from 'graphql';
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
  DateTime: any;
  Int64: any;
};

export type AddAnimalInput = {
  classis: ClassisRef;
  name: Scalars['String'];
  zoo?: InputMaybe<ZooRef>;
};

export type AddAnimalPayload = {
  __typename?: 'AddAnimalPayload';
  animal?: Maybe<Array<Maybe<Animal>>>;
  numUids?: Maybe<Scalars['Int']>;
};

export type AddAnimalPayloadAnimalArgs = {
  filter?: InputMaybe<AnimalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnimalOrder>;
};

export type AddClassisInput = {
  name: Scalars['String'];
};

export type AddClassisPayload = {
  __typename?: 'AddClassisPayload';
  classis?: Maybe<Array<Maybe<Classis>>>;
  numUids?: Maybe<Scalars['Int']>;
};

export type AddClassisPayloadClassisArgs = {
  filter?: InputMaybe<ClassisFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ClassisOrder>;
};

export type AddReviewInput = {
  isValid?: InputMaybe<Scalars['Boolean']>;
  score: Scalars['Int'];
  zoo: ZooRef;
};

export type AddReviewPayload = {
  __typename?: 'AddReviewPayload';
  numUids?: Maybe<Scalars['Int']>;
  review?: Maybe<Array<Maybe<Review>>>;
};

export type AddReviewPayloadReviewArgs = {
  filter?: InputMaybe<ReviewFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ReviewOrder>;
};

export type AddZooInput = {
  animals: Array<AnimalRef>;
  area: Area;
  name: Scalars['String'];
  reviews: Array<InputMaybe<ReviewRef>>;
};

export type AddZooPayload = {
  __typename?: 'AddZooPayload';
  numUids?: Maybe<Scalars['Int']>;
  zoo?: Maybe<Array<Maybe<Zoo>>>;
};

export type AddZooPayloadZooArgs = {
  filter?: InputMaybe<ZooFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ZooOrder>;
};

export type Animal = {
  __typename?: 'Animal';
  classis: Classis;
  name: Scalars['String'];
  zoo?: Maybe<Zoo>;
};

export type AnimalClassisArgs = {
  filter?: InputMaybe<ClassisFilter>;
};

export type AnimalZooArgs = {
  filter?: InputMaybe<ZooFilter>;
};

export type AnimalAggregateResult = {
  __typename?: 'AnimalAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type AnimalFilter = {
  and?: InputMaybe<Array<InputMaybe<AnimalFilter>>>;
  has?: InputMaybe<Array<InputMaybe<AnimalHasFilter>>>;
  not?: InputMaybe<AnimalFilter>;
  or?: InputMaybe<Array<InputMaybe<AnimalFilter>>>;
};

export enum AnimalHasFilter {
  Classis = 'classis',
  Name = 'name',
  Zoo = 'zoo',
}

export type AnimalOrder = {
  asc?: InputMaybe<AnimalOrderable>;
  desc?: InputMaybe<AnimalOrderable>;
  then?: InputMaybe<AnimalOrder>;
};

export enum AnimalOrderable {
  Name = 'name',
}

export type AnimalPatch = {
  classis?: InputMaybe<ClassisRef>;
  name?: InputMaybe<Scalars['String']>;
  zoo?: InputMaybe<ZooRef>;
};

export type AnimalRef = {
  classis?: InputMaybe<ClassisRef>;
  name?: InputMaybe<Scalars['String']>;
  zoo?: InputMaybe<ZooRef>;
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

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']>;
};

export type Classis = {
  __typename?: 'Classis';
  name: Scalars['String'];
};

export type ClassisAggregateResult = {
  __typename?: 'ClassisAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type ClassisFilter = {
  and?: InputMaybe<Array<InputMaybe<ClassisFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ClassisHasFilter>>>;
  not?: InputMaybe<ClassisFilter>;
  or?: InputMaybe<Array<InputMaybe<ClassisFilter>>>;
};

export enum ClassisHasFilter {
  Name = 'name',
}

export type ClassisOrder = {
  asc?: InputMaybe<ClassisOrderable>;
  desc?: InputMaybe<ClassisOrderable>;
  then?: InputMaybe<ClassisOrder>;
};

export enum ClassisOrderable {
  Name = 'name',
}

export type ClassisPatch = {
  name?: InputMaybe<Scalars['String']>;
};

export type ClassisRef = {
  name?: InputMaybe<Scalars['String']>;
};

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type CustomHttp = {
  body?: InputMaybe<Scalars['String']>;
  forwardHeaders?: InputMaybe<Array<Scalars['String']>>;
  graphql?: InputMaybe<Scalars['String']>;
  introspectionHeaders?: InputMaybe<Array<Scalars['String']>>;
  method: HttpMethod;
  mode?: InputMaybe<Mode>;
  secretHeaders?: InputMaybe<Array<Scalars['String']>>;
  skipIntrospection?: InputMaybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type DateTimeFilter = {
  between?: InputMaybe<DateTimeRange>;
  eq?: InputMaybe<Scalars['DateTime']>;
  ge?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  le?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteAnimalPayload = {
  __typename?: 'DeleteAnimalPayload';
  animal?: Maybe<Array<Maybe<Animal>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteAnimalPayloadAnimalArgs = {
  filter?: InputMaybe<AnimalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnimalOrder>;
};

export type DeleteClassisPayload = {
  __typename?: 'DeleteClassisPayload';
  classis?: Maybe<Array<Maybe<Classis>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteClassisPayloadClassisArgs = {
  filter?: InputMaybe<ClassisFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ClassisOrder>;
};

export type DeleteReviewPayload = {
  __typename?: 'DeleteReviewPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  review?: Maybe<Array<Maybe<Review>>>;
};

export type DeleteReviewPayloadReviewArgs = {
  filter?: InputMaybe<ReviewFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ReviewOrder>;
};

export type DeleteZooPayload = {
  __typename?: 'DeleteZooPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  zoo?: Maybe<Array<Maybe<Zoo>>>;
};

export type DeleteZooPayloadZooArgs = {
  filter?: InputMaybe<ZooFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ZooOrder>;
};

export enum DgraphIndex {
  Bool = 'bool',
  Day = 'day',
  Exact = 'exact',
  Float = 'float',
  Fulltext = 'fulltext',
  Geo = 'geo',
  Hash = 'hash',
  Hour = 'hour',
  Int = 'int',
  Int64 = 'int64',
  Month = 'month',
  Regexp = 'regexp',
  Term = 'term',
  Trigram = 'trigram',
  Year = 'year',
}

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
};

export type FloatRange = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type GenerateMutationParams = {
  add?: InputMaybe<Scalars['Boolean']>;
  delete?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateQueryParams = {
  aggregate?: InputMaybe<Scalars['Boolean']>;
  get?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['Boolean']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT',
}

export type Int64Filter = {
  between?: InputMaybe<Int64Range>;
  eq?: InputMaybe<Scalars['Int64']>;
  ge?: InputMaybe<Scalars['Int64']>;
  gt?: InputMaybe<Scalars['Int64']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int64']>>>;
  le?: InputMaybe<Scalars['Int64']>;
  lt?: InputMaybe<Scalars['Int64']>;
};

export type Int64Range = {
  max: Scalars['Int64'];
  min: Scalars['Int64'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
};

export type IntRange = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IntersectsFilter = {
  multiPolygon?: InputMaybe<MultiPolygonRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE',
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAnimal?: Maybe<AddAnimalPayload>;
  addClassis?: Maybe<AddClassisPayload>;
  addReview?: Maybe<AddReviewPayload>;
  addZoo?: Maybe<AddZooPayload>;
  deleteAnimal?: Maybe<DeleteAnimalPayload>;
  deleteClassis?: Maybe<DeleteClassisPayload>;
  deleteReview?: Maybe<DeleteReviewPayload>;
  deleteZoo?: Maybe<DeleteZooPayload>;
  updateAnimal?: Maybe<UpdateAnimalPayload>;
  updateClassis?: Maybe<UpdateClassisPayload>;
  updateReview?: Maybe<UpdateReviewPayload>;
  updateZoo?: Maybe<UpdateZooPayload>;
};

export type MutationAddAnimalArgs = {
  input: Array<AddAnimalInput>;
};

export type MutationAddClassisArgs = {
  input: Array<AddClassisInput>;
};

export type MutationAddReviewArgs = {
  input: Array<AddReviewInput>;
};

export type MutationAddZooArgs = {
  input: Array<AddZooInput>;
};

export type MutationDeleteAnimalArgs = {
  filter: AnimalFilter;
};

export type MutationDeleteClassisArgs = {
  filter: ClassisFilter;
};

export type MutationDeleteReviewArgs = {
  filter: ReviewFilter;
};

export type MutationDeleteZooArgs = {
  filter: ZooFilter;
};

export type MutationUpdateAnimalArgs = {
  input: UpdateAnimalInput;
};

export type MutationUpdateClassisArgs = {
  input: UpdateClassisInput;
};

export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};

export type MutationUpdateZooArgs = {
  input: UpdateZooInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float'];
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: InputMaybe<ContainsFilter>;
  intersects?: InputMaybe<IntersectsFilter>;
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAnimal?: Maybe<AnimalAggregateResult>;
  aggregateClassis?: Maybe<ClassisAggregateResult>;
  aggregateReview?: Maybe<ReviewAggregateResult>;
  aggregateZoo?: Maybe<ZooAggregateResult>;
  queryAnimal?: Maybe<Array<Maybe<Animal>>>;
  queryClassis?: Maybe<Array<Maybe<Classis>>>;
  queryReview?: Maybe<Array<Maybe<Review>>>;
  queryZoo?: Maybe<Array<Maybe<Zoo>>>;
};

export type QueryAggregateAnimalArgs = {
  filter?: InputMaybe<AnimalFilter>;
};

export type QueryAggregateClassisArgs = {
  filter?: InputMaybe<ClassisFilter>;
};

export type QueryAggregateReviewArgs = {
  filter?: InputMaybe<ReviewFilter>;
};

export type QueryAggregateZooArgs = {
  filter?: InputMaybe<ZooFilter>;
};

export type QueryQueryAnimalArgs = {
  filter?: InputMaybe<AnimalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnimalOrder>;
};

export type QueryQueryClassisArgs = {
  filter?: InputMaybe<ClassisFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ClassisOrder>;
};

export type QueryQueryReviewArgs = {
  filter?: InputMaybe<ReviewFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ReviewOrder>;
};

export type QueryQueryZooArgs = {
  filter?: InputMaybe<ZooFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ZooOrder>;
};

export type Review = {
  __typename?: 'Review';
  isValid?: Maybe<Scalars['Boolean']>;
  score: Scalars['Int'];
  zoo: Zoo;
};

export type ReviewZooArgs = {
  filter?: InputMaybe<ZooFilter>;
};

export type ReviewAggregateResult = {
  __typename?: 'ReviewAggregateResult';
  count?: Maybe<Scalars['Int']>;
  scoreAvg?: Maybe<Scalars['Float']>;
  scoreMax?: Maybe<Scalars['Int']>;
  scoreMin?: Maybe<Scalars['Int']>;
  scoreSum?: Maybe<Scalars['Int']>;
};

export type ReviewFilter = {
  and?: InputMaybe<Array<InputMaybe<ReviewFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ReviewHasFilter>>>;
  not?: InputMaybe<ReviewFilter>;
  or?: InputMaybe<Array<InputMaybe<ReviewFilter>>>;
};

export enum ReviewHasFilter {
  IsValid = 'isValid',
  Score = 'score',
  Zoo = 'zoo',
}

export type ReviewOrder = {
  asc?: InputMaybe<ReviewOrderable>;
  desc?: InputMaybe<ReviewOrderable>;
  then?: InputMaybe<ReviewOrder>;
};

export enum ReviewOrderable {
  Score = 'score',
}

export type ReviewPatch = {
  isValid?: InputMaybe<Scalars['Boolean']>;
  score?: InputMaybe<Scalars['Int']>;
  zoo?: InputMaybe<ZooRef>;
};

export type ReviewRef = {
  isValid?: InputMaybe<Scalars['Boolean']>;
  score?: InputMaybe<Scalars['Int']>;
  zoo?: InputMaybe<ZooRef>;
};

export type StringExactFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
};

export type StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']>;
  anyoftext?: InputMaybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StringRange = {
  max: Scalars['String'];
  min: Scalars['String'];
};

export type StringRegExpFilter = {
  regexp?: InputMaybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']>;
  anyofterms?: InputMaybe<Scalars['String']>;
};

export type UpdateAnimalInput = {
  filter: AnimalFilter;
  remove?: InputMaybe<AnimalPatch>;
  set?: InputMaybe<AnimalPatch>;
};

export type UpdateAnimalPayload = {
  __typename?: 'UpdateAnimalPayload';
  animal?: Maybe<Array<Maybe<Animal>>>;
  numUids?: Maybe<Scalars['Int']>;
};

export type UpdateAnimalPayloadAnimalArgs = {
  filter?: InputMaybe<AnimalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnimalOrder>;
};

export type UpdateClassisInput = {
  filter: ClassisFilter;
  remove?: InputMaybe<ClassisPatch>;
  set?: InputMaybe<ClassisPatch>;
};

export type UpdateClassisPayload = {
  __typename?: 'UpdateClassisPayload';
  classis?: Maybe<Array<Maybe<Classis>>>;
  numUids?: Maybe<Scalars['Int']>;
};

export type UpdateClassisPayloadClassisArgs = {
  filter?: InputMaybe<ClassisFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ClassisOrder>;
};

export type UpdateReviewInput = {
  filter: ReviewFilter;
  remove?: InputMaybe<ReviewPatch>;
  set?: InputMaybe<ReviewPatch>;
};

export type UpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload';
  numUids?: Maybe<Scalars['Int']>;
  review?: Maybe<Array<Maybe<Review>>>;
};

export type UpdateReviewPayloadReviewArgs = {
  filter?: InputMaybe<ReviewFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ReviewOrder>;
};

export type UpdateZooInput = {
  filter: ZooFilter;
  remove?: InputMaybe<ZooPatch>;
  set?: InputMaybe<ZooPatch>;
};

export type UpdateZooPayload = {
  __typename?: 'UpdateZooPayload';
  numUids?: Maybe<Scalars['Int']>;
  zoo?: Maybe<Array<Maybe<Zoo>>>;
};

export type UpdateZooPayloadZooArgs = {
  filter?: InputMaybe<ZooFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ZooOrder>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type Zoo = {
  __typename?: 'Zoo';
  animals: Array<Animal>;
  animalsAggregate?: Maybe<AnimalAggregateResult>;
  area: Area;
  name: Scalars['String'];
  reviews: Array<Maybe<Review>>;
  reviewsAggregate?: Maybe<ReviewAggregateResult>;
};

export type ZooAnimalsArgs = {
  filter?: InputMaybe<AnimalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnimalOrder>;
};

export type ZooAnimalsAggregateArgs = {
  filter?: InputMaybe<AnimalFilter>;
};

export type ZooReviewsArgs = {
  filter?: InputMaybe<ReviewFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ReviewOrder>;
};

export type ZooReviewsAggregateArgs = {
  filter?: InputMaybe<ReviewFilter>;
};

export type ZooAggregateResult = {
  __typename?: 'ZooAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type ZooFilter = {
  and?: InputMaybe<Array<InputMaybe<ZooFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ZooHasFilter>>>;
  not?: InputMaybe<ZooFilter>;
  or?: InputMaybe<Array<InputMaybe<ZooFilter>>>;
};

export enum ZooHasFilter {
  Animals = 'animals',
  Area = 'area',
  Name = 'name',
  Reviews = 'reviews',
}

export type ZooOrder = {
  asc?: InputMaybe<ZooOrderable>;
  desc?: InputMaybe<ZooOrderable>;
  then?: InputMaybe<ZooOrder>;
};

export enum ZooOrderable {
  Name = 'name',
}

export type ZooPatch = {
  animals?: InputMaybe<Array<AnimalRef>>;
  area?: InputMaybe<Area>;
  name?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<Array<InputMaybe<ReviewRef>>>;
};

export type ZooRef = {
  animals?: InputMaybe<Array<AnimalRef>>;
  area?: InputMaybe<Area>;
  name?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<Array<InputMaybe<ReviewRef>>>;
};

export type GetAllAnimalsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllAnimalsQuery = {
  __typename?: 'Query';
  queryAnimal?: Array<{
    __typename?: 'Animal';
    name: string;
    classis: { __typename?: 'Classis'; name: string };
  } | null> | null;
};

export type RegisterAnimalMutationVariables = Exact<{
  animal: Array<AddAnimalInput> | AddAnimalInput;
}>;

export type RegisterAnimalMutation = {
  __typename?: 'Mutation';
  addAnimal?: {
    __typename?: 'AddAnimalPayload';
    animal?: Array<{
      __typename?: 'Animal';
      name: string;
      classis: { __typename?: 'Classis'; name: string };
    } | null> | null;
  } | null;
};

export type GetAllZoosQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllZoosQuery = {
  __typename?: 'Query';
  queryZoo?: Array<{
    __typename?: 'Zoo';
    name: string;
    animals: Array<{
      __typename?: 'Animal';
      name: string;
      classis: { __typename?: 'Classis'; name: string };
    }>;
  } | null> | null;
};

export type RegisterZooMutationVariables = Exact<{
  zoo: Array<AddZooInput> | AddZooInput;
}>;

export type RegisterZooMutation = {
  __typename?: 'Mutation';
  addZoo?: {
    __typename?: 'AddZooPayload';
    zoo?: Array<{
      __typename?: 'Zoo';
      name: string;
      area: Area;
      animals: Array<{ __typename?: 'Animal'; name: string }>;
    } | null> | null;
  } | null;
};

export const GetAllAnimalsDocument = gql`
  query GetAllAnimals {
    queryAnimal {
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
  mutation RegisterAnimal($animal: [AddAnimalInput!]!) {
    addAnimal(input: $animal) {
      animal {
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
    queryZoo {
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
  mutation RegisterZoo($zoo: [AddZooInput!]!) {
    addZoo(input: $zoo) {
      zoo {
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
        name: 'AddAnimalPayload',
        fields: [
          {
            name: 'animal',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Animal',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'numUids',
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
        name: 'AddClassisPayload',
        fields: [
          {
            name: 'classis',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Classis',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'numUids',
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
        name: 'AddReviewPayload',
        fields: [
          {
            name: 'numUids',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'review',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Review',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
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
        name: 'AddZooPayload',
        fields: [
          {
            name: 'numUids',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'zoo',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Zoo',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
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
                name: 'filter',
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
            name: 'zoo',
            type: {
              kind: 'OBJECT',
              name: 'Zoo',
              ofType: null,
            },
            args: [
              {
                name: 'filter',
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
        name: 'AnimalAggregateResult',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'nameMax',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'nameMin',
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
        name: 'Classis',
        fields: [
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
        name: 'ClassisAggregateResult',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'nameMax',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'nameMin',
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
        name: 'DeleteAnimalPayload',
        fields: [
          {
            name: 'animal',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Animal',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'msg',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'numUids',
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
        name: 'DeleteClassisPayload',
        fields: [
          {
            name: 'classis',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Classis',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'msg',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'numUids',
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
        name: 'DeleteReviewPayload',
        fields: [
          {
            name: 'msg',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'numUids',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'review',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Review',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
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
        name: 'DeleteZooPayload',
        fields: [
          {
            name: 'msg',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'numUids',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'zoo',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Zoo',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
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
        name: 'MultiPolygon',
        fields: [
          {
            name: 'polygons',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Polygon',
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
        name: 'Mutation',
        fields: [
          {
            name: 'addAnimal',
            type: {
              kind: 'OBJECT',
              name: 'AddAnimalPayload',
              ofType: null,
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
            name: 'addClassis',
            type: {
              kind: 'OBJECT',
              name: 'AddClassisPayload',
              ofType: null,
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
            name: 'addReview',
            type: {
              kind: 'OBJECT',
              name: 'AddReviewPayload',
              ofType: null,
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
            name: 'addZoo',
            type: {
              kind: 'OBJECT',
              name: 'AddZooPayload',
              ofType: null,
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
            name: 'deleteAnimal',
            type: {
              kind: 'OBJECT',
              name: 'DeleteAnimalPayload',
              ofType: null,
            },
            args: [
              {
                name: 'filter',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteClassis',
            type: {
              kind: 'OBJECT',
              name: 'DeleteClassisPayload',
              ofType: null,
            },
            args: [
              {
                name: 'filter',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteReview',
            type: {
              kind: 'OBJECT',
              name: 'DeleteReviewPayload',
              ofType: null,
            },
            args: [
              {
                name: 'filter',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteZoo',
            type: {
              kind: 'OBJECT',
              name: 'DeleteZooPayload',
              ofType: null,
            },
            args: [
              {
                name: 'filter',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateAnimal',
            type: {
              kind: 'OBJECT',
              name: 'UpdateAnimalPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateClassis',
            type: {
              kind: 'OBJECT',
              name: 'UpdateClassisPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateReview',
            type: {
              kind: 'OBJECT',
              name: 'UpdateReviewPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateZoo',
            type: {
              kind: 'OBJECT',
              name: 'UpdateZooPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Point',
        fields: [
          {
            name: 'latitude',
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
            name: 'longitude',
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
        name: 'PointList',
        fields: [
          {
            name: 'points',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Point',
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
        name: 'Polygon',
        fields: [
          {
            name: 'coordinates',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'PointList',
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
        name: 'Query',
        fields: [
          {
            name: 'aggregateAnimal',
            type: {
              kind: 'OBJECT',
              name: 'AnimalAggregateResult',
              ofType: null,
            },
            args: [
              {
                name: 'filter',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'aggregateClassis',
            type: {
              kind: 'OBJECT',
              name: 'ClassisAggregateResult',
              ofType: null,
            },
            args: [
              {
                name: 'filter',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'aggregateReview',
            type: {
              kind: 'OBJECT',
              name: 'ReviewAggregateResult',
              ofType: null,
            },
            args: [
              {
                name: 'filter',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'aggregateZoo',
            type: {
              kind: 'OBJECT',
              name: 'ZooAggregateResult',
              ofType: null,
            },
            args: [
              {
                name: 'filter',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'queryAnimal',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Animal',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'queryClassis',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Classis',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'queryReview',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Review',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'queryZoo',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Zoo',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
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
                name: 'filter',
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
        name: 'ReviewAggregateResult',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'scoreAvg',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'scoreMax',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'scoreMin',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'scoreSum',
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
        name: 'UpdateAnimalPayload',
        fields: [
          {
            name: 'animal',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Animal',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'numUids',
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
        name: 'UpdateClassisPayload',
        fields: [
          {
            name: 'classis',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Classis',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'numUids',
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
        name: 'UpdateReviewPayload',
        fields: [
          {
            name: 'numUids',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'review',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Review',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
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
        name: 'UpdateZooPayload',
        fields: [
          {
            name: 'numUids',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'zoo',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'Zoo',
                ofType: null,
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
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
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
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
              name: 'AnimalAggregateResult',
              ofType: null,
            },
            args: [
              {
                name: 'filter',
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
                  kind: 'OBJECT',
                  name: 'Review',
                  ofType: null,
                },
              },
            },
            args: [
              {
                name: 'filter',
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
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order',
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
              name: 'ReviewAggregateResult',
              ofType: null,
            },
            args: [
              {
                name: 'filter',
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
        name: 'ZooAggregateResult',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'nameMax',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'nameMin',
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
        kind: 'SCALAR',
        name: 'Any',
      },
    ],
    directives: [],
  },
} as unknown as IntrospectionQuery;
