  
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Controls from './Controls'


describe('<Control />', () => {

    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);
    
 
        expect(tree.toJSON()).toMatchSnapshot();
      })

it ('should render the toggle and btn', () => {
    const { getByText } = render (<Controls/>)
    getByText(/close gate/i)
    getByText(/lock gate/i)
})

it( 'should disable lock/unlock btn', () => {
    const { getByText } = render(<Controls closed={false} />)
    const btn = getByText(/lock gate/i)
    expect(btn).toBeDisabled(); 
})

it('should disable open/ closed btn locked', () => {
    const {getByText} = render(<Controls locked={true} />)
        const btn = getByText(/close gate/i)
        expect(btn).toBeDisabled()
    })
 it(' should toggleCloseed on btn clicked', () => {
     const toggleClosed = jest.fn();
     const { getByText } = render(<Controls toggleClosed={toggleClosed} />)
     const btn = getByText(/close gate/i)
     fireEvent.click(btn)
     expect(toggleClosed).toBeCalledTimes(1)
 })
})




    

