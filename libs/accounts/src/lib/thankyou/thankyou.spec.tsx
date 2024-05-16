import { render } from '@testing-library/react';

import Thankyou from './thankyou';

describe('Thankyou', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Thankyou />);
    expect(baseElement).toBeTruthy();
  });
});
