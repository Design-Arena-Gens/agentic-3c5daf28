type LogisticsPartner = {
  name: string;
  phone: string;
  coverage: string;
  leadTime: string;
  notes: string;
};

type LogisticsListProps = {
  partners: LogisticsPartner[];
};

export function LogisticsList({ partners }: LogisticsListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {partners.map((partner) => (
        <article
          key={partner.name}
          className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{partner.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{partner.coverage}</p>
            <p className="mt-3 text-sm text-slate-700">{partner.notes}</p>
          </div>
          <dl className="mt-4 space-y-1 text-sm text-slate-600">
            <div className="flex justify-between">
              <dt className="font-medium text-slate-500">Lead time</dt>
              <dd>{partner.leadTime}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-slate-500">Phone</dt>
              <dd>
                <a href={`tel:${partner.phone.replace(/[^\d+]/g, "")}`} className="underline">
                  {partner.phone}
                </a>
              </dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
