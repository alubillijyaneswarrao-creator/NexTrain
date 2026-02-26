import type { FastifyInstance } from "fastify";
import { z } from "zod";

const otpRequestSchema = z.object({ phoneOrEmail: z.string().min(4), role: z.enum(["student", "mentor", "admin"]) });
const otpVerifySchema = z.object({ phoneOrEmail: z.string(), otp: z.string().length(6) });

export async function authRoutes(app: FastifyInstance) {
  app.post("/otp/request", async (request) => {
    const payload = otpRequestSchema.parse(request.body);
    return { message: "OTP issued", payload };
  });

  app.post("/otp/verify", async (request) => {
    const payload = otpVerifySchema.parse(request.body);
    return { message: "Login successful", token: `mock-jwt-for-${payload.phoneOrEmail}` };
  });
}
