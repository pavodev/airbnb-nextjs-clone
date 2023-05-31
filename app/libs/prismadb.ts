import { PrismaClient } from "@prisma/client";

// Global definition of prisma
declare global {
  var prisma: PrismaClient | undefined;
}

// BEST PRACTICE: Next.js 13 hot-reloading can cause the creation of a bunch of PrismaClients instances, this way we assign the client to a global variable which is not affected by the hot-reload. Otherwise we could import the prima client everywhere we need it.
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
