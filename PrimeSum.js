//O(n^2 solution)
function PrimeSum(A){
  var factors = [],results=[],ret=[];
    if(A>1){
      for(var j=2;j<=A;j++){
        for(var i=1;i<= Math.floor(Math.sqrt(j));i++){
             if(j%i==0){
                 factors.push(i)
                 if (j / i !=i)
                 factors.push(j / i);
             }
         }
         if(factors.length==2)
           results.push(j);
         factors.length=0;
      }
      results = results.sort();
      results.map(function(a){
        var temp = A -a;
        if(results.indexOf(temp)>0)
          if(ret.length==0)
          ret.push(a,temp);
      });
      console.log(ret)
      }
      else
      return 0;
}

//Order of N solution
function PrimeSumOofN(){
  var first,second;
first=2,second=n-first;
if(n<2)
return [];
while(first<=second){
  second=n-first;
  if(isPrime(first) && isPrime(second))
  return [first,second];
  first++;
}
function isPrime(num){
   for(var i=2;i<num;i++){
     if(num%i==0)
     return false;
   }
   return true;
}
	}
}
PrimeSum(12)
