function PalindromeString(){
  var matc = [],result = [];
    if(!a)
     return 0;
     else if(a.length>0){
         matc = a.match(/[a-z0-9]/ig)
         if(matc){
           result = matc.slice(0);
         result=result.reverse()
         if(result.join("").toLowerCase() == matc.join("").toLowerCase())
         return 1;
         else
         return 0;
         }
         else
         return 1;

     }
}
