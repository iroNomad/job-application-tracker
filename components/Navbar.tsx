import {Briefcase} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4">
                <Link href="/" className="flex items-center gap-2 font-semibold text-primary">
                    <Briefcase />
                    Job Tracker
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;