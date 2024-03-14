import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MonthlyTransactionLineChart = ({ data }) => {
    const chartContainer = useRef(null);

    useEffect(() => {
        let chartInstance = null;

        if (chartContainer && chartContainer.current) {
            const labels = data.map(item => item.month);
            const transactionCounts = data.map(item => item.transaction_count);

            const ctx = chartContainer.current.getContext('2d');

            // Destroy previous chart if it exists
            if (chartInstance) {
                chartInstance.destroy();
            }

            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Monthly Transaction Count',
                        data: transactionCounts,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2,
                        tension: 0.4 // Adjust the tension for curved lines (0 for straight lines, 1 for maximum curve)
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Transaction Count'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Month'
                            }
                        }
                    }
                }
            });
        }

        return () => {
            // Clean up chart instance
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [data]);

    return (
        <div>
            <canvas ref={chartContainer} />
        </div>
    );
};

export default MonthlyTransactionLineChart;
