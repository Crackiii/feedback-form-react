import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Trends from '../trends'
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});
let container = null

let props = {
    trends: {
        labels: [],
        values: []
    }
}


beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
it('should render Trends component', () => {

    props.trends.labels = [1, 2, 3]
    props.trends.values = [1, 2, 3]
    // act(() => {
    //     render(<Provider store={store}><Trends /></Provider>, container);
    // });

    // expect(container.querySelector("[data-testid='trend-head']").textContent).toBe('Daily Trends')

}) 