// Various helper methods for things around the codebase

export function isBlank(str: string) {
  return !str || /^\s*$/.test(str)
}
