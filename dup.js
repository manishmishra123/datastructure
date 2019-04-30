function uniq_fast(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
             //if matching the record then only it will be one
               seen[item] = 1;
               out[j++] = item;
         }
         /* else{
             console.log(item);
             return false;
         }
         */
    }
    return out;
}

arr = [1,4,2,3,2,4,5,6,7,3];
console.log(uniq_fast(arr));