# JavaScript Operators

Operators in JavaScript are special symbols or keywords used to perform operations on operands (values and variables). Understanding them is essential for writing logic, manipulating data, and controlling program flow.

---

## 1. Arithmetic Operators
Used to perform standard mathematical calculations.

| Operator | Name | Example (`a = 10, b = 3`) | Result |
| :--- | :--- | :--- | :--- |
| `+` | Addition | `a + b` | `13` |
| `-` | Subtraction | `a - b` | `7` |
| `*` | Multiplication | `a * b` | `30` |
| `/` | Division | `a / b` | `3.333...` |
| `%` | Modulus (Remainder) | `a % b` | `1` |
| `**` | Exponentiation | `a ** b` | `1000` |
| `++` | Increment | `a++` / `++a` | `11` |
| `--` | Decrement | `a--` / `--a` | `9` |

## 2. Assignment Operators
Used to assign values to variables, often combining arithmetic with assignment.

Operator	Example	Equivalent To
=	x = 5	x = 5
+=	x += 3	x = x + 3
-=	x -= 3	x = x - 3
*=	x *= 3	x = x * 3
/=	x /= 3	x = x / 3
%=	x %= 3	x = x % 3
**=	x **= 3	x = x ** 3
---

##3. Comparison Operators
Used to compare two values and return a boolean (true or false).

Operator	Description	Example	Result
==	Equal to (loose, performs type coercion)	5 == '5'	true
===	Strict equal to (checks value and type)	5 === '5'	false
!=	Not equal to (loose)	5 != '5'	false
!==	Strict not equal to	5 !== '5'	true
>	Greater than	10 > 5	true
<	Less than	10 < 5	false
>=	Greater than or equal to	10 >= 10	true
<=	Less than or equal to	5 <= 3	false
Best Practice: Always prefer strict equality (=== and !==) over loose equality (== and !=) to avoid unexpected bugs caused by automatic type coercion.
---

##4. Logical Operators
Used to combine or invert boolean expressions.

Operator	Name	Description	Example
&&	Logical AND	Returns true if both operands are true	true && false → false
||	Logical OR	Returns true if at least one operand is true	true || false → true
!	Logical NOT	Inverts the boolean value	!true → false
JavaScript
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn && isAdmin); // false
console.log(isLoggedIn || isAdmin); // true
console.log(!isAdmin);              // true
##5. Ternary (Conditional) Operator
A shorthand way to write an if...else statement.

Syntax: condition ? expressionIfTrue : expressionIfFalse

JavaScript
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

---
##6. Nullish Coalescing (??) & Optional Chaining (?.)
Modern operators introduced in ES2020 for safely handling null and undefined.

Nullish Coalescing (??): Returns the right-hand operand when the left-hand operand is null or undefined (unlike ||, it does not treat 0 or "" as falsy).

Optional Chaining (?.): Safely accesses deeply nested object properties without throwing an error if a reference is null or undefined.

JavaScript
const count = 0;
console.log(count || 10); // 10 (0 is falsy)
console.log(count ?? 10); // 0  (0 is not null/undefined)

const user = { profile: { name: "Aarav" } };
console.log(user?.address?.city); // undefined (no TypeError thrown)

---
##7. Type Operators
Used to check the data type or instance of a value.

typeof: Returns a string indicating the type of the operand.

instanceof: Returns true if an object is an instance of a specific class or constructor.

JavaScript
console.log(typeof "Hello");       // "string"
console.log(typeof 42);            // "number"
console.log([1, 2] instanceof Array); // true
---

##8. Bitwise Operators
Perform operations on 32-bit binary representations of numbers.

Operator	Name	Example
&	Bitwise AND	5 & 1 → 1
|	Bitwise OR	5 | 1 → 5
^	Bitwise XOR	5 ^ 1 → 4
~	Bitwise NOT	~5 → -6
<<	Left Shift	5 << 1 → 10
>>	Right Shift	5 >> 1 → 2
Operator Precedence (Highest to Lowest)
Grouping ()

Member Access ., Optional Chaining ?., Function Call ()

Postfix/Prefix Increment & Decrement ++, --, Logical NOT !, typeof

Exponentiation **

Multiplication *, Division /, Modulus %

Addition +, Subtraction -

Comparison <, <=, >, >=

Equality ==, !=, ===, !==

Logical AND &&

Logical OR ||, Nullish Coalescing ??

Ternary ? :

Assignment =, +=, -=, etc.
