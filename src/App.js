import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import Help from "./layouts/Help";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/careers/Careers";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="careers" element={<CareersLayout />}>
          <Route index element={<Careers />} loader={careersLoader} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
