import { Starship } from "../StarShip/interfaces.ts";

export interface StarshipsResponse {
  count: number;
  next: string;
  previous: null;
  results: Starship[];
}
