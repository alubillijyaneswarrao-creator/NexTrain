import type { FastifyInstance } from "fastify";

const roleMetrics = {
  student: { activeInternships: 2, starsCollected: 5, refundEligibleAmount: 300 },
  mentor: { assignedInterns: 18, pendingReviews: 6, liveSessionsThisMonth: 4 },
  admin: { totalUsers: 312, activeTracks: 4, refundsProcessed: 43 }
};

export async function dashboardRoutes(app: FastifyInstance) {
  app.get("/:role", async (request, reply) => {
    const role = (request.params as { role: string }).role as keyof typeof roleMetrics;
    const metrics = roleMetrics[role];
    if (!metrics) return reply.code(404).send({ error: "Invalid role" });
    return { role, metrics };
  });
}
