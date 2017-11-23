<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PHP vote!</title>
</head>
<body>
  <?php
  $choosePokemon = "";
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $choosePokemon = testInput($_POST["choosePokemon"]);
  }

  function testInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  ?>

  <h2>PHP Vote Form</h2>

  <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
    <input name="choosePokemon" type="radio" value="pikachu" checked>Picachu
    <input name="choosePokemon" type="radio" value="bulbasaur">Bulbasaur
    <input name="choosePokemon" type="radio" value="diglett">Diglett
    <input name="choosePokemon" type="radio" value="charmander">Charmander
    <input name="choosePokemon" type="radio" value="magmar">Magmar
    <input type="submit" name="submit" value="Submit">
  </form>

  <?php
  echo "<h2>Your Input:</h2>";
  echo $choosePokemon;
  try {
    $fileName = 'results.json';
    $arr_data = array();
  
    //Get data from existing json file
    $jsondata = file_get_contents($fileName);
    echo "string" . $jsondata;
    // converts json data into array
    $arr_data = json_decode($jsondata, true);

    $arr_data[$choosePokemon] = $arr_data[$choosePokemon] + 1;

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
</body>
</html>
