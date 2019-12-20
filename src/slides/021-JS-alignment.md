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
  this.speed = 100;
  this.drive = function() {
    console.log('speed:', this.speed);
  };
}

const car = new Car();

car.drive();

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
  return this.range / this.fuleSpent;
}
const a = calculateFuleConsumption();
const b = calculateFuleConsumption.call(car); // Call adds context
console.log(a);
console.log(b);

```
---

## function `bind`

```javascript
const car = {
  range: 620,
  fuleSpent: 20,
};

function calculateFuleConsumption() {
  return this.range / this.fuleSpent;
}

const newFunction = calculateFuleConsumption.bind(car); // Bound function

const a = newFunction();
console.log(a);

car.fuleSpent = 40;
const b = newFunction();
console.log(b);


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

</sidebyside>

---

## Variable destructuring assignment {...a}, [...arr], (, ...others)

<sidebyside>

```javascript

const data = {
    age: 30,
    name: 'John'
}

// ...

const age = data.age;
const name = data.name.

```

```javascript

const data = {
    age: 30,
    name: 'John'
}

// ...

const { age, name };

```
</sidebyside>

---
<sidebyside>

```javascript

const data = {
    age: 30,
    name: 'John'
}

function foo({ age }) {
    console.log('age', age);   
}

foo(data);

```

```javascript

const values = [1, 2, 3];

const [a, b] = values;
console.log('a', a); // 1
console.log('b', b); // 2

const otherValues = [5, 6];

const all = [...values, otherValues];

console.log('all', all); // [1, 2, 3, 4, 5]

```
</sidebyside>

---

## Shallow and deep comparison (===, _.isEqual)

```javascript
42 == '42' // true
42 === '42' // false

//-------------------

const a = { x: 1 };
const b = { x: 1 };

a == b // false
a === b //false

_.isEqual(a, b) // true

JSON.stringify(a) === JSON.stringify(b) // true 

const x = {a: 1, b: 2};
const y = {b: 2, a: 1};

JSON.stringify(x) === JSON.stringify(y) // false


```

---

## ES Modules
Modules are supported in Chrome, Safari, Edge and Firefox (since version 60)

<sidebyside>

```javascript
// everything.js
const answer = 42

function question() {
    return answer;
}

export question;
export default answer;

// CommonJS
exports.question = question;
exports.default = answer;

```


```javascript
import answer, { question } from './everything.js'

// CommonJS
const answer = require('./everything.js').default
const { question } = require('./everything.js')
```
</sidebyside>

---

# Functional programming

---

## Pure functions

- Accept parameters, return values
- Consistent
- No side effects

---

## Chainig functions

The result of each function is the input for the next

```
y = f(x)
z = g(y)

==

z = g(f(x))

```

Functions that support this pattern can be `composed` to create complex functionality

---
## Currying

Composition requires each function to have a single input parameter.

How can we compose a fuction with more?

```javascript

function add(a, b) {
    return a + b;
}

```
---

## Currying

```javascript

function add(a) {
    return function(b) {
        return a + b;
    }
}

add(5)(3) = 8

```

---

# Array operations

---
## map

<sidebyside>

```javascript
const source = [...];
const dest = [];

for(let i=0; i<source.length; i++) {
    const newObj = {...source[i]};
    // change newObj if required
    dest.push(newObj)
}

```

```javascript
const source = [...];
const dest = source.map(item => {
    const newObj = {...item};
    // change newObj if required
    return newObj;
});

```

</sidebyside>

---

## filter


```javascript
const source = [1, 2, 3, 4, 5];
const dest = source.filter(item => item % 2 === 0);

console.log(dest); // [2, 4]

```

---

## reduce

```javascript

const source = [1, 2, 3, 4, 5];

const sum = source.reduce((aggregation, current, index) => {
    return aggregation + current;
}, 0);

console.log(sum); // 15

```
---

## find

---

## every

---

## some


