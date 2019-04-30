<?php
	//code
	// $newarray = array();
function removeDups($inputArray,$outputArray)
{ 

 

foreach($inputArray as $inputArrayItem) {
    foreach($outputArray as $outputArrayItem) {
        if($inputArrayItem == $outputArrayItem) {
            continue 2;
        }
    }
    $outputArray[] = $inputArrayItem;
}
 return $outputArray;
} 
  
$inputArray = array(1, 4, 2, 1, 6, 4, 9, 7, 2, 9);
$outputArray = array();

$finalData = implode(',',removeDups($inputArray,$outputArray)); 

$finalData = '{'.$finalData.'}';
echo $finalData;
?>
