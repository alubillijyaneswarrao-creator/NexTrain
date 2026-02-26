import type { FastifyInstance } from "fastify";

export async function interviewRoutes(app: FastifyInstance) {
  app.get("/layout", async () => ({
    leftPanel: "Coding question + test cases",
    topRightPanel: "Video call widget",
    bottomPanel: "Output + AI scoring + MCQ section"
  }));

  app.post("/invite-email", async (request) => {
    const body = request.body as { name?: string; email?: string };
    const name = body.name ?? "Candidate";
    return {
      to: body.email,
      subject: "NexTrain Selection Interaction Details",
      html: `Hi ${name},<br/>Thanks for enrolling. Your one-on-one selection meeting includes 2 coding questions + MCQ and a live interview discussion.`
    };
  });
}
