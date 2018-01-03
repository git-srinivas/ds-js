static int height(Node root) {

      // with recursion
          if(root == null)
          return -1;
      else return (1+(height(root.left)>height(root.right)?height(root.left):height(root.right)));

//without recursion partial solution need to complete this
        int height = -1;
      Stack<Node> stack = new Stack<Node>();
      ArrayList<Node> al = new ArrayList<Node>();
      if(root == null)
          return -1;
      stack.push(root);
      Node node;
      while(stack.isEmpty()==false){
          node = stack.pop();
          if(node.right != null)
              stack.push(node.right);
          if(node.left != null)
              stack.push(node.left);
          if(node.right != null || node.left != null)
          height++;
      }
      return height;


  }
