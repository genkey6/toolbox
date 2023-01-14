# apollo-supergraph-gateway
- An apollo federated supergraph implementation with `@apollo/gateway` package.
- https://www.apollographql.com/docs/apollo-server/using-federation/api/apollo-gateway

# Generate supergraph schema
## Install Rover
see: https://www.apollographql.com/docs/rover/getting-started/

## Run command
see: https://www.apollographql.com/docs/rover/commands/supergraphs#composing-a-supergraph-schema

```bash
$ rover supergraph compose --config ./supergraph.yaml > ./supergraph.graphqls
```
