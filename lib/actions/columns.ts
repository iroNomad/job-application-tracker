"use server"

import {getSession} from "@/lib/auth/auth";
import connectDB from "@/lib/db";
import {Column} from "@/lib/models";
import {revalidatePath} from "next/cache";

export async function updateColumn({columnId, newName}: {columnId: string, newName: string}) {

    const session = await getSession();

    if (!session?.user) {
        return { error: "Unauthorized" };
    }

    await connectDB();

    const column = await Column.findByIdAndUpdate(columnId,
        { name: newName },
        { new: true, runValidators: true }
    )

    if (!column) {
        console.error("Column not found");
    }

    revalidatePath("/dashboard")
    return {success: true};
}