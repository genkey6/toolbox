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
  Date: any;
  Long: any;
  Time: any;
};

export type Animal = {
  __typename?: 'Animal';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  classis: Classis;
  name: Scalars['String'];
  zoo?: Maybe<Zoo>;
};

export type AnimalInput = {
  classis: ClassisInput;
  name: Scalars['String'];
  zoo?: InputMaybe<AnimalZooRelation>;
};

export type AnimalPage = {
  __typename?: 'AnimalPage';
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  data: Array<Maybe<Animal>>;
};

export type AnimalZooRelation = {
  connect?: InputMaybe<Scalars['ID']>;
  create?: InputMaybe<ZooInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
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

export type Classis = {
  __typename?: 'Classis';
  name: Scalars['String'];
};

export type ClassisInput = {
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnimal: Animal;
  createReview: Review;
  createZoo: Zoo;
  deleteAnimal?: Maybe<Animal>;
  deleteReview?: Maybe<Review>;
  deleteZoo?: Maybe<Zoo>;
  partialUpdateAnimal?: Maybe<Animal>;
  partialUpdateReview?: Maybe<Review>;
  partialUpdateZoo?: Maybe<Zoo>;
  updateAnimal?: Maybe<Animal>;
  updateReview?: Maybe<Review>;
  updateZoo?: Maybe<Zoo>;
};

export type MutationCreateAnimalArgs = {
  data: AnimalInput;
};

export type MutationCreateReviewArgs = {
  data: ReviewInput;
};

export type MutationCreateZooArgs = {
  data: ZooInput;
};

export type MutationDeleteAnimalArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteZooArgs = {
  id: Scalars['ID'];
};

export type MutationPartialUpdateAnimalArgs = {
  data: PartialUpdateAnimalInput;
  id: Scalars['ID'];
};

export type MutationPartialUpdateReviewArgs = {
  data: PartialUpdateReviewInput;
  id: Scalars['ID'];
};

export type MutationPartialUpdateZooArgs = {
  data: PartialUpdateZooInput;
  id: Scalars['ID'];
};

export type MutationUpdateAnimalArgs = {
  data: AnimalInput;
  id: Scalars['ID'];
};

export type MutationUpdateReviewArgs = {
  data: ReviewInput;
  id: Scalars['ID'];
};

export type MutationUpdateZooArgs = {
  data: ZooInput;
  id: Scalars['ID'];
};

export type PartialUpdateAnimalInput = {
  classis?: InputMaybe<PartialUpdateClassisInput>;
  name?: InputMaybe<Scalars['String']>;
  zoo?: InputMaybe<AnimalZooRelation>;
};

export type PartialUpdateClassisInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type PartialUpdateReviewInput = {
  isValid?: InputMaybe<Scalars['Boolean']>;
  score?: InputMaybe<Scalars['Int']>;
  zoo?: InputMaybe<ReviewZooRelation>;
};

export type PartialUpdateZooInput = {
  animals?: InputMaybe<ZooAnimalsRelation>;
  area?: InputMaybe<Area>;
  name?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Query = {
  __typename?: 'Query';
  allAnimals: AnimalPage;
  allZoos: ZooPage;
  findAnimalByID?: Maybe<Animal>;
  findReviewByID?: Maybe<Review>;
  findZooByID?: Maybe<Zoo>;
};

export type QueryAllAnimalsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

export type QueryAllZoosArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

export type QueryFindAnimalByIdArgs = {
  id: Scalars['ID'];
};

export type QueryFindReviewByIdArgs = {
  id: Scalars['ID'];
};

export type QueryFindZooByIdArgs = {
  id: Scalars['ID'];
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  isValid?: Maybe<Scalars['Boolean']>;
  score: Scalars['Int'];
  zoo: Zoo;
};

export type ReviewInput = {
  isValid?: InputMaybe<Scalars['Boolean']>;
  score: Scalars['Int'];
  zoo?: InputMaybe<ReviewZooRelation>;
};

export type ReviewZooRelation = {
  connect?: InputMaybe<Scalars['ID']>;
  create?: InputMaybe<ZooInput>;
};

export type Zoo = {
  __typename?: 'Zoo';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  animals: AnimalPage;
  area: Area;
  name: Scalars['String'];
  reviews: Array<Maybe<Review>>;
};

export type ZooAnimalsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

export type ZooAnimalsRelation = {
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  create?: InputMaybe<Array<InputMaybe<AnimalInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ZooInput = {
  animals?: InputMaybe<ZooAnimalsRelation>;
  area: Area;
  name: Scalars['String'];
  reviews: Array<InputMaybe<Scalars['ID']>>;
};

export type ZooPage = {
  __typename?: 'ZooPage';
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  data: Array<Maybe<Zoo>>;
};

export type GetAllAnimalsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllAnimalsQuery = {
  __typename?: 'Query';
  allAnimals: {
    __typename?: 'AnimalPage';
    data: Array<{
      __typename?: 'Animal';
      _id: string;
      name: string;
      classis: { __typename?: 'Classis'; name: string };
    } | null>;
  };
};

export type RegisterAnimalMutationVariables = Exact<{
  animal: AnimalInput;
}>;

export type RegisterAnimalMutation = {
  __typename?: 'Mutation';
  createAnimal: {
    __typename?: 'Animal';
    name: string;
    classis: { __typename?: 'Classis'; name: string };
  };
};

export type GetAllZoosQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllZoosQuery = {
  __typename?: 'Query';
  allZoos: {
    __typename?: 'ZooPage';
    data: Array<{
      __typename?: 'Zoo';
      _id: string;
      name: string;
      animals: {
        __typename?: 'AnimalPage';
        data: Array<{
          __typename?: 'Animal';
          _id: string;
          name: string;
          classis: { __typename?: 'Classis'; name: string };
        } | null>;
      };
    } | null>;
  };
};

export type RegisterZooMutationVariables = Exact<{
  zoo: ZooInput;
}>;

export type RegisterZooMutation = {
  __typename?: 'Mutation';
  createZoo: {
    __typename?: 'Zoo';
    name: string;
    area: Area;
    animals: {
      __typename?: 'AnimalPage';
      data: Array<{ __typename?: 'Animal'; name: string } | null>;
    };
  };
};

export const GetAllAnimalsDocument = gql`
  query GetAllAnimals {
    allAnimals {
      data {
        _id
        name
        classis {
          name
        }
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
  mutation RegisterAnimal($animal: AnimalInput!) {
    createAnimal(data: $animal) {
      name
      classis {
        name
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
    allZoos {
      data {
        _id
        name
        animals {
          data {
            _id
            name
            classis {
              name
            }
          }
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
  mutation RegisterZoo($zoo: ZooInput!) {
    createZoo(data: $zoo) {
      name
      area
      animals {
        data {
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
        name: 'Animal',
        fields: [
          {
            name: '_id',
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
            name: '_ts',
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
            name: 'classis',
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
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AnimalPage',
        fields: [
          {
            name: 'after',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'before',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'data',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'OBJECT',
                  name: 'Animal',
                  ofType: null,
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
        name: 'Mutation',
        fields: [
          {
            name: 'createAnimal',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Animal',
                ofType: null,
              },
            },
            args: [
              {
                name: 'data',
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
            name: 'createReview',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Review',
                ofType: null,
              },
            },
            args: [
              {
                name: 'data',
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
            name: 'createZoo',
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
                name: 'data',
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
            name: 'deleteAnimal',
            type: {
              kind: 'OBJECT',
              name: 'Animal',
              ofType: null,
            },
            args: [
              {
                name: 'id',
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
              name: 'Review',
              ofType: null,
            },
            args: [
              {
                name: 'id',
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
              name: 'Zoo',
              ofType: null,
            },
            args: [
              {
                name: 'id',
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
            name: 'partialUpdateAnimal',
            type: {
              kind: 'OBJECT',
              name: 'Animal',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'id',
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
            name: 'partialUpdateReview',
            type: {
              kind: 'OBJECT',
              name: 'Review',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'id',
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
            name: 'partialUpdateZoo',
            type: {
              kind: 'OBJECT',
              name: 'Zoo',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'id',
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
              name: 'Animal',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'id',
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
              name: 'Review',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'id',
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
              name: 'Zoo',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'id',
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
        name: 'Query',
        fields: [
          {
            name: 'allAnimals',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AnimalPage',
                ofType: null,
              },
            },
            args: [
              {
                name: '_cursor',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: '_size',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'allZoos',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ZooPage',
                ofType: null,
              },
            },
            args: [
              {
                name: '_cursor',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: '_size',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'findAnimalByID',
            type: {
              kind: 'OBJECT',
              name: 'Animal',
              ofType: null,
            },
            args: [
              {
                name: 'id',
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
            name: 'findReviewByID',
            type: {
              kind: 'OBJECT',
              name: 'Review',
              ofType: null,
            },
            args: [
              {
                name: 'id',
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
            name: 'findZooByID',
            type: {
              kind: 'OBJECT',
              name: 'Zoo',
              ofType: null,
            },
            args: [
              {
                name: 'id',
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
        name: 'Review',
        fields: [
          {
            name: '_id',
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
            name: '_ts',
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
            name: '_id',
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
            name: '_ts',
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
            name: 'animals',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AnimalPage',
                ofType: null,
              },
            },
            args: [
              {
                name: '_cursor',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: '_size',
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
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ZooPage',
        fields: [
          {
            name: 'after',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'before',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'data',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'OBJECT',
                  name: 'Zoo',
                  ofType: null,
                },
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
