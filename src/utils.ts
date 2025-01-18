import { themes, type Theme } from "./data";

const daysInYear: number = 364;

export function generateContributionData(length: number = daysInYear): number[] {
  return Array.from({ length }, () => Math.floor(Math.random() * 5));
}

export function getColour(count: number, theme: Theme): string {
  return themes[theme][count] || themes[theme].default;
}
