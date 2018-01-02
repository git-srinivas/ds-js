function PrettyPrint(n){
  var b =[],len = n;

          // spiral matrix
          for(var i=0;i<n;i++){
            b[i] = new Array();
              for(var j=0;j<n;j++){
                  b[i][j] = 0;
              }
          }
          var T=0,L=0,direction = 0;
          var B = b.length-1, R = b[0].length-1;
          var result = [];

          while(T<=B && L<= R){
            if(direction==0){
              for(var i=L;i<=R;i++)
                b[T][i] = len;
              T++;
              direction = 1;
            }
            else if(direction == 1){
              for(var i=T;i<=B;i++)
                b[i][R] = len
              R--;
              direction = 2;
            }
            else if(direction == 2){
              for(var i=R;i>=L;i--)
                b[B][i]=len;
              B--;
              direction = 3;
            }
            else if(direction == 3){
              for(var i=B;i>=T;i--)
               b[i][L]=len;
              L++;
              direction = 0;
              len--;
            }

            }

            return b;
}
console.log(PrettyPrint(5));
