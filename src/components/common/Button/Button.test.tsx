import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

test('Button component renders correctly and handles click event', () => {
  const mockOnClick = jest.fn();

  const { getByText } = render(<Button onClick={mockOnClick}>Click me</Button>);

  const buttonElement = getByText('Click me');

  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);

  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
