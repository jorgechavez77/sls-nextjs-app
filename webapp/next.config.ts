import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const nextConfig: NextConfig = {
    output: "standalone",
    assetPrefix: isDev
      ? undefined
      : "https://dev-sls-nextjs-app-static.s3.us-east-1.amazonaws.com",
  };
  return nextConfig;
};

// const nextConfig: NextConfig = {
//   output: "standalone",
//   assetPrefix: "https://dev-sls-nextjs-app-static.s3.us-east-1.amazonaws.com",
// };

export default nextConfig;
