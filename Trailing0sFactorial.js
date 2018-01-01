function TrailingZeroes(n){
  var sum=1,twos=0,fives=0,tens=0;
  for(var i=1;i<=n;i++){
    if(i%5==0)
    fives++;
  }

  return fives;
}
console.log(TrailingZeroes(13));
