// Example JavaScript to render the charts dynamically (charts.js)
window.onload = function () {
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    const ctxBar = document.getElementById('barChart').getContext('2d');
    const ctxColumn = document.getElementById('columnChart').getContext('2d');

    const amazonPrices = [/* Populate with the scraped average Amazon prices */];
    const ebayPrices = [/* Populate with the scraped average eBay prices */];
    const labels = ['Amazon', 'eBay'];

    // Pie Chart Example
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Average Prices Comparison',
                data: [amazonPrices.reduce((a, b) => a + b) / amazonPrices.length, ebayPrices.reduce((a, b) => a + b) / ebayPrices.length],
                backgroundColor: ['#FF5733', '#33FF57'],
                hoverOffset: 4
            }]
        }
    });

    // Line Chart Example
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price Trend',
                data: [amazonPrices.reduce((a, b) => a + b) / amazonPrices.length, ebayPrices.reduce((a, b) => a + b) / ebayPrices.length],
                fill: false,
                borderColor: '#33FF57',
                tension: 0.1
            }]
        }
    });

    // Bar Chart Example
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price Distribution',
                data: [amazonPrices.reduce((a, b) => a + b) / amazonPrices.length, ebayPrices.reduce((a, b) => a + b) / ebayPrices.length],
                backgroundColor: ['#FF5733', '#33FF57']
            }]
        }
    });

    // Column Chart Example
    new Chart(ctxColumn, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price Comparison',
                data: [amazonPrices.reduce((a, b) => a + b) / amazonPrices.length, ebayPrices.reduce((a, b) => a + b) / ebayPrices.length],
                backgroundColor: ['#FF5733', '#33FF57']
            }]
        }
    });
};

