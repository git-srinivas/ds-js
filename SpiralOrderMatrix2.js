
      "use strict"
      // print n sqare numbers in spiral order in matrix
      function spiralOrderMatrix(n){
        var a=[],b=[];
        if(n > 0){
            var k=0;
            for(var i=1;i<=Math.pow(n,2);i++){
              a.push(i);
            }
            for(var i=0;i<n;i++){
              b[i] = new Array();
                for(var j=0;j<n;j++){
                    b[i][j] = 0;
                }
            }
            var T=0,L=0,direction = 0;
            var B = n-1, R = n-1;
            var result = [],count = 0;
            while(T<=B && L<= R){
              if(direction==0){
                for(var i=L;i<=R;i++){
                  b[T][i] = a[k];
                  k++;
                }
                T++;
                direction = 1;
              }
              else if(direction == 1){
                for(var i=T;i<=B;i++){
                  b[i][R]=a[k];
                  k++
                }
                R--;
                direction = 2;
              }
              else if(direction == 2){
                for(var i=R;i>=L;i--){
                  b[B][i] = a[k];
                  k++
                }

                B--;
                direction = 3;
              }
              else if(direction == 3){
                for(var i=B;i>=T;i--){
                  b[i][L]=a[k];
                  k++;
                }
                L++;
                direction = 0;
              }
              }

            console.log(b);
        }
        else
        return 0;

      }
      spiralOrderMatrix(5);
