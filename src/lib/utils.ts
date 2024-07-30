import {
  type ClassValue,
  clsx
} from "clsx";
import {
  twMerge
} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getImgUrl(name: string) {
  return new URL(`../${name}`, import.meta.url).href;
}
export async function loadJsonfile(path: string) {
  const respons = await import("../assets/categories/basic.json");
  return respons.default;
}