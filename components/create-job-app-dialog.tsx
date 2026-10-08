import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";

interface CreateJobAppDialogProps {
    columnId: string;
    boardId: string;
}

export default function CreateJobAppDialog({columnId, boardId}: CreateJobAppDialogProps) {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline">
                    <Plus />
                    Add Job
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Job Application</DialogTitle>
                    <DialogDescription>Track a new job application</DialogDescription>
                </DialogHeader>
                <form action="">

                </form>
            </DialogContent>
        </Dialog>
    )
}