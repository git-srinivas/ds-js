// Given a column title as appears in an Excel sheet, return its corresponding column number.
//
// Example:
//
//     A -> 1
//
//     B -> 2
//
//     C -> 3
//
//     ...
//
//     Z -> 26
//
//     AA -> 27
//
//     AB -> 28
function ExcelColumnNum(){
  var result = [],val=0;
      if(A){
          A=A.toLowerCase();
          result = A.split("");
           result = result.reverse();
          result.map(function(char,index){
              val = val+ Math.pow(26,index)*(char.charCodeAt(0)- 96);
          });
      }
      return val;
}
