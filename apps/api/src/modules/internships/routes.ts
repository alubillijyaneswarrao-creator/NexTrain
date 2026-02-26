import type { FastifyInstance } from "fastify";
import { internshipTracks } from "../../data/mock-db.js";

export async function internshipRoutes(app: FastifyInstance) {
  app.get("/", async () => internshipTracks);

  app.get("/:slug", async (request, reply) => {
    const slug = (request.params as { slug: string }).slug;
    const internship = internshipTracks.find((item) => item.slug === slug);
    if (!internship) return reply.code(404).send({ error: "Track not found" });
    return internship;
  });
}
