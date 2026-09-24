import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#16302b",
          color: "#eef0e7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "#f3d93b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="14" width="5" height="7" rx="1" fill="#12151A" />
              <rect x="9.5" y="9" width="5" height="12" rx="1" fill="#12151A" />
              <rect x="16" y="3" width="5" height="18" rx="1" fill="#12151A" />
            </svg>
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.5 }}>
            {SITE.name}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 980,
          }}
        >
          Building, acquiring, and managing businesses for lasting value.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#b9d63a" }}>
          fallstoneholdingsintl.com
        </div>
      </div>
    ),
    size,
  );
}
