# react-dgraph

A sample application implementation with React + Dgraph

# Prerequisite
- Run Dgraph with Docker following https://dgraph.io/docs/graphql/quick-start/
- Upload the schema definition with the command below
  - `curl -X POST localhost:8080/admin/schema --data-binary '@apps/react-dgraph/src/graphql/schema.upload.graphql'`
