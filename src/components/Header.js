import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";
import { useTranslation } from "react-i18next";
import '../global.css'; // Ajoutez ceci si vous avez ajouté vos styles dans global.css

export default function Header() {
  const { t, i18n } = useTranslation();
  
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
            <Link to="/lessons">{t('Lessons')}</Link>
          </li>
          <li>
            <Link to="/">
              <Logo className="" />
            </Link>
          </li>
          <li className="">
            <Link to="/aboutus">{t('About Us')}</Link>
          </li>
          <li className="pt-16">
            <Link to="/contact">{t('Contact')}</Link>
          </li>
         
      
             
        </ul>
      </nav>
      <div className="language-buttons">
        <button 
          className={`button-lang ${i18n.language === 'en' ? 'button-lang-selected' : ''}`}
          onClick={() => changeLanguage('en')}
          >
          EN
        </button>
        <button 
          className={`button-lang ${i18n.language === 'fr' ? 'button-lang-selected' : ''}`}
          onClick={() => changeLanguage('fr')}
          >
          FR
        </button>
      </div>
    </header>
  );
}


/* 
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";

function Header() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const openSignInModal = () => setShowSignInModal(true);
  const closeSignInModal = () => setShowSignInModal(false);

  const openSignUpModal = () => setShowSignUpModal(true);
  const closeSignUpModal = () => setShowSignUpModal(false);

  return (
    <header className="header">
      {/* Autres éléments de la barre de navigation ici }
      <nav>
        <ul>
          <li>
            <button onClick={openSignInModal}>Log In</button>
            {showSignInModal && (
              <Signin
                closeForm={closeSignInModal}
                openSignUpForm={openSignUpModal}
              />
            )}
          </li>
        </ul>
      </nav>
      {showSignUpModal && <Signup closeForm={closeSignUpModal} />}
    </header>
  );
}

export default Header; */
