import type { PropsWithChildren } from "react";

type SectionHeadingProps = PropsWithChildren<{
  eyebrow?: string;
  id?: string;
}>;

export function SectionHeading({ eyebrow, children, id }: SectionHeadingProps) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-brand">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="mt-2 text-2xl font-semibold text-slate-900">
        {children}
      </h2>
    </div>
  );
}
