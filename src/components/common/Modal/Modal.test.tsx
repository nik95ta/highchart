import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  test('renders children and can be closed', () => {
    const handleClose = jest.fn();
    const { getByText, queryByText } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>,
    );

    expect(getByText('Modal Content')).toBeInTheDocument();

    const closeButton = queryByText('×');

    if (closeButton) {
      fireEvent.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
    } else {
      throw new Error('Close button not found');
    }
  });
});
