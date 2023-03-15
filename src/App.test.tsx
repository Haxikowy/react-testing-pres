import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  test('loads and displays App', async () => {
    // ARRANGE
    render(<App/>);

    // ACT
    const title = await screen.findByText('Vite Test');

    // ASSERT
    expect(title).toBeInTheDocument();
  });
});
