import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Picadoo",
    short_name: "Picadoo",
    description: "Çocuklar için güvenli ve yaratıcı AI boyama deneyimi.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF9F5",
    theme_color: "#FF6B35",
    icons: [{
      src: "/assets/picadoo-icon.png",
      sizes: "1024x1024",
      type: "image/png",
    }],
  };
}
