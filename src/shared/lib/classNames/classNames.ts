type Mods = Record<string, boolean | string>

interface classNamesProps {
  cls?: string,
  mods?: Mods,
  additional?: string[]
}

type classNames = (props: classNamesProps) => string;

export const classNames: classNames = ({ cls = '', mods = {}, additional = [] }) => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([classNames]) => classNames),
].join(' ');
