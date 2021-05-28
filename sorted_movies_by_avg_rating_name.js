/** WIP **/

// Filter movie list by average rating, 
// name. Sort filtered list by any field inside movie object

let mvs = [{
    "id": 1,
    "name": "Intouchables",
    "year": 2005
  }, {
    "id": 2,
    "name": "Mummy, The",
    "year": 2009
  }, {
    "id": 3,
    "name": "X-Files: I Want to Believe, The",
    "year": 2011
  }, {
    "id": 4,
    "name": "Frankenhooker",
    "year": 1995
  }, {
    "id": 5,
    "name": "Basic Instinct 2",
    "year": 1960
  }, {
    "id": 6,
    "name": "Four Men and a Prayer",
    "year": 2007
  }, {
    "id": 7,
    "name": "White Man's Burden",
    "year": 2005
  }, {
    "id": 8,
    "name": "Moonwalker",
    "year": 1998
  }, {
    "id": 9,
    "name": "A Walk in the Woods",
    "year": 2011
  }, {
    "id": 10,
    "name": "Farmer & Chase",
    "year": 2005
  }, {
    "id": 11,
    "name": "Pride of the Marines",
    "year": 1995
  }, {
    "id": 12,
    "name": "Boot Camp",
    "year": 1993
  }, {
    "id": 13,
    "name": "What's New, Pussycat",
    "year": 2002
  }, {
    "id": 14,
    "name": "Old Lady Who Walked in the Sea, The (Vieille qui marchait dans la mer, La)",
    "year": 2012
  }, {
    "id": 15,
    "name": "Tea For Two",
    "year": 2005
  }, {
    "id": 16,
    "name": "Six in Paris (Paris vu par...)",
    "year": 2011
  }, {
    "id": 17,
    "name": "Terror's Advocate (Avocat de la terreur, L')",
    "year": 1989
  }, {
    "id": 18,
    "name": "Miracle in Cell No. 7",
    "year": 2004
  }, {
    "id": 19,
    "name": "Iran Job, The",
    "year": 2008
  }, {
    "id": 20,
    "name": "Dark Angel, The",
    "year": 1986
  }, {
    "id": 21,
    "name": "Fried Green Tomatoes",
    "year": 1997
  }, {
    "id": 22,
    "name": "Winner, The",
    "year": 2009
  }, {
    "id": 23,
    "name": "Kilometre Zero (Kilomètre zéro)",
    "year": 2006
  }, {
    "id": 24,
    "name": "Smile",
    "year": 2004
  }, {
    "id": 25,
    "name": "Ghost Ship, The",
    "year": 1990
  }, {
    "id": 26,
    "name": "Antique (Sayangkoldong yangkwajajeom aentikeu)",
    "year": 1986
  }, {
    "id": 27,
    "name": "Day of the Crows, The (Le jour des corneilles)",
    "year": 1996
  }, {
    "id": 28,
    "name": "And the Band Played On",
    "year": 1969
  }, {
    "id": 29,
    "name": "Tie Me Up! Tie Me Down! (¡Átame!)",
    "year": 1986
  }, {
    "id": 30,
    "name": "Monty Python: Almost the Truth - Lawyers Cut",
    "year": 2003
  }, {
    "id": 31,
    "name": "Fallen, The",
    "year": 2007
  }, {
    "id": 32,
    "name": "Dear Brigitte",
    "year": 2001
  }, {
    "id": 33,
    "name": "Backbeat",
    "year": 2002
  }, {
    "id": 34,
    "name": "Scarlet Letter, The (Der scharlachrote Buchstabe)",
    "year": 2006
  }, {
    "id": 35,
    "name": "Hana and Alice (Hana to Arisu)",
    "year": 2004
  }, {
    "id": 36,
    "name": "Valley of the Dragons",
    "year": 2013
  }, {
    "id": 37,
    "name": "Dark Crystal, The",
    "year": 2009
  }, {
    "id": 38,
    "name": "Louis Cyr: The Strongest Man in the World",
    "year": 1987
  }, {
    "id": 39,
    "name": "Silence, The (Tystnaden)",
    "year": 2011
  }, {
    "id": 40,
    "name": "Lawnmower Man, The",
    "year": 1993
  }, {
    "id": 41,
    "name": "Woman Thou Art Loosed",
    "year": 1995
  }, {
    "id": 42,
    "name": "Shaft in Africa",
    "year": 1998
  }, {
    "id": 43,
    "name": "Cairo Time",
    "year": 2008
  }, {
    "id": 44,
    "name": "Rio Lobo",
    "year": 2001
  }, {
    "id": 45,
    "name": "Streamers",
    "year": 2004
  }, {
    "id": 46,
    "name": "Loss of a Teardrop Diamond, The",
    "year": 1988
  }, {
    "id": 47,
    "name": "Chicken, the Fish and the King Crab, The (El pollo, el pez y el cangrejo real)",
    "year": 2009
  }, {
    "id": 48,
    "name": "Federico Fellini's Autobiography (Federico Fellini - un autoritratto ritrovato)",
    "year": 2009
  }, {
    "id": 49,
    "name": "She's the One",
    "year": 1994
  }, {
    "id": 50,
    "name": "Screamtime",
    "year": 2000
  }, {
    "id": 51,
    "name": "Guyana Tragedy: The Story of Jim Jones",
    "year": 2004
  }, {
    "id": 52,
    "name": "Solo",
    "year": 2011
  }, {
    "id": 53,
    "name": "7 Virgins (7 vírgenes)",
    "year": 2009
  }, {
    "id": 54,
    "name": "Red Dog",
    "year": 1993
  }, {
    "id": 55,
    "name": "Dominion: Prequel to the Exorcist",
    "year": 1984
  }, {
    "id": 56,
    "name": "Bad Lieutenant: Port of Call New Orleans",
    "year": 2001
  }, {
    "id": 57,
    "name": "Birthday Girl",
    "year": 2000
  }, {
    "id": 58,
    "name": "Sundays and Cybele (Les dimanches de Ville d'Avray)",
    "year": 2012
  }, {
    "id": 59,
    "name": "Who's the Caboose?",
    "year": 2002
  }, {
    "id": 60,
    "name": "Dillinger Is Dead (Dillinger è morto)",
    "year": 1998
  }, {
    "id": 61,
    "name": "Black Death",
    "year": 1986
  }, {
    "id": 62,
    "name": "Curse of the Blair Witch",
    "year": 2008
  }, {
    "id": 63,
    "name": "Brown of Harvard",
    "year": 2010
  }, {
    "id": 64,
    "name": "Berlin Babylon",
    "year": 2002
  }, {
    "id": 65,
    "name": "Christopher Strong",
    "year": 2006
  }, {
    "id": 66,
    "name": "Federal Hill",
    "year": 1996
  }, {
    "id": 67,
    "name": "Leave The World Behind",
    "year": 2012
  }, {
    "id": 68,
    "name": "The Photographer",
    "year": 2002
  }, {
    "id": 69,
    "name": "Factory, The",
    "year": 1990
  }, {
    "id": 70,
    "name": "Hans Christian Andersen",
    "year": 2002
  }, {
    "id": 71,
    "name": "Children of Hiroshima (Gembaku no ko)",
    "year": 1969
  }, {
    "id": 72,
    "name": "Gotcha!",
    "year": 2002
  }, {
    "id": 73,
    "name": "Safe",
    "year": 2003
  }, {
    "id": 74,
    "name": "Still Walking (Aruitemo aruitemo)",
    "year": 1997
  }, {
    "id": 75,
    "name": "Matinée",
    "year": 2005
  }, {
    "id": 76,
    "name": "Ace of Aces (a.k.a. Super Ace, The) (As des as, L')",
    "year": 2011
  }, {
    "id": 77,
    "name": "Last of England, The",
    "year": 2001
  }, {
    "id": 78,
    "name": "Alone in the Dark II",
    "year": 1996
  }, {
    "id": 79,
    "name": "Fire-Eater (Tulennielijä)",
    "year": 2003
  }, {
    "id": 80,
    "name": "Pumpkinhead",
    "year": 2010
  }, {
    "id": 81,
    "name": "Slaughterhouse",
    "year": 1999
  }, {
    "id": 82,
    "name": "Great Gatsby, The",
    "year": 2003
  }, {
    "id": 83,
    "name": "Seventh Continent, The (Der siebente Kontinent)",
    "year": 2006
  }, {
    "id": 84,
    "name": "Purple Rain",
    "year": 1999
  }, {
    "id": 85,
    "name": "Yuva",
    "year": 2010
  }, {
    "id": 86,
    "name": "Luther the Geek",
    "year": 1995
  }, {
    "id": 87,
    "name": "Matewan",
    "year": 2004
  }, {
    "id": 88,
    "name": "Birdemic: Shock and Terror",
    "year": 2006
  }, {
    "id": 89,
    "name": "Jim Jefferies: BARE",
    "year": 2006
  }, {
    "id": 90,
    "name": "Armour of God II: Operation Condor (Operation Condor) (Fei ying gai wak)",
    "year": 2010
  }, {
    "id": 91,
    "name": "Jack Frost",
    "year": 2013
  }, {
    "id": 92,
    "name": "Persuasion",
    "year": 2008
  }, {
    "id": 93,
    "name": "I Remember (Eu Me Lembro)",
    "year": 2000
  }, {
    "id": 94,
    "name": "Agnes Browne",
    "year": 1998
  }, {
    "id": 95,
    "name": "Trancers",
    "year": 2005
  }, {
    "id": 96,
    "name": "Cranford",
    "year": 1998
  }, {
    "id": 97,
    "name": "Daytrippers, The",
    "year": 2010
  }, {
    "id": 98,
    "name": "Hot Tub Time Machine 2",
    "year": 1986
  }, {
    "id": 99,
    "name": "Sorry, Haters",
    "year": 1986
  }, {
    "id": 100,
    "name": "Games People Play: New York",
    "year": 2005
  }];

  let ratingz = [{"id":1,"movie_id":98,"rating":6.8},
  {"id":2,"movie_id":77,"rating":6.4},
  {"id":3,"movie_id":57,"rating":5.1},
  {"id":4,"movie_id":54,"rating":8.4},
  {"id":5,"movie_id":66,"rating":4.5},
  {"id":6,"movie_id":16,"rating":8.4},
  {"id":7,"movie_id":66,"rating":5.2},
  {"id":8,"movie_id":87,"rating":6.3},
  {"id":9,"movie_id":22,"rating":5.4},
  {"id":10,"movie_id":70,"rating":9.9},
  {"id":11,"movie_id":90,"rating":3.3},
  {"id":12,"movie_id":69,"rating":3.9},
  {"id":13,"movie_id":75,"rating":1.2},
  {"id":14,"movie_id":5,"rating":9.6},
  {"id":15,"movie_id":39,"rating":8.7},
  {"id":16,"movie_id":89,"rating":3.7},
  {"id":17,"movie_id":51,"rating":6.5},
  {"id":18,"movie_id":20,"rating":6.8},
  {"id":19,"movie_id":85,"rating":9.5},
  {"id":20,"movie_id":95,"rating":7.9},
  {"id":21,"movie_id":53,"rating":5.0},
  {"id":22,"movie_id":4,"rating":8.7},
  {"id":23,"movie_id":84,"rating":2.2},
  {"id":24,"movie_id":12,"rating":9.2},
  {"id":25,"movie_id":27,"rating":6.1},
  {"id":26,"movie_id":11,"rating":6.3},
  {"id":27,"movie_id":88,"rating":1.2},
  {"id":28,"movie_id":76,"rating":8.7},
  {"id":29,"movie_id":6,"rating":4.8},
  {"id":30,"movie_id":5,"rating":6.8},
  {"id":31,"movie_id":29,"rating":2.6},
  {"id":32,"movie_id":32,"rating":3.5},
  {"id":33,"movie_id":59,"rating":5.1},
  {"id":34,"movie_id":60,"rating":7.9},
  {"id":35,"movie_id":14,"rating":2.4},
  {"id":36,"movie_id":40,"rating":2.8},
  {"id":37,"movie_id":42,"rating":8.0},
  {"id":38,"movie_id":23,"rating":5.7},
  {"id":39,"movie_id":29,"rating":8.7},
  {"id":40,"movie_id":23,"rating":8.2},
  {"id":41,"movie_id":72,"rating":9.4},
  {"id":42,"movie_id":86,"rating":5.1},
  {"id":43,"movie_id":56,"rating":9.7},
  {"id":44,"movie_id":2,"rating":4.5},
  {"id":45,"movie_id":58,"rating":2.3},
  {"id":46,"movie_id":61,"rating":1.2},
  {"id":47,"movie_id":2,"rating":7.7},
  {"id":48,"movie_id":95,"rating":9.1},
  {"id":49,"movie_id":46,"rating":7.6},
  {"id":50,"movie_id":97,"rating":5.0},
  {"id":51,"movie_id":35,"rating":7.9},
  {"id":52,"movie_id":37,"rating":5.1},
  {"id":53,"movie_id":47,"rating":4.1},
  {"id":54,"movie_id":21,"rating":5.9},
  {"id":55,"movie_id":82,"rating":6.9},
  {"id":56,"movie_id":31,"rating":5.2},
  {"id":57,"movie_id":22,"rating":9.6},
  {"id":58,"movie_id":91,"rating":8.3},
  {"id":59,"movie_id":15,"rating":2.7},
  {"id":60,"movie_id":47,"rating":9.5},
  {"id":61,"movie_id":1,"rating":1.6},
  {"id":62,"movie_id":51,"rating":5.4},
  {"id":63,"movie_id":51,"rating":7.6},
  {"id":64,"movie_id":26,"rating":3.5},
  {"id":65,"movie_id":2,"rating":6.0},
  {"id":66,"movie_id":81,"rating":2.4},
  {"id":67,"movie_id":68,"rating":6.8},
  {"id":68,"movie_id":64,"rating":5.0},
  {"id":69,"movie_id":59,"rating":1.5},
  {"id":70,"movie_id":22,"rating":7.0},
  {"id":71,"movie_id":24,"rating":3.6},
  {"id":72,"movie_id":76,"rating":1.9},
  {"id":73,"movie_id":96,"rating":2.3},
  {"id":74,"movie_id":16,"rating":8.3},
  {"id":75,"movie_id":11,"rating":1.0},
  {"id":76,"movie_id":46,"rating":4.1},
  {"id":77,"movie_id":24,"rating":1.9},
  {"id":78,"movie_id":97,"rating":5.2},
  {"id":79,"movie_id":35,"rating":5.3},
  {"id":80,"movie_id":76,"rating":4.3},
  {"id":81,"movie_id":58,"rating":9.3},
  {"id":82,"movie_id":65,"rating":8.5},
  {"id":83,"movie_id":35,"rating":9.5},
  {"id":84,"movie_id":8,"rating":2.0},
  {"id":85,"movie_id":4,"rating":1.8},
  {"id":86,"movie_id":7,"rating":7.0},
  {"id":87,"movie_id":51,"rating":3.1},
  {"id":88,"movie_id":87,"rating":4.7},
  {"id":89,"movie_id":66,"rating":1.4},
  {"id":90,"movie_id":29,"rating":7.1},
  {"id":91,"movie_id":72,"rating":4.4},
  {"id":92,"movie_id":30,"rating":4.3},
  {"id":93,"movie_id":75,"rating":3.6},
  {"id":94,"movie_id":85,"rating":6.9},
  {"id":95,"movie_id":34,"rating":9.3},
  {"id":96,"movie_id":45,"rating":7.7},
  {"id":97,"movie_id":96,"rating":8.0},
  {"id":98,"movie_id":48,"rating":3.9},
  {"id":99,"movie_id":10,"rating":7.6},
  {"id":100,"movie_id":34,"rating":4.5},
  {"id":101,"movie_id":1,"rating":6.3},
  {"id":102,"movie_id":88,"rating":3.4},
  {"id":103,"movie_id":62,"rating":3.9},
  {"id":104,"movie_id":72,"rating":3.8},
  {"id":105,"movie_id":24,"rating":9.0},
  {"id":106,"movie_id":68,"rating":6.4},
  {"id":107,"movie_id":96,"rating":6.3},
  {"id":108,"movie_id":27,"rating":7.8},
  {"id":109,"movie_id":30,"rating":4.9},
  {"id":110,"movie_id":11,"rating":8.0},
  {"id":111,"movie_id":37,"rating":7.2},
  {"id":112,"movie_id":32,"rating":9.3},
  {"id":113,"movie_id":16,"rating":6.1},
  {"id":114,"movie_id":48,"rating":7.4},
  {"id":115,"movie_id":35,"rating":8.8},
  {"id":116,"movie_id":97,"rating":1.4},
  {"id":117,"movie_id":61,"rating":3.0},
  {"id":118,"movie_id":20,"rating":7.4},
  {"id":119,"movie_id":4,"rating":8.5},
  {"id":120,"movie_id":80,"rating":9.2},
  {"id":121,"movie_id":53,"rating":2.1},
  {"id":122,"movie_id":96,"rating":3.1},
  {"id":123,"movie_id":72,"rating":1.0},
  {"id":124,"movie_id":86,"rating":6.4},
  {"id":125,"movie_id":66,"rating":8.7},
  {"id":126,"movie_id":79,"rating":6.8},
  {"id":127,"movie_id":71,"rating":6.6},
  {"id":128,"movie_id":75,"rating":4.9},
  {"id":129,"movie_id":62,"rating":1.9},
  {"id":130,"movie_id":21,"rating":8.5},
  {"id":131,"movie_id":51,"rating":8.6},
  {"id":132,"movie_id":13,"rating":7.3},
  {"id":133,"movie_id":94,"rating":6.3},
  {"id":134,"movie_id":23,"rating":6.8},
  {"id":135,"movie_id":56,"rating":9.6},
  {"id":136,"movie_id":70,"rating":1.7},
  {"id":137,"movie_id":74,"rating":6.0},
  {"id":138,"movie_id":88,"rating":5.0},
  {"id":139,"movie_id":70,"rating":8.5},
  {"id":140,"movie_id":58,"rating":2.1},
  {"id":141,"movie_id":21,"rating":3.5},
  {"id":142,"movie_id":87,"rating":3.7},
  {"id":143,"movie_id":43,"rating":7.5},
  {"id":144,"movie_id":13,"rating":9.4},
  {"id":145,"movie_id":70,"rating":4.7},
  {"id":146,"movie_id":97,"rating":7.9},
  {"id":147,"movie_id":76,"rating":3.5},
  {"id":148,"movie_id":52,"rating":3.7},
  {"id":149,"movie_id":52,"rating":8.4},
  {"id":150,"movie_id":18,"rating":3.0},
  {"id":151,"movie_id":2,"rating":6.8},
  {"id":152,"movie_id":77,"rating":2.6},
  {"id":153,"movie_id":98,"rating":8.5},
  {"id":154,"movie_id":69,"rating":8.4},
  {"id":155,"movie_id":87,"rating":6.7},
  {"id":156,"movie_id":92,"rating":1.8},
  {"id":157,"movie_id":84,"rating":9.2},
  {"id":158,"movie_id":73,"rating":3.7},
  {"id":159,"movie_id":4,"rating":2.3},
  {"id":160,"movie_id":99,"rating":3.7},
  {"id":161,"movie_id":10,"rating":7.1},
  {"id":162,"movie_id":51,"rating":2.4},
  {"id":163,"movie_id":65,"rating":6.7},
  {"id":164,"movie_id":21,"rating":1.2},
  {"id":165,"movie_id":44,"rating":7.5},
  {"id":166,"movie_id":36,"rating":6.3},
  {"id":167,"movie_id":51,"rating":9.6},
  {"id":168,"movie_id":96,"rating":9.0},
  {"id":169,"movie_id":40,"rating":1.8},
  {"id":170,"movie_id":3,"rating":7.7},
  {"id":171,"movie_id":16,"rating":7.6},
  {"id":172,"movie_id":22,"rating":3.1},
  {"id":173,"movie_id":90,"rating":2.5},
  {"id":174,"movie_id":37,"rating":5.1},
  {"id":175,"movie_id":95,"rating":5.2},
  {"id":176,"movie_id":48,"rating":4.2},
  {"id":177,"movie_id":39,"rating":2.8},
  {"id":178,"movie_id":24,"rating":3.8},
  {"id":179,"movie_id":52,"rating":8.8},
  {"id":180,"movie_id":26,"rating":6.7},
  {"id":181,"movie_id":80,"rating":9.7},
  {"id":182,"movie_id":58,"rating":2.5},
  {"id":183,"movie_id":82,"rating":1.1},
  {"id":184,"movie_id":99,"rating":6.7},
  {"id":185,"movie_id":71,"rating":1.4},
  {"id":186,"movie_id":67,"rating":1.5},
  {"id":187,"movie_id":97,"rating":1.2},
  {"id":188,"movie_id":94,"rating":4.0},
  {"id":189,"movie_id":16,"rating":3.0},
  {"id":190,"movie_id":38,"rating":8.0},
  {"id":191,"movie_id":41,"rating":8.4},
  {"id":192,"movie_id":65,"rating":9.4},
  {"id":193,"movie_id":89,"rating":8.0},
  {"id":194,"movie_id":50,"rating":4.0},
  {"id":195,"movie_id":65,"rating":4.1},
  {"id":196,"movie_id":98,"rating":1.9},
  {"id":197,"movie_id":3,"rating":9.9},
  {"id":198,"movie_id":83,"rating":8.3},
  {"id":199,"movie_id":47,"rating":1.2},
  {"id":200,"movie_id":19,"rating":3.1}];

