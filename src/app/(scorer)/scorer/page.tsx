import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MOCK_MATCHES, MOCK_TEAMS } from "@/lib/mock-data";
import { ChevronRight, Clock } from "lucide-react";

export default function ScorerMatchList() {
    const getTeamName = (id: string) => MOCK_TEAMS.find(t => t.id === id)?.name || "Unknown";

    // Filter only scheduled or live matches for the scorer
    const activeMatches = MOCK_MATCHES.filter(m => m.status !== 'finished');

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Partidos Asignados</h2>
                <p className="text-muted-foreground text-sm">Selecciona el partido para iniciar la planilla.</p>
            </div>

            <div className="grid gap-4">
                {activeMatches.length === 0 ? (
                    <p className="text-center text-muted-foreground py-10">No hay partidos programados.</p>
                ) : activeMatches.map((match) => (
                    <Link href={`/scorer/match/${match.id}`} key={match.id}>
                        <Card className="hover:border-primary transition-colors cursor-pointer">
                            <CardContent className="p-4 flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                        <Clock className="h-3 w-3" />
                                        {new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                    <div className="font-semibold">{getTeamName(match.home_team_id)}</div>
                                    <div className="text-xs text-muted-foreground">vs</div>
                                    <div className="font-semibold">{getTeamName(match.away_team_id)}</div>
                                </div>

                                <div className="flex flex-col items-end gap-2">
                                    {match.status === 'live' && (
                                        <Badge variant="destructive" className="animate-pulse">ENVIVO</Badge>
                                    )}
                                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
