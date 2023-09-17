import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.vue$": "vue3-jest",
  },
  moduleFileExtensions: ["json", "ts", "tsx", "vue"],
};

export default config;
