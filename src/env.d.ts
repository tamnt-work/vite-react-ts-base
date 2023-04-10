/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOCALE: string;
  readonly VITE_BASE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
