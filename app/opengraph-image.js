import { ImageResponse } from "next/og";
import SocialImage from "./components/SocialImage";
export const alt = "Maruti Khapare — SEO and growth marketing portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <SocialImage
        label="SEO · PAID MEDIA · GROWTH"
        title="Turn strategy into growth."
        subtitle="Portfolio & case studies"
      />
    ),
    size,
  );
}
