function GCD(a,b){
  var x,y;
  if(!a)
  return b;
  else if(!b)
  return a
    if(a>=b){
       x = a;
       y = b
    }
    else{
        x=b;
        y=a;
    }
        while(x>0){
            if(x%y==0)
            break;
            else{
                var temp = y;
                    y=x%y;
                    x=temp;
            }
        }
        return y;
}
console.log(GCD(350,136))
