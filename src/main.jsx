import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import appStore from "./utils/appStore";
import AppLayout from "./app";
import Body from "./components/body";
import MainContainer from "./components/mainContainer";
import WatchPage from "./components/watchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            index: true,
            element: <MainContainer />,
          },
          {
            path: "watch",
            element: <WatchPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);