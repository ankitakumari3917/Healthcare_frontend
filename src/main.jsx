import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {  MantineProvider } from "@mantine/core";
import { Notifications } from '@mantine/notifications';

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={{}}>
        <Notifications/>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
