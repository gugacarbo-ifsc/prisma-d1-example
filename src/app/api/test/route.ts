import { getCloudflareContext } from "@opennextjs/cloudflare";
import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  const db = (await getCloudflareContext({ async: true })).env.DB;
  const adapter = new PrismaD1(db);
  const prisma = new PrismaClient({ adapter });

  const users = await prisma.user.findMany();
  const result = JSON.stringify(users);
  return new Response(result);
}
