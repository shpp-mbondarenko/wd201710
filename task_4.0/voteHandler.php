<?php
	$fileName = 'results.json';
	$arr_data = array();
	try {
	   //Get form data
		$pokemon = "";
	   if (isset($_GET['pokemon'])) {
		$pokemon = $_GET['pokemon'];
	   }

	   //Get data from existing json file
	   $jsondata = file_get_contents($fileName);

	   // converts json data into array
	   $arr_data = json_decode($jsondata, true);

	   $arr_data[$pokemon] = $arr_data[$pokemon] + 1;

	   //Convert updated array to JSON
	   $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

	   //write json data into data.json file
	   if(file_put_contents($fileName, $jsondata)) {
	        echo 'Data successfully saved';
	    } else {
	        echo "error";
	    }
	} catch (Exception $e) {
	        echo 'Caught exception: ',  $e->getMessage(), "\n";
	}
?>
