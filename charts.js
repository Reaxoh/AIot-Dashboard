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