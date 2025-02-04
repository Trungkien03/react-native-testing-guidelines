import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/components/Button';

describe('test snapshot button', () => {
  it('matches snapshot', () => {
    const mockFn = jest.fn();
    const tree = renderer
      .create(<Button label="Click Me" onPress={mockFn} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
