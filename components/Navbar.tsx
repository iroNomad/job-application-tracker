"use client"

import {Briefcase} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import SignOutButton from "@/components/ui/sign-out-btn";
import {useSession} from "@/lib/auth/auth-client";

const Navbar = () => {
    const {data: session} = useSession();

    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">
                <Link href="/" className="flex items-center gap-2 font-semibold text-primary">
                    <Briefcase />
                    Job Tracker
                </Link>
                <div className="flex items-center gap-4">
                    {session?.user ?
                        (<>
                            <Link href="/dashboard">
                                <Button
                                    variant="ghost"
                                    className="text-gray-700 hover:text-black"
                                >
                                    Dashboard
                                </Button>
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger render={
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <Avatar>
                                            <AvatarFallback className="bg-primary text-white">
                                                {session.user.name[0].toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                } />
                                <DropdownMenuContent align="end">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            {session?.user.name}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            {session?.user.email}
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <SignOutButton />
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>)
                        :
                        (<>
                            <Link href="/sign-in">
                                <Button variant="ghost" className="text-gray-700 hover:text-black">Log In</Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
                            </Link>
                        </>)
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;