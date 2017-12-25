"use strict"
function MaxSubArray(){
  //Kadane's algorithm
 var max_so_far = 0, max_ending_here = 0;
   for (var i = 0; i < a.length; i++)
   {
       max_ending_here = max_ending_here + a[i];
       if (max_so_far < max_ending_here)
           max_so_far = max_ending_here;
       if (max_ending_here < 0)
           max_ending_here = 0;
   }
   return max_so_far;
}
