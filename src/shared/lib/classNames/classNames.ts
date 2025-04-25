type Mods = Record<string, boolean | string | undefined>

interface classNamesProps {
  cls?: string,
  mods?: Mods,
  additional?: Array<string | undefined>
}

type classNames = (props: classNamesProps) => string;

export const classNames: classNames = ({ cls = '', mods = {}, additional = [] }) => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([classNames]) => classNames),
].join(' ');
