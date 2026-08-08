import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { identity } from "@/content";

export const alt = `${identity.name}. ${identity.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Rendered at build time; mirrors the site's palette (zinc-50 ground,
// near-black type, the single dollar-green accent) and Geist type.
export default async function Image() {
  const fontDir = path.join(
    process.cwd(),
    "node_modules",
    "geist",
    "dist",
    "fonts",
    "geist-sans",
  );
  const [semiBold, regular] = await Promise.all([
    readFile(path.join(fontDir, "Geist-SemiBold.ttf")),
    readFile(path.join(fontDir, "Geist-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#fafafa",
          padding: "0 96px",
        }}
      >
        <div
          style={{
            width: 64,
            height: 6,
            backgroundColor: "#2f6b3e",
            marginBottom: 48,
          }}
        />
        <div
          style={{
            fontFamily: "Geist SemiBold",
            fontSize: 84,
            letterSpacing: "-0.03em",
            color: "#18181b",
            lineHeight: 1,
          }}
        >
          {identity.name}
        </div>
        <div
          style={{
            fontFamily: "Geist Regular",
            fontSize: 34,
            color: "#3f3f46",
            lineHeight: 1.45,
            maxWidth: 940,
            marginTop: 36,
          }}
        >
          {identity.tagline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist SemiBold", data: semiBold, weight: 600, style: "normal" },
        { name: "Geist Regular", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
