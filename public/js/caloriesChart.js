function caloriesChart() {
    try {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/calorie-data',
            dataType: 'json',
        })
            .done(function (data) {
                const labels = data.map(item => new Date(item.date).toLocaleDateString());
                const calories = data.map(item => item.caloriesBurned);
                let caloriesChart = new Chart(document.getElementById('calories-chart'), {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Calories Burned',
                            data: calories,
                            backgroundColor: 'rgb(9, 132, 219)',
                            borderColor: 'rgb(9, 132, 219)',
                            pointBackgroundColor: 'rgb(9, 132, 219)',
                            pointBorderColor: 'rgb(9, 132, 219)'
                        }]
                    },
                    options: {
                        plugins: {
                            title: {
                                display:true,
                                text: 'Calories Burned Over Time',
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
                    errorMessage = 'An error occured when trying to get calories';
                }
            });
    }catch(e){
        console.log(e);
    }
}
$(document).ready(function(){
    caloriesChart();
});
