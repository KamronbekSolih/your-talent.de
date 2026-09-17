import type { Locale } from "../config";
import type { Dictionary } from "../types";
import { de } from "./de";
import { en } from "./en";
import { uz } from "./uz";

const dictionaries: Record<Locale, Dictionary> = { de, en, uz };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
