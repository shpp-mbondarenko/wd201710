<?php
try {
  $user = $_POST['user'];
  $msg = $_POST['msg'];
  $dateOfMsg = $_POST['date'];
  $fileName = 'json/chatHistory.json';
  $arr_data = array();

  echo ' >>>'.$user . ' ' . $msg . ' ' . $dateOfMsg . '>>> ';

  //Get data from existing json file
  $jsondata = file_get_contents($fileName);
  echo ' jsondata - ' . $jsondata . '<br>';
  // converts json data into array
  $arr_data = json_decode($jsondata, true);
  //put new data
  $newMessage = array();
  $newMessage['name'] = $user;
  $newMessage['msg'] = $msg;
  $newMessage['date'] = $dateOfMsg;
  $str = count($arr_data)+'';
  $arr_data[$str] = $newMessage;
  //Convert updated array to JSON
  $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
  //write json data into data.json file
  if(file_put_contents($fileName, $jsondata)) {
  } else {
    echo 'error. JSON not writed!';
  }
} catch (Exception $e) {
  echo 'Caught exception: ',  $e->getMessage(), '\n';
}

?>
