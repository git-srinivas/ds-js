"use strict"
// class Stack{
//   constructor() {
//     this.items = [];
//   }
//   push(element){
//     this.items.push(element);
//   }
//   pop(){
//     if(this.items.length == 0)
//         return "Underflow";
//     return this.items.pop();
//   }
//   peek(){
//     return this.items[this.items.length - 1];
//   }
//   isEmpty(){
//     return this.items.length == 0;
//   }
// // printStack function
// printStack(){
//     var str = "";
//     for (var i = 0; i < this.items.length; i++)
//         str += this.items[i] + " ";
//     return str;
// }
// }
// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};
}

// Adds a value onto the end of the stack
Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
}

// Removes and returns the value at the end of the stack
Stack.prototype.pop = function() {
    // Check to see if the stack is empty
    if (this.count === 0) {
        return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

// Returns the length of the stack
Stack.prototype.size = function() {
    return this.count;
}
Stack.prototype.peek = function() {
    return this.storage[this.count-1];
}

var stack = new Stack();
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
console.log(stack)
stack.pop();
console.log(stack.peek())
