const path = require("path");

module.exports = {
  preset: "ts-jest",
  rootDir: path.resolve(__dirname, "../../"),
  roots: ["<rootDir>/src"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "^@/(?!assets/)(.*)$": "<rootDir>/src/$1",
    // handle @/assets alias imports, which may contain query params like @/assets/images/logo.png?as=something but not @/assets/images/logo.png
    "^@/assets/(?!images/)(.*)$": "<rootDir>/src/assets/images/$1",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)(\\?.*)?$":
      "<rootDir>/config/jest/fileMock.js",
    "\\.(css)$": "<rootDir>/config/jest/styleMock.js",
  },
  modulePaths: [],
  resetMocks: true,
  coverageReporters: ["json", "lcov", "text", "cobertura"],
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/__tests__/**/*",
    "!jest",
    "!src/**/*.d.ts",
  ],
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.js"],
};
