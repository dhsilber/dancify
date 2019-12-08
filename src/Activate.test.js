import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import Activate from './Activate';

const onClick = jest.fn()

it('renders without crashing', () => {
    const topElement = document.createElement('div');
    ReactDOM.render(<Activate onClick={onClick} />, topElement);
    ReactDOM.unmountComponentAtNode(topElement);
});

it('displays a button', () => {
    const { getByRole } = render(<Activate onClick={onClick} />)
    const button = getByRole('button')
    expect(button).toBeTruthy()
});

it('displays a button with correct text', () => {
    const { getByRole } = render(<Activate onClick={onClick} />)
    const button = getByRole('button')
    expect(button.textContent).toBe("Activate")
});

it('invokes callback on click', () => {
    const { getByRole } = render(<Activate onClick={onClick} />)
    const button = getByRole('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
});

it('throws exception on bad callback', () => {
    const originalError = console.error
    console.error = jest.fn()

    // Should have been able to simply say:
    // expect(render(<Activate />)).toThrow(Error)
    expect.assertions(2)
    try {
        render(<Activate />)
    }
    catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect(error).toHaveProperty('message', 'no onClick callback provided')
    }

    console.error = originalError
})


