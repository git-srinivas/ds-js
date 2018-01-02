
import java.io.*;
import java.lang.*;
import java.util.*;

class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
      TreeNode(int x) {
       val = x;
       left=null;
       right=null;
      }
}

public class Main {
    public static void main(String[] args) {
	// write your code here
        System.out.println("Executing byte code");
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);

        System.out.println(postTraversal(root));
    }

public static ArrayList<Integer> postTraversal(TreeNode root) {
       ArrayList<Integer> result = new ArrayList<Integer>();
       // Base Case
       if (root == null) {
           return result;
       }

       // Create an empty stack and push root to it
       Stack<TreeNode> nodeStack = new Stack<TreeNode>();
       nodeStack.push(root);

       /* Pop all items one by one. Do following for every popped item
        a) print it
        b) push its right child
        c) push its left child
        Note that right child is pushed first so that left is processed first */
       while (nodeStack.empty() == false) {

           // Pop the top item from stack and print it
           TreeNode mynode = nodeStack.peek();

           nodeStack.pop();

           // Push right and left children of the popped node to stack
           if(mynode.right == null && mynode.left == null){
               result.add(mynode.val);
           }
           if (mynode.left != null) {
               nodeStack.push(mynode.left);
           }
           if(mynode.right != null || mynode.left != null){
               nodeStack.push(new TreeNode(mynode.val));
           }
           if (mynode.right != null) {
               nodeStack.push(mynode.right);
           }


       }

       return result;
   }
 }
