import { clerkClient } from "@clerk/nextjs/server";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";

export async function POST(req: Request) {
  const { clerkId } = await req.json();
  try {
    const client = await clerkClient();
    const response = await client.users.banUser(clerkId);
    return successResponse("User banned successfully", response, 200);
  } catch (error) {
    return errorResponse("Failed to ban user", error, 500);
  }
}
