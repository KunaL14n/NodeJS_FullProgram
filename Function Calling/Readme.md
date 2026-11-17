In Node.js , fucntion calliing is the fundamental mechanism by which block of reusable code are executed to perform specific tasks
It forms the backbone of asynchrnous programming , and drive the event driven architecture .
When a function is invoked in Parantheses () - .Node.js pushes a new execution context onto the call stack , passes the arguments in the parantheses.
runs the code inside and pops it off once a value is returned. BCZ Node is single threaded and non blocking ,functions are passed as callbacks to other functions(Ex. fs.readfile)
