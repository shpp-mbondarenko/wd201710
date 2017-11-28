<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="styles.css">
  <title>PHP TASK RESULTS</title>
  <?php
    try {
      $fileName = 'results.json';
      $arr_data = array();
    
      //Get data from existing json file
      $jsondata = file_get_contents($fileName);
      // converts json data into array
      $arr_data = json_decode($jsondata, true);
      //assign values
      $pikachu = $arr_data['pikachu'];
      $bulbasaur = $arr_data['bulbasaur'];
      $diglett = $arr_data['diglett'];
      $charmander = $arr_data['charmander'];
      $magmar = $arr_data['magmar'];
    } catch (Exception $e) {
      echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
  ?>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Pokemon', 'Quantity of votes'],
          ['Pikachu',     <?php echo $pikachu ?>],
          ['Bulbasaur',     <?php echo $bulbasaur ?>],
          ['Diglett',     <?php echo $diglett ?>],
          ['Charmander',     <?php echo $charmander ?>],
          ['Magmar',     <?php echo $magmar ?>]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
    </script>
</head>
<body>
	<div class="container">
		<div id="piechart" style="width: 900px; height: 500px;"></div>
	</div>
</body>
</html
