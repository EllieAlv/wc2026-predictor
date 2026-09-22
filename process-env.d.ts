declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_GATEWAY_URL: string;
      S3_BUCKET_NAME: string;
      NEXT_PUBLIC_S3_BUCKET_URL: string;
    }
  }
}

export {};