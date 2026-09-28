"use client"

import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import {signOut} from "@/lib/auth/auth-client";

const SignOutButton = () => {
    return (
        <DropdownMenuItem onClick={async () => await signOut()}>
            Log Out
        </DropdownMenuItem>
    )
}

export default SignOutButton;