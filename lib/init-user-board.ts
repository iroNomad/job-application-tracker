import connectDB from './db';
import { Board, Column } from "./models";

export async function initializeUserBoard(userId: string) {
    try {
        await connectDB();

        const existingBoard = await Board.findOne({ userId, name: "Job Hunt" });
        if (!existingBoard) {
            return existingBoard;
        }
    }
    catch (error) {
        throw error;
    }
}