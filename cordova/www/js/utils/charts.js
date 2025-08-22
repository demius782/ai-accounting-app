// 移动端图表工具
function initCharts() {
    // 延迟初始化图表，确保DOM加载完成
    setTimeout(() => {
        initIncomeExpenseChart();
        initCategoryChart();
    }, 500);
}

function initIncomeExpenseChart() {
    const ctx = document.getElementById('incomeExpenseChart');
    if (!ctx) return;
    
    // 移动端适配的图表配置
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
            datasets: [
                {
                    label: '收入',
                    data: [6500, 7200, 8000, 8500, 9000, 9500],
                    borderColor: '#36D399',
                    backgroundColor: 'rgba(54, 211, 153, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 2
                },
                {
                    label: '支出',
                    data: [3200, 2800, 3500, 4000, 3800, 4200],
                    borderColor: '#F87272',
                    backgroundColor: 'rgba(248, 114, 114, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });
}

function initCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['餐饮', '购物', '交通', '住房', '娱乐'],
            datasets: [{
                data: [35, 25, 15, 20, 5],
                backgroundColor: [
                    '#F87272',
                    '#165DFF',
                    '#36D399',
                    '#A78BFA',
                    '#FBBF24'
                ],
                borderWidth: 0,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        font: {
                            size: 10
                        },
                        padding: 15
                    }
                }
            }
        }
    });
}

// 导出图表函数
export { initCharts, initIncomeExpenseChart, initCategoryChart };