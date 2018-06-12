if ($('#mybarChart').length ){

  var ctx = document.getElementById("mybarChart");
  var mybarChart = new Chart(ctx, {
	type: 'bar',
	data: {
	  labels: ["January", "February", "March", "April", "May", "June", "July"],
	  datasets: [{
		label: '# of Votes',
		backgroundColor: "#26B99A",
		data: [51, 30, 40, 28, 92, 50, 45]
	  }, {
		label: '# of Votes',
		backgroundColor: "#03586A",
		data: [41, 56, 25, 48, 72, 34, 12]
	  }]
	},

	options: {
	  scales: {
		yAxes: [{
		  ticks: {
			beginAtZero: true
		  }
		}]
	  }
	}
  });

}