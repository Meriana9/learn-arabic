import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className=" bg-pink-50 border-t-4 border-double border-slate-300 ">
      <nav className="flex justify-center items-center">
        <ul className="flex gap-64 py-6  font-semibold text-xl">
          <li className="">
            <Link to="/login">Log In</Link>
          </li>
          <li className="">
            <Link to="/lessons">Lessons</Link>
          </li>
     
          <li className="">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
