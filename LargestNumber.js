function LargestNumber(){
  var A =[3, 30, 34, 5, 9];
   var inter =[];
   function compare(a,b){
     var temp = a+""+b;
     var temp1 = b+""+a;
     if(parseInt(temp)>parseInt(temp1))
     return -1;
     else
     return 1;
   }
   var b = A.sort(compare);
   console.log(b.join(""));
}
LargestNumber()
