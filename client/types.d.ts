declare namespace NodeJS {
  export interface ProcessEnv {
    AWS_COGNITO_REGION: string
    COGNITO_USER_POOL_ID: string
    COGNITO_CLIENT_ID: string
    COGNITO_CLIENT_SECRET: string
    COGNITO_DOMAIN: string
    AWS_ACCESS_KEY_ID: string
    AWS_SECRET_ACCESS_KEY: string
  }
}