import { Match, StandingsEntry, Team, Tournament, Player } from "@/types";

export const MOCK_TOURNAMENT: Tournament = {
    id: "t1",
    name: "Torneo Veteranos UM - Linares 2026",
    start_date: "2026-02-15",
    status: "active",
    created_at: new Date().toISOString(),
};

export const MOCK_TEAMS: Team[] = [
    { id: "tm1", name: "Los Galácticos", tournament_id: "t1", created_at: new Date().toISOString() },
    { id: "tm2", name: "Dep. Linares", tournament_id: "t1", created_at: new Date().toISOString() },
    { id: "tm3", name: "Real Veteranos", tournament_id: "t1", created_at: new Date().toISOString() },
    { id: "tm4", name: "Atlético Sur", tournament_id: "t1", created_at: new Date().toISOString() },
    { id: "tm5", name: "Unión Nariño", tournament_id: "t1", created_at: new Date().toISOString() },
];

export const MOCK_STANDINGS: StandingsEntry[] = [
    { team_id: "tm1", team_name: "Los Galácticos", played: 5, won: 4, drawn: 1, lost: 0, goals_for: 12, goals_against: 3, goal_difference: 9, points: 13 },
    { team_id: "tm2", team_name: "Dep. Linares", played: 5, won: 3, drawn: 1, lost: 1, goals_for: 10, goals_against: 5, goal_difference: 5, points: 10 },
    { team_id: "tm3", team_name: "Real Veteranos", played: 5, won: 2, drawn: 2, lost: 1, goals_for: 7, goals_against: 6, goal_difference: 1, points: 8 },
    { team_id: "tm4", team_name: "Atlético Sur", played: 5, won: 1, drawn: 1, lost: 3, goals_for: 5, goals_against: 9, goal_difference: -4, points: 4 },
    { team_id: "tm5", team_name: "Unión Nariño", played: 5, won: 0, drawn: 1, lost: 4, goals_for: 2, goals_against: 13, goal_difference: -11, points: 1 },
];

export const MOCK_MATCHES: Match[] = [
    {
        id: "m1",
        tournament_id: "t1",
        home_team_id: "tm1",
        away_team_id: "tm2",
        date: "2026-02-15T10:00:00",
        status: "finished",
        home_score: 2,
        away_score: 1,
        created_at: new Date().toISOString()
    },
    {
        id: "m2",
        tournament_id: "t1",
        home_team_id: "tm3",
        away_team_id: "tm4",
        date: "2026-02-15T12:00:00",
        status: "scheduled",
        home_score: 0,
        away_score: 0,
        created_at: new Date().toISOString()
    },
];

export const MOCK_PLAYERS: Player[] = [
    // Los Galácticos (tm1)
    { id: "p1", team_id: "tm1", name: "Juan Pérez", number: 10, position: "F", is_active: true },
    { id: "p2", team_id: "tm1", name: "Carlos López", number: 7, position: "F", is_active: true },
    { id: "p3", team_id: "tm1", name: "Pedro Silva", number: 5, position: "D", is_active: true },
    { id: "p4", team_id: "tm1", name: "Miguel Ángel", number: 1, position: "GK", is_active: true },

    // Dep. Linares (tm2)
    { id: "p5", team_id: "tm2", name: "Andrés Iniesta", number: 8, position: "M", is_active: true },
    { id: "p6", team_id: "tm2", name: "Xavi H.", number: 6, position: "M", is_active: true },
    { id: "p7", team_id: "tm2", name: "Carles P.", number: 5, position: "D", is_active: true },
    { id: "p8", team_id: "tm2", name: "Victor V.", number: 1, position: "GK", is_active: true },
];
