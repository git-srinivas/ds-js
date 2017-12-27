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
PrimeSum(12)
