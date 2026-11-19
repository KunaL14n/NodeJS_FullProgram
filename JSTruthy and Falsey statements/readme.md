# JavaScript Truthy and Falsy Values

In JavaScript, a **truthy** value is a value that is considered `true` when encountered in a Boolean context (such as an `if` statement or a logical operation). Conversely, a **falsy** value is a value that is considered `false` in a Boolean context.

JavaScript uses automatic **type coercion** to convert any value to a boolean when needed.

---

## 1. Falsy Values
There are **only 8 falsy values** in JavaScript. Any value not on this list is automatically considered truthy.

| Value | Type | Description |
| :--- | :--- | :--- |
| `false` | Boolean | The boolean keyword `false` |
| `0` | Number | The number zero |
| `-0` | Number | Negative zero |
| `0n` | BigInt | BigInt zero |
| `""` / `''` / `` `` | String | Empty string (length `0`) |
| `null` | Null | Intentional absence of any object value |
| `undefined` | Undefined | A variable that has not been assigned a value |
| `NaN` | Number | Not-a-Number |

```javascript
if (0) {
  console.log("This will not run");
}

if ("") {
  console.log("This will not run either");
}

```
---
2) 2. Truthy Values
All values that are not falsy are truthy. This includes several values that might seem "empty" or "negative" at first glance:

Non-empty strings (including "0", "false", and " " with a space)

Any non-zero number (including negative numbers like -1 and Infinity)

Empty arrays ([])

Empty objects ({})

Empty functions (function() {})

new Date()


---
3)3. Checking Truthiness Explicitly
You can explicitly convert any value to its boolean equivalent using the Boolean() function or the double NOT (!!) operator.

