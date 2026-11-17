# JavaScript Closures

A **Closure** is a fundamental JavaScript concept where an inner function retains access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing.

---

## How It Works

Every time a function is created in JavaScript, a closure is created along with it. This allows the inner function to "remember" its lexical environment (the variables and parameters that were in scope at the time it was defined).

### Basic Example

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

const newFunction = outerFunction("Hello");
newFunction("World");
// Output:
// Outer Variable: Hello
// Inner Variable: World
