import React, { useState } from "react";
import Vocabulary from "./lessons/Vocabulary";
import Grammar from "./lessons/Grammar";
import Letters from "./lessons/Letters";
import Numbers from "./lessons/Numbers";
import Expressions from "./lessons/Expressions";
import { useTranslation } from "react-i18next";

function Lessons() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("vocabulary");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto py-8 h-screen">
      <h1 className="text-4xl font-bold mb-8">{t("Lessons")}</h1>

      {/* Barre de navigation des catégories */}
      <div className="flex justify-center mb-8">
        <button
          className={`mr-4 ${
            activeCategory === "vocabulary" ? "font-bold" : "font-normal"
          }`}
          onClick={() => handleCategoryChange("vocabulary")}
        >
          {t("Vocabulary")}
        </button>
        <button
          className={`mr-4 ${
            activeCategory === "grammar" ? "font-bold" : "font-normal"
          }`}
          onClick={() => handleCategoryChange("grammar")}
        >
          {t("Grammar")}
        </button>
        <button
          className={`mr-4 ${
            activeCategory === "letters" ? "font-bold" : "font-normal"
          }`}
          onClick={() => handleCategoryChange("letters")}
        >
          {t("Letters")}
        </button>
        <button
          className={`mr-4 ${
            activeCategory === "numbers" ? "font-bold" : "font-normal"
          }`}
          onClick={() => handleCategoryChange("numbers")}
        >
          {t("Numbers")}
        </button>
        <button
          className={`mr-4 ${
            activeCategory === "expressions" ? "font-bold" : "font-normal"
          }`}
          onClick={() => handleCategoryChange("expressions")}
        >
          {t("Expressions")}
        </button>
      </div>

      {/* Contenu de la catégorie sélectionnée */}
      {activeCategory === "vocabulary" && <Vocabulary />}
      {activeCategory === "grammar" && <Grammar />}
      {activeCategory === "letters" && <Letters />}
      {activeCategory === "numbers" && <Numbers />}
      {activeCategory === "expressions" && <Expressions />}
    </div>
  );
}

export default Lessons;
