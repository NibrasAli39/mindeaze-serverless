import { AWS } from "@serverless/typescript";

const provider: AWS["provider"] = {
  name: "aws",
  runtime: "nodejs20.x",
  region: "us-east-1",
};

export default provider;
