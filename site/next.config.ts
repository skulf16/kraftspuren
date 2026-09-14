import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone-Output für das Docker-Deployment (Coolify)
  output: "standalone",
};

export default nextConfig;
