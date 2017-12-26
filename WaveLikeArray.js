"use strict"
function WaveLikeArray(){
  var A = [ 6, 17, 15, 13 ];
  var temp = 0;
  A=A.sort(function(a,b){return a-b});
  for(var i=0;i<A.length;i++){
    if(A[i+1]){
      if(i%2==0){
        if(A[i]>A[i+1]){}
        else{
           temp=A[i];
          A[i]=A[i+1];
          A[i+1]=temp;
        }
      }
    }
  }
  console.log(A)
}
WaveLikeArray();
