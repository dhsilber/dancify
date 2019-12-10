import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
// import { render as testingRender, cleanup, fireEvent, waitForElement, wait } from '@testing-library/dom';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

describe('App', () => {
//   afterEach(cleanup)

//   it('renders without crashing', () => {
//     var topElement = document.createElement('div');
//     ReactDOM.render(<App />, topElement);
//     ReactDOM.unmountComponentAtNode(topElement);
//   });

//   describe('initial setup', () => {
//     var topElement = document.createElement('div');
//     ReactDOM.render(<App />, topElement);

//     describe('MenuBar', () => {
//       const component = topElement.querySelector('.MenuBar')
//       it('exists', () => {
//         expect(component).not.toBe(null)
//       })
//       it('is initially visible', () => {
//         expect(component).toBeVisible()
//       })
//     })

//     describe('Activate', () => {
//       const component = topElement.querySelector('.Activate')
//       it('exists', () => {
//         expect(component).not.toBe(null)
//       })
//       it('is initially visible', () => {
//         expect(component).toBeVisible()
//       })
//     })

//     describe('Content', () => {
//       const component = topElement.querySelector('.Content')
//       it('does not yet exist', () => {
//         expect(component).toBe(null)
//       })
//     })

//   })

  it('does not show Activate after callback is triggered', async () => {
    var topElement = document.createElement('div');
    const { getByText } = render(<App />);
    const app = topElement.querySelector('.App')
    // // expect(topElement.querySelector('.Content')).not.toBe(null)
    // expect(app).not.toBe(null)

    // const activate = topElement.querySelector('.Activate')


    // await wait(() => fireEvent.click(activate))
    fireEvent.click(getByText('Activate'))
    const content = await waitForElement(() => getByText('This is where I say things'))
    // expect(topElement.querySelector('.Activate')).toBe(null)
    expect(content).not.toBe(null)

    // expect(component).not.toBeVisible()
  });
})
