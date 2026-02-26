import type { FastifyInstance } from "fastify";
import { z } from "zod";

const submissionSchema = z.object({
  studentId: z.string().min(2),
  internshipSlug: z.string().min(2),
  cycleId: z.string().min(2),
  githubUrl: z.string().url(),
  notes: z.string().min(10)
});

export async function taskRoutes(app: FastifyInstance) {
  app.post("/submit", async (request) => {
    const body = submissionSchema.parse(request.body);
    return {
      message: "Submission queued for mentor review",
      starsPending: 1,
      ...body
    };
  });
}
