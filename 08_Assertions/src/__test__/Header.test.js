import { render, screen } from '@testing-library/react';
import Header from './../components/Header/Header';



it('should again render the same text passed in title prop', () => {
  render(<Header title="My header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

