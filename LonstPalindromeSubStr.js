function LongestPalSub(S){
  var len = a.length;
  var pl = len;
  for(var j=len;j>0;j--) {
    for (var i = 0; i <= len - j; i++) {
      if (isPalin(a, i, i + j - 1)) {
        return a.substring(i, i + j);
      }
    }
  }
}

function isPalin(a, low, high) {
  while (low <= high) {
    if (a[low++] != a[high--]) return false;
  }
  return true;
}

console.log(LongestPalSub("kasabba"));
