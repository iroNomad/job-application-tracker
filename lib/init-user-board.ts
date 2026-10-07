import connectDB from './db';
import { Board, Column } from "./models";

const DEFAULT_COLUMNS = [
    { name: "Wish list", order: 0 },
    { name: "Applied", order: 1 },
    { name: "Interviewing", order: 2 },
    { name: "Offer", order: 3 },
    { name: "Rejected", order: 4 }
];

export async function initializeUserBoard(userId: string) {
    try {
        await connectDB();

        // check if the user already has a board named "Job Hunt"
        const existingBoard = await Board.findOne({ userId, name: "Job Hunt" });
        if (existingBoard) {
            return existingBoard;
        }

        // create a new board for the user
        const board = await Board.create({
            name: "Job Hunt",
            userId,
            columns: []
        });

        // create default columns for the board\
        const columns = await Promise.all(
            DEFAULT_COLUMNS.map((column) => {
                Column.create({
                    name: column.name,
                    boardId: board._id,
                    order: column.order,
                    jobApplications: []
                });
            })
        );

        // update the board with the created columns
        board.columns = columns.map((column) => column._id);

        await board.save();

        return board;
    }
    catch (error) {
        throw error;
    }
}