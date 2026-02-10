export default function ScorerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen bg-background touch-manipulation">
            {/* Minimal Header for Context */}
            <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-sm">
                <div className="container flex h-14 items-center justify-between px-4">
                    <span className="font-bold text-lg">Modo Planilla</span>
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" title="Online" />
                </div>
            </header>

            <main className="flex-1 w-full max-w-md mx-auto p-4 pb-20">
                {children}
            </main>
        </div>
    );
}
