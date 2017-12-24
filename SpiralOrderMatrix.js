
"use strict"
function spiralOrderMatrix(){
  var a =[[1]];
  var T=0,L=0,direction = 0;
  var B = a.length-1, R = a[0].length-1;
  var result = [];
  console.log(B,R)
  while(T<=B && L<= R){
    if(direction==0){
      for(var i=L;i<=R;i++)
        result.push(a[T][i]);
      T++;
      direction = 1;
    }
    if(direction == 1){
      for(var i=T;i<=B;i++)
        result.push(a[i][R]);
      R--;
      direction = 2;
    }
    if(direction == 2){
      for(var i=R;i>=L;i--)
        result.push(a[B][i]);
      B--;
      direction = 3;
    }
    if(direction == 3){
      for(var i=B;i>=T;i--)
        result.push(a[i][L]);
      L++;
      direction = 0;
    }
    }
  console.log(result)
}
spiralOrderMatrix();
