import Link from 'next/link';
import { LayoutDashboard, Users, Trophy, Shield, Settings, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-muted/40">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 z-10 w-64 border-r bg-background hidden md:block">
                <div className="flex h-16 items-center border-b px-6">
                    <Link href="/admin" className="flex items-center gap-2 font-bold text-primary text-xl">
                        <Trophy className="h-6 w-6" />
                        <span>Goleo Admin</span>
                    </Link>
                </div>
                <nav className="flex flex-col gap-2 p-4">
                    <Link href="/admin">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Button>
                    </Link>
                    <Link href="/admin/tournaments">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Trophy className="h-4 w-4" />
                            Torneos
                        </Button>
                    </Link>
                    <Link href="/admin/teams">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Shield className="h-4 w-4" />
                            Equipos
                        </Button>
                    </Link>
                    <Link href="/admin/players">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Users className="h-4 w-4" />
                            Jugadores
                        </Button>
                    </Link>
                    <div className="mt-auto">
                        <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:text-destructive">
                            <LogOut className="h-4 w-4" />
                            Cerrar Sesión
                        </Button>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex flex-col md:pl-64 w-full">
                <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
                    <span className="font-semibold text-lg">Panel de Control</span>
                </header>
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
