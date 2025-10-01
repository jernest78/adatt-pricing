
// Central place for Lemon Squeezy checkout links to avoid duplicate declarations.
export const LS_CHECKOUT = {
  solo: "https://adatt.lemonsqueezy.com/buy/b87ba99f-e1d4-49da-8dc4-564b4847a62e?enabled=1020091",
  team: "https://adatt.lemonsqueezy.com/buy/a3c6bc58-c99b-44fa-83b5-a4faaa24f5c5?enabled=1020094",
  business: "https://adatt.lemonsqueezy.com/buy/2e1bbaf6-a5f6-4893-b8f7-860c014b1b75?enabled=1020096",
} as const;

export type PlanKey = keyof typeof LS_CHECKOUT;

export function getPlanHref(plan: PlanKey) {
  return LS_CHECKOUT[plan];
}
