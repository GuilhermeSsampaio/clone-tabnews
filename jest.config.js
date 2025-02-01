const nextJest = require("next/jest");
const dotenv = require("dotenv");

const createJestconfig = nextJest();
dotenv.config({ path: ".env.development" });
const jestConfig = createJestconfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
