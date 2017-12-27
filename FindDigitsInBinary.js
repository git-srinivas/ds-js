function FindDigitsInBinary(){
  var A = 9;
  if(A>1){
           var result = [];
           while(A>0){
               result.push(A%2);
               A=Math.floor(A/2)
           }
           console.log(result);
       }else{
           console.log(A);
       }

}
FindDigitsInBinary();
