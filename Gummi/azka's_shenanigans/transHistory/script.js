// Transaction data by month
const dataByMonth = [0, 0, 0, 0, 0, 0, 0, 0, 150000, 200000, 150000, 0];

// Transaction data by week
const dataByWeekNovember = [0, 75000, 75000, 0];

// Sum transaction data for the year
const dataByYear = [dataByMonth.reduce((acc, curr) => acc + curr, 0)]; // This should be dynamically calculated if you have multiple years.

// Initial configuration for the 'by month' view
const configByMonth = {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Transaction Amount in IDR',
            data: dataByMonth,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        // ... other options ...
    }
};

// Chart configuration for the 'by week' view
const configByWeek = {
    type: 'line',
    data: {
        labels: ["(Nov 1 - Nov 7)", "(Nov 8 - Nov 14)", "(Nov 15 - Nov 21)", "Week 4 (Nov 22 - Nov 28)"],
        datasets: [{
            label: 'Weekly Transaction History for November',
            data: dataByWeekNovember,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        // ... other options ...
    }
};

// Configuration for the 'by year' view
const configByYear = {
    type: 'line',
    data: {
        labels: ["2023"],
        datasets: [{
            label: 'Annual Transaction History',
            data: dataByYear,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        // ... other options ...
    }
};

// Function to initialize all charts
function initializeCharts() {
    // By Month
    const ctxByMonth = document.getElementById('transactionChartByMonth').getContext('2d');
    new Chart(ctxByMonth, configByMonth);

    // By Week
    const ctxByWeek = document.getElementById('transactionChartByWeek').getContext('2d');
    new Chart(ctxByWeek, configByWeek);

    // By Year
    const ctxByYear = document.getElementById('transactionChartByYear').getContext('2d');
    new Chart(ctxByYear, configByYear);
}

// Execute the chart creation when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
});