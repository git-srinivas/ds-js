function SieveOfEratosthenese(n){
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
}
function isPrime(num){
   for(var i=2;i<num;i++){
     if(num%i==0)
     return false;
   }
   return true;
}

console.log(SieveOfEratosthenese(74));
