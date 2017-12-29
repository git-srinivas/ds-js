// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
// For example:
//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB
function ExcelColumn(A){
  var result = [],str = []
       if(A){
           while(A>0){
               result.push(A%26);
               if(A%26 == 0)
               A=Math.floor(A/26)-1;
               else
               A=Math.floor(A/26);
           }
           result.map(function(digit){
               if(digit == 0)
               str.push('z')
               else
               str.push(String.fromCharCode(96 + digit));
           })
           return str.reverse().join("").toUpperCase();
       }
}
ExcelColumn(943566);
