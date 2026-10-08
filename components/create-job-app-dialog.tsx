import {Dialog, DialogTrigger} from "@/components/ui/dialog";
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
        </Dialog>
    )
}