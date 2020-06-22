import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Form from '../form'
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});
let container = null
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});
it('should render feedback component', () => {

    console.log("CONTAINER-", container)

    act(() => {
        render(<Provider store={store}><Form /></Provider>, container);
    });

    expect(container.querySelector("[data-testid='form-head']").textContent).toBe('GIVE YOUR FEEDBACK')

}) 