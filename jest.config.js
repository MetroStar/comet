module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$":
      "jest-transform-stub",
  },
  moduleNameMapper: {
    "^.+.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/*.stories.tsx",
    "!**/index.ts",
    "!**/src/components/data-visualization/**",
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
