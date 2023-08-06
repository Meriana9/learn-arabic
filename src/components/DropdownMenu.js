// components/DropdownMenu.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span>{t("Log In")}</span>
      {isOpen && (
        <div className="absolute bg-white py-2 rounded">
          <Link to="/signin" className="block px-4 py-2 hover:bg-gray-200">
            {t("Sign In")}
          </Link>
          <Link to="/signup" className="block px-4 py-2 hover:bg-gray-200">
            {t("Sign Up")}
          </Link>
        </div>
      )}
    </div>
  );
}
