import React from 'react';
import { render } from '@testing-library/react';

import Safira from './safira';

describe('Safira', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Safira />);
    expect(baseElement).toBeTruthy();
  });
});
