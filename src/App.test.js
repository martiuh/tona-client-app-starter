import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import createStore from "createStore";
import App from "./App";

test("renders learn react link", () => {
  let { store } = createStore({});
  const { getByText } = render(<App store={store} />);
  const linkElement = getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
