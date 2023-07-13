/* import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container p-8  max-w-2xl mx-auto bg-white rounded-3xl shadow-lg space-y-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Ahlan w sahlan fi manzelak al3arabi</h1>
        <p className="text-gray-600 pb-6">
          Bienvenue sur notre plateforme dédiée à l'apprentissage de la langue
          arabe. Ce site vous guide à travers les nuances de l'arabe classique
          (fosha), généralement enseigné à l'école, ainsi que de l'arabe syrien.
          Nous offrons également des ressources pour l'écriture en arabe et la
          translittération en alphabet latin, ce qui sera particulièrement utile
          pour ceux qui préfèrent se concentrer sur l'oral. Une caractéristique
          unique de notre site est qu'il vous permet de contribuer à notre
          bibliothèque de vocabulaire et d'informations. Nous comptons sur votre
          participation pour continuer à enrichir et améliorer notre plateforme.
          De plus, pour faciliter la compréhension et l'apprentissage de la
          prononciation, nous mettons à disposition des supports audio. Une
          méthode que nous adoptons ici est la combinaison de lettres et de
          chiffres pour créer ce que l'on appelle la "translittération" ou
          "romanisation". Cette technique vous aidera à comprendre plus
          facilement l'arabe. Nous vous souhaitons une expérience
          d'apprentissage enrichissante avec nous.
        </p>
        <Link to="/lessons" className="py-2 px-4 bg-pink-50 rounded-md hover:bg-pink-200 font-semibold">Accéder aux cours</Link>
      </div>
    </div>
  );
}

export default Home; */


import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container p-8  max-w-2xl mx-auto bg-white rounded-3xl shadow-lg space-y-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('welcome')}</h1>
        <p className="text-gray-600 pb-6">
          {t('home_text')}
        </p>
        <Link to="/lessons" className="py-2 px-4 bg-pink-50 rounded-md hover:bg-pink-200 font-semibold">{t('access_lessons')}</Link>
       
      </div>
    </div>
  );
}

export default Home;
