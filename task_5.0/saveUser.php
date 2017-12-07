<?php
try {
  $user = $_POST["user"];
  $pswd = $_POST["pswd"];
  $fileName = 'json/users.json';
  $arr_data = array();

  //Get data from existing json file
  $jsondata = file_get_contents($fileName);
  // echo "jsondata - " . $jsondata . '<br>';
  // converts json data into array
  $arr_data = json_decode($jsondata, true);
  //put new data
  $newUser = array();
  $newUser['name'] = $user;
  echo $user;
  $newUser['password'] = $pswd;
  $str = count($arr_data)+'';
  $arr_data[$str] = $newUser;
  //Convert updated array to JSON
  $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
  //write json data into data.json file
  if(file_put_contents($fileName, $jsondata)) {
  } else {
    echo "error. JSON not writed!";
  }
} catch (Exception $e) {
  echo 'Caught exception: ',  $e->getMessage(), "\n";
}

?>
