type Mods = Record<string, boolean | string>;

export function classNames(
  // Main class
  cls: string,
  // Modes are when the condition can be dynamic
  mods: Mods = {},
  // Additional classes
  additional: string[] = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
