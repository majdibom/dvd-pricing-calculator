const BTTF_PRICE = 15;
const OTHER_MOVIE_PRICE = 20;

const DISCOUNTS = {
  2: 0.9,
  3: 0.8,
};

const BTTF_TITLES = new Set([
  'Back to the Future 1',
  'Back to the Future 2',
  'Back to the Future 3',
]);

/**
 * Calcule le prix total d'un panier de films.
 * @param {string} basket - Contenu du panier sous forme de texte.
 * @returns {number} - Le prix total.
 */
function calculateTotalPrice(basket) {
  const movies = parseMovies(basket);
  const { bttfCount, otherMoviesCount, uniqueBttfCount } =
    analyzeBasket(movies);

  const bttfPrice = calculateBttfPrice(bttfCount, uniqueBttfCount);
  const otherMoviesPrice = otherMoviesCount * OTHER_MOVIE_PRICE;

  return bttfPrice + otherMoviesPrice;
}

/**
 * Analyse le panier pour compter les films BTTF et les autres films.
 * @param {string[]} movies - Liste des films.
 * @returns {object} - Compte des films BTTF et autres.
 */
function analyzeBasket(movies) {
  let bttfCount = 0;
  let otherMoviesCount = 0;
  const uniqueBttf = new Set();

  movies.forEach((title) => {
    if (BTTF_TITLES.has(title)) {
      bttfCount++;
      uniqueBttf.add(title);
    } else {
      otherMoviesCount++;
    }
  });

  return {
    bttfCount,
    otherMoviesCount,
    uniqueBttfCount: uniqueBttf.size,
  };
}

/**
 * Calcule le prix des films BTTF avec les réductions.
 * @param {number} bttfCount - Nombre total de films BTTF.
 * @param {number} uniqueBttfCount - Nombre de films BTTF uniques.
 * @returns {number} - Prix total des films BTTF avec réduction.
 */
function calculateBttfPrice(bttfCount, uniqueBttfCount) {
  const discount = DISCOUNTS[uniqueBttfCount] || 1;
  return bttfCount * BTTF_PRICE * discount;
}

/**
 * Parse le contenu du panier en une liste de titres de films.
 * @param {string} basket - Contenu du panier.
 * @returns {string[]} - Liste des titres de films.
 */
function parseMovies(basket) {
  return basket.split('\n').map((title) => title.trim());
}

module.exports = { calculateTotalPrice };
