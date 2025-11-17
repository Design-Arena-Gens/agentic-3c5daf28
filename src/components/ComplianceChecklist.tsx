type ComplianceChecklistProps = {
  items: string[];
};

export function ComplianceChecklist({ items }: ComplianceChecklistProps) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li key={item} className="flex space-x-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
            {index + 1}
          </span>
          <p className="text-sm leading-relaxed text-slate-700">{item}</p>
        </li>
      ))}
    </ol>
  );
}
