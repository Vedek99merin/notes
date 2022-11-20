import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import { Workspace } from "./components";
import "./index.css";
import { useTasksStore } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "tasks/:id",
        element: <Workspace />,
        loader: ({ params }) => {
          const state = useTasksStore.getState();
          state.setSelectedTaskId(params.id);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
