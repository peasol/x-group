import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './assets/styles/style.min.css';
import Index from './publishing/Index';
import TheButton from './publishing/guide/TheButton';
import TheSwitch from './publishing/guide/TheSwitch';
import TheTab from './publishing/guide/TheTab';
import TheChart from './publishing/guide/TheChart';
import TheAccordion from "./publishing/guide/TheAccordion";
import TheModal from "./publishing/guide/TheModal";


const router = createBrowserRouter([
  { path: "/", element: <Link to="/publishing" className="link-test">퍼블리싱 테스트</Link> },
  { path: "/publishing", element: <Index /> },
  { path: "/publishing/guide/TheButton", element: <TheButton /> },
  { path: "/publishing/guide/TheSwitch", element: <TheSwitch /> },
  { path: "/pulblishing/guide/TheTab", element: <TheTab /> },
  { path: "/publishing/guide/TheChart", element: <TheChart /> },
  { path: "/publishing/guide/TheAccordion", element: <TheAccordion /> },
  { path: "/publishing/guide/TheModal", element: <TheModal /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
