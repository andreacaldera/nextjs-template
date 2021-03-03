import { render } from '@testing-library/react';
import React from 'react';
import { Interview } from './interview';

describe('interview component', () => {
  it('render title', () => {
    const { queryByText } = render(<Interview />);

    expect(queryByText('Interview')).toBeTruthy();
  });
});
