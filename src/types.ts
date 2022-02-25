export enum Mood {
  Unset = "#CBCBCB",
  Amazing = "#4EAF58",
  Great = "#8CC356",
  Good = "#CDDC4F",
  Meh = "#FFC136",
  Bad = "#FE9929",
  Terrible = "#FE592F",
}

export type DayInfo = {
  day: number;
  month: number;
  color?: Mood;
};
