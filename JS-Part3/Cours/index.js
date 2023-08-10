let objet = {
  Pseudo: "PETER",
  Age: 33,
  Technos: ["JavaScript", "React", "NodeJs"],
  Admin: false,
};
// Afficher React
// console.log(objet.Technos[1]);

let data = [
  {
    Pseudo: "PETER",
    Age: 33,
    Technos: ["JavaScript", "React", "NodeJs"],
    Admin: false,
  },
  {
    Pseudo: "JAMES",
    Age: 2,
    Technos: ["CSS", "React", "NodeJs"],
    Admin: false,
  },
  {
    Pseudo: "SEPHORA",
    Age: 3,
    Technos: ["PHP", "React", "NodeJs"],
    Admin: true,
  },
];

// Affichage du pseudo James
// console.log(data[1].Pseudo);
// Affichage du PHP
// console.log(data[2].Technos[0]);
for (const user of data) {
  //   console.log(user.Pseudo);
  //   console.log(user.Technos[0]);
  //   console.log("##############");
}

for (let i = 0; i < data.length; i++) {
  // console.log(data[i].Pseudo);
  // console.log(data[i].Technos[0]);
  // console.log("##############");
}
// ####################################

document.body.addEventListener("click", (e) => {
  console.log(e.target.id);
  switch (e.target.id) {
    case "JavaScript":
      document.body.style.background = "yellow";
      break;
    case "PHP":
      document.body.style.background = "green";
      break;
    case "Python":
      document.body.style.background = " rgb(0, 39, 77)";
      break;
    default:
      break;
  }
});
