import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MonthlyRevenueBarChart = ({ data }) => {
    const chartContainer = useRef(null);

    useEffect(() => {
        let chartInstance = null;

        if (chartContainer && chartContainer.current) {
            const labels = data.map(item => item.month);
            const revenueData = data.map(item => item.total);

            const ctx = chartContainer.current.getContext('2d');

            // Destroy previous chart if it exists
            if (chartInstance) {
                chartInstance.destroy();
            }

            chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Monthly Revenue',
                        data: revenueData,
                        backgroundColor: '#f5c005',
                        borderColor: 'rgba(54, 54, 54, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Revenue (NGN)'
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

export default MonthlyRevenueBarChart;
