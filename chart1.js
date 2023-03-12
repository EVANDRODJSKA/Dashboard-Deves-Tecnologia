var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan','Fev','Març','Abril','Maio','Jun','Julh','Agost','Setem','Out','Nov','Dez'],
        datasets: [{
            label: 'Ganhos no Ano',
            data: [3050,2500,1800,2800,1350,2800,2500,3050,4000,4100,3150,3125],
            backgroundColor: [
                'rgba(85,85,85,1)',
                
            ],
            borderColor: [
                'rgba(41,155,99)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});