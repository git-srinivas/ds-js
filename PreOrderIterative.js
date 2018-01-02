function PreOrderIterative(root){
  var container = [],result=[];
    if(root==null)
    return ;
    container.push(root);
    while(container.length>0){
        var node = container[0];
        result.unshift(node.data);
        container.shift();
        // Push right and left children of the popped node to stack
        if (node.right != null) {
              container.unshift(node.right);
          }
        if (node.left != null) {
            container.unshift(node.left);
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
