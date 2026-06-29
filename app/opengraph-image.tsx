import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Magikid — Studio de production jeunesse en marque blanche";
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
          background: "#1c1410",
          padding: "72px",
          color: "#f7efe1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 3, color: "#f59e0b" }}>
          STUDIO DE PRODUCTION JEUNESSE · AUTOMATISÉ PAR IA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.05, maxWidth: 1010 }}>
            Des contes pour enfants, finis et publiés chaque jour.
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#c7b8a6", marginTop: 26 }}>
            À votre marque. Dans vos langues.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 30,
            color: "#f59e0b",
          }}
        >
          <div style={{ display: "flex" }}>magikid.online</div>
          <div style={{ display: "flex", color: "#c2410c", fontWeight: 700 }}>Magikid</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
