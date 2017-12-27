// Given a number N, verify if N is prime or not.
//
// Return 1 if N is prime, else return 0.
function VerifyPrime(A){
  var result = [];
    if(A>1){
       for(var i=1;i<= Math.floor(Math.sqrt(A));i++){
            if(A%i==0){
                result.push(i)
                if (A / i !=i)
                result.push(A / i);
            }
        }
        result = result.sort(function(a,b){return a-b})
        if(result.length==2)
         return 1;
        else
        return 0
      }
      else
      return 0;
    }
}
