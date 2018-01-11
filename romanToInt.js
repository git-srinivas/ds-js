function romanTOInt(A){
  if(!A)
   return 0;
   if(A<1 || A>3999)
   return 0

   var romans = [{sym:'I',val:1}, {sym:'V',val:5}, {sym:'X',val:10},{sym:'L',val:50},{sym:'C',val:100},{sym:'D',val:500},{sym:'M',val:1000}];
   var sum = 0,temp, nextT,tempVal,tmpNxtVal;
     for(var i=0;i<A.length;i++){
         temp = A.charAt(i);
           tempVal = romans.filter(function(obj){return obj.sym==temp});
         if(A.charAt(i+1)){
            nextT = A.charAt(i+1);
            tmpNxtVal = romans.filter(function(obj){return obj.sym==nextT});
            if(tempVal[0].val<tmpNxtVal[0].val){
                sum = sum - tempVal[0].val;
            }
            else
            sum = sum +tempVal[0].val;
         }
         else {
           sum = sum + tempVal[0].val;
         }
     }
     return sum;
}
console.log(romanTOInt("XIV"));
