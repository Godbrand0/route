import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();
  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to="/" key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

export const careersLoader = async () => {
  const response = await fetch("http://localhost:4000/careers");

  return response.json();
};
console.log(careersLoader());
