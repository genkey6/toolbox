import { PropsWithChildren } from 'react';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:8080/graphql',
  exchanges: [],
});

export function UrqlProvider({ children }: PropsWithChildren<unknown>) {
  return <Provider value={client}>{children}</Provider>;
}
