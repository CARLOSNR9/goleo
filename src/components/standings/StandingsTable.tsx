import { StandingsEntry } from "@/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface StandingsTableProps {
    standings: StandingsEntry[];
    className?: string;
}

export function StandingsTable({ standings, className }: StandingsTableProps) {
    return (
        <div className={cn("rounded-md border", className)}>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12 text-center">Pos</TableHead>
                        <TableHead>Equipo</TableHead>
                        <TableHead className="text-center">PJ</TableHead>
                        <TableHead className="text-center hidden sm:table-cell">G</TableHead>
                        <TableHead className="text-center hidden sm:table-cell">E</TableHead>
                        <TableHead className="text-center hidden sm:table-cell">P</TableHead>
                        <TableHead className="text-center hidden md:table-cell">GF</TableHead>
                        <TableHead className="text-center hidden md:table-cell">GC</TableHead>
                        <TableHead className="text-center">DG</TableHead>
                        <TableHead className="text-center font-bold">Pts</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {standings.map((entry, index) => (
                        <TableRow key={entry.team_id}>
                            <TableCell className="text-center font-medium">{index + 1}</TableCell>
                            <TableCell className="font-semibold text-primary">{entry.team_name}</TableCell>
                            <TableCell className="text-center">{entry.played}</TableCell>
                            <TableCell className="text-center hidden sm:table-cell">{entry.won}</TableCell>
                            <TableCell className="text-center hidden sm:table-cell">{entry.drawn}</TableCell>
                            <TableCell className="text-center hidden sm:table-cell">{entry.lost}</TableCell>
                            <TableCell className="text-center hidden md:table-cell">{entry.goals_for}</TableCell>
                            <TableCell className="text-center hidden md:table-cell">{entry.goals_against}</TableCell>
                            <TableCell className="text-center font-bold">{entry.goal_difference}</TableCell>
                            <TableCell className="text-center font-bold text-lg">{entry.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
