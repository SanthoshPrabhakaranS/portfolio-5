type Props = {
  as?: "h1" | "h2";
  top: string;
  bottom: string;
};

// Two-tone heading whose lines slide up when the parent <Reveal> comes into view
export default function Heading({ as: Tag = "h2", top, bottom }: Props) {
  return (
    <Tag className="big">
      <span className="line">
        <span>{top}</span>
      </span>
      <span className="line dim">
        <span>{bottom}</span>
      </span>
    </Tag>
  );
}
