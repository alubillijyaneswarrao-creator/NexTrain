import type { FastifyInstance } from "fastify";
import { authRoutes } from "../auth/routes.js";
import { internshipRoutes } from "../internships/routes.js";
import { dashboardRoutes } from "../users/routes.js";
import { couponRoutes } from "../coupons/routes.js";
import { interviewRoutes } from "../interviews/routes.js";
import { paymentRoutes } from "../payments/routes.js";
import { taskRoutes } from "../tasks/routes.js";
import { certificateRoutes } from "../certificates/routes.js";
import { chatbotRoutes } from "../chatbot/routes.js";

export function registerRoutes(app: FastifyInstance) {
  app.get("/health", async () => ({ ok: true }));
  app.register(authRoutes, { prefix: "/auth" });
  app.register(internshipRoutes, { prefix: "/internships" });
  app.register(dashboardRoutes, { prefix: "/dashboard" });
  app.register(couponRoutes, { prefix: "/coupons" });
  app.register(interviewRoutes, { prefix: "/interviews" });
  app.register(paymentRoutes, { prefix: "/payments" });
  app.register(taskRoutes, { prefix: "/tasks" });
  app.register(certificateRoutes, { prefix: "/certificates" });
  app.register(chatbotRoutes, { prefix: "/chatbot" });
}
