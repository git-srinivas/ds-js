"use strict"
// Given an array A of integers, find the maximum of j - i subjected to the constraint of A[i] <= A[j].
//
// If there is no solution possible, return -1.
function MaxDistance(){
   var A=[3,5,4,2],len=A.length;
  var arr = [],result=[];
  A.map(function(a,ind){
    arr.push({val:a,index:ind});
  })
  arr = arr.sort(function(a,b){return a.val-b.val});
  var max_diff = arr[1].index - arr[0].index;
  var min_element = arr[0].index;
  for(var i = 1; i <arr.length; i++)
  {
    if (arr[i].index - min_element > max_diff)
      max_diff = arr[i].index - min_element;
    if (arr[i].index < min_element)
         min_element = arr[i].index;
  }
  console.log(max_diff);
  }
MaxDistance();
