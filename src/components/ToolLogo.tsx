import type { SimpleIcon } from "simple-icons";

// Brand colours that are too dark to see on the dark tile are shown in white
function visibleColor(hex: string) {
  const n = parseInt(hex, 16);
  const luminance = (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 0xff) + 0.114 * (n & 0xff)) / 255;
  return luminance < 0.3 ? "#ffffff" : `#${hex}`;
}

export default function ToolLogo({ logo }: { logo: SimpleIcon }) {
  return (
    <div className="ic">
      <svg viewBox="0 0 24 24" fill={visibleColor(logo.hex)} role="img" aria-label={logo.title}>
        <path d={logo.path} />
      </svg>
    </div>
  );
}
