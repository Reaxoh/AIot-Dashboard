function createBatteryChart(elementId, batteryLevel) {
    var ctx = document.getElementById(elementId).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Battery Level'],
            datasets: [{
                data: [batteryLevel, 100 - batteryLevel], 
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)', // 綠色背景
                    'rgba(255, 255, 255, 0)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)', // 綠色邊框
                    'rgba(255, 255, 255, 0)' 
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true, 
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            cutout: '70%'
        },
        plugins: [{
            beforeDraw: function(chart) {
                var width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx;
                ctx.restore();
                var fontSize = (height / 114).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";
                var text = chart.data.datasets[0].data[0] + "%",
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 2;
                ctx.fillStyle = 'rgba(75, 192, 192, 1)'; // 綠色文字
                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        }]
    });
}

function createBatteryLineChart(elementId, batteryData) {
    var ctx = document.getElementById(elementId).getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: batteryData.map((_, index) => index + 1), // 假設 batteryData 是一個數組，標籤為數據點的索引
            datasets: [{
                label: 'Battery Level',
                data: batteryData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // 綠色背景
                borderColor: 'rgba(75, 192, 192, 1)', // 綠色邊框
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Battery Level (%)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
}