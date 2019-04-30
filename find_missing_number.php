<?php

function findMissingNumber($array){
    $n =$array[count($array)-1];
     $total = round($n*($n+1)/2);
    
   for($i = 0;$i<count($array);$i++){
       $total -= $array[$i];
   }
   return $total;
}

$array = array(1,2,3,4,6);
echo findMissingNumber($array);
