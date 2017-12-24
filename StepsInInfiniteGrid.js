  "use strict"
  function getMinimumSteps(){
    var A =[ -6, -1, -4, -2, 12, 3, 3, -2, 13, -14, 10, -2, 0, -11, 8, -9, -10 ]
  var B = [ 14, 0, -11, -6, -14, 2, -10, 0, -1, 6, 3, 3, 8, -10, 7, -3, 11 ]
    var l1,l2,result=0;
    if(!A || !B){
        return 0;
    }
    else{
        l1 = A.length;
        l2=B.length;
        if(l1 <= 1)
            return 0;
        else{
            A.map((a,index)=>{
              if(A[index+1] != undefined){
                var xDiff = Math.abs(A[index+1]-a)
                var yDiff = Math.abs(B[index+1]-B[index])
                  result = result+Math.max(xDiff,yDiff)
              }
            });
        }
        console.log(result)
    }
  }
  getMinimumSteps();
