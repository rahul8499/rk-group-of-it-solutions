import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RK Group of IT Solutions (RK Group)",
    short_name: "RK Group",
    description:
      "RK Group of IT Solutions builds professional websites, Android mobile applications, billing software, and custom business management software.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#0066FF",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/brand-solutions-logo.png",
        sizes: "987x269",
        type: "image/png",
      },
    ],
  };
}
