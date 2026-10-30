import { ImageResponse } from "next/og";

export const alt = "RK Group of IT Solutions (RK Group) - Official Website";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #030712 0%, #0a1329 50%, #030712 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            background: "rgba(0, 102, 255, 0.15)",
            filter: "blur(120px)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(0, 102, 255, 0.1)",
            border: "1px solid rgba(0, 102, 255, 0.3)",
            padding: "8px 20px",
            borderRadius: "9999px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#0066FF",
            }}
          />
          <span
            style={{
              color: "#38bdf8",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Official Website
          </span>
        </div>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 16px 0",
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          RK Group of IT Solutions
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            margin: "0 0 32px 0",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Websites, Android Mobile Apps & Custom Software Engineered for Real Business Growth
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "12px",
          }}
        >
          <span
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "10px 24px",
              borderRadius: "12px",
              color: "#e2e8f0",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            ✓ Websites & Portals
          </span>
          <span
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "10px 24px",
              borderRadius: "12px",
              color: "#e2e8f0",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            ✓ Mobile Apps (Android/iOS)
          </span>
          <span
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "10px 24px",
              borderRadius: "12px",
              color: "#e2e8f0",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            ✓ Custom Software & ERP
          </span>
        </div>

        <div
          style={{
            marginTop: "36px",
            fontSize: "16px",
            color: "#38bdf8",
            fontWeight: 600,
          }}
        >
          rkgroupofitsolutions.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
