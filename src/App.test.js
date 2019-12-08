import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const topElement = document.createElement('div');
  ReactDOM.render(<App />, topElement);
  ReactDOM.unmountComponentAtNode(topElement);
});

it('contains MenuBar', () => {
  const topElement = document.createElement('div');
  ReactDOM.render(<App />, topElement);
  const component = topElement.querySelector('.MenuBar')
  expect(component).not.toBe(null)
})  

it('contains Activate', () => {
  const topElement = document.createElement('div');
  ReactDOM.render(<App />, topElement);
  const component = topElement.querySelector('.Activate')
  expect(component).not.toBe(null)
});
