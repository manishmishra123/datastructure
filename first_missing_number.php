<?php
/*

Input: {0, 1, 2, 6, 9}, n = 5, m = 10
Output: 3

Input: {4, 5, 10, 11}, n = 4, m = 12
Output: 0

Input: {0, 1, 2, 3}, n = 4, m = 5
Output: 4

Input: {0, 1, 2, 3, 4, 5, 6, 7, 10}, n = 9, m = 11
Output: 8
*/
// function that returns  
// smallest elements missing 
// in a sorted array. 
function findFirstMissing($array, $start, $end) 
{ 
    if ($start > $end) 
        return $end + 1; 
  
    if ($start != $array[$start]) 
        return $start; 
  
    $mid = round(($start + $end) / 2); 
  
    // Left half has all  
    // elements from 0 to mid 
    if ($array[$mid] == $mid) 
        return findFirstMissing($array,  
                                $mid + 1,  
                                $end); 
  
    return findFirstMissing($array,  
                            $start,  
                            $mid); 
} 
  
    // Driver Code 
    $arr = array (0, 1, 2, 3, 4, 5, 6, 7, 10); 
    $n = count($arr); 
    echo "Smallest missing element is " , 
          findFirstMissing($arr, 0, $n - 1); 