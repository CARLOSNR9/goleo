import Link from 'next/link';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, LogIn } from 'lucide-react';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <Link href="/" className="flex items-center gap-2 font-bold text-primary text-xl">
                        <div className="relative h-10 w-32">
                            <Image
                                src="/logo.png"
                                alt="Goleo Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>
                    <nav className="flex items-center gap-4 text-sm font-medium">
                        <Link href="/standings" className="hidden md:flex items-center gap-2 hover:text-primary transition-colors">
                            <Users className="h-4 w-4" />
                            Tabla
                        </Link>
                        <Link href="/fixtures" className="hidden md:flex items-center gap-2 hover:text-primary transition-colors">
                            <Calendar className="h-4 w-4" />
                            Resultados
                        </Link>
                        <Link href="/login">
                            <Button variant="ghost" size="sm" className="gap-2">
                                <LogIn className="h-4 w-4" />
                                <span className="hidden sm:inline">Ingresar</span>
                            </Button>
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6">
                {children}
            </main>
            <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built for the love of the game.
                    </p>
                </div>
            </footer>
        </div>
    );
}
