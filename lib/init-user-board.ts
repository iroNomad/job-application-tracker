import connectDB from './db';

export async function initializeUserBoard() {
    try {
        await connectDB();
    }
    catch (error) {
        throw error;
    }
}