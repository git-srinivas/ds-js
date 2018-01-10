public void levelOrderTraversal(TreeNode root){
       Queue<TreeNode> q = new LinkedList<>();
       ArrayList<Integer> result = new ArrayList<>();
       q.add(root);
       while(q.isEmpty() == false){
           TreeNode node = q.peek();
           q.poll();
          if(node == null)
              return ;
           System.out.print(node.val+" ");
           if(node.left != null)
               q.add(node.left);
           if(node.right != null)
               q.add(node.right);
       }

   }
