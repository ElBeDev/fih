import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3d93b",
        }}
      >
        <svg width="104" height="104" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="14" width="5" height="7" rx="1" fill="#12151A" />
          <rect x="9.5" y="9" width="5" height="12" rx="1" fill="#12151A" />
          <rect x="16" y="3" width="5" height="18" rx="1" fill="#12151A" />
        </svg>
      </div>
    ),
    size,
  );
}
