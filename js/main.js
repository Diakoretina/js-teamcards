const teams = [
  {
    img: "wayne-barnett-founder-ceo.jpg",
    name: "Wayne Barnet",
    role: "Founder & CEO",
  },
  {
    img: "maria-medoro-chief-editor.jpg",
    name: "Maria Medoro",
    role: "Chief Editor",
  },
  {
    img: "walter-gordon-office-manager.jpg",
    name: "Walter Gordon",
    role: "Office Manager",
  },
  {
    img: "angela-proietti-social-media-manager.jpg",
    name: "Angela Proietti",
    role: "Social Media Manager",
  },
  {
    img: "scott-estrada-developer.jpg",
    name: "Scott Estrada",
    role: "Developer",
  },
  {
    img: "barbara-gabrielli-graphic-designer.jpg",
    name: "Barbara Gabrielli",
    role: "Graphic Designer",
  },
];

//Inizializzazione delle variabili

let container = document.querySelector(".cards__container");
let inputName = document.getElementById("name");
let inputRole = document.getElementById("role");
let inputImg = document.getElementById("img");

//Il bottone crea il nuovo oggetto

let buttonAddMember = document.querySelector(".add-btn");
buttonAddMember.addEventListener("click", (e) => {
  e.preventDefault();
  displayImages();
  addObject(inputName, inputRole, inputImg);
});

//La funzione svolge i processi per la creazione dell'oggetto

function addObject(name, role, img) {
  let newObj = {
    img: img.value,
    name: name.value,
    role: role.value,
  };
  teams.push(newObj);
}

displayImages();

//Il div viene aggiunto nel HTML

function displayImages() {
  container.innerHTML = "";
  for (i = 0; i < teams.length; i++) {
    container.innerHTML += `<div>
        <img src="${teams[i].img}" alt="${teams[i].name}">
        <h4>${teams[i].name}</h4>
        <p>${teams[i].role}</p>
        </div>`;
  }
}
