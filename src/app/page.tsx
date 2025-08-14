import { getCloudflareContext } from "@opennextjs/cloudflare";
import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const adapter = new PrismaD1((await getCloudflareContext({ async: true })).env.DB)
  const prisma = new PrismaClient({ adapter });
  const users = await prisma.user.findMany();
  const result = JSON.stringify(users, null, 2);


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {result}
    </div>
  );
}
