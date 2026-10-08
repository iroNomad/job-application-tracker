"use client";

import {Board, Column} from "@/lib/models/models.types";
import {Award, Calendar, CheckCircle2, Mic, MoreVertical, Trash2, XCircle} from "lucide-react";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";

interface KanbanBoardProps {
    board: Board;
    userId: string;
}

interface ColConfig {
    color: string;
    icon: React.ReactNode
}

const COLUMN_CONFIG: Array<ColConfig> = [
    {
        color: "bg-cyan-500",
        icon: <Calendar className="h-4 w-4" />
    },
    {
        color: "bg-purple-500",
        icon: <CheckCircle2 className="h-4 w-4" />
    },
    {
        color: "bg-green-500",
        icon: <Mic className="h-4 w-4" />
    },
    {
        color: "bg-yellow-500",
        icon: <Award className="h-4 w-4" />
    },
    {
        color: "bg-red-500",
        icon: <XCircle className="h-4 w-4" />
    },
];

function DroppableColumn({column, config, boardId}: {column: Column, config: ColConfig, boardId: string}) {
    return (
        <Card className="min-w-[300px] shrink-0 shadow-md p-0">
            <CardHeader className={`${config.color} text-white pb-3 pt-3`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {config.icon}
                        <CardTitle className="text-white text-base font-semibold">
                            {column.name}
                        </CardTitle>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-white/20">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete Column
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
        </Card>
    );
}

export default function KanbanBoard({board, userId}: KanbanBoardProps) {

    const columns = board.columns;

    return (
        <>
            <div>
                <div className="flex flex-row gap-2">
                    {columns.map((column, key) => {
                        const config = COLUMN_CONFIG[key] || {
                            color: "bg-gray-500",
                            icon: <Calendar className="w-4 h-4"/>
                        }
                        return <DroppableColumn key={key} column={column} config={config} boardId={board._id} />;
                    })}
                </div>
            </div>
        </>
    );

}