import type { FastifyInstance } from "fastify";
import { z } from "zod";

const applyCouponSchema = z.object({ code: z.string().min(4), baseAmount: z.number().positive() });

export async function couponRoutes(app: FastifyInstance) {
  app.post("/apply", async (request) => {
    const { code, baseAmount } = applyCouponSchema.parse(request.body);
    const discount = code.toUpperCase() === "NEXTRAIN25" ? 0.25 : 0.05;
    return {
      code,
      discountedAmount: Math.round(baseAmount * (1 - discount)),
      refundPlan: "Up to 60-70% cycle-based refund after mentor approval"
    };
  });
}
