# 2. JavaScript - a Quick Refresher

## **JavaScript Summary**
- Weakly Typed Language:
    - No explicit type assignment
    - Data types can be switched dinamically
- Object Oriented Language:
    - Data can be organized in logical objects
    - Primitive and reference types
- Versatile Language:
    - Runs in browser & directly on a PC/server
    - Can perform a broad variety of tasks.

## **Differences: _var_ vs _let_ vs _const_**
It is other way to create a variable but, in contraty of ``var``, that doesn't change it's type.
The ``const`` is used to create a variable that never change it's value.



## **Arrow Functions**
You have different ways to create a function. One of them is the normal way to create like this:

```
function sumarizeUser(userName, userAge, userHasHobby) {
    return ('Name is ' + userName +
        ", age is " + userAge +
        ' and the user has hobbies: ' + userHasHobby)
}

console.log(sumarizeUser(name, age, hasHobbies));
```
or like this: 
```
const sumarizeUser = function(userName, userAge, userHasHobby) {
    return ('Name is ' + userName +
        ", age is " + userAge +
        ' and the user has hobbies: ' + userHasHobby)
}
```
or you can also use a new syntax that remove the _function_ keyword and instead we have an arrow like this:
```
const sumarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName +
        ", age is " + userAge +
        ' and the user has hobbies: ' + userHasHobby)
}
```
Arrow Functions are undoubtedly one of the more popular features of ES6. It's much shorter and you can ommit the curly braces and the return statemnt due to impicit return.
One thing you will quickly notice is the variety of syntaxes available in arrow functions. Let’s run through some of the common ones:
- **No Parameters**: If there are no parameters, you can place an empty parentheses before =>
```
() => 42
_ => 42
```
- **Single Parameter**: With these functions, parentheses are optional:
```
x => 42  || (x) => 42
```
- **Multiple parameters**: Parentheses are required for these functions:
```
(x, y) => 42
```

## **Spread and Rest Operator**
This operator is like three dots (...) and you call it differently depending of the use case.

When is used to spread some array to another array you call it spread operator, like this: 
```
const hobbies = ['Sports', 'Cooking'];
const copiedArray = [...hobies];
console.log(copiedArray); // <--- thr result: ['Sports', 'Cooking']
```


When is used to aggregate some elements when its used as an argument of a function it is called rest operator, like this: 
```
const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,3)); // <--- the result: [1, 2, 3]
console.log(toArray(1,2,3,4,5)); // <--- the result: [1, 2, 3, 4, 5]
```

## **Destructuring**
We can create a funciton to print some property of an object and we have this two ways:
```
const person = {
    name: 'Guillermo',
    age: 25,
    job: 'Software Engineer',
    address: 'Vila Nova de Gaia, Portugal',
    greet(){
        console.log('Hi, I am '+ this.name);
    }
}

const printName = (personData) => {
    console.log(personData.name);
}

printName(person); // <--- result: 'Guillermo'
```

Or you can create a destructuring method that it takes all of the properties of an object that is passed by parameter and creates an local property that can only be used inside this method. The code should be like this:
```
const printName = ({ name }) => {
    console.log(name); // <--- result: 'Guillermo'
}
```

You can't just use this destructuring formula as parameters of a function. You can use it the same way to creat a variable with the same structure that you are typing it. That means, that if you want to re-create an object taht has a lot of peroperties with the exact same structure but with just a few properties, you can write your code like this:

```
const { name, age} = person;
console.log(name, age); // <--- result: 'Guillermo 25'
```
You can also do this formula with an array. So, if you want to extract elements from an array, you can do something like this:
```
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2, hobby3] = hobbies;
console.log(hobby1, hobby2, hobby3); // <--- result: 'Sports Cooking undefined'
```
> **_NOTE:_** You are **NOT** destroying the old variable!! You are creating a **NEW** object with a different structure.


## **Template Literals**
One other feature, we'll use from time to time are template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

It's a different way of writing strings. Instead of using double or single quotation marks:
`'A String'` or `"Another string"`, you can use backticks `` `Another way of writing strings` ``

Now why would we use that way of creating strings? With that syntax, you can dynamically add data into a string like this:
```
const name = "Max";
const age = 29;
console.log(`My name is ${name} and I am ${age} years old.`);
```
This is of course shorter and easier to read than the "old" way of concatenating strings:
```
const name = "Max";
const age = 29;
console.log("My name is " + name + " and I am " + age + " years old.");
```