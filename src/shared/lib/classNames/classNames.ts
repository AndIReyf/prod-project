type Mods = Record<string, boolean | string>

type classNames = (
  cls: string,
  mods: Mods,
  additional: string[]
) => string;

export const classNames: classNames = (cls, mods, additional) => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([classNames]) => classNames),
  ].join(' ');
}