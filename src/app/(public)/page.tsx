import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Calendar, ArrowRight } from "lucide-react";
import { MOCK_TOURNAMENT, MOCK_STANDINGS, MOCK_MATCHES, MOCK_TEAMS } from "@/lib/mock-data";

export default function HomePage() {
    const topTeams = MOCK_STANDINGS.slice(0, 5);
    const recentMatches = MOCK_MATCHES.slice(0, 3);

    const getTeamName = (id: string) => MOCK_TEAMS.find(t => t.id === id)?.name || "Unknown";

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="text-center py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background rounded-3xl border">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-700">
                                {MOCK_TOURNAMENT.name}
                            </h1>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                Sigue los resultados en vivo, estadísticas y la tabla de posiciones oficial.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <Link href="/standings">
                                <Button className="h-11 px-8 rounded-full" size="lg">Ver Tabla</Button>
                            </Link>
                            <Link href="/fixtures">
                                <Button variant="outline" className="h-11 px-8 rounded-full" size="lg">Resultados</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Standings Preview */}
                <Card className="col-span-1 lg:col-span-2 shadow-lg border-primary/20">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-yellow-500" />
                            Tabla de Posiciones
                        </CardTitle>
                        <Link href="/standings">
                            <Button variant="ghost" size="sm" className="gap-1">
                                Ver todo <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm text-left">
                                <thead className="[&_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground w-12 text-center">#</th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Equipo</th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-center">PJ</th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-center">DG</th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-center font-bold">Pts</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                    {topTeams.map((team, index) => (
                                        <tr key={team.team_id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle text-center font-medium">{index + 1}</td>
                                            <td className="p-4 align-middle font-semibold text-primary">{team.team_name}</td>
                                            <td className="p-4 align-middle text-center">{team.played}</td>
                                            <td className="p-4 align-middle text-center">{team.goal_difference}</td>
                                            <td className="p-4 align-middle text-center font-bold text-lg">{team.points}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Results */}
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            Resultados Recientes
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentMatches.map((match) => (
                            <div key={match.id} className="flex flex-col gap-2 p-3 rounded-lg border bg-muted/20">
                                <div className="text-xs text-muted-foreground text-center">
                                    {new Date(match.date).toLocaleDateString()} - {new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                                <div className="flex justify-between items-center font-medium">
                                    <span className={match.home_score > match.away_score ? "font-bold text-primary" : ""}>
                                        {getTeamName(match.home_team_id)}
                                    </span>
                                    <div className="px-2 py-1 bg-background rounded border font-mono">
                                        {match.home_score} - {match.away_score}
                                    </div>
                                    <span className={match.away_score > match.home_score ? "font-bold text-primary" : ""}>
                                        {getTeamName(match.away_team_id)}
                                    </span>
                                </div>
                                <div className="text-center">
                                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${match.status === 'live' ? 'bg-red-100 text-red-600 animate-pulse' :
                                            match.status === 'finished' ? 'bg-gray-100 text-gray-600' : 'bg-blue-100 text-blue-600'
                                        }`}>
                                        {match.status === 'live' ? 'En Juego' : match.status === 'finished' ? 'Finalizado' : 'Programado'}
                                    </span>
                                </div>
                            </div>
                        ))}
                        <Link href="/fixtures" className="block text-center">
                            <Button variant="outline" size="sm" className="w-full">Ver Calendario</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
