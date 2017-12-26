function AllFactors(){
  var A=6
  var result = [];
    for(var i=1;i<= Math.floor(Math.sqrt(A));i++){
        if(A%i==0){
            result.push(i)
            if (A / i !=i)
            result.push(A / i);
        }
    }
    result = result.sort(function(a,b){return a-b})
    console.log(result);
}
AllFactors();
