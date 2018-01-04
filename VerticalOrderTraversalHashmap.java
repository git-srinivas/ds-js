package com.company;
import javafx.util.Pair;

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
public class Main {
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
        TreeMap<Integer, ArrayList<Integer>> map = new TreeMap<>();

        int hd =0;



        getVerticalOrder(root,hd,map);

        // Traverse the map and print nodes at every horigontal
        // distance (hd)


    }

    static ArrayList<ArrayList<Integer>> getVerticalOrder(TreeNode root, int hd, TreeMap<Integer, ArrayList<Integer>> m) {
        // Base case


        Queue<Pair<TreeNode,Integer>> que = new LinkedList<>();
        ArrayList<ArrayList<Integer>> result = new ArrayList<>();
        if(root == null)
            return result;

        que.add(new Pair(root,hd));
        while (que.isEmpty()== false)
        {
            // pop from queue front
            Pair<TreeNode ,Integer> temp = que.peek();
            que.poll();
            hd = temp.getValue();
            TreeNode node = temp.getKey();


            //get the vector list at 'hd'
            ArrayList<Integer> get =  m.get(hd);

            // Store current node in map 'm'
            if(get == null)
            {
                get = new ArrayList<Integer>();
                get.add(node.val);
            }
            else
                get.add(node.val);
            m.put(hd, get);
            if (node.left != null)
                que.add(new Pair(node.left, hd-1));
            if (node.right != null)
                que.add(new Pair(node.right, hd+1));
        }
        for (Map.Entry<Integer, ArrayList<Integer>> entry : m.entrySet())
        {
            result.add(entry.getValue());
        }

        return result;

    }
}
