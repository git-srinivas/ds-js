function PrimeNumbers(A){
  var factors = [],results=[];
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
      console.log(results)
      }
      else
      return 0;
}
PrimeNumbers(11)
