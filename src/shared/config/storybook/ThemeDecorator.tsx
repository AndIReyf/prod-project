import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { classNames } from 'shared/lib';
import { PartialStoryFn } from 'storybook/internal/types';

export const ThemeDecorator = (theme: Theme) => (Story: PartialStoryFn) => (
  <div className={classNames({ cls: 'app', additional: [theme] })}>
    <Story />
  </div>
);
