import { MOCK_MATCHES, MOCK_TEAMS, MOCK_TOURNAMENT } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function FixturesPage() {
    const getTeamName = (id: string) => MOCK_TEAMS.find(t => t.id === id)?.name || "Unknown";

    const sortedMatches = [...MOCK_MATCHES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-primary flex items-center gap-2">
                    <Calendar className="h-8 w-8" />
                    Calendario y Resultados
                </h1>
                <p className="text-muted-foreground">
                    {MOCK_TOURNAMENT.name}
                </p>
            </div>

            <div className="grid gap-4">
                {sortedMatches.map((match) => (
                    <Card key={match.id} className="overflow-hidden">
                        <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row items-center">

                                {/* Date & Time Column */}
                                <div className="w-full md:w-32 bg-muted/30 p-4 flex md:flex-col items-center justify-between md:justify-center gap-2 text-sm text-muted-foreground border-b md:border-b-0 md:border-r">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{new Date(match.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-2 font-mono">
                                        <Clock className="h-4 w-4" />
                                        <span>{new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                    </div>
                                </div>

                                {/* Match Details */}
                                <div className="flex-1 p-4 w-full">
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                                        {/* Home Team */}
                                        <div className="flex-1 flex items-center justify-center sm:justify-end gap-3 text-center sm:text-right">
                                            <span className={`text-lg font-semibold ${match.home_score > match.away_score ? "text-primary" : ""}`}>
                                                {getTeamName(match.home_team_id)}
                                            </span>
                                            {/* Logo placeholder would go here */}
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-xs">
                                                {getTeamName(match.home_team_id).substring(0, 2).toUpperCase()}
                                            </div>
                                        </div>

                                        {/* Score Board */}
                                        <div className="flex flex-col items-center min-w-[100px]">
                                            {match.status === 'scheduled' ? (
                                                <Badge variant="outline" className="text-xs bg-slate-50">VS</Badge>
                                            ) : (
                                                <div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-md border font-mono text-xl font-bold">
                                                    <span>{match.home_score}</span>
                                                    <span className="text-slate-400">:</span>
                                                    <span>{match.away_score}</span>
                                                </div>
                                            )}

                                            <Badge
                                                variant={match.status === 'live' ? "destructive" : match.status === 'finished' ? "secondary" : "outline"}
                                                className="mt-2 text-[10px] uppercase"
                                            >
                                                {match.status === 'live' ? 'En Vivo' : match.status === 'finished' ? 'Finalizado' : 'Por Jugar'}
                                            </Badge>
                                        </div>

                                        {/* Away Team */}
                                        <div className="flex-1 flex items-center justify-center sm:justify-start gap-3 text-center sm:text-left">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-xs">
                                                {getTeamName(match.away_team_id).substring(0, 2).toUpperCase()}
                                            </div>
                                            <span className={`text-lg font-semibold ${match.away_score > match.home_score ? "text-primary" : ""}`}>
                                                {getTeamName(match.away_team_id)}
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                {/* Location (Optional) */}
                                <div className="w-full md:w-auto p-4 flex items-center justify-center text-xs text-muted-foreground gap-1 border-t md:border-t-0 md:border-l">
                                    <MapPin className="h-3 w-3" />
                                    <span>Estadio Municipal</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
