import 'app/styles/index.scss';
import { PartialStoryFn } from 'storybook/internal/types';

export const StyleDecorator = (story: PartialStoryFn) => story();
