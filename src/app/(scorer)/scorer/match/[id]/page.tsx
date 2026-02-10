"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MOCK_MATCHES, MOCK_TEAMS, MOCK_PLAYERS } from "@/lib/mock-data";
import { ArrowLeft, Clock, Goal, MessageSquare, AlertTriangle, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { toast } from "sonner"; // Use sonner as installed

export default function MatchControlPage() {
    const params = useParams();
    const matchId = params.id as string;
    const match = MOCK_MATCHES.find(m => m.id === matchId);

    const [homeScore, setHomeScore] = useState(match?.home_score || 0);
    const [awayScore, setAwayScore] = useState(match?.away_score || 0);

    if (!match) return <div>Partido no encontrado</div>;

    const homeTeam = MOCK_TEAMS.find(t => t.id === match.home_team_id);
    const awayTeam = MOCK_TEAMS.find(t => t.id === match.away_team_id);

    const homePlayers = MOCK_PLAYERS.filter(p => p.team_id === match.home_team_id);
    const awayPlayers = MOCK_PLAYERS.filter(p => p.team_id === match.away_team_id);

    const handleGoal = (teamId: string) => {
        if (teamId === match.home_team_id) {
            setHomeScore(prev => prev + 1);
            toast.success(`¡Gol de ${homeTeam?.name}!`);
        } else {
            setAwayScore(prev => prev + 1);
            toast.success(`¡Gol de ${awayTeam?.name}!`);
        }
        // In real app, we would open a dialog to select the player and minute
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Link href="/scorer">
                    <Button variant="ghost" size="sm" className="gap-1 pl-0">
                        <ArrowLeft className="h-4 w-4" /> Volver
                    </Button>
                </Link>
                <Badge variant={match.status === 'live' ? "destructive" : "outline"}>
                    {match.status === 'live' ? 'EN VIVO' : 'PROGRAMADO'}
                </Badge>
            </div>

            {/* Scoreboard */}
            <Card className="border-primary/20 shadow-lg">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="text-center w-1/3">
                            <div className="font-bold text-lg leading-tight mb-2">{homeTeam?.name}</div>
                            <div className="text-4xl font-mono font-bold">{homeScore}</div>
                        </div>
                        <div className="text-center w-1/3 text-muted-foreground text-xs">
                            <Clock className="h-4 w-4 mx-auto mb-1" />
                            <span>45'</span>
                        </div>
                        <div className="text-center w-1/3">
                            <div className="font-bold text-lg leading-tight mb-2">{awayTeam?.name}</div>
                            <div className="text-4xl font-mono font-bold">{awayScore}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Action Buttons - Touch Optimized */}
            <div className="grid grid-cols-2 gap-4">
                {/* Home Actions */}
                <div className="space-y-2">
                    <h3 className="text-xs font-bold text-center uppercase text-muted-foreground">{homeTeam?.name}</h3>
                    <Button
                        onClick={() => handleGoal(homeTeam!.id)}
                        className="w-full h-16 text-lg bg-green-600 hover:bg-green-700 shadow-md"
                    >
                        <Goal className="mr-2 h-6 w-6" /> GOL
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" className="h-12 border-yellow-400 text-yellow-600 hover:bg-yellow-50">
                            <AlertTriangle className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="h-12 border-red-500 text-red-600 hover:bg-red-50">
                            <ShieldAlert className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Away Actions */}
                <div className="space-y-2">
                    <h3 className="text-xs font-bold text-center uppercase text-muted-foreground">{awayTeam?.name}</h3>
                    <Button
                        onClick={() => handleGoal(awayTeam!.id)}
                        className="w-full h-16 text-lg bg-green-600 hover:bg-green-700 shadow-md"
                    >
                        <Goal className="mr-2 h-6 w-6" /> GOL
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" className="h-12 border-yellow-400 text-yellow-600 hover:bg-yellow-50">
                            <AlertTriangle className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="h-12 border-red-500 text-red-600 hover:bg-red-50">
                            <ShieldAlert className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Events Log Preview */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Eventos Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-sm text-muted-foreground text-center py-4">
                        No hay eventos registrados aún.
                    </div>
                </CardContent>
            </Card>

            <Button variant="destructive" className="w-full" size="lg">
                Finalizar Partido
            </Button>
        </div>
    );
}
