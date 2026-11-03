import { ImageResponse } from "next/og";
import SocialImage from "../../components/SocialImage";
export const alt = "Hospitality digital marketing case study by Maruti Khapare";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <SocialImage
        label="HOTEL INDUSTRY · CASE STUDY"
        title="Known offline. Discoverable online."
        subtitle="Brand · Search · Distribution"
      />
    ),
    size,
  );
}
