import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Feedbacks from '../feedbacks'
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});
let container = null

let props = {
    f: [{
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

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});
it('should render feedbacks component', () => {

    // act(() => {
    //     render(<Provider store={store}><Feedbacks data={props.f} /></Provider>, container);
    // });

    // expect(container.querySelector("[data-testid='head']").textContent).toBe('Recent Comments')

}) 