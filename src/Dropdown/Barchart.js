import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library

const Frame = () => {
    const chartContainer = useRef(null);

    useEffect(() => {
        const ctx = chartContainer.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar', // Change type to 'bar' for a bar chart
            data: {
                labels: ['Feb 6', 'Feb 11', 'Feb 16', 'Feb 21', 'Feb 26','Feb 6', 'Feb 11', 'Feb 16', 'Feb 21', 'Feb 26','Feb 6', 'Feb 11', 'Feb 16', 'Feb 21', 'Feb 26','Feb 6', 'Feb 11', 'Feb 16', 'Feb 21', 'Feb 26','Feb 6', 'Feb 11', 'Feb 16', 'Feb 21', 'Feb 26','Feb 6', 'Feb 11', 'Feb 16', 'Feb 21', 'Feb 26'],
                datasets: [{
                    label: 'TrendSwap Volume',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Customize chart colors as needed
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    barThickness:20
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: false // Hide y-axis grid lines
                        }
                    },
                    x: {
                        grid: {
                            display: false // Hide x-axis grid lines
                        },
                        ticks: {
                            maxRotation: 90, // Rotate the labels to a maximum of 90 degrees
                            minRotation: 45 // Rotate the labels to a minimum of 45 degrees
                        }
                    }
                }
            }
        });

        return () => {
            myChart.destroy(); 
        };
    }, []); 

    return (
        <div className="frame-parent">
            <canvas ref={chartContainer}></canvas>
        </div>
    );
};

export default Frame;
