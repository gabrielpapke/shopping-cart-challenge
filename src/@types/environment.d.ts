declare global {
  namespace NodeJS {
    interface ProcessEnv extends ProcessEnv {
      NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string
      STRIPE_SECRET_KEY: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }