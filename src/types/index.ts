export interface PokemonRequest {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  order: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: Sprites;
  stats: Stats[]
  types: Types[];
}

interface Sprites {
  other: Other;
}

interface Other {
  dream_world: DreamWorld;
  "official-artwork": DreamWorld;
  showdown: DreamWorld;
}

interface DreamWorld {
  front_default: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

interface Stat {
  name: string;
  url: string;
}

export interface Types {
  slot: number;
  type: Type;
}

interface Type {
  name: pokemonTypeColorsKeyType;
  url: string;
}

export type pokemonTypeColorsKeyType = 'normal' | 'fire' | 'water' | 'electric' | 'grass' |
  'ice' | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug' |
  'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy'
