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

```javascript
function updateApi(key, url) {
    return function(data) {
        fetch(`${url}/update?key=${key}`, data);
    }
}
const update = updateApi('123');

//...

update('data to update');

```

---

## Async operations, event loop, callbacks

```javascript
function callback(error, data) {
    // do something when an operation is competed
    // An "error first" is a common convention

}
const timeout = setTimeout(function() {
    // do something later

    callback(...);
}, 1000);

fetch('http://example.com/someuri/', function(resopose){
    console.log(response.json());
});
```

---

## Arrow functions

<sidebyside>

```javascript

function foo() {
    // new scope context
}

const bar = function() {
    // inner scope context
}

```

```javascript

const foo = () => {
    // uses parent context (`this`)
}

const bar = () => {
    // uses parent context (`this`)
}

```

</sidebyside>

---

## Promises

<sidebyside>

```javascript

fetch('http://example.com/someuri/', (response) => {
    // this callback function is called eventually
})

```

```javascript

fetch('http://example.com/someuri/').
    then((response) => {
    // this callback function is called eventually
        return '42'
    }).then(value => {
        console.log(value); // Prints 42
    }).catch(err => {
        console.log(err); // will print it an error occurs
    })

```

</sidebyside>

---

## Creaing a promise

```javascript
const prom = new Promise((resolve, reject) => {
    // do stuff...

    if (success) {
        // on success
        resolve(value); // Value is passed to the first `then`
    } else {
        // on failure - pass and error to the `catch`
        reject(new Error());
    }
});
```

---

## async/await

<sidebyside>

```javascript
function fetchData() {
    fetch('http://example.com/someuri/').
    then((response) => {
        // this callback function is called eventually
    }).catch(err => {
        console.log(err); // will print it an error occurs
    })
}

```

```javascript
async function fetchData() {
    try{
        const response = await fetch('http://example.com/';
        // this section will run only after response has a value
    }catch(err) {
        console.log(err)
    }
}
```

<sidebyside>

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


