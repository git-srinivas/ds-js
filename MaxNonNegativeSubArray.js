function MaxNon(){
  var a = [1,2,3,4,5,-6,7,8,1,2];
  a.push(-1);
  var result = [],sum=0,indexes=[];
  if(a){
    if(a.length>1){
      a.map((item,i)=>{
         if(a[i]>=0){
           sum = sum+item;
           indexes.push(item);
         }else{
           temp = {}
           temp.sum = sum;
           temp.indexes = indexes.slice(0);
           result.push(temp);
           sum=0;
           indexes.length=0;
         }
         return item;
      })

      function compare(a,b) {
        if (a.sum < b.sum)
          return 1;
        if (a.sum > b.sum)
          return -1;
      }
      result.sort(compare)
      console.log(result[0].indexes)
    }
    else
      return a[0];
  }else
    return 0;
}
MaxNon();
