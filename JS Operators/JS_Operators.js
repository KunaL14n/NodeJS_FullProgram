//LOgical Operator
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin); 
console.log(!isAdmin);   


//Ternary operators
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"


//Nullish Coalescing (??) & Optional Chaining (?.)
const count = 0;
console.log(count || 10); // 10 (0 is falsy)
console.log(count ?? 10); // 0  (0 is not null/undefined)

const user = { profile: { name: "Aarav" } };
console.log(user?.address?.city); // undefined (no TypeError thrown)


