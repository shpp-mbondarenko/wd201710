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
    <a class="button" href='index.php?drawChessBoard=true'><button>Draw Chess board</button></a>
    <div>
      <form name="form" action="" method="post">
        Enter num: <input type="text" name="inputNum" id="inputNum"><br>
      </form>
      <a class="button" href='index.php?sumOfNums=true'><button>Calculate sum of nums</button></a>
    </div>
    <a class="button" href='index.php?generateArray=true'><button>Generate array</button></a>
  </div>
  <div id="forChessBoard"></div>
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

    function drawChessBoard($rows, $col) {
      $doc = new DomDocument();
      $parent = $doc->getElementById('forChessBoard');
      for ($i = 1; $i <= $rows; $i++) {
        for ($j = 1; $j <= $col; $j++) {
          $child = $doc->createElement('div','');
          $parent->appendChild($child);
        }
        echo $doc->saveXML();
      }
    }
    function sumOfNums($str) {
      echo 'sumOfNums';
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
    if (isset($_GET['drawChessBoard'])) {
      $rows = $_GET['rows']; 
      $col = $_GET['col'];
      drawChessBoard($rows,$col);
    }
    if (isset($_GET['sumOfNums'])) {
      echo $str . " - sss";
      sumOfNums($str);
    }
    if (isset($_GET['generateArray'])) {
      generateArray();
    }
  ?>
</body>
</html>