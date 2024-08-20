"use client";
import { Check } from "lucide-react";
import { PricingPlan } from "./PricingSection";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular,
  url,
}: PricingPlan) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(url);
  };

  return (
    <div className="border flex flex-col justify-between bg-white/20 rounded-lg h-full p-6 hover:shadow-md text-left relative">
      {isPopular && (
        <div className="absolute top-0 right-0 bg-gray-900 text-white px-2 py-2 rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      <div>
        <div className="inline-flex items-end">
          <h1 className="font-extrabold text-3xl">${price}</h1>
        </div>
        <h2 className="font-bold text-xl my-2">{title}</h2>
        <p>{description}</p>
        <div className="flex-grow border-t border-gray-400 opacity-25 my-3"></div>
        <ul>
          {features.map((feature, index) => (
            <li
              className="flex items-center text-gray-700 my-2 gap-2"
              key={index}
            >
              <div className="rounded-full flex items-center justify-center bg-gray-900 size-4 mr-2">
                <Check
                  className="text-white font-bold"
                  width={10}
                  height={10}
                />
              </div>
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Button onClick={handleClick} className="py-2 mt-3 w-full">
          Select Plan
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
