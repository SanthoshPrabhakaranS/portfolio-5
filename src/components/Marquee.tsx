export default function Marquee({ items }: { items: string[] }) {
  // Rendered twice so the track can loop seamlessly at -50%
  const track = [...items, ...items];
  return (
    <div className="marquee" aria-label={items.join(", ")}>
      <div className="marquee-track" aria-hidden="true">
        {track.map((item, i) => (
          <span key={i}>
            {item}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
