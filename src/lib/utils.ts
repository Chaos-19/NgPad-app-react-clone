import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getImgUrl(name: string) {
  return new URL(`../${name}`, import.meta.url).href;
}

export const loadData = async (filePath: string) => {
  const response = await import(/* @vite-ignore */ `../assets/${filePath}`);
  return response.default;
};

export function getSuggestion(score, quizSuggestions) {
  for (const key in quizSuggestions) {
    if (
      score >= quizSuggestions[key].minScore &&
      score <= quizSuggestions[key].maxScore
    ) {
      return quizSuggestions[key].message;
    }
  }
  return '';
}
