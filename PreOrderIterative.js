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

function PreOrderIterative(root){
  var container = [],result=[];
  var stack = new Stack()
    if(root==null)
    return ;
    stack.push(root);
    while(stack.count>0){
        var node = stack.peek();
        result.push(node.data);
        stack.pop();
        // Push right and left children of the popped node to stack
        if (node.right != null) {
              stack.push(node.right);
          }
        if (node.left != null) {
            stack.push(node.left);
        }
    }
    console.log(result);
}
PreOrderIterative({ data: 129,
  left:
   { data: 97,
     left: { data: 93 },
     right: { data: 106} },
  right:
   { data: 98,
     left: { data: 27 },
     right: { data: 61} } })
