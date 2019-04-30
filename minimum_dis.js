/*
arr = [1,2,4,6,2,3,5,3,5,3,7,8,5,6];

function min_distance(arr,start,end){
    let notedFirst = -1;
    let notedSecond = -1;
    for(i=0;i<arr.length;i++){
        if(start == arr[i]){
            notedFirst = i;
            
        }
        if(end == arr[i] && notedFirst != -1){
            notedSecond = i;
            break;
        }
    }

    var calc =  notedSecond -  notedFirst;
    calc = Math.abs(calc);
    return calc;
}

console.log(min_distance(arr,3,6));
*/
function min_distance(arr, n, x, y) {
    var i = 0;
    var min_d = Number.MAX_VALUE;
    //console.log(min_d);
    var prev;
    for (i = 0; i < n; i++) {
        if (arr[i] == x || arr[i] == y) {
            prev = i;
            break;
        }
    }
    for (i; i < n; i++) {
        if (arr[i] == x || arr[i] == y) {
            if (arr[prev] != arr[i] && (i - prev) < min_d) {
                min_d = i - prev;
            }
            prev = i;
        }
    }
    return min_d;
}

function min_d(n, arr, x, y) {
    min_distance = Number.MAX_VALUE;
    var i=0;
    var prev;
    for (i = 0; i < n; i++) {
        if (arr[i] == x || arr[i] == y)
            prev = i;
        break
    }
    for (; i < n; i++) {
        if (arr[i] == x || arr[i] == y) {
            if (arr[prev] != arr[i] && (i - prev) < min_distance) {
                min_distance = i - prev;
            }
            prev = i;
        }

       
    }
    return min_distance;
}
/*
function minDist($arr, $n, $x, $y) 
{ 
    $i = 0; 
    $min_dist = PHP_INT_MAX; 
    $prev; 
      
    // Find the first occurence of any 
    // of the two numbers (x or y) and  
    // store the index of this occurence  
    // in prev 
    for ($i = 0; $i < $n; $i++) 
    { 
        if ($arr[$i] == $x or $arr[$i] == $y) 
        { 
            $prev = $i; 
            break; 
        } 
    } 
      
    // Traverse after the first occurence 
    for ( ; $i < $n; $i++) 
    { 
        if ($arr[$i] == $x or $arr[$i] == $y) 
        { 
            // If the current element matches  
            // with any of the two then check 
            // if current element and prev 
            // element are different Also check 
            // if this value is smaller than  
            // minimm distance so far 
            if ( $arr[$prev] != $arr[$i] and 
                    ($i - $prev) < $min_dist ) 
            { 
                $min_dist = $i - $prev; 
                $prev = $i; 
            } 
            else
                $prev = $i; 
        } 
    } 
      
    return $min_dist; 
} */

arr = [3, 5, 4, 2, 6, 3, 0, 0, 5, 4, 8, 3];
n = arr.length;
x = 5;
y = 6;

console.log("Minimum distance between" + x + "and" + y + "is " + min_d(n,arr, x, y)); 