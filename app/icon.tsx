import { ImageResponse } from "next/og";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 256,
          height: 256,
          borderRadius: "50%",
          background: "linear-gradient(145deg, #78350f 0%, #92400e 55%, #b45309 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer subtle gold ring */}
        <div
          style={{
            width: 228,
            height: 228,
            borderRadius: "50%",
            border: "1.5px solid rgba(252, 211, 77, 0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Inner ring */}
          <div
            style={{
              width: 208,
              height: 208,
              borderRadius: "50%",
              border: "4px solid rgba(252, 211, 77, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "0px",
            }}
          >
            {/* Monogram */}
            <span
              style={{
                color: "#fef3c7",
                fontSize: 108,
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginTop: "8px",
              }}
            >
              A
            </span>
            {/* Thin gold rule below letter */}
            <div
              style={{
                width: 48,
                height: 1.5,
                background: "rgba(252, 211, 77, 0.6)",
                marginTop: "6px",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { width: 256, height: 256 }
  );
}
