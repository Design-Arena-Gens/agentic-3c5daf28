import { ComplianceChecklist } from "@/components/ComplianceChecklist";
import { LogisticsList } from "@/components/LogisticsList";
import { MetricCard } from "@/components/MetricCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SupplierTable } from "@/components/SupplierTable";
import { complianceChecklist, logisticsPartners, suppliers } from "@/data/suppliers";
import { formatNumber } from "@/utils/number";

const TARGET_VOLUME = 5000;

const lowestMinOrder = suppliers.reduce((min, supplier) => Math.min(min, supplier.minOrderLitres), Infinity);
const bestIndicativeRate = suppliers.reduce(
  (min, supplier) => Math.min(min, supplier.pricePerLitrePKR.min),
  Infinity
);
const recentVerification = suppliers.reduce((latest, supplier) => {
  return new Date(supplier.lastVerified) > new Date(latest) ? supplier.lastVerified : latest;
}, suppliers[0]?.lastVerified ?? "2024-01-01");

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-12">
      <section className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-100">
        <p className="text-sm uppercase tracking-[0.3em] text-brand">Wholesale Procurement Plan</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Secure 5,000 litres of kerosene in Rawalpindi with vetted depot and logistics partners.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Use this curated supplier short-list, compliance checklist, and logistics references to fast-track a bulk
          purchase while staying aligned with Pakistani petroleum handling regulations.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <MetricCard
            label="Target volume"
            value={`${formatNumber(TARGET_VOLUME)} L`}
            description="Plan tanker loading and storage capacity around this requirement."
          />
          <MetricCard
            label="Indicative low rate"
            value={`PKR ${formatNumber(bestIndicativeRate)}/L`}
            description="Based on current wholesale quotes before taxes and transport."
          />
          <MetricCard
            label="Latest verification"
            value={recentVerification}
            description="Supplier intel refreshed within the last two weeks."
          />
        </div>
        <div className="mt-10 rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-sm text-yellow-900">
          <p className="font-semibold">Important:</p>
          <p className="mt-2">
            Quote ranges fluctuate with OGRA notifications. Request written confirmation on letterhead and ensure your
            storage site meets Civil Defence and PESO standards before scheduling delivery.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Primary Options" id="suppliers">
          Vetted kerosene wholesalers and depot contacts
        </SectionHeading>
        <p className="mb-6 max-w-3xl text-sm text-slate-600">
          All contacts are within 40 km of central Rawalpindi. Bring a company introduction letter, NTN, and payment
          proof when visiting depots. Most depots operate 9:00–17:00, Sunday through Thursday.
        </p>
        <SupplierTable suppliers={suppliers} />
        <p className="mt-4 text-xs text-slate-500">
          Rates exclude provincial sales tax and tanker freight. Minimum order refers to a single loading slot.
        </p>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Compliance" id="compliance">
          Pre-purchase checklist before confirming pickup
        </SectionHeading>
        <p className="mb-6 max-w-3xl text-sm text-slate-600">
          Work through the essentials below to avoid depot rejection or safety violations. Keep documents in hard copy
          for on-site verification.
        </p>
        <ComplianceChecklist items={complianceChecklist} />
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Transport" id="logistics">
          Trusted tanker logistics to move 5,000 litres safely
        </SectionHeading>
        <p className="mb-6 max-w-3xl text-sm text-slate-600">
          These transporters are already vetted by bulk depots in the twin cities. Confirm tanker capacity, insurance,
          and calibrations before dispatch.
        </p>
        <LogisticsList partners={logisticsPartners} />
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Next Steps" id="actions">
          Recommended course of action
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">1. Shortlist suppliers</h3>
            <p className="mt-2 text-sm text-slate-600">
              Call Attock and PSO depots to confirm current OGRA-linked prices and slot availability, then lock in a
              tentative loading window. Keep Hascol as backup if minimum order flexibility is needed.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">2. Confirm compliance paperwork</h3>
            <p className="mt-2 text-sm text-slate-600">
              Compile NTN, GST certificate, storage NOC, and MSDS binder. Arrange fire safety inspection to document
              readiness for audit purposes.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">3. Book logistics</h3>
            <p className="mt-2 text-sm text-slate-600">
              Schedule a 9,000–12,000L tanker with NLC or FleetXpert, align arrival with depot time slots, and prepare a
              bank pay order if required by the supplier.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">4. Quality assurance</h3>
            <p className="mt-2 text-sm text-slate-600">
              Request a density and flash point report from the supplier and retain tanker seal numbers. On unloading,
              sample the product and log readings in a receipt book.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
