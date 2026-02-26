import type { FastifyInstance } from "fastify";
import { z } from "zod";

const chatbotQuerySchema = z.object({
  role: z.enum(["student", "mentor", "admin"]),
  question: z.string().min(3)
});

export async function chatbotRoutes(app: FastifyInstance) {
  app.post("/ask", async (request) => {
    const body = chatbotQuerySchema.parse(request.body);
    return {
      answer:
        "This is a starter chatbot response. Connect an LLM API key and retrieval layer to answer platform FAQs accurately.",
      recommendedNextAction:
        body.role === "student" ? "Open your dashboard and complete current cycle task." : "Open assigned queue and review pending items."
    };
  });
}
