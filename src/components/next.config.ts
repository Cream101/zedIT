import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets you open the dev server from your phone on the same Wi-Fi.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
};

export default nextConfig;
