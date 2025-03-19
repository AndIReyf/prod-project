import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('Render should be done', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Toggle sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
