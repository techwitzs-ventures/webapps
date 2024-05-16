import { render } from '@testing-library/react';

import CompleteOnboarding from './completeOnboarding';

describe('CompleteOnboarding', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompleteOnboarding />);
    expect(baseElement).toBeTruthy();
  });
});
