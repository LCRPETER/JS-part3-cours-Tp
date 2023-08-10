const target = document.getElementById("target");
// creation du mot de demarage
let wordIndex = 0;
// creation de la lettre de demarage
let letterIndex = 0;
// Creation d'un tableau

const array = ["développeur", "Photographe", "créatif"];

// Creation d'une fonction recursive

function createLetter() {
  // creation d'un element span
  const letter = document.createElement("span");
  //   injection de l'élément span dans target
  target.appendChild(letter);
  //   Ajout des mots lettre par lettre
  letter.textContent = array[wordIndex][letterIndex];
  //   Faire disparaître les lettre avant 2.8s
  setTimeout(() => {
    letter.remove();
  }, 2800);
}
function loop() {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      // On remet wordIndex et letterIndex à 0 et on fait appel à la fonction elle même pour faire une boucle
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      // creation des mots lettre par lettre
      createLetter();
      letterIndex++;
      //   fonction recursive
      loop();
      //   wordIndex++;
    } else {
      // changement de mot
      wordIndex++;
      //   On fait revenir letter à 0
      letterIndex = 0;
      //   Attendre 2.8s avant d'aller au mot suivant
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
}
loop();
