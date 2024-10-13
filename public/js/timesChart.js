function timesChart() {
    try {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/time-data',
            dataType: 'json',
        })
            .done(function (data) {
                const labels = data.map(item => new Date(item.date).toLocaleDateString());
                const times = data.map(item => convertTime(item.timeElapsed));
                let timesChart = new Chart(document.getElementById('time-chart'), {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Time Elapsed',
                            data: times,
                            backgroundColor: '#57BC90',
                            borderColor: '#57BC90',
                            pointBackgroundColor: '#57BC90',
                            pointBorderColor: '#57BC90'
                        }]
                    },
                    options: {
                        plugins: {
                            title: {
                                display:true,
                                text: 'Time Elapsed (in minutes)',
                                padding: {
                                    top: 10,
                                    bottom: 10
                                },
                                color: 'black',
                                font: {
                                    size: 15,
                                    family: "Helvetica"
                                }
                            }
                        },
                        scales: {
                            x: {
                                grid: {
                                    color: 'black'
                                },
                                ticks: {
                                    color: 'black'
                                }
                            },
                            y: {
                                grid: {
                                    color: 'black'
                                },
                                ticks: {
                                    color: 'black'
                                },
                                beginAtZero: true
                            }
                        }
                    }
                });
            })
            .fail(function (xhr, status, errorThrown) {
                console.log('Error: ' + errorThrown);
                console.log('Status: ' + status);
                let errorMessage;
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    errorMessage = xhr.responseJSON.message;
                }
                else {
                    errorMessage = 'An error occured when trying to register. Please try again';
                }
            });
    }catch(e){
        console.log(e);
    }
}
$(document).ready(function(){
    timesChart();
});

function convertTime(time){
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 60 + minutes + seconds / 60;
}
