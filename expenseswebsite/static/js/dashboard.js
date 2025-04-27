// static/js/dashboard.js
document.addEventListener("DOMContentLoaded", function() {
    // Trend chart
    const trendChart = new Chart(document.getElementById('trendChart'), {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
                {
                    label: 'Income',
                    data: [3000, 3200, 2800, 3500],
                    backgroundColor: 'rgba(76, 175, 80, 0.7)',
                    borderColor: 'rgba(76, 175, 80, 1)',
                    borderWidth: 1,
                    borderRadius: 4,
                    borderSkipped: false
                },
                {
                    label: 'Expenses',
                    data: [1600, 1800, 1500, 2000],
                    backgroundColor: 'rgba(244, 67, 54, 0.7)',
                    borderColor: 'rgba(244, 67, 54, 1)',
                    borderWidth: 1,
                    borderRadius: 4,
                    borderSkipped: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            },
            scales: {
                x: {
                    grid: { display: false }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0,0,0,0.05)' },
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                }
            }
        }
    });
  
    const categoryChart = new Chart(document.getElementById('categoryChart'), {
        type: 'doughnut',
        data: {
            labels: ['Food', 'Housing', 'Transport', 'Utilities', 'Entertainment', 'Others'],
            datasets: [{
                data: [500, 300, 200, 400, 150, 250], // Added 2 more values
                backgroundColor: [
                    'rgba(255,99,132,0.8)',    // Food
                    'rgba(54,162,235,0.8)',     // Housing
                    'rgba(255,206,86,0.8)',     // Transport
                    'rgba(75,192,192,0.8)',     // Utilities
                    'rgba(153,102,255,0.8)',    // Entertainment
                    'rgba(75,192,118,0.8)'      // Others
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { 
                        padding: 20,
                        // Optional: Add color boxes next to labels
                        generateLabels: (chart) => {
                            return chart.data.labels.map((label, index) => ({
                                text: label,
                                fillStyle: chart.data.datasets[0].backgroundColor[index],
                                hidden: false
                            }));
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    bodyFont: { size: 14 },
                    titleFont: { size: 16 },
                    callbacks: {
                        label: (context) => {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return `${label}: $${value}`;
                        }
                    }
                }
            }
        }
    });

  });
  