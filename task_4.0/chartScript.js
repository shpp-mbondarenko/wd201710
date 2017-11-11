document.addEventListener('DOMContentLoaded', function(){

  //get data from json
  loadJSON(function(response) {
  // Parse JSON string into object
    results = JSON.parse(response);
    console.log("res1 - ",results);

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Pokemon', 'Quantity of votes'],
          ['Pikachu',     results['pikachu']],
          ['Bulbasaur',     results['bulbasaur']],
          ['Diglett',     results['diglett']],
          ['Charmander',     results['charmander']]
        ]);

        var options = {
          title: 'Voting for pokemon'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
  });
});

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'results.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
