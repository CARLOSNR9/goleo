export type Role = 'admin' | 'scorer' | 'delegate' | 'public';

export interface User {
  id: string;
  email: string;
  role: Role;
  full_name?: string;
  created_at: string;
}

export interface Tournament {
  id: string;
  name: string;
  start_date: string;
  end_date?: string;
  status: 'planning' | 'active' | 'completed';
  rules?: string;
  created_at: string;
}

export interface Team {
  id: string;
  tournament_id: string;
  name: string;
  logo_url?: string;
  created_at: string;
}

export interface Player {
  id: string;
  team_id: string;
  name: string;
  document_id: string; // Cédula
  number?: number;
  position?: string;
  photo_url?: string;
  is_active: boolean; // For suspensions
  created_at: string;
}

export interface Match {
  id: string;
  tournament_id: string;
  home_team_id: string;
  away_team_id: string;
  date: string;
  location?: string;
  status: 'scheduled' | 'live' | 'finished';
  home_score: number;
  away_score: number;
  created_at: string;
}

export type EventType = 'goal' | 'yellow_card' | 'red_card' | 'substitution';

export interface MatchEvent {
  id: string;
  match_id: string;
  player_id: string; // The player who scored/got carded/subbed IN
  related_player_id?: string; // For substitutions (player subbed OUT)
  team_id: string;
  type: EventType;
  minute: number;
  observation?: string;
  created_at: string;
}

export interface StandingsEntry {
  team_id: string;
  team_name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goals_for: number;
  goals_against: number;
  goal_difference: number;
  points: number;
}
