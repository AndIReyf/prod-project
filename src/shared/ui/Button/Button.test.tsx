import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from './Button';

const mockButtonText = 'Test';

describe('Button', () => {
  test('ClassName should be outlined', () => {
    render(<Button theme={ThemeButton.OUTLINED}>{mockButtonText}</Button>);
    expect(screen.getByText(mockButtonText)).toHaveClass(ThemeButton.OUTLINED);
    screen.debug();
  });
});
