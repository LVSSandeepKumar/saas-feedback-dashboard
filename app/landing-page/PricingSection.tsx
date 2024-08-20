import PricingCard from "./PricingCard";

export type PricingPlan = {
  title: string;
  price: number;
  description: string;
  url: string;
  isPopular: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    title: "Free",
    price: 0,
    description: "For small teams just getting started",
    url: "/dashboard",
    isPopular: false,
    features: [
      "5 projects",
      "Unlimited users",
      "2GB storage",
      "Priority support",
    ],
  },
  {
    title: "Monthly",
    price: 0.49,
    description: "For growing teams",
    url: "/payments/subscribe?plan=monthly",
    isPopular: true,
    features: [
      "Unlimited projects",
      "Unlimited users",
      "5GB storage",
      "Priority support",
    ],
  },
  {
    title: "Yearly",
    price: 3.99,
    description: "Upgrade to save more!",
    url: "/payments/subscribe?plan=yearly",
    isPopular: false,
    features: [
      "Unlimited projects",
      "Unlimited users",
      "50GB storage",
      "24/7 support",
    ],
  },
];

const PricingSection = () => {
  return (
    <div className="text-center">
      <h1 className="capitalize text-3xl">Pricing</h1>
      <h2 className="font-extrabold mb-8 pt-3 text-2xl">
        Flexible Pricing to fit your needs
      </h2>

      <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan}/>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
