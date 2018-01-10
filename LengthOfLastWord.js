function LengthOfLast(A){
  if(!A)
        return 0;
        var count =0;
        for(var i=0;i<A.length;i++){
            if(A.charAt(i) == ' ')
                count = 0;
            else
                count++
        }
        return count;
}
LengthOfLast("Hello World");
