import HomeScreen from '../src/screens/HomeScreen';
import {render} from '../src/utils/test-util';

describe('HomeScreen', () => {
  test('renders HomeScreen', () => {
    const {getByTestId, debug} = render(<HomeScreen />);

    debug();

    const userName = getByTestId('username');
    expect(userName).toHaveTextContent('Kane Nguyen');
  });
});
