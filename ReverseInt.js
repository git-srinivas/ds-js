// Reverse digits of an integer.
// Example1:
// x = 123,
// return 321
// Example2:
// x = -123,
// return -321
// Return 0 if the result overflows and does not fit in a 32 bit signed integer

function ReverseInt(){
  var sign ="",result=[];
      if(!a)
      return 0;
      if(a<0)
      sign = "-"
      a=Math.abs(a);
      result = a.toString().split("");
      result = result.reverse().join("");
      result = sign+result;
      //overflow above integer range 2 power 31 - 1;
      if(Math.abs(parseInt(result))>2147483647)
      return 0;
      else
      return parseInt(result);
}
