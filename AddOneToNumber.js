"use strict"

// Given a non-negative number represented as an array of digits,
//
// add 1 to the number ( increment the number represented by the digits ).
//
// The digits are stored such that the most significant digit is at the head of the list.
//
// Example:
//
// If the vector has [1, 2, 3]
//
// the returned vector should be [1, 2, 4]
//
// as 123 + 1 = 124.
// remove all the trailing 0's
function AddOneToNumber(){
  var A =  [ 0, 3, 7, 6, 4, 0, 5, 5, 5 ];
    var carry = 1;
    var result = []
        A = A.reverse();
        A.map(function(a){
          a = a + carry;
            carry = a/10;
            a= a% 10;
            result.push(Math.floor(a));
        });
        if(carry == 1)
        result.push(carry)
        while(result[result.length-1] === 0){
              result.pop();
          }
        result.reverse();

        })
}