// O(M)
function getMovies() {
  return []; // [{id, name, year}]
}

// O(R)
function getRatings() {
  return []; // [{id, movie_id, rating}]   0 <= rating <= 10   // e.g 9.3
}

/**
 * minAvgRating ->
 *    avgRating >= minAvgRating
 *
 * sort ->
 *    name -> ascending order movies by name
 *   -name -> descending
 *
 *    avgRating
 * 
 *
 * search ->
 *   'ave' -> 'Avengers'
 *   'avengers' -> 'Avengers'
 *   'AvengersInfinitywar' -> 'Avengers'
 */
const toLower = str => str.toLocaleLowerCase()

const getAvrgRating = (movie, movingWithRatings) => {
  let count = 0;
  return movingWithRatings.reduce((acc, value, index) => {
    const movieMatch = movie.id === value.movie_id
    if (movieMatch) {
      acc+=value.rating
      count++
    }
    if (index === movingWithRatings.length - 1) {
      acc = acc/count
    }
    return acc
  }, 0)
}

const isSubString = (str1, str2) => {
  str1 = str1.split(" ").join("")
  str2 = str2.split(" ").join("")
  if (str1.length > str2.length) {
    return str1.startWith(str2)
  } else {
    return str2.startWith(str1)
  }
}

const moviesList = getMovies()
const movingWithRatings = getRatings();

function queryMovies({ search, sort, minAvgRating }) {
  let filteredMovies = moviesList.filter(movie => getAvrgRating(movie, movingWithRatings) >= minAvgRating);
  filteredMovies = filteredMovies.filter(movie => isSubString(toLower(movie.name), toLower(search)))
  filteredMovies = filteredMovies.sort((a, b) => {
    const isDescending = sort[0] === '-' ? true : false
    let sortCopy = isDescending ? sort.slice(1) : sort
    const value1 = a[sortCopy]
    const value2 = b[sortCopy]
    if (isDescending) {
      return value1 > value2 ? -1 : 1
    }else {
      return value1 < value2 ? -1 : 1
    }
  })
  filteredMovies = filteredMovies.map(movie => ({
    ...movie,
    avgRating: movingWithRatings.filter(ratedMovie => ratedMovie.movie_id === movie.id)[0].rating
  }))
  return filteredMovies
}

