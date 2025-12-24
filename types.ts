export interface Artist {
  id: string;
  name: string;
  ageAtTime: string;
  origin: string;
  setlist: string[];
  postWoodstockSuccess: string;
  day: number;
  performanceTime: string;
  genre: string;
}

export interface Photographer {
  name: string;
  role: string;
  bio: string;
  officialSite: string;
  legacy: string;
  icon: string;
}

export interface ProducerLink {
  label: string;
  url: string;
}

export interface Producer {
  name: string;
  role: string;
  background: string;
  contribution: string;
  icon: string;
  links?: ProducerLink[];
}

export interface LogisticsStory {
  title: string;
  summary: string;
  yasgurFact: string;
  chaosFact: string;
  spiritFact: string;
}

export interface ModernLegacy {
  title: string;
  bethelWoodsSummary: string;
  anniversaryNote: string;
  doveTrailDetail: string;
  gerryVision: string;
  museumDetail: string;
  monumentDetail: string;
  monumentCreator: string;
  awards: string[];
  returningArtists: string[];
}

export interface ReunionStory {
  title: string;
  summary: string;
  highlights: string;
  connection: string;
}

export interface FilmStory {
  title: string;
  director: string;
  releaseYear: string;
  theDeal: string;
  kornfeldsRole: string;
  legacy: string;
}

export interface ImageState {
  original: string | null;
  edited: string | null;
  isProcessing: boolean;
  error: string | null;
}