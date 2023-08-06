import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";
import { useTranslation } from "react-i18next";
import "../global.css";
import { AuthContext } from "../contexts/AuthContext"; // Import the AuthContext

export default function Header() {
  const { t, i18n } = useTranslation();
  const { authInfo } = useContext(AuthContext); // Get the auth info from context

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className=" bg-pink-50 border-b-4 border-double border-slate-300">
      <nav className="flex justify-center items-center">
        <ul className="flex gap-64 pt-6  font-semibold text-xl">
          <li className="pt-16">
            <DropdownMenu />
          </li>
          <li className="">
            <Link to="/lessons">{t("Lessons")}</Link>
          </li>
          <li>
            <Link to="/">
              <Logo className="" />
            </Link>
          </li>
          <li className="">
            <Link to="/aboutus">{t("About Us")}</Link>
          </li>
          <li className="pt-16">
            <Link to="/contact">{t("Contact")}</Link>
          </li>
        </ul>
      </nav>
      <div className="language-buttons">
        <button
          className={`button-lang ${
            i18n.language === "en" ? "button-lang-selected" : ""
          }`}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
        <button
          className={`button-lang ${
            i18n.language === "fr" ? "button-lang-selected" : ""
          }`}
          onClick={() => changeLanguage("fr")}
        >
          FR
        </button>
      </div>
      <div className="auth-info">
        {authInfo.user ? (
          `Bienvenue, ${authInfo.user.name}`
        ) : (
          <Link to="/signin">Se connecter</Link>
        )}
      </div>
    </header>
  );
}
