import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "10.239.199.195",
    "10.239.199.195:3000",
    "192.168.1.10",
    "192.168.1.10:3000",
    "localhost",
    "localhost:3000",
    "127.0.0.1",
    "127.0.0.1:3000",
    "*.local",
  ],
};

export default nextConfig;