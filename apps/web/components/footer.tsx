import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>Built with ❤️, by <Link href="https://github.com/c3k90" target="_blank" rel="noopener noreferrer" className="underline">c3k90</Link></p>
        </div>
      </footer>
    );
}