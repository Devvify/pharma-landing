import { api } from "./client";
import type { LandingCategory, LandingProductsGroup } from "./types";

export async function getLandingCategories(): Promise<LandingCategory[]> {
  const res = await api.get<LandingCategory[]>(
    "/Order.RL.Module/OrderRL/GetLandingCategories",
  );
  return res.data;
}

export async function getLandingProducts(): Promise<LandingProductsGroup[]> {
  const res = await api.get<LandingProductsGroup[]>(
    "/Order.RL.Module/OrderRL/GetLandingProducts",
  );
  return res.data;
}
