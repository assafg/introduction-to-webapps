# JavaScript (ES6+)

---

## Function scope 

```javascript

var a = 10;
var b = 100;

function foo() {
    var a = 20;

    console.log(a);
    console.log(b);
    b++;
}

foo();
console.log(a);
console.log(b);
```

---

## Block scope - var, const, let

var - ignores block scope `{}` and only applies to function scope

```javascript

function foo() {
    for (var i=0; i<100; i++){}

    console.log(i);

    for (let j=0; j<100; j++ ){
        const x = j;
    }

    console.log(j);
    console.log(x);
}

```

---

## Hoisting

The process of copying variable declaration to the top of the scope at runtime.
The variable is available but is not yet assigned.

<sidebyside>

```javascript
function foo() {
    var a = 10;
    var b = bar();
    var fb = foobar();

    function bar() {
        return 42;
    }

    var foobar = function() {
        return 24;
    }

    var c = a + b;
}
```

```javascript
function foo() {
    var a;
    var b;
    var c;
    var foobar;

    a = 10;
    b = bar(); // Not hoisted - this is OK
    fb = foobar(); // Hoisted - ERROR

    function bar() {
        return 42;
    }

    foobar = function() {
        return 24;
    }
    c = a + b;
}
```

</sidebyside>

---
## Call/Execution context: `this`, `bind`, `call`, `apply`

JS attaches to every function an execution context - the scope in which the function should run.

```javascript
function Car() {
    function accelerate(){
        //...
    }

    function stop() {
        //...
    }

    function turn(direction) {
        //...
    }

    function drive(){
        this.accelerate();
        this.turn('left');
        this.stop();
    }

    drive();

    this.drive();
}

Car();

function drive() {
    console.log('This should not happen');
}

```

---

```javascript
const car = {
    range: 620,
    fuleSpent: 20,
}

function calculateFuleConsumption() {
    return this.range / this.fuleSpent;
}

const fc = calculateFuleConsumption(); // ?

```

---

## function `call`

```javascript
const car = {
  range: 620,
  fuleSpent: 20,
};

function calculateFuleConsumption() {
  console.log(this);
  return this.range / this.fuleSpent;
}
 
console.log(calculateFuleConsumption.call(car));// Call adds context

```
---

## function `bind`

```javascript
const car = {
  range: 620,
  fuleSpent: 20,
};

function calculateFuleConsumption() {
  console.log(this);
  return this.range / this.fuleSpent;
}

const newFunction = calculateFuleConsumption.bind(car); // Bound function
console.log(newFunction());

car.fuleSpent = 40;
console.log(newFunction());


```
---


## Closures

---

## Async operations, event loop, callbacks

---

## Arrow functions

---

## Promises

---

## async/await

---

## Variable destructuring assignment {...a}, [...arr], (, ...others)

---

## Shallow and deep comparison (===, _.equals)
---

## ES Modules

---

## Export (default)

---

## Import

---

## Constructor function

---

## Functional programming and array operations

---

## map

---

## filter

---

## reduce

---

## find

---

## every

---

## some


