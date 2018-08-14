// link the graph to our html
var canvas = document.getElementById("myChart");
var data = {
    // specify what type of grpah we are using
    type: 'line',
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    // default datasets
    datasets: [
        {
            data: [86, 114, -1060, 1060, 1070, 1101, 133, -1203, 4959, 400, -2000, 2303, 4600, -1000, 5600, 3000, -204, 3456, 1234, 500],
            label: "Blue Stat",
            borderColor: "blue",
            backgroundColor: "blue",
            fill: false,
            lineTension: 0
        },
        {
            data: [282, 350, 411, 5002, 635, -3000, 947, 2345, 5996, -1234, 4532, 5632, -1111, -2315, 3424, -400, 700, 1344, 4353, -600],
            label: "Red Stat",
            borderColor: "red",
            backgroundColor: "red",
            fill: false,
            lineTension: 0
        }
    ]
};

// updates begin at 20
var count = 20;
function addData() {
    // selecting random dataset prices
    const newData = myLineChart.data.datasets.map(e => {
        return Math.floor((Math.random() * 9000) - 3000);
    })

    myLineChart.data.datasets.map(e => e.data.splice(0, 1));

    myLineChart.data.datasets.map((e, i) => {
        e.data.push(newData[i]);
    })

    myLineChart.data.labels.push(count);
    myLineChart.data.labels.splice(0, 1);

    // updates the chart by adding new time
    count++;
    myLineChart.update();
}

setInterval(function () {
    addData();
}, 5000);

var option = {
    showLines: true,
    scales: {
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Price (USD)'
            },
            ticks: {
                beginAtZero: true,
                stepSize: 1000,
                suggestedMin: -1000,
                suggestedMax: 1000
            }
        }],
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Time (PST)'
            }
        }]
    },
    // hovering over a point shows the info for every point along that y-axis column
    tooltips: {
        mode: 'x'
    }
}

var myLineChart = Chart.Line(canvas, {
    data: data,
    options: option
});

// add green dataset
$('#green').click(function () {
    // $(newDataset).toggle('#green');
    var newDataset = {
        data: [1500, 4200, -2300, 1400, 5500, 4200, 200, -1220, 3400, -2567, 1267, -999, -888, 5321, 3232, 732, 23, 555, 123, -1220],
        label: "Green Stat",
        borderColor: "green",
        backgroundColor: "green",
        fill: false,
        lineTension: 0
    }
    // You add the newly created dataset to the list of `data`
    myLineChart.data.datasets.push(newDataset);
    // You update the chart to take into account the new dataset
    myLineChart.update();
});

// add purple dataset
$('#purple').click(function () {
    // $(newDataset).toggle('#purple');
    var newDataset = {
        data: [3500, -432, -777, 5200, -1234, 5400, 4321, 1234, -1234, 1234, 3300, 4400, -2500, 5700, 2000, -100, 432, 1800, -3000, 2424],
        label: "Purple Stat",
        borderColor: "purple",
        backgroundColor: "purple",
        fill: false,
        lineTension: 0
    }
    // You add the newly created dataset to the list of `data`
    myLineChart.data.datasets.push(newDataset);
    // You update the chart to take into account the new dataset
    myLineChart.update();
});

// clear the first dataset from the chart
document.getElementById("empty").addEventListener("click", function () {
    myLineChart.data.datasets.splice(0, 1);
    myLineChart.update();
})
