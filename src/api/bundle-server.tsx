export const SIZE = 'http://localhost:7001/api/size';
export const INSTALL = 'http://localhost:7001/api/install';

export function getSizeLibrary(search: string) {
  return `${SIZE}?search=${search}`;
}

export function checkLibrary(search: string) {
  return `${INSTALL}?search=${search}`;
}