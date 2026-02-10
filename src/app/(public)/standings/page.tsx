import { StandingsTable } from "@/components/standings/StandingsTable";
import { MOCK_STANDINGS, MOCK_TOURNAMENT } from "@/lib/mock-data";
import { Trophy } from "lucide-react";

export default function StandingsPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-primary flex items-center gap-2">
                    <Trophy className="h-8 w-8" />
                    Tabla de Posiciones
                </h1>
                <p className="text-muted-foreground">
                    {MOCK_TOURNAMENT.name} - Clasificación General
                </p>
            </div>

            <StandingsTable standings={MOCK_STANDINGS} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                <div>
                    <span className="font-bold">Criterios de desempate:</span>
                    <ul className="list-disc list-inside mt-1">
                        <li>Puntos</li>
                        <li>Diferencia de Gol (DG)</li>
                        <li>Goles a Favor (GF)</li>
                        <li>Enfrentamientos directos</li>
                    </ul>
                </div>
                <div>
                    <span className="font-bold">Leyenda:</span>
                    <ul className="grid grid-cols-2 gap-x-4 mt-1">
                        <li><span className="font-semibold">PJ:</span> Partidos Jugados</li>
                        <li><span className="font-semibold">G:</span> Ganados</li>
                        <li><span className="font-semibold">E:</span> Empatados</li>
                        <li><span className="font-semibold">P:</span> Perdidos</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
