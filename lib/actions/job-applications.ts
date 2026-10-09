"use server";

import {getSession} from "@/lib/auth/auth";
import connectDB from "@/lib/db";
import column from "@/lib/models/column";
import {Board, Column, JobApplication} from "@/lib/models";

interface JobApplicationData {
    boardId: string;
    columnId: string;
    company: string;
    position: string;
    location?: string;
    salary?: string;
    jobUrl?: string;
    tags?: string[];
    description?: string;
    notes?: string;
}

export async function createJobApplication(data: JobApplicationData) {
    const session = await getSession();

    if (!session?.user) {
        return {error: "Unauthorized"}
    }

    await connectDB();

    const {
        boardId,
        columnId,
        company,
        position,
        location,
        salary,
        jobUrl,
        tags,
        description,
    } = data;

    if (!company || !position || !boardId || !columnId) {
        return {error: "Missing required fields"};
    }

    // Verify board ownership
    const board = await Board.findOne({
        _id: boardId,
        userId: session.user.id,
    })

    if (!board) {
        return {error: "Board not found"};
    }

    //Verify column belongs to board
    const column = await Column.findOne({
        _id: columnId,
        userId: boardId,
    })

    if (!column) {
        return {error: "Column not found"};
    }

    const maxOrder = (await JobApplication.findOne({columnId})
        .sort({order: -1})
        .select("order")
        .lean()) as {order: number} | null;

    const jobApplication = await JobApplication.create({
        boardId,
        columnId,
        company,
        position,
        location,
        salary,
        jobUrl,
        tags: tags || [],
        description,
        status: "applied",
        order: maxOrder ? maxOrder.order + 1 : 0,
    })
}