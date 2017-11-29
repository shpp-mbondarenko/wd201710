<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="styles.css">
  <title>PHP TASK</title>
</head>
<body>   
  <div id="topButtons" >
    <a class="button" href='index.php?calculateSum1000=true'><button>Calculate sum -1000 to 1000</button></a>
    <a class="button" href='index.php?calculateSum1000end237=true'><button>Calculate sum -1000 to 1000 end with 2, 3, 7</button></a>
    <a class="button" href='index.php?draw50Stars=true'><button>Draw stars</button></a>
    <div>
      <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
        Enter num of rows: <input type="text" name="row" id="row"><br>    
        Enter num of columns: <input type="text" name="col" id="col"><br>    
        <input class="buttonSubmit" type="submit" name="submit" value="Draw chess board">
      </form>       
    </div>
    <div>
      <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
        Enter num: <input type="text" name="inputNum" id="inputNum"><br>    
        <input class="buttonSubmit" type="submit" name="submit" value="Calculate sum of nums">
      </form>       
    </div>
    <a class="button" href='index.php?generateArray=true'><button>Generate array</button></a>
  </div>
  <div id="forChessBoard"></div>
  <?php
      $str = '';
      $rows = ''; 
      $cols = '';
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST['inputNum'])) {
          $str = testInput($_POST["inputNum"]);
          sumOfNums($str);
        }
        if (isset($_POST['row']) && isset($_POST['col'])) {
          $rows = testInput($_POST['row']); 
          $cols = testInput($_POST['col']);
          drawChessBoard($rows, $cols);
        }
      }

      function testInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }
    ?> 

  <?php
    function calculateSum1000() {
      $sum = 0;
      $start = -1000;
      while ($start <= 1000) {
        $sum += $start;
        $start++;
      }
      echo ' Sum -1000 to 1000 = ', $sum;
    }

    function calculateSum1000end237() {
      $sum = 0;
      $start = -1000;
      while ($start <= 1000) {
        $tmp = ($start % 10);
        $tmp = $tmp < 0 ? $tmp * (-1) : $tmp;
        if ($tmp == 2 || $tmp == 3 || $tmp == 7) {
          $sum += $start;
        }        
        $start++;
      }
      echo ' Sum -1000 to 1000 end with 2,3,7 = ', $sum;
    }
    
    function draw50Stars() {
      for ($i = 1; $i <= 50; $i++) {
        for ($j = 1; $j <= $i; $j++) {
          echo '* ';
        }
        echo '<br>';
      }
    }

    function drawChessBoard($rows, $cols) {
      $rows = preg_replace("/[^\d]+/", "", $rows);
      $cols = preg_replace("/[^\d]+/", "", $cols);
      $boolVar = true;
      if ($rows>100 || $cols>100) {
        return;
      }
      for ($i = 0; $i < $rows; $i++) {
      echo '<div style="display:flex;flex-direction:row;">';
      if ($cols % 2 == 0) {
        $boolVar = !$boolVar;
      }
      for ($j = 0; $j < $cols; $j++) {
        if ($boolVar) {
          echo '<div class="chessB"></div>';
          $boolVar = !$boolVar;
        } else {
          echo '<div class="chessW"></div>';
          $boolVar = !$boolVar;
        }
      }
      echo '</div>';
      }
    }

    function sumOfNums($str) {
      $sum = 0;
      $str = preg_replace("/[^\d]+/","",$str);
      for ($i=0; $i < strlen($str); $i++) { 
       $sum += $str[$i];
      }
      echo 'Sum of nums is - ' . $sum;
    }

    function generateArray() {
      $arr = [100]; 
      $res = []; 
      for ($i = 0; $i < 100; $i++) {
        $arr[$i] = rand(1, 10);
      }      
      for ($i = 0; $i < 100; $i++) {
        $res[$arr[$i]] = $arr[$i];
      }
      sort($res);
      arsort($res); 
      for ($i = count($res)-1; $i >= 0; $i--) {
        echo 'array item [' . ((count($res)-1)-$i) . '] - ' . $res[$i] . '<br>';
      }
    }

    if (isset($_GET['calculateSum1000'])) {
      calculateSum1000();
    }
    if (isset($_GET['calculateSum1000end237'])) {
      calculateSum1000end237();
    }
    if (isset($_GET['draw50Stars'])) {
      draw50Stars();
    }
       
    if (isset($_GET['generateArray'])) {
      generateArray();
    }
  ?>
</body>
</html>