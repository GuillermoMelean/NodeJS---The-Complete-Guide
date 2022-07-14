# 2. JavaScript - a Quick Refresher

## JavaScript Summary
- Weakly Typed Language:
    - No explicit type assignment
    - Data types can be switched dinamically
- Object Oriented Language:
    - Data can be organized in logical objects
    - Primitive and reference types
- Versatile Language:
    - Runs in browser & directly on a PC/server
    - Can perform a broad variety of tasks.

## Differences: _var_ vs _let_ vs _const_
It is other way to create a variable but, in contraty of ``var``, that doesn't change it's type.
The ``const`` is used to create a variable that never change it's value.

## Spread and Rest Operator
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