
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

class Values{
    int min,max;
}
public class First {
    TreeNode root;
    public static  ArrayList<Integer> result = new ArrayList<Integer>();
    public static void main(String[] args) {
        // write your code here
        System.out.println("Executing byte code");
        Values val = new Values();

        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(4);
        root.right.left = new TreeNode(3);
        root.right.right = new TreeNode(5);

      //  root.right.right.right = new TreeNode(6);
       // root.left.left.left = new TreeNode(20);
        findMinMax(root, val, val, 0);
        // Iterate through all possible vertical lines starting
        // from the leftmost line and print nodes line by line
        for (int line_no = val.min; line_no <= val.max; line_no++)
        {
            printVerticalLine(root, line_no, 0);

        }
        System.out.println(result);
    }

    public static void findMinMax(TreeNode node, Values min, Values max, int hd){
        // Base case
        if (node == null)
            return;
        // Update min and max
        if (hd < min.min)
            min.min = hd;
        else if (hd > max.max)
            max.max = hd;
        // Recur for left and right subtrees
        findMinMax(node.left, min, max, hd - 1);
        findMinMax(node.right, min, max, hd + 1);
    }
    // A utility function to print all nodes on a given line_no.
    // hd is horizontal distance of current node with respect to root.
    public  static void printVerticalLine(TreeNode node, int line_no, int hd) {
        // Base case
        if (node == null)
            return;

        // If this node is on the given line number
        if (hd == line_no)
            result.add(node.val);

        // Recur for left and right subtrees
        printVerticalLine(node.left, line_no, hd - 1);
        printVerticalLine(node.right, line_no, hd + 1);
    }
}
