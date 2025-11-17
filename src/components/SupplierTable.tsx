import type { Supplier } from "@/data/suppliers";
import { formatNumber } from "@/utils/number";

type SupplierTableProps = {
  suppliers: Supplier[];
};

export function SupplierTable({ suppliers }: SupplierTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50 text-left font-semibold uppercase tracking-wide text-slate-600">
          <tr>
            <th scope="col" className="px-4 py-3">
              Supplier
            </th>
            <th scope="col" className="px-4 py-3">
              Contact
            </th>
            <th scope="col" className="px-4 py-3">
              Min Order (L)
            </th>
            <th scope="col" className="px-4 py-3">
              Indicative Rate (PKR/L)
            </th>
            <th scope="col" className="px-4 py-3">
              Delivery
            </th>
            <th scope="col" className="px-4 py-3">
              Notes
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {suppliers.map((supplier) => (
            <tr key={supplier.name} className="align-top">
              <td className="px-4 py-4 font-medium text-slate-900">
                <div>{supplier.name}</div>
                <div className="mt-1 text-xs text-slate-500">
                  {supplier.locality} · {supplier.address}
                </div>
                <div className="mt-1 text-xs text-slate-500">Last verified: {supplier.lastVerified}</div>
              </td>
              <td className="px-4 py-4 text-slate-700">
                <div>{supplier.contactPerson}</div>
                <div className="text-xs text-slate-500">{supplier.phone}</div>
                {supplier.email ? (
                  <div className="text-xs text-slate-500">
                    <a href={`mailto:${supplier.email}`} className="underline">
                      {supplier.email}
                    </a>
                  </div>
                ) : null}
              </td>
              <td className="px-4 py-4 text-slate-700">{formatNumber(supplier.minOrderLitres)}</td>
              <td className="px-4 py-4 text-slate-700">
                {formatNumber(supplier.pricePerLitrePKR.min)} – {formatNumber(supplier.pricePerLitrePKR.max)}
              </td>
              <td className="px-4 py-4 text-slate-700">{supplier.delivery}</td>
              <td className="px-4 py-4 text-slate-600">{supplier.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
