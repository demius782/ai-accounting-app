// 图表初始化和管理
function initCharts() {
    // 初始化月度收支图表
    initIncomeExpenseChart();
    
    // 初始化消费分类图表
    initCategoryChart();
}

function initIncomeExpenseChart() {
    const ctx = document.getElementById('incomeExpenseChart');
    if (!ctx) return;
    
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
                    fill: true
                },
                {
                    label: '支出',
                    data: [3200, 2800, 3500, 4000, 3800, 4200],
                    borderColor: '#F87272',
                    backgroundColor: 'rgba(248, 114, 114, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
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
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

export { initCharts, initIncomeExpenseChart, initCategoryChart };