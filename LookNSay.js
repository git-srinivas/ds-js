function LookNSay(n){
  // Base cases
if (n == 1)      return "1";
if (n == 2)      return "11";

// Find n'th term by generating all terms from 3 to
// n-1.  Every term is generated using previous term
var str = "11"; // Initialize previous term
for (var i = 3; i<=n; i++)
{
 // In below for loop, previous character
 // is processed in current iteration. That
 // is why a dummy character is added to make
 // sure that loop runs one extra iteration.
 str += "$";
 var len = str.length;

 var cnt = 1; // Initialize count of matching chars
 var  tmp = ""; // Initialize i'th term in series

 // Process previous term to find the next term
 for (var j = 1; j < len; j++)
 {
     // If current character does't match
     if (str[j] != str[j-1])
     {
         // Append count of str[j-1] to temp
         tmp += cnt;

         // Append str[j-1]
         tmp += str[j-1];

         // Reset count
         cnt = 1;
     }

     //  If matches, then increment count of matching
     // characters
     else cnt++;
 }

 // Update str
 str = tmp;
}

return str;
}
