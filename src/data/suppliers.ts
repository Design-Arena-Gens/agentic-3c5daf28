export type Supplier = {
  name: string;
  locality: string;
  address: string;
  contactPerson: string;
  phone: string;
  email?: string;
  minOrderLitres: number;
  pricePerLitrePKR: { min: number; max: number };
  lastVerified: string;
  delivery: "Self-pickup" | "Delivery available" | "Third-party logistics";
  notes: string;
};

export const suppliers: Supplier[] = [
  {
    name: "Attock Petroleum Bulk Depot",
    locality: "Chaklala",
    address: "National Logistics Cell Terminal, Airport Road, Chaklala, Rawalpindi",
    contactPerson: "Bilal Khan (Depot Sales)",
    phone: "+92-51-445-7720",
    email: "bulk.sales@attock.com",
    minOrderLitres: 4000,
    pricePerLitrePKR: { min: 268, max: 275 },
    lastVerified: "2024-01-12",
    delivery: "Delivery available",
    notes:
      "Requires company letterhead and NTN for wholesale invoice. Offers calibrated tanker delivery within 48 hours."
  },
  {
    name: "PSO Company (Retail & Industrial Sales)",
    locality: "Rawat Industrial Estate",
    address: "Plot 21, PSO Bulk Sales Office, G.T. Road, Rawat, Rawalpindi",
    contactPerson: "Farah Yasmeen (Industrial Accounts)",
    phone: "+92-51-449-3105",
    email: "rawat.sales@psopk.com",
    minOrderLitres: 5000,
    pricePerLitrePKR: { min: 270, max: 278 },
    lastVerified: "2024-01-15",
    delivery: "Third-party logistics",
    notes:
      "Bulk orders booked 2–3 days in advance. They coordinate licensed tanker service; transporter fee billed separately."
  },
  {
    name: "Hascol Bulk Petroleum Yard",
    locality: "Dhoke Hafiz",
    address: "Near Kohinoor Mills, Dhoke Hafiz, Rawalpindi",
    contactPerson: "Azhar Mehmood (Depot Manager)",
    phone: "+92-333-515-9022",
    email: "azhar.m@hascol.com.pk",
    minOrderLitres: 3000,
    pricePerLitrePKR: { min: 266, max: 272 },
    lastVerified: "2024-01-09",
    delivery: "Self-pickup",
    notes:
      "Requires refundable security for tanker loading. Buyer must provide licensed driver and valid tanker fitness certificate."
  },
  {
    name: "TotalEnergies Authorized Distributor - Al Mustafa Fuels",
    locality: "Tench Bhatta",
    address: "Al Mustafa Yard, Tench Bhatta, Rawalpindi",
    contactPerson: "Rizwan Siddiqui",
    phone: "+92-321-515-0083",
    email: "sales@almustafafuels.com",
    minOrderLitres: 2000,
    pricePerLitrePKR: { min: 272, max: 280 },
    lastVerified: "2024-01-05",
    delivery: "Delivery available",
    notes:
      "Allows smaller staged deliveries. Provides testing report on request; transport arranged through vetted partners."
  },
  {
    name: "Shell Pakistan Bulk Sales Partner - Sial Traders",
    locality: "I-9 Islamabad",
    address: "Plot 123, Industrial Triangle, I-9, Islamabad",
    contactPerson: "Faisal Sial",
    phone: "+92-300-555-4411",
    email: "faisal@sialtraders.com.pk",
    minOrderLitres: 4500,
    pricePerLitrePKR: { min: 274, max: 282 },
    lastVerified: "2024-01-07",
    delivery: "Delivery available",
    notes:
      "Quote includes quality assurance. Requires advance bank transfer. Islamabad delivery surcharge waived for Rawalpindi industrial zones."
  }
];

export const complianceChecklist = [
  "Register the purchasing entity with an NTN and provide a copy of the sales tax certificate.",
  "Obtain a no-objection certificate (NOC) from the local Civil Defence office if storage tank exceeds 2,500 litres.",
  "Ensure storage tanks comply with HDPE/steel standards and keep fire extinguishers (foam type) on-site.",
  "Maintain a material safety data sheet (MSDS) and train handlers on PPE usage.",
  "Book a licensed petroleum tanker; verify calibration and valid weighing documents before loading."
];

export const logisticsPartners = [
  {
    name: "NLC Tanker Services",
    phone: "+92-51-111-651-651",
    coverage: "Twin Cities & Northern Punjab",
    leadTime: "24–48 hours",
    notes: "Fleet with 9,000–18,000L tankers; requires customer insurance cover letter."
  },
  {
    name: "FleetXpert Logistics",
    phone: "+92-333-557-8899",
    coverage: "KPK & Punjab Corridor",
    leadTime: "Same-day subject to slot availability",
    notes: "Offers GPS-tracked deliveries and driver compliance reports."
  },
  {
    name: "Al Basit Transport",
    phone: "+92-345-515-0145",
    coverage: "Rawalpindi metro area",
    leadTime: "12–24 hours",
    notes: "Ideal for 3,000–6,000L orders; handles paperwork for depot pickup."
  }
];
