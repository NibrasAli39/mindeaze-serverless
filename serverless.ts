import type { AWS } from "@serverless/typescript";
import provider from "./provider";

const serverlessConfig: AWS = {
  service: "mindeaze",
  frameworkVersion: "3",
  provider,
};

module.exports = serverlessConfig;
