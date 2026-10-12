declare module "@supabase/ssr" {
  export function createBrowserClient<T = any>(
    supabaseUrl: string,
    supabaseKey: string,
    options?: any
  ): any;

  export function createServerClient<T = any>(
    supabaseUrl: string,
    supabaseKey: string,
    options: any
  ): any;

  export type CookieOptions = {
    name?: string;
    value?: string;
    maxAge?: number;
    domain?: string;
    path?: string;
    expires?: Date;
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: boolean | "lax" | "strict" | "none";
  };
}
