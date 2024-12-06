import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h3>Page not found!!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, totam
        quae a ex nostrum illum nobis! Fuga magnam adipisci minus? Earum,
        perspiciatis optio eius ipsum exercitationem deleniti alias nam ullam.
        <p>
          Got to <Link to="/">Home</Link>
        </p>
      </p>
    </div>
  );
}
