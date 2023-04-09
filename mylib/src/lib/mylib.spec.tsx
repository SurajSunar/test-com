import { render } from '@testing-library/react';

import TestComMylib from './mylib';

describe('TestComMylib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestComMylib />);
    expect(baseElement).toBeTruthy();
  });
});
