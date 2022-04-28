import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import { store } from "./store";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import smoothscroll from "smoothscroll-polyfill";
const queryClient = new QueryClient();

smoothscroll.polyfill();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
