const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB

        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();
    // Log D: personC

    const result = [
      {A: 'Ben'},
      {B: 'CardiB'},
      {C: 'CardiB'},
      {D: 'Paul'}
    ];
    return result;

    // Annotation:
    // First we declare three global variables called `personA`, `personB`, `personC` and assign them the strings" Paul "," Ben "and" Tom ", respectively.
    // Next we declare a function called `changePerson` and invoke it which brings us back up to line 7.
    // Within this function we assign the value of `person` to `CardiB` and next we invoke another function called `beautifyPerson`.
    // Within this function we have first `console.log()` of 'A' which will log `Ben`.
    // Because there is no variable declaration for `personC` inside our current functional scope,
    // the reassignment will look up the scope chain, into the global scope,
    // and reassign the value of the `personC` variable we declared on line 5 and which will log `CardiB`.
    // Now that `beautifyPerson` is finished executing, we skip down to the next `console.log()` of `C`
    // which will log `cardiB`, as this variable have a global scope and was reassignment inside the `beautifyPerson` function.
    // When `changePerson` is finished executing, we hop back down to our last `console.log()` of `D`
    // which now logs `Paul`, as this variable have a global scope and was reassignment inside the `changePerson` function.

  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number

      function newNumber() {
        number = 64;
        // Log B: number
      }

      newNumber();
      // Log C: number
    }

    numberFunction();
    // Log D: number

    const result = [
      {A: 75},
      {B: 64},
      {C: 64},
      {D: 30}
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `number` and assign it to the number of 30.
    // Next, we declare a function called `numberFunction` and invoke it.
    // Within this function we declare a functional scope variable with the same name `number` and assign it to the number 75.
    // Next, we skip down to the first `console.log()` of `A` which will log `75`,
    // as `number` variable has a functional scope and can't be changed by the block variable defined above.
    // Next, we declare a function called `newNumber` and invoke it.
    // Because there is no variable declaration for `number` inside our current functional scope,
    // the reassignment will look up the scope chain, into the main functional scope,
    // and reassign the value of the `number` variable we declared on line 58.
    // Next `console.log()` of `B` will log `64`
    // Now that `newNumber` is finished executing, next `console.log()` of 'C' will log `64`,
    // as this variable has a functional scope and was changed in the previous step.
    // After that `numberFunction` is finished executing, we hop back down to our last `console.log()` of `D`
    // which now logs `30`, as this variable has a global scope and has not been reassigned.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting
    const result = [
      {A: 'Yo'},
      {B: 'Hey'},
      {C: 'Hey'},
      {D: 'Hello'}
    ];
    return result;

    // Annotation:
    // The first `console.log()` of 'A' will log `Yo`,
    // as this variable has a functional scope and can't be reassigned by the block variable defined above.
    // The next `console.log()` of 'B' will log `Hey`,
    // as this variable has a functional scope which declare in the main function and was reassigned.
    // When the `newPhrase` is finished executing,
    // we skip down to the next `console.log()` of `C` which will log `Hey`,
    // as this variable has a functional scope and was reassigned inside `newPhrase` function.
    // After that `greetingFunction` is finished executing,
    // we hop back down to our last `console.log()` of `D` which now logs `Hello`,
    // as this variable has a global scope and wasn't reassigned.
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = () => {
        greeting = 'welcome';

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting
    };

    greetingGenerator();

    // Log D: greeting

    const result = [
      {A: 'hi'},
      {B: 'welcome'},
      {C: 'welcome'},
      {D: 'howdy'}
    ];
    return result;

    // Annotation:
    // The first `console.log()` of 'A' will log `hi`,
    // as this variable has a functional scope and can't be reassigned by the block variable defined above.
    // The next `console.log()` of 'B' will log `welcome`,
    // as this variable has a functional scope which declare in the main function and was reassigned
    // After completing `newGreeting` we skip down to the next `console.log()` of `C` which will log `welcome`,
    // as this variable has a functional scope and was reassigned inside `newGreeting` function
    // After that `greetingGenerator` is finished executing,
    // we hop back down to our last `console.log()` of `D` which now logs `howdy`,
    // as this variable has a global scope and wasn't reassigned.
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }
        // Log A: name
      }
      // Log B: name
    }

    // Log C: name

    sayName();
    // Log D: name

    const result = [
      {C: 'Brittany'},
      {A: 'Nathaniel'},
      {B: 'Nathaniel'},
      {D: 'Brittany'}
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `name` and assign it to the string `Brittany`
    // Next we declare a function called `sayName`, but because we haven't invoked it yet, we skip down to the first `console.log()` of `C` which will log `Brittany`
    // Next we invoke our `sayName` function which brings us back up to line 200.
    // Within this function we declare a function variable called `name`. Next we reassign the value of `name` to `Nathaniel`.
    // We skip block where declare variable called `name` because it can't be changed a function variable,
    // we move down to the second `console.log()` of `A` which will log `Nathaniel`.
    // Next we move down to the third `console.log()` of `B` which will log `Nathaniel`, as this variable has a functional scope and was changed in the previous step.
    // Now that `sayName` is finished executing, we move down to the last `console.log()` of `D` which will log `Brittany`,
    // because this is variable have a global scope and wasn't reassign.
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';
        // Log C: dog

      }

      rollOver();
      // Log D: dog
    }

    petDog();
    // Log E: dog

    const result = [
      {A: 'Spot'},
      {B: 'Spot'},
      {C: 'Biscuit'},
      {D: 'Biscuit'},
      {E: 'Biscuit'},
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `dog` and assign it to the string `Spot`
    // Next we declare a function called `petDog` and invoked it.
    // Within this function we move down to the first `console.log()` of `A` which will log `Spot`,
    // Next we declare and invoked a function called `rollOver`.
    // Within this function we move down to the second `console.log()` of `B` which will log `Spot`,
    // because this variable can't be changed by the block variable defined above.
    // Next we re-assign the value of `dog` to 'Biscuit` and `console.log()` of `C` will log `Biscuit`.
    // After `rollOver` is finished executing we move down to the forth `console.log()` of `D` which will log `Biscuit`,
    // because this variable was changed on the previous step.
    // After `petDog` is finished executing we move down to the last `console.log()` of `E` which will log `Biscuit`,
    // because this variable has a global scope and was changed within `rollOver` function.


  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit();
    // Log D: fruit

    const result = [
      {A: 'reference error'},
      {B: 'mango'},
      {C: 'mango'},
      {D: 'apple'}
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `fruit` and assign it to the string of `apple`.
    //  Next we declare a function called `eatFruit` and invoke it.
    //  Within this function we declare function variable called `fruit` and assign it to the string of `mango`,
    //  Then we move down to the first `console.log()` of `A` which will log 'reference error',
    //  because below we declare the block variable called `fruit` as a constant and variable is not defined yet
    //  Next we move down to the second `console.log()` of `B` which will log `mango`,
    //  because this variable has a functional scope and is assigned inside `eatFruit` function
    //  Next we move down to the third `console.log()` of `C` which will log `mango`,
    //  because this variable wasn't reassigned and has function scope
    //  When the `eatFruit` is finished executing, we hop back down to our last `console.log()` of `D` which now logs `apple`,
    //  because `fruit` variable has global scope and wasn't reassigned
  },

  exerciseH() {
    let num = 6;

    const fn1 = function () {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;
        fn2(num);
        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    };

    const fn2 = function (num) {
      // Log D: num

      num = num + 1;

      // Log E: num
    };

    fn1();

    const result = [
      {A: 4},
      {D: 9},
      {E: 10},
      {B: 9},
      {C: 4}
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `num` and assign it to the number of 6.
    //  Next we declare a function called `fn1`, but because we haven't invoked it yet,
    //  we skip down to the declaring a function called `fn2`
    //  Next we invoke our `fn1` function which brings us back up to line 336.
    //  Within this function we declare a function variable called `num` and assign it to  the number of 4.
    //  Next we move down to the first `console.log()` of `A` which log 4.
    //  Next we declare a block variable called `num` and assign it to the number of 9.
    //  Next step we invoke our `fn2` function which brings us move to line 354 and send it a number as a parameter
    //  Next we move down to the second `console.log()` of `D` which log 9.
    //  Next step we declare a function variable called `num`, assign it to the sum of numbers 9 and 1 and log 10 using `console.log()` of `E`.
    //  When `fn2` is finished executing that brings us back up to line 344.
    //  On this step we declare a function variable and assign it to the value of the `num` variable.
    //  Next we move down to the forth `console.log()` of `B` which log 9, because num is a constant and have a value of 9.
    //  Next step we declare a function variable called `newNum` and assign it to the value of the `num` variable.
    //  Last step we move to the last `console.log()` of `C` which log 4, because num is a function variable and wasn't re-assign.
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = [
      {A: 75},
      {B: 0},
      {C: 75},
      {D: 80},
      {A: 55},
      {B: 0},
      {C: 55},
      {E: 55},
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `hunger` and assign it to the number of 100.
    //  Next we declare a function called `eatSnack` and invoke it.
    //  Next we reassign `hunger` variable and move down to the first `console.log()` of `A` which will log 75
    //  Next step we invoke `gorgeYourself` function which brings us down to line 399
    //  Next we declare a function variable called `hunger` and assign it to the number of 0 and
    //  use second `console.log()` of `B` which will log 0.
    //  When `gorgeYourself` is finished executing we move down to the third `console.log()` of `C` which use global scope variable and will log 75.
    //  After `eatSnack` is finished executing we reassign `hunger` variable and
    //  move down to the forth `console.log()` of `D` which will log 80.
    //  Next we invoke `eatSnack` a second time and repeat steps 3-7.
    //  After `eatSnack` is finished executing we move down to the last `console.log()` of `E` which will log 55
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') {
        sandwich = 'not a mediocre sandwich';
      }
      // Log C: sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping
      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = [
      {A: 'ketchup sandwich'},
      {D: 'gouda'},
      {B: undefined},
      {C: 'not a mediocre sandwich'},
      {E: 'not a mediocre sandwich'},
      {F: 'National Treasure'},
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `sandwich` and assign it to the string of `ketchup sandwich`.
    //  Next we move down to the first `console.log()` of `A` which will log `ketchup sandwich`.
    //  Next step we declare a function called `addChipotle`, but because we haven't invoked it yet,
    //  we skip down and declare other function called `addCheese`, but because we haven't invoked it yet,
    //  we skip down to line 466, then declare a global variable called `cheeseTopping` and assign it to the string `kraft`.
    //  Next we invoke our `addCheese` function which brings us back up to line 456.
    //  Within this function we declare a functional variable called `cheeseTopping` and assign it to the string of `gouda`.
    //  Next we move down to the second `console.log()` of `D` which will log `gouda`.
    //  Next step we declare a function called `shesTheManReference` and invoke it.
    //  Within this function we declare a functional variable and assign it to the string of `National Treasure`.
    //  After that `addCheese` is finished executing, we `addChipotle` function which brings us back up to line 446.
    //  Within this function we declare a functional variable called `toppings` and
    //  then move down to third `console.log()` of `B` which will log undefined, because `toppings` variable wasn't assigned yet.
    //  Next we assign `toppings` function to the string of `chipotle sauce`.
    //  Next step we re-assign the value of `sandwich` to `not a mediocre sandwich` and
    //  then move down to forth `console.log()` of `C` which will log `not a mediocre sandwich`.
    //  After that `addChipotle` is finished executing, we move down to fifth `console.log()` of `E` which will log `not a mediocre sandwich`,
    //  because `sandwich` is a global variable and was re-assign within `addChipotle` function
    //  Last step we move down to the last `console.log()` of `F` which will log `National Treasure`,
    //  because `amandaBynes` was declared and assigned as an implicit global variable within `amandaBynes`.


  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
    }

    foo();

    // Log B: num

    const result = [
      {A: 7},
      {B: 7}
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `num` and assign it to the number of 10.
    //  Next we declare a function called `foo` and invoke it.
    //  Within this function we re-assign the value of `num` to 7
    //  Because there is no variable declaration for `num` inside our current functional scope,
    //  the reassignment will look up the scope chain, into the global scope,
    //  and reassign the value of the `num` variable we declare on line 509.
    //  Next we move down to the `console.log()` of `A` which will log 7.
    //  After that `foo` is finished executing, we hop back down to our last `console.log()` of `B` which now logs 7.

  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = [
      {A: 95},
      {B: 90},
      {C: 90}
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `grade` and assign it to the number of 100.
    //  Next we declare a function called `losePoints` and invoke it which brings us back up to line 543.
    //  Within this function we re-assign the value of `grade` to 90.
    //  Because there is no variable declaration for `grade` inside our function scope,
    //  the reassignment will look up the scope chain, into the global scope,
    //  and reassign the value of the `grade` variable we declared on line 541.
    //  Next we declare a function called `addPoints` and invoke it which brings us back up to line 546.
    //  Within this function we declare a functional value called `grade` and assign it to the number of 95.
    //  Next we declare a block variable and assign it to the number of 97.
    //  Next step we move down to the first `console.log()` of `A` which will log 95, because this variable has a function scope.
    //  After that `addPoints` is finished executing, we hop back down to aur second `console.log()` of `B`
    //  which will log 90, because this variable has a global scope.
    //  After that `losePoints` is finished executing, we hop back down to our last `console.log()` of `C`
    //  which will log 90, because this variable has a global scope.
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = [
      {A: 5},
      {B: 6},
      {C: 'reference error'},
      {D: 6}
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `num` and assign it to the number of 5.
    //  Next we declare a function called `first`, but because we haven't invoked it yet, we skip down to line 598.
    //  Next we declare a function called `second`, but first we invoke our `first` function which brings us back up to line 592.
    //  Within this function we invoke the first `console.log()` of `A` which will log 5.
    //  Then we re-assign the value of `num` to 6 and invoke our second `console.log()` of `B` which will log 6.
    //  After that `first` is finished executing, we hope back down to line 604 and invoke our `second` function
    //  which hop us to line 598. Within this function we invoke third `console.log()` of `C` which will log `reference error`,
    //  because we haven't declared `num` variable yet.
    //  Next we declare a variable called `num` and assign it to the number of 7.
    //  After that `second` is finished executing, we hop back down to our last `console.log()` of `D` which will log 6.
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {
      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();
      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();
    // Log F: instructor

    const result = [
      {E: 'Pam'},
      {A: 'Pam'},
      {B: 'Pam'},
      {C: 'Louisa'},
      {D: 'Louisa'},
      {F: 'Louisa'}
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `instructor` and assign it to the string of `Pam`.
    // Next we declare a function called `changeInstructor`,
    // but because we haven't invoked it yet, we skip to the first `console.log()` of `E` which log `Pam`.
    //  Next we invoke our `changeInstructor` function which brings us back up to line 632.
    //  Within this function we invoke second `console.log()` of `A` which will log `Pam`.
    //  Next we declare a block variable called `instructor` and assign it to the string of `Brittany`.
    //  Next step we invoke third `console.log()` of `B` which will log `Pam`, because `instructor` is a global variable.
    //  Next we declare a function called `rename` and invoke it
    //  Within this function we re-assign the value of `instructor` to `Louisa` and invoke our fourth `console.log()` of `C` which will log `Louisa`.
    //  After that `rename` is finished executing, we hop back down to our fifth `console.log()` of `D` which will log `Louisa`.
    //  Finally, after `changeInstructor` is finished executing, we hop back down to our last `console.log()` of `F` which will log `Louisa`.

  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe

      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe
    const result = [
      {B: 'flipflop'},
      {A: undefined},
      {C: 'flipflop'}
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `shoe` and assign it to the string of `flipflop`.
    //  Next we declare a function called `putOnShoe`, but because we haven't invoked it yet, we skip down to the first `console.log()` of `B` which will log `flipflop`.
    //  Next we invoke our `putOnShoe` function which brings us back up to line 686.
    //  Within this function we declare a functional variable called `shoe` and then invoke second `console.log()` of `A` which will log `undefined`,
    //  then we assign `shoe` to the string of `boot`.
    //  After that `putOnShoe` is finished executing, we hop back down to our last `console.log()` of `C` which will log `flipflop`.
  },

  exerciseP() {
    let lunch;

    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = [
      {B: 'soup'},
      {C: 'soup'},
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `lunch`.
    //  Next we declare a function called `orderLunch` and invoke it.
    //  Within this function we assign `lunch` variable to the string of `soup` and
    //  invoke first `console.log()` of `B` which will log `soup`.
    //  After that `orderLunch` is finished executing, we hop back down to our last `console.log()` of `C` which will log `soup`.
  },

  exerciseQ() {
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      wildKids.push(kid);
      // Log B: wildKids

      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid

        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
      {A: 'Pandora'},
      {B: ['Antigone', 'Pandora']},
      {C: 'Mandy'},
      {D: 'Antigone'},
      {E: 'Pandora'}
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `myKid` and assign it to the string of `Pandora`.
    //  Then we declare a global variable called `wildKids` and assign it to the array of [`Antigone`].
    //  Next we declare a function called `myCrazyKidAntics` and invoke it sending `myKid` variable as a parameter.
    //  Within this function we invoke first `console.log()` of `A` which will log `Pandora`.
    //  Next we add `myKid` to the `wildKids` array and invoke second `console.log()` of `B` which will log `['Antigone', 'Pandora']`.
    //  Next step we declare a function called `drawOnTheWall` and invoke it.
    //  Within this function we declare a functional variable called `myKid` and assign it to the `Mandy`.
    //  Next we invoke third `console.log()` of `C` which will log `Mandy`.
    //  After `drawOnTheWall` is finished executing, we hop back down to line 763.
    //  Next we declare a function called `myAmazingKid` and invoke it.
    //  Within this function we declare a functional variable and assign it to hte string `Antigone`.
    //  Next we invoke fourth `console.log()` of `D` which will log `Antigone`.
    //  After that `myAmazingKid` is finished executing, we hop back down to the last `console.log()` of `E` which will log `Pandora`,
    //  because `myKid` is a global variable and wasn't re-assign.

  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla';
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = [
      {A: 'Rody'},
      {B: 'RodyToy'},
      {C: 'Tesla'},
      {D: 'RodyToyDaniels'}
    ];
    return result;

    // Annotation:
    // First we declare a global variable called `myName` and assign it to the `Rody`;
    // Then invoke first `console.log()` of `A` which will log `Rody`.
    //  Next we declare a function called `parentFunc` and invoke it.
    //  Within this function we re-assign the value of `myName` to `RodyToy` and
    //  invoke second `console.log()` of `B` which will log `RodyToy`.
    //  Next we declare a function called `innerFunc` and invoke it.
    //  Within this function we declare a functional variable called `myName` and assign it to the string of `Tesla`.
    //  Then invoke third `console.log()` of `C` which will log `Tesla`.
    //  After that `innerFunc` is finished executing, we hop back down to line 817 and
    //  re-assign the value of `myName` to `RodyToyDaniels`.
    //  Final that `parentFunc` is finished executing, we hop back down to our last `console.log()` of `D` which will log `RodyToyDaniels`.
  }
};

module.exports = scope;