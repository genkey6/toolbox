import { PropsWithChildren } from 'react';
import {
  cacheExchange,
  CombinedError,
  createClient,
  dedupExchange,
  errorExchange,
  Exchange,
  fetchExchange,
  Operation,
  Provider,
} from 'urql';
import { fromPromise, fromValue, map, mergeMap, pipe } from 'wonka';
import { useSnackbar } from 'notistack';

export function UrqlProvider({ children }: PropsWithChildren<unknown>) {
  const { enqueueSnackbar } = useSnackbar();

  const fetchOptionsExchange =
    (fn: any): Exchange =>
    ({ forward }) =>
    (ops$) => {
      return pipe(
        ops$,
        mergeMap((operation: Operation) => {
          const result = fn(operation.context.fetchOptions);
          return pipe(
            (typeof result.then === 'function'
              ? fromPromise(result)
              : fromValue(result)) as any,
            map((fetchOptions: RequestInit | (() => RequestInit)) => ({
              ...operation,
              context: { ...operation.context, fetchOptions },
            }))
          );
        }),
        forward
      );
    };

  const defaultExchanges = [
    dedupExchange,
    cacheExchange,
    errorExchange({
      onError: (error: CombinedError, _: Operation) => {
        if (error.graphQLErrors) {
          error.graphQLErrors.forEach((e) => {
            if (e.extensions?.code === 'BAD_USER_INPUT') {
              const response = e.extensions?.response as any;
              enqueueSnackbar(
                Array.isArray(response?.message)
                  ? response?.message.join(', ')
                  : response?.message || e.message,
                {
                  variant: 'warning',
                }
              );
            } else {
              enqueueSnackbar(e.message, {
                variant: 'error',
              });
            }
          });
        }
      },
    }),
    fetchOptionsExchange(async (fetchOptions: any) => {
      return Promise.resolve({
        ...fetchOptions,
      });
    }),
    fetchExchange,
  ];

  const client = createClient({
    url: 'http://localhost:4200/api/graphql',
    exchanges: defaultExchanges,
    requestPolicy: 'cache-and-network',
  });

  return <Provider value={client}>{children}</Provider>;
}
