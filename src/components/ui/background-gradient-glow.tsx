import { cn } from "@/lib/utils";
import { useState } from "react";

/**
 * Decorative, full-bleed aurora background.
 *
 * The local count state is retained from the supplied component. It is not
 * surfaced in the UI, so this component currently accepts no props and has no
 * external state-management requirements.
 */
export const Component = () => {
  const [count] = useState(0);

  return (
    <div
      className={cn("fixed", "inset-0")}
      aria-hidden="true"
      data-count={count}
      style={{
        zIndex: -1,
        background: `
          radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
          radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
          radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
          radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
          linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
        `,
      }}
    />
  );
};
