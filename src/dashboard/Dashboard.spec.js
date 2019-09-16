import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';
import { isMainThread } from 'worker_threads';


describe('<Dashboard />', () => {
    isMainThread('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render... Maybe', () => {
        const { getByText } = render(<Dashboard />)
        getByText(/unlocked/i)
        getByText(/lock gate/i)
        getByText(/open/i)
        getByText(/closed gate/i)

    })
})
