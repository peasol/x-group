import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './assets/styles/style.min.css';
import Index from './publishing/Index';
import TheButton from './publishing/guide/TheButton';
import TheSwitch from './publishing/guide/TheSwitch';
import TheTab from './publishing/guide/TheTab';
import TheChart from './publishing/guide/TheChart';

const router = createBrowserRouter([
  { path: "/", element: <Link to="/publishing" className="link-test">퍼블리싱 테스트</Link> },
  { path: "/publishing", element: <Index /> },
  { path: "/publishing/guide/TheButton", element: <TheButton /> },
  { path: "/publishing/guide/TheSwitch", element: <TheSwitch /> },
  { path: "/publishing/guide/TheTab", element: <TheTab /> },
  { path: "/publishing/guide/TheChart", element: <TheChart /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
