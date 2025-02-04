import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import Button from '../src/components/Button';

describe('Button Component Testing', () => {
  it('renders correctly and responds to press', () => {
    const mockPress = jest.fn();
    const {getByText, getByTestId} = render(
      <Button label="Click Me" onPress={mockPress} />,
    );

    fireEvent.press(getByText('Click Me'));
    expect(mockPress).toHaveBeenCalledTimes(1);
    const testIdButton = getByTestId('textButton');
    expect(testIdButton).toHaveTextContent('Click Me');
  });

  it('should render button component', () => {
    const mockPress = jest.fn();
    const {getByRole, debug} = render(
      <Button label="Click Me" onPress={mockPress} />,
    );
    debug();
    const button = getByRole('button');

    expect(button).toHaveTextContent('Click Me');
  });
});
