"use server";

import { items } from "@/db/schema";
import { database } from "@/db/database";
// import { revalidatePath } from "next/cache";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import { getSignedUrlForS3Object } from "@/lib/s3";


export async function createUploadUrlAction(key: string, type: string) {
  return await getSignedUrlForS3Object(key, type);
}


export async function createItemAction({ fileName, name, startingPrice } : {fileName: string, name: string, startingPrice: number}) {
  const session = await auth();

  if (!session) {
    throw new Error("Unauthorized");
  }
  const user = await session.user;

  if (!user || !user.id) {
    throw new Error("Unauthorized");
  }


  await database?.insert(items).values({
    name,
    startingPrice,
    fileKey: fileName,
    userId: user.id,
  });
  redirect("/");
}
