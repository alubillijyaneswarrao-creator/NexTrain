import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { enrollmentPlans } from "../../data/mock-db.js";

const checkoutSchema = z.object({
  studentId: z.string().min(2),
  baseAmount: z.number().positive(),
  couponCode: z.string().optional()
});

export async function paymentRoutes(app: FastifyInstance) {
  app.post("/checkout", async (request) => {
    const body = checkoutSchema.parse(request.body);
    const planned = enrollmentPlans.find((plan) => plan.baseAmount === body.baseAmount && plan.couponCode === body.couponCode);

    if (!planned) {
      return {
        paymentProvider: "razorpay_or_stripe",
        payableAmount: body.baseAmount,
        message: "No optimized coupon plan matched. Use default checkout."
      };
    }

    return {
      paymentProvider: "razorpay_or_stripe",
      payableAmount: planned.payableAmount,
      refundCap: planned.totalRefundCap,
      milestones: planned.refundMilestones
    };
  });
}
