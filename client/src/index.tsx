import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Root from './routes/root';
import ErrorPage from "./errorHandling/ErrorPage";
import { Chatbot, OpenAi, Features, AboutUs, Contact, Dashboard } from './containers';
import { LogIn, SignUp, Help } from './components';
import { CustomizedResponses, BoostProductivity, Interact } from './containers/features/subcomponents';
import { Timeline, TechStack, Team } from './containers/about/subcomponents';
import AuthProvider from './contexts/authprovider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Chatbot />,
      },
      {
        path: "openai",
        element: <OpenAi />,
      },
      {
        path: "features",
        element: <Features />,
        children: [
          {
            path: "customized-responses",
            element: <CustomizedResponses />,
          },
          {
            path: "boost-productivity",
            element: <BoostProductivity />,
          },
          {
            path: "interact",
            element: <Interact />,
          },
        ],
      },
      {
        path: "about",
        element: <AboutUs />,
        children: [
          {
            path: "timeline",
            element: <Timeline />,
          },
          {
            path: "tech-stack",
            element: <TechStack />,
          },
          {
            path: "team",
            element: <Team />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "help",
        element: <Help />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
