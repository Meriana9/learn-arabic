/* import React from "react";

function Vocabulary() {
  // Contenu de la catégorie Vocabulary

  return (
    <div>
      <h2>Vocabulary Lessons</h2>
      
    </div>
  );
}

export default Vocabulary;
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Vocabulary() {
  // Contenu de la catégorie Vocabulary
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/lesson/1') // Changer l'URL selon vos besoins
      .then(response => {
        setLesson(response.data);
      })
      .catch(error => {
        console.error('Une erreur est survenue !', error);
      });
  }, []);

  if (!lesson) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Vocabulary Lessons</h2>
      <h1>{lesson.title}</h1>
      <p>{lesson.content}</p>
    </div>
  );
}

export default Vocabulary;
