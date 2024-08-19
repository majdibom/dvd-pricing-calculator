const fs = require('fs');
const path = require('path');

/**
 * Lit le contenu du panier depuis un fichier texte.
 * @param {string} fileName - Nom du fichier.
 * @returns {string} - Contenu du panier sous forme de texte.
 */
function readBasketFromFile(fileName) {
  const filePath = path.join(__dirname, `../${fileName}`);
  return fs.readFileSync(filePath, 'utf-8').trim();
}

module.exports = { readBasketFromFile };
