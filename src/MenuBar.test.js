import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './MenuBar';

it('renders without crashing', () => {
    const topElement = document.createElement('div');
    ReactDOM.render(<MenuBar />, topElement);
    ReactDOM.unmountComponentAtNode(topElement);
});

it('displays the program name', () => {
    const topElement = document.createElement('div');
    ReactDOM.render(<MenuBar />, topElement);
    const component = topElement.querySelector('.MenuBar')
    expect(component.textContent).toMatch(/^Dancify/)
});
