import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import Button from '../src/components/Button';

test('renders correctly and responds to press', () => {
  const mockPress = jest.fn();
  const {getByText} = render(<Button label="Click Me" onPress={mockPress} />);

  fireEvent.press(getByText('Click Me'));
  expect(mockPress).toHaveBeenCalledTimes(1);
});
