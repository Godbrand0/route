import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Help() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        This website is designed to provide information and resources for
        individuals with disabilities.
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
