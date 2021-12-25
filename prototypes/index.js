const {kitties} = require('./datasets/kitties');
const {clubs} = require('./datasets/clubs');
const {mods} = require('./datasets/mods');
const {cakes} = require('./datasets/cakes');
const {classrooms} = require('./datasets/classrooms');
const {breweries} = require('./datasets/breweries');
const {nationalParks} = require('./datasets/nationalParks');
const {books} = require('./datasets/books');
const {weather} = require('./datasets/weather');
const {instructors, cohorts} = require('./datasets/turing');
const {bosses, sidekicks} = require('./datasets/bosses');
const {constellations, stars} = require('./datasets/astronomy');
const {weapons, characters} = require('./datasets/ultima');
const {dinosaurs, humans, movies} = require('./datasets/dinosaurs');


// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(kitty => kitty.color === 'orange').map(orangeKitty => orangeKitty.name);
    return result;

    // Annotation:
    // getting in an array of object with name, age and color properties.
    // want to get back an array of only the orange cat's names.
    // reach for a filter to get back orange cats (want a subset of the original data).
    // only want the names of the cats.
    // reach for a map
    //  map over the filtered cats and get back their name property.
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => b.age - a.age);
    return result;

    // Annotation:
    // getting in a sorted array of object in reverse order
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map(kitty => {
      kitty.age += 2;
      return kitty;
    });
    return result;
  }
};


// getting in an array of object with age+2
// reach for a map
// map get back an array of cats with increased age


// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    return clubs.reduce((newObj, obj) => {
      obj.members.reduce((acc, member) => {
        if (!acc[member]) {
          acc[member] = [];
        }
        acc[member].push(obj.club);
        return acc;
      }, newObj);
      return newObj;
    }, {});
    // Annotation:
    // using the reduce function twice for the array traversing only once.

  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.reduce((acc, obj) => {
      const object = {};
      object.mod = obj.mod;
      object.studentsPerInstructor = obj.students / obj.instructors;
      acc.push(object);
      return acc;
    }, []);

    return result;

    // Annotation:
    // using the reduce function for the array traversing
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.reduce((acc, obj) => {
      const newObj = {};
      newObj.flavor = obj.cakeFlavor;
      newObj.inStock = obj.inStock;
      acc.push(newObj);
      return acc;
    }, []);
    return result;

    // Annotation:
    // using the reduce function for the array traversing
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock);
    return result;

    // Annotation:
    // using the filter function to filter the array;
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((sum, cake) => sum + cake.inStock, 0);
    return result;

    // Annotation:
    // using the reduce function for the array traversing and concat the amount
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.reduce((acc, topping) => {
        if (acc.indexOf(topping) === -1) {
          acc.push(topping);
        }
        return acc;
      }, acc);
      return acc;
    }, []);
    return result;

    // Annotation:
    // using the reduce function for the array traversing and
    // indexOf to find the presence in the array
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.reduce((arr, topping) => {
        if (arr[topping]) {
          arr[topping]++;
        } else {
          arr[topping] = 1;
        }
        return arr;
      }, acc);
      return acc;
    }, {});
    return result;

    // Annotation:
    // using the reduce function twice for the array traversing only once
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => classroom.program === 'FE');
    return result;

    // Annotation:
    // using the filter function for filtering array
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((acc, classroom) => {
      if (classroom.program === 'FE') {
        if (!acc.feCapacity) {
          acc.feCapacity = 0;
        }
        acc.feCapacity += classroom.capacity;
      } else {
        if (!acc.beCapacity) {
          acc.beCapacity = 0;
        }
        acc.beCapacity += classroom.capacity;
      }
      return acc;
    }, {});
    return result;

    // Annotation:
    // using the reduce function for the array traversing
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => {
      return a.capacity - b.capacity;
    });
    return result;

    // Annotation:
    // using the sort function to sort array
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = books.reduce((acc, book) => {
      if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
        acc.push(book.title);
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // using the reduce function for the array traversing

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Include the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.reduce((acc, book) => {
      if (book.published > 1989 && book.published < 2010) {
        acc.push({title: book.title, year: book.published});
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // using the reduce function for the array traversing
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.reduce((acc, obj) => {
      acc.push((obj.temperature.high + obj.temperature.low) / 2);
      return acc;
    }, []);
    return result;

    // Annotation:
    // using the reduce function for the array traversing
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.reduce((acc, obj) => {
      if (obj.type.includes('sunny')) {
        acc.push(`${obj.location} is ${obj.type}.`);
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // using the reduce function for the array traversing only once
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = weather.sort((a, b) => b.humidity - a.humidity)[0];
    /*weather.reduce((prevObj, obj) => {
    return
  });*/
    return result;

    // Annotation:
    // using the sort function to sort the array
    // and then getting first element of array

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = nationalParks.reduce((acc, park) => {
      /*      if (park.visited) {
              if (!acc.parksToVisit) {
                acc.parksToVisit = [];
              }
              acc.parksToVisit.push(park.name);
            } else {
              if (!acc.parksVisited) {
                acc.parksVisited = [];
              }
              acc.parksVisited.push(park.name);
            }*/
      const visit = park.visited ? 'parksVisited' : 'parksToVisit';
      if (!acc[visit]) {
        acc[visit] = [];
      }
      acc[visit].push(park.name);
      return acc;
    }, {});
    return result;

    // Annotation:
    // using the reduce function for the array traversing
    // refactored code
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const result = nationalParks.reduce((arr, park) => {
      arr.push({[park.location]: park.name});
      return arr;
    }, []);
    return result;

    // Annotation:
    // using the reduce function for the array traversing
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce((arr, park) => {
      park.activities.reduce((acc, activity) => {
        if (!acc.includes(activity)) {
          acc.push(activity);
        }
        return acc;
      }, arr);
      return arr;
    }, []);
    return result;

    // Annotation:
    // using the reduce function twice for the array traversing only once
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((sum, brewery) => sum += brewery.beers.length, 0);
    return result;

    // Annotation:
    // using the reduce function for the array traversing
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.reduce((arr, brewery) => {
      arr.push({name: brewery.name, beerCount: brewery.beers.length});
      return arr;
    }, []);
    return result;

    // Annotation:
    // using the reduce function for the array traversing
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((acc, brewery) => {
      let beer = brewery.beers.sort((a, b) => b.abv - a.abv)[0];
      return acc.abv ? acc.abv > beer.abv ? acc : beer : beer;
    }, {});
    return result;

    // Annotation:
    // using the reduce and sort functions for the array traversing only once
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.reduce((arr, instructor) => {
      arr.push({
        name: instructor.name,
        studentCount: cohorts.find(cohort => cohort.module === instructor.module).studentCount
      });
      return arr;
    }, []);
    return result;

    // Annotation:
    // using the reduce function for the instructors array traversing and
    // the find functions to search for studentCount in the cohorts array
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }
    const instructPerMod = instructors.reduce((acc, instructor) => {
      if (!acc[instructor.module]) {
        acc[instructor.module] = 1;
      } else {
        acc[instructor.module]++;
      }
      return acc;
    }, {});

    const result = cohorts.reduce((acc, obj) => {
      acc[`cohort${obj.cohort}`] = obj.studentCount / instructPerMod[obj.module];
      return acc;
    }, {});
    return result;

    // Annotation:
    // using the reduce function for creating an object with the number of instructors and
    // getting the result as students per instructor
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const modulesPerSubject = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.reduce((obj, subject) => {
        if (!obj[subject]) {
          obj[subject] = [];
        }
        if (!obj[subject].includes(cohort.module)) {
          obj[subject].push(cohort.module);
        }
        return obj;
      }, acc);
      return acc;
    }, {});

    const result = instructors.reduce((acc, obj) => {
      if (!acc[obj.name]) {
        acc[obj.name] = [];
      }
      acc[obj.name] = obj.teaches.reduce((arr, skill) => {
        modulesPerSubject[skill].reduce((mArr, nextEl) => {
          if (!mArr.includes(nextEl)) {
            mArr.push(nextEl);
          }
          return mArr;
        }, arr);
        return arr.sort();
      }, []);
      return acc;
    }, {});

    return result;

    // Annotation:
    // using the reduce function for create object modulesPerSubject and
    //  then using it in another reduce function
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = instructors.reduce((acc, instructor) => {
      instructor.teaches.reduce((acc, skill) => {
        if (!acc[skill]) {
          acc[skill] = [];
        }
        acc[skill].push(instructor.name);
        return acc;
      }, acc);
      return acc;
    }, {});
    return result;

    // Annotation:
    // using the reduce function for the array traversing
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = sidekicks.reduce((acc, sidekick) => {
      let index = acc.findIndex(obj => obj.bossName === sidekick.boss);
      if (index > -1) {
        acc[index].sidekickLoyalty += sidekick.loyaltyToBoss;
      } else {
        acc.push({bossName: sidekick.boss, sidekickLoyalty: sidekick.loyaltyToBoss});
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // using the reduce function for the array traversing and
    // then findIndex to find index of the object in the array
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = Object.keys(constellations).reduce((arr, key) => {
      constellations[key].stars.reduce((acc, name) => {
        let find = stars.find(star => star.name === name);
        if (find) {
          acc.push(find);
        }
        return acc;
      }, arr);
      return arr;
    }, []);
    return result.sort().reverse();

    // Annotation:
    // using Object.keys function for get array
    // with all the own enumerable properties' names ("keys") of an object constellations
    // using the reduce function for the array traversing
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((acc, star) => {
      if (!acc[star.color]) {
        acc[star.color] = [];
      }
      acc[star.color].push(star);
      return acc;
    }, {});

    return result;

    // Annotation:
    // using the reduce function for the array traversing
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = stars
      .sort((a, b) => a.visualMagnitude - b.visualMagnitude)
      .reduce((acc, star) => {
        let item = star.constellation;
        if (item) {
          acc.push(item);
        }
        return acc;
      }, []);
    return result;

    // Annotation:
    // First using the sort function for returning the data in ascending order and then
    // the reduce function for the array traversing
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = characters.reduce((amount, nextCharacter) => {
      amount += nextCharacter.weapons.reduce((acc, nextWeapon) => {
        acc += weapons[nextWeapon].damage;
        return acc;
      }, 0);
      return amount;
    }, 0);
    return result;

    // Annotation:
    // Using the reduce function twice for the array traversing only once
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = characters.reduce((arr, nextCharacter) => {
      const paramsObj =
        nextCharacter.weapons.reduce((acc, weapon) => {
          if (!acc['damage']) {
            acc['damage'] = 0;
            acc['range'] = 0;
          }
          acc['damage'] += weapons[weapon].damage;
          acc['range'] += weapons[weapon].range;
          return acc;
        }, {});
      arr.push({[nextCharacter.name]: paramsObj});
      return arr;
    }, []);
    return result;

    // Annotation:
    // Using the reduce function twice for the array traversing only once
  },
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = movies.reduce((acc, movie) => {
      const number =
        movie.dinos.reduce((sum, dino) => {
          if (dinosaurs[dino].isAwesome) {
            sum++;
          }
          return sum;
        }, 0);
      acc[movie.title] = number;
      return acc;
    }, {});
    return result;

    // Annotation:
    // Using the reduce function twice for the array traversing only once
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = movies.reduce((acc, movie) => {
      const ageSum = movie.cast.reduce((sum, actor) => {
        sum += movie.yearReleased - humans[actor].yearBorn;
        return sum;
      }, 0);
      if (!acc[movie.director]) {
        acc[movie.director] = {};
      }
      if (!acc[movie.director][movie.title]) {
        acc[movie.director][movie.title] = {};
      }
      acc[movie.director][movie.title] = Math.floor(ageSum / movie.cast.length);
      return acc;
    }, {});
    return result;

    // Annotation:
    // Using the reduce function twice for the array traversing only once
    // Using the Math.flor function for return an integer number.
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet)
    , their nationality, and their imdbStarMeterRating.
    The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const cast = movies.reduce((arr, movie) => {
      movie.cast.reduce((arr, name) => {
        if (!arr.includes(name)) {
          arr.push(name);
        }
        return arr;
      }, arr);
      return arr;
    }, []);

    const result = Object.keys(humans).reduce((arr, name) => {
      if (!cast.includes(name)) {
        arr.push({
          name: name,
          nationality: humans[name].nationality,
          imdbStarMeterRating: humans[name].imdbStarMeterRating
        });
      }
      return arr;
    }, []);
    result.sort((a, b) => {
      if (a.nationality > b.nationality) {
        return 1;
      }
      if (a.nationality < b.nationality) {
        return -1;
      }
      return a.imdbStarMeterRating - b.imdbStarMeterRating;
    });
    return result;

    // Annotation:
    // Using the reduce function for getting an array of unique names of humans
    // who have been cast in a Jurassic Park movie
    // then using the reduce function again for comparing all humans with the humans
    // who have been cast in a Jurassic Park movie and returning sorted an array of human objects
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in,
     as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const castAge = movies.reduce((acc, movie) => {
      movie.cast.reduce((acc, name) => {
        if (!acc[name]) {
          acc[name] = [];
        }
        acc[name].push(movie.yearReleased - humans[name].yearBorn);
        return acc;
      }, acc);
      return acc;
    }, {});

    const result = Object.keys(castAge).reduce((arr, name) => {
      arr.push({name: name, ages: castAge[name]});
      return arr;
    }, []);
    return result;

    // Annotation:
    // Using the reduce function for getting an object of human who where cast in at least one movie, and
    // then using the reduce function with Object.keys for getting the result.
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
