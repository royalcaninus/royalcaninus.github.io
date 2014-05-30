google.load("visualization", '1', {packages:['corechart']});
google.setOnLoadCallback(drawChart);
function drawChart() {

  var locationQuery = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1sXFtv4gsrKGGNlWCTbJSQvw-EC3BUIMLWeKGFZhhAwI/edit?usp=sharing');
  locationQuery.setQuery('select B,D,E,F');
  locationQuery.send(handleLocationQueryResponse);
  
  var stockholderNormalizedQuery = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1sXFtv4gsrKGGNlWCTbJSQvw-EC3BUIMLWeKGFZhhAwI/edit?usp=sharing');
  stockholderNormalizedQuery.setQuery('select B,D,E,C');
  stockholderNormalizedQuery.send(handleStakeholderNormalizedQueryResponse);

  var pillarQuery = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1sXFtv4gsrKGGNlWCTbJSQvw-EC3BUIMLWeKGFZhhAwI/edit?usp=sharing');
  pillarQuery.setQuery('select B,D,E,G');
  pillarQuery.send(handlePillarQueryResponse);

  var locationBubbleQuery = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1sXFtv4gsrKGGNlWCTbJSQvw-EC3BUIMLWeKGFZhhAwI/edit?usp=sharing&sheet=location');
  locationBubbleQuery.setQuery('select F,H,I,G,J');
  locationBubbleQuery.send(handleLocationBubbleQueryResponse);

  var stakeholderBubbleQuery = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1sXFtv4gsrKGGNlWCTbJSQvw-EC3BUIMLWeKGFZhhAwI/edit?usp=sharing&sheet=stakeholder');
  stakeholderBubbleQuery.setQuery('select F,H,I,G,J');
  stakeholderBubbleQuery.send(handleStakeholderBubbleQueryResponse);

  var pillarBubbleQuery = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1sXFtv4gsrKGGNlWCTbJSQvw-EC3BUIMLWeKGFZhhAwI/edit?usp=sharing&sheet=pillar');
  pillarBubbleQuery.setQuery('select F,H,I,G,J');
  pillarBubbleQuery.send(handlePillarBubbleQueryResponse);
}


//Function for chart divided by Internal or External
function handleLocationQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  var chart = new google.visualization.BubbleChart(document.getElementById('location'));
  var options = {
  //legend: { position: 'none' },
    title: 'Internal or External',
    sizeAxis: {minSize: '1', maxSize: '12'},
    hAxis: { title: 'Interest' },
    vAxis: { title: 'Influence'},
    chartArea: {
      height: '90%'
    },
    legend: {
      textStyle: {
        fontSize: '12'
      }
    },
    height: '500',
    bubble: {textStyle: {fontSize: '1'}}
  }
  chart.draw(data, options);
}
//Function for chart divided by Normalized Stakeholder
function handleStakeholderNormalizedQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  var chart = new google.visualization.BubbleChart(document.getElementById('stakeholdernormalized'));
  var options = {
  //legend: { position: 'none' },
    title: 'Stakeholders',
    sizeAxis: {minSize: '1', maxSize: '12'},
    hAxis: { title: 'Interest' },
    vAxis: { title: 'Influence'},
    chartArea: {
      height: '90%'
    },
    legend: {
      textStyle: {
        fontSize: '12'
      }
    },
    height: '500',
    bubble: {textStyle: {fontSize: '1'}}
  }
  chart.draw(data, options);
}

//Function for chart divided by Pillar
function handlePillarQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  var chart = new google.visualization.BubbleChart(document.getElementById('pillar'));
  var options = {
  //legend: { position: 'none' },
    title: 'Pillar or Department',
    sizeAxis: {minSize: '1', maxSize: '12'},
    hAxis: { title: 'Interest' },
    vAxis: { title: 'Influence'},
    chartArea: {
      height: '90%'
    },
    legend: {
      textStyle: {
        fontSize: '12'
      }
    },
    height: '500',
    bubble: {textStyle: {fontSize: '1'}}
  }
  chart.draw(data, options);
}

//Function for real bubble chart divided by internal or external
function handleLocationBubbleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  var chart = new google.visualization.BubbleChart(document.getElementById('locationbubble'));
  var options = {
  //legend: { position: 'none' },
    title: 'Internal or External',
    hAxis: { title: 'Interest' },
    vAxis: { title: 'Influence'},
    chartArea: {
      height: '90%'
    },
    legend: {
      textStyle: {
        fontSize: '12'
      }
    },
    height: '500',
    bubble: {textStyle: {fontSize: '1'}}
  }
  chart.draw(data, options);
}

//Function for real bubble chart divided by normalized stakeholder
function handleStakeholderBubbleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  var chart = new google.visualization.BubbleChart(document.getElementById('stakeholdernormalizedbubble'));
  var options = {
    //legend: { position: 'none' },
    title: 'Stakeholders',
    hAxis: { title: 'Interest' },
    vAxis: { title: 'Influence'},
    chartArea: {
      height: '90%'
    },
    legend: {
      textStyle: {
        fontSize: '12'
      }
    },
    height: '500',
    bubble: {textStyle: {fontSize: '1'}}
  }
  chart.draw(data, options);
}
//Function for real bubble chart divided by pillar
function handlePillarBubbleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  var chart = new google.visualization.BubbleChart(document.getElementById('pillarbubble'));
  var options = {
  //legend: { position: 'none' },
    title: 'Pillar or Department',
    hAxis: { title: 'Interest' },
    vAxis: { title: 'Influence'},
    chartArea: {
      height: '90%'
    },
    legend: {
      textStyle: {
        fontSize: '12'
      }
    },
    height: '500',
    bubble: {textStyle: {fontSize: '1'}}
  }
  chart.draw(data, options);
}
$(function() {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    e.target // activated tab
    e.relatedTarget // previous tab
    drawChart();
  });

  $(window).resize(function(){

    drawChart();
  });   

});