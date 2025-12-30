import { ThemeToggle, cn, buttonVariants } from "@repo/ui";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="border-b border-border">
            <div className="mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                href="/" 
                className="flex items-center gap-3"
                >
                    <Image
                        src="https://github.com/c3k90.png"
                        alt="c3k90"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="text-lg font-semibold text-foreground">
                        c3k90
                    </span>
                </Link>
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Link
                        href="https://github.com/c3k90"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
                    >
                        <Github className="h-[1.2rem] w-[1.2rem]" />
                    </Link>
                </div>
            </div>
        </header>
    );
}