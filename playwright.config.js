// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  //here config is one variable which is holding all your informations required to run your tests
  testDir: "./tests",
  timeout: 40 * 1000, //this is global timeout
  expect: {
    timeout: 40 * 1000, // specific timeout for assertion
  },

  reporter: "html",
  use: {
    browserName: "chromium",
  },
};

module.exports = config; //exportng the object
