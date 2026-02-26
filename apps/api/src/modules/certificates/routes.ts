import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { certificates } from "../../data/mock-db.js";

const issueSchema = z.object({
  studentName: z.string().min(2),
  track: z.string().min(2)
});

export async function certificateRoutes(app: FastifyInstance) {
  app.post("/issue", async (request) => {
    const body = issueSchema.parse(request.body);
    const certificateId = `NXT-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
    const record = {
      certificateId,
      studentName: body.studentName,
      track: body.track,
      issueDateISO: new Date().toISOString(),
      verificationUrl: `https://nextrain.example/verify/${certificateId}`
    };
    certificates.push(record);
    return record;
  });

  app.get("/verify/:certificateId", async (request, reply) => {
    const { certificateId } = request.params as { certificateId: string };
    const record = certificates.find((item) => item.certificateId === certificateId);
    if (!record) return reply.code(404).send({ valid: false });
    return { valid: true, record };
  });
}
