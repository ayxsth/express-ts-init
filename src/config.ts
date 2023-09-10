import 'dotenv/config';

const config = {
  app: {
    name: process.env.APP_NAME ?? 'nxt-reads',
    version: process.env.APP_VERSION ?? '1.0.0',
    port: process.env.APP_PORT ?? 3000
  },
  dbConnectionString: process.env.MONGODB_CONNECTION_STRING as string
};

export default config;
