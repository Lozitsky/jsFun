const globalWindowObject = 'global window object';

const context = {

  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      }
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = globalWindowObject;

    return result;

    // Annotation:
    // In arrow functions, this retains the value of the enclosing lexical context's this.
    // In global code, it will be set to the global object:
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }

    // What is the value of `this` when we call fn()?
    // console.log('B', fn());
    // console.log('B value set by call', fn.call({value: 2}));
    const result = globalWindowObject;
    return result;

    // Annotation:
    // Since the following code is not in strict mode, and because the value of this
    // is not set by the call, this will default to the global object, which is window in a browser.
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function () {
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    // console.log(car.getInfo());
    const result = 'el';
    return result;

    // Annotation:
    //  When a function is used as an event handler,
    //  its this is set to the element on which the listener is placed
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function () {
        const innerFunction = function () {
          console.log(this.breed);
        };

        return innerFunction;
      }
    };

    var breed = dog.getBreed();
    // console.log(breed());
    // What is the value of `this` when we call breed()?
    const result = globalWindowObject;
    return result;

    // Annotation:
    // The breed() is a function in the global context, not in the dog object context.
    // this.breed can access to breed value only inside the dog object.
    // But in this case, this.breed points to a global object.
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = globalWindowObject;
    return result;

    // Annotation:
    // In arrow functions, this retains the value of the enclosing lexical context's this.
    // In global code, it will be set to the global object
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation:
    // When a function is used as a constructor (with the new keyword),
    // its this is bound to the new object being constructed.
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function () {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = globalWindowObject;
    return result;

    // Annotation:
    // Code executed by setTimeout() is run in a separate execution context to the function from which it was called.
    // As a consequence, the this keyword for the called function will be set to the window (or global) object;
    // it will not be the same as the this value for the function that called setTimeout
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function () {
        this.arrowFunction = () => {
          return this;
        };
      }
    };

    obj.method();
    // console.log(obj.arrowFunction());
    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation:
    //  When a function is called as a method of an object,
    // its this is set to the object the method is called on.
    //  In arrow functions, this retains the value of the enclosing lexical context's this.
  },

  exerciseI() {
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function (poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation:
    // map(function(element, index, array) { /* ... */ }, thisArg)
    //  callbackFn: function that is called for every element of arr.
    // Each time callbackFn executes, the returned value is added to newArray.
    //  thisArg Optional: value to use as this when executing callbackFn.
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function () {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation:
    // $(this) is a jQuery wrapper around that element that enables usage of jQuery methods.
    // jQuery calls the callback using apply() to bind this.
  },

  exerciseK() {
    var store = {
      fruit: 'grapes',
      sellMe: function () {
        return this.fruit;
      }
    };

    // What is the value of `this` when we call store.sellMe()?
    const result = 'store';
    return result;

    // Annotation:
    // When a function is called as a method of an object,
    // its this is set to the object the method is called on.
  },

  exerciseL() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function () {
        var _this = this;

        setTimeout(function () {
          console.log('Your dog is a ' + _this.breed);
        });
      }
    };

    // What is the value of `this` when we call dog.getBreed()?
    // console.log(dog.getBreed());
    const result = 'dog';
    return result;

    // Annotation:
    //  In this case, we referenced a specific object
    // when we created a variable _this that references this.
  },

  exerciseM() {
    const robert = {
      name: 'Bobo',
      occupation: 'instructor'
    };

    const william = {
      name: 'will',
      occupation: 'instructor'
    };

    function makeBirdNoise() {
      console.log('My name is ' + this.name + ' ... caw! caw!');
    }

    // What is the value of `this` when we call makeBirdNoise.call(robert);
    const result = 'robert';
    return result;

    // Annotation:
    // // An object can be passed as the first argument to call or apply and this will be bound to it.
  },

  exerciseN() {
    class Bird {
      constructor(name, species) {
        this.name = name;
        this.species = species;
      }

      delayNoise() {
        setTimeout(this.makeNoise.bind(this), 1000);
      }

      makeNoise() {
        console.log('caw, caw');
      }
    }

    var firstBird = new Bird('Calvin', 'budgie');

    // What is the value of `this` when we call firstBird.delayNoise();
    const result = 'instance of Bird';
    return result;

    // Annotation:
    //  Calling f.bind(someObject) creates a new function with the same body and scope as f,
    // but where this occurs in the original function,
    // in the new function it is permanently bound to the first argument of bind,
    // regardless of how the function is being used.
  },

  exerciseO() {
    const button = document.getElementById('submit');

    button.addEventListener('click', () => {
      console.log(this);
      this.classList.toggle('on');
    });

    // What is the value of `this` when a user clicks on our button element and the callback is triggered?

    const result = globalWindowObject;
    return result;

    // Annotation:
    //    When attaching a handler function to an element using addEventListener(),
    //  the value of this inside the handler will be a reference to the element.
    //  It will be the same as the value of the currentTarget property of the event argument
    //  that is passed to the handler.
    //    But arrow functions do not have their own this context.
  },

  exerciseP() {
    const child = {
      totalScreams: 4,
      scream: () => {
        this.totalScreams++;
      }
    };

    const result = globalWindowObject;
    return result;

    // What is the value of `this` when we call child.scream();
    // Annotation:
    //  When a function is called as a method of an object,
    // its this is set to the object the method is called on.
    //  But arrow functions do not have their own this context.
  }
};

module.exports = context;
