import { IPhone } from "@/src/types/iphone";

export const getIPhones = async (): Promise<IPhone[]> => {
  const res = await fetch("http://localhost:3000/iphones", {
    cache: "no-store" // Next.js üçün
  });

  if (!res.ok) {
    throw new Error("Failed to fetch iphones");
  }

  return res.json();
};
