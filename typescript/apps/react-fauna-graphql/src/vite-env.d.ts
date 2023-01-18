/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FAUNA_GRAPHQL_ENTRY_POINT: string;
  readonly VITE_FAUNA_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
