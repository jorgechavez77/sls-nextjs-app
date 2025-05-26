import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const ASSET_PREFIX = process.env.ASSET_PREFIX;

const nextConfig = (phase: string) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const nextConfig: NextConfig = {
    output: "standalone",
    assetPrefix: isDev ? undefined : ASSET_PREFIX,
  };
  return nextConfig;
};

export default nextConfig;
