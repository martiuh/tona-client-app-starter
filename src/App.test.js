import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import createStore from "createStore";
import { Provider } from "react-redux";
import App from "./App";

test("render", () => {
  let { store } = createStore({});
  const { getAllByText } = render(
    <Provider store={store}>
      <App store={store} />
    </Provider>
  );
  const linkElement = getAllByText(/home/i)[0];
  expect(linkElement).toBeInTheDocument();
});
