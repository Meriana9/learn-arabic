import React from "react";
import { useTranslation } from "react-i18next";

export default function Expressions() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("Expressions Lessons")}</h2>
      {/* Ajoutez le contenu spécifique à la catégorie Expressions */}
    </div>
  );
}
