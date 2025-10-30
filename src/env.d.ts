// Project-specific augmentation for Vite's import.meta.env
// Place in src/ so TypeScript picks it up automatically

interface ImportMetaEnv {
  VITE_SUPABASE_URL: string;
  VITE_SUPABASE_ANON_KEY: string;
  VITE_ANDROID_DOWNLOAD_URL?: string;

  // Basic Vite built-ins (kept in case TS expects them elsewhere)
  readonly BASE_URL: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
