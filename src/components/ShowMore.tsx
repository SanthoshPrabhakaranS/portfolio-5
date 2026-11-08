"use client";

import { Children, useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  initial: number;
  className?: string;
  children: React.ReactNode;
};

// Shows the first `initial` children, with a toggle to expand the rest in place
export default function ShowMore({ initial, className, children }: Props) {
  const [open, setOpen] = useState(false);
  const items = Children.toArray(children);
  const hidden = items.length - initial;

  return (
    <>
      <div className={className}>
        {items.slice(0, initial)}
        {open &&
          items.slice(initial).map((child, i) => (
            <div className="expand-in" style={{ "--i": i } as React.CSSProperties} key={i}>
              {child}
            </div>
          ))}
      </div>
      {hidden > 0 && (
        <button type="button" className="more-btn" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Show less" : `Show ${hidden} more`}
          <ChevronDown size={18} className={open ? "flip" : undefined} />
        </button>
      )}
    </>
  );
}
