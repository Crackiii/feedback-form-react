import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Feedback from '../feedback'

let props = {
    data: [{
        rating: 1,
        comment: 'test',
        createdAt: '2020-06-21T11:27:20.000Z',
        user: {
            id: 1,
            name: 'Nadeem',
            avatar: 'test'
        }
    }]
}
let container = null
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});
it('should render feedback component', () => {

    console.log("CONTAINER-", container)

    act(() => {
        render(<Feedback data={props.data} />, container);
    });

    expect(container.querySelector("[data-testid='name']").textContent).toBe('Nadeem')
    expect(container.querySelector("[data-testid='img']").getAttribute('src')).toBe('test')
    expect(container.querySelector("[data-testid='comment']").textContent).toBe('test')
    expect(container.querySelector("[data-testid='time']").textContent).toBe('Sun Jun 21 2020, at 4:27 pm')

})

it('should render when no feedbacks', () => {

    props.data = []

    act(() => {
        render(<Feedback data={props.data} />, container);
    });

    expect(container.querySelector("[data-testid='no-feeds']").textContent).toBe('No Feedbacks yet !')

}) 