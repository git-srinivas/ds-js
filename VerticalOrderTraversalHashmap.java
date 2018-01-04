
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
    public static ArrayList<Integer> result = new ArrayList<Integer>();

    public static void main(String[] args) {
        // write your code here
        System.out.println("Executing byte code");
        Values val = new Values();

        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);


        HashMap<Integer, ArrayList<Integer>> map = new HashMap<Integer, ArrayList<Integer>>();
        Queue<ArrayList<TreeNode>> q = new LinkedList<>();
        ArrayList<ArrayList<Integer>> result = new ArrayList<>();
        int hd =0;
        getVerticalOrder(root,hd,m);

        // Traverse the map and print nodes at every horigontal
        // distance (hd)
        for (Map.Entry<Integer, ArrayList<Integer>> entry : m.entrySet())
        {
            result.add(entry.getValue());
        }
        System.out.println(result);

    }

    static void getVerticalOrder(TreeNode root, int hd, TreeMap<Integer, ArrayList<Integer>> m) {
        // Base case
        if(root == null)
            return;

        //get the vector list at 'hd'
        ArrayList<Integer> get =  m.get(hd);

        // Store current node in map 'm'
        if(get == null)
        {
            get = new  ArrayList<Integer>();
            get.add(root.val);
        }
        else
            get.add(root.val);

        m.put(hd, get);

        // Store nodes in left subtree
        getVerticalOrder(root.left, hd-1, m);

        // Store nodes in right subtree
        getVerticalOrder(root.right, hd+1, m);
    }
}
