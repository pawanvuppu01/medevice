// lib/prismaClient.ts
import { PrismaClient } from "@prisma/client";

// Use a global variable in development to avoid creating multiple instances
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error", "warn"], // or ["query", "error", "warn"] if you want verbose logs
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
