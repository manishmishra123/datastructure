<?php
// $encryptedContent = file_get_contents('encypted.txt');
		 
// 		$passphrase = '************';
// 		$gpg = new gnuPG('gpg', 'C:\Program Files (x86)\GNU\GnuPG\gpg');		
// 		$secretKeys = $gpg->ListKeys('secret');
		
// 		if (is_array($secretKeys))
// 		{
// 			try
// 			{
//                 $decryptedContent = $gpg->decrypt($secretKeys[0]['KeyID'], $passphrase, $encryptedContent);
//                 print_r($decryptedContent);
// 			}
// 			catch (Exception $e)
// 			{
// 				echo "PGP Error: " . $gpg->error . "<br/>";
// 				echo "Exception: " . $e;
// 			}
//             echo "PGP Error: " . $gpg->error . "<br/>";
//         }
            
?>
<?php 
  error_reporting(-1);
  ini_set('display_errors', '1');
  // Use ls command to shell_exec 
  // function 
  $output = shell_exec('ls'); 
    
  // Display the list of all file 
  // and directory 
  echo "<pre>$output</pre>"; 
  ?>  