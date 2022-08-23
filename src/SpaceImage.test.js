import React from 'react';
import { render } from '@testing-library/react';
import SpaceImage from './SpaceImage';

// Smoke test:
it(`renders without crashing`, function () {
  render(<SpaceImage />);
});

// Snapshot test:
it(`renders with the anticipated HTML structure`, function () {
  const { asFragment } = render(<SpaceImage />);
  expect(asFragment()).toMatchSnapshot();
});
