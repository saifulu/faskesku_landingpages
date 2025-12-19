import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Menghasilkan situs statis (folder `out/`) agar mudah diupload ke aaPanel
  output: "export",
  // Jika menggunakan `next/image`, nonaktifkan optimizer agar kompatibel dengan export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
