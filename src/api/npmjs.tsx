export const SUGGESTIONS = 'https://api.npms.io/v2/search/suggestions';

export function getSuggestions(search: string) {
  return `${SUGGESTIONS}?q=${search}`;
}