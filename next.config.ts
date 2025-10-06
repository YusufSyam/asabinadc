import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔️ Jangan hentikan build meski ada error ESLint
  },
};

export default nextConfig;
