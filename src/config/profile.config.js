"use strict";

const dev = {
  app: {
    port: process.env.DEV_APP_PORT,
  },
  db: {
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    name: process.env.DEV_DB_NAME,
  },
  whiteList: {
    feUrl: process.env.FE_URL,
  },
  bcrypt: {
    saltRound: process.env.SALT_ROUND,
  },
};

const test = {
  app: {
    port: process.env.TEST_APP_PORT,
  },
  db: {
    host: process.env.TEST_DB_HOST,
    port: process.env.TEST_DB_PORT,
    name: process.env.TEST_DB_NAME,
  },
  whiteList: {
    feUrl: process.env.FE_URL,
  },
  bcrypt: {
    saltRound: process.env.SALT_ROUND,
  },
};

// add more profile if you has more env

const config = { dev, test };
export const env = process.env.PROFILE || "dev";

export default config[env];
