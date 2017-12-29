//Question
// Given a positive integer which fits in a 32 bit signed integer, find if it can be expressed as A^P where P > 1 and A > 0. A and P both should be integers.
// Example
// Input : 4
// Output : True
// as 2^2 = 4.
//solution approach
// Lets look at the number of valid possibilities for A^B.
// For B = 2, number of possibilities = sqrt(INT_MAX) = sqrt(2^31 - 1) < 2^16.
// For B = 3, number of possibilities = INT_MAX**1/3 < 2^11
// For B = 4, number of possibilities = INT_MAX**1/4 < 2^8
// .
// .
// .
// For B = 32, number of possibilities = 0 ( Not considering 1 as its considered in the first case, and 2^32 exceeds INT_MAX ).
// So, the total number of possibilities are less than 10^5.
// Now, we just need to iterate on these possibilities and see if we find X = A^B.
function PowerOfTwoInts(A){
  if (A==1)  return 1;

// Try all numbers from 2 to sqrt(n) as base
for (var x=2; x<=Math.sqrt(A); x++)
{
    var y = 2;
    var p = Math.pow(x, y);

    // Keep increasing y while power 'p' is smaller
    // than n.
    while (p<=A && p>0)
    {
        if (p==A)
            return 1;
        y++;
        p = Math.pow(x, y);
     }
}
return 0;
}
