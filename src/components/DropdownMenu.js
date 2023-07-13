// components/DropdownMenu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span>Log in</span>
      {isOpen && (
        <div className="absolute bg-white py-2 rounded">
          <Link to="/signin" className="block px-4 py-2 hover:bg-gray-200">
            Sign in
          </Link>
          <Link to="/signup" className="block px-4 py-2 hover:bg-gray-200">
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}
