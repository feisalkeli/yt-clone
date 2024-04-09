/// <reference types="vite/client" />

interface ProcessEnv {
  VITE_RAPIDAPI_KEY: string;
}
interface ImportMetaEnv {
  readonly env: ImportMetaEnv;
}
