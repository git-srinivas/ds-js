function SortedPermutation(str){
  var len = str.length;
   var mul = fact(len);
   var rank = 1;
   var countRight;

    // A utility function to count smaller
   // characters on right of arr[low]
   function findSmallerInRight(str,low,high){
       var countRight = 0, i;

       for (var i = low + 1; i <= high; ++i)
           if (str.charAt(i) < str.charAt(low))
               ++countRight;
       return countRight;
   }
   // A utility function to find factorial of n
   function fact(n)
   {
       return (n <= 1)? 1 :(n * fact(n-1))%1000003;
   }

   for (var i = 0; i < len; ++i)
   {
       mul /= len - i;
       // count number of chars smaller
       // than str[i] from str[i+1] to
       // str[len-1]
       countRight = findSmallerInRight(str, i, len-1);
       rank += countRight * mul ;
   }

   return rank;
}
console.log(SortedPermutation("UJSQEGYMRLOCWDFVXHZT"));
