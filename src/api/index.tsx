import { getSuggestions } from './npmjs';
import { getSizeLibrary, checkLibrary } from './bundle-server';

export function fetchSuggestions(search: string) {
  return fetch(getSuggestions(search))
    .then(res => res.json());
}

export function fetchSizeLibrary(search: string) {
  return fetch(getSizeLibrary(search))
    .then(res => res.json());
}

export function fetchLibrary(search: string) {
  return fetch(checkLibrary(search));
}
