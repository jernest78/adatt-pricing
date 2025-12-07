
// Central place for Lemon Squeezy checkout links to avoid duplicate declarations.
export const LS_CHECKOUT = {
  solo: "https://adatt.lemonsqueezy.com/buy/a7f7106b-35fc-4725-97c1-6b12e2664703",
  team: "https://adatt.lemonsqueezy.com/buy/a7f7106b-35fc-4725-97c1-6b12e2664703",
  business: "https://adatt.lemonsqueezy.com/buy/a7f7106b-35fc-4725-97c1-6b12e2664703",
} as const;

export type PlanKey = keyof typeof LS_CHECKOUT;

export function getPlanHref(plan: PlanKey) {
  return LS_CHECKOUT[plan];
}
