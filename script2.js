const titulo = document.createElement("h1");
titulo.innerText = "TrybeTrip - Agência de Viagens";
document.body.appendChild(titulo);

const main = document.createElement("main");
mainContent.className = "main-content";
document.body.appendChild(main);

const section = document.createElement("section");
section.className = "center-content";
main.appendChild(section);

const paragrafo = document.createElement("p");
paragrafo.innerText = "Vamos viajar?";
section.appendChild(paragrafo);

const sectionLeft = document.createElement("section");
sectionLeft.className = "left-content";
main.appendChild(section);

const sectionRight = document.createElement("section");
sectionRight.className = "right-content";
main.appendChild(section);

const img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.className = "small-image";
img.width = "250px";
sectionLeft.appendChild(img);

const listaNaoOrdenada = document.createElement("ul");
const numeros = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

for (let index = 0; index < numeros.length; index += 1) {
  const li = document.createElement("li");
  li.innerText = numeros[index];
  listaNaoOrdenada.appendChild(li);
}
sectionRight.appendChild(listaNaoOrdenada);

for (let index = 0; index < 3; index += 1) {
  const h3 = document.createElement("h3");
  h3.innerText = index;
  main.appendChild(h3);
}
