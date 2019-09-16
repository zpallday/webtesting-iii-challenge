import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Display from './Display';


describe('<Display />', () => {

    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);
    
 
        expect(tree.toJSON()).toMatchSnapshot();
      })


it('Should run red-led locked', () => {
    const component = render(<Display closed={true} locked={true}/> )
    const display = component.getByText('Locked')
    expect(display)
})

it('Should run green-led unlocked', () => {
    const component = render(<Display closed={true} locked={false}/> )
    const displaygreen = component.getByText('Unlocked')
    expect(displaygreen)
})

it('should display unlocked while unlocked', () => {
    const component = render(<Display closed={true} locked={false} />)
    component.getByText('Unlocked')
})

it('should display red when closed', () => {
    const component =render(<Display closed={true} locked={false} /> )
    const displayclosed = component.getByText('Closed')
    expect(displayclosed)
})

it('Should open while green-led', () => {
    const component = render(<Display closed={false} locked={false} /> )
    const displayopen = component.getByText('Open')
    expect(displayopen)
})


})