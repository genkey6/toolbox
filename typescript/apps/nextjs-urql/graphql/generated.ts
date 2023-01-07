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

export type AnimalDto = {
  __typename?: 'AnimalDto';
  family: FamilyDto;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ClassisDto = {
  __typename?: 'ClassisDto';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type FamilyDto = {
  __typename?: 'FamilyDto';
  id: Scalars['ID'];
  name: Scalars['String'];
  order: OrderDto;
};

export type OrderDto = {
  __typename?: 'OrderDto';
  classis: ClassisDto;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  animal: AnimalDto;
  animals: Array<AnimalDto>;
};

export type QueryAnimalArgs = {
  animalId: Scalars['ID'];
};

export type AnimalsPage_AnimalFragment = {
  __typename?: 'AnimalDto';
  id: string;
  name: string;
};

export type AnimalsPageQueryVariables = Exact<{ [key: string]: never }>;

export type AnimalsPageQuery = {
  __typename?: 'Query';
  animals: Array<{ __typename?: 'AnimalDto'; id: string; name: string }>;
};

export const AnimalsPage_AnimalFragmentDoc = gql`
  fragment AnimalsPage_animal on AnimalDto {
    id
    name
  }
`;
export const AnimalsPageDocument = gql`
  query AnimalsPage {
    animals {
      ...AnimalsPage_animal
    }
  }
  ${AnimalsPage_AnimalFragmentDoc}
`;

export function useAnimalsPageQuery(
  options?: Omit<Urql.UseQueryArgs<AnimalsPageQueryVariables>, 'query'>
) {
  return Urql.useQuery<AnimalsPageQuery, AnimalsPageQueryVariables>({
    query: AnimalsPageDocument,
    ...options,
  });
}
import { IntrospectionQuery } from 'graphql';
export default {
  __schema: {
    queryType: {
      name: 'Query',
    },
    mutationType: null,
    subscriptionType: null,
    types: [
      {
        kind: 'OBJECT',
        name: 'AnimalDto',
        fields: [
          {
            name: 'family',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'FamilyDto',
                ofType: null,
              },
            },
            args: [],
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
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ClassisDto',
        fields: [
          {
            name: 'id',
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
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'FamilyDto',
        fields: [
          {
            name: 'id',
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
            name: 'order',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'OrderDto',
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
        name: 'OrderDto',
        fields: [
          {
            name: 'classis',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ClassisDto',
                ofType: null,
              },
            },
            args: [],
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
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        fields: [
          {
            name: 'animal',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AnimalDto',
                ofType: null,
              },
            },
            args: [
              {
                name: 'animalId',
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
            name: 'animals',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AnimalDto',
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
        kind: 'SCALAR',
        name: 'Any',
      },
    ],
    directives: [],
  },
} as unknown as IntrospectionQuery;
