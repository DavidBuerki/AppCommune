import { cercles } from './data.js';

const select = document.getElementById('commune');
const infos = document.getElementById('infos');

// Extraire toutes les communes uniques
const communesUniques = new Set();
cercles.forEach(cercle => {
  cercle.Communes.forEach(c => communesUniques.add(c));
});

// Remplir le menu déroulant
Array.from(communesUniques).sort().forEach(nomCommune => {
  const opt = document.createElement("option");
  opt.value = nomCommune;
  opt.textContent = nomCommune;
  select.appendChild(opt);
});

// Gérer la sélection
select.addEventListener("change", () => {
  const selection = select.value;

  // Trouver le cercle correspondant à la commune
  const cercle = cercles.find(c => c.Communes.includes(selection));

  if (cercle) {
    infos.innerHTML = `
      <p><strong>Cercle scolaire :</strong> ${cercle["Cercle scolaire"]}</p>
      <p><strong>Bâtiment :</strong> ${cercle.Bâtiment}</p>
      <p><strong>Adresse :</strong> ${cercle.Adresse}</p>
      <p><strong>Localité :</strong> ${cercle.Localité}</p>
      <p><strong>Site internet :</strong> <a href="http://${cercle.Site}" target="_blank">${cercle.Site}</a></p>
    `;
  } else {
    infos.innerHTML = '';
  }
});

// Gérer le bouton de réinitialisation
document.getElementById('reset').addEventListener('click', () => {
    select.value = '';
    infos.innerHTML = '';
  });
  
