import { bottomNavigation } from '../components/navigation.js';

function renderDashboard(state) {
    return `
        <div class="bg-white rounded-2xl overflow-hidden card-shadow h-[700px] relative">
            <!-- 顶部导航栏 -->
            <div class="bg-primary text-white p-4 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <i class="fa fa-line-chart text-xl"></i>
                    <h2 class="font-semibold text-lg">财务仪表盘</h2>
                </div>
                <div class="flex space-x-4">
                    <button class="p-1 rounded-full hover:bg-primary/80 transition">
                        <i class="fa fa-bell-o"></i>
                    </button>
                    <button class="p-1 rounded-full hover:bg-primary/80 transition">
                        <i class="fa fa-cog"></i>
                    </button>
                </div>
            </div>
            
            <!-- 主内容区 -->
            <div class="p-5 overflow-y-auto h-[calc(100%-56px)]">
                <!-- 欢迎信息 -->
                <div class="mb-6">
                    <p class="text-neutral-light">早上好，用户</p>
                    <h3 class="text-xl font-bold">这是您的财务概览</h3>
                </div>
                
                <!-- 余额卡片 -->
                <div class="bg-gradient-to-r from-primary to-blue-600 text-white p-5 rounded-xl mb-6">
                    <div class="flex justify-between items-center mb-3">
                        <p class="text-sm opacity-80">当前余额</p>
                        <button class="text-xs bg-white/20 px-2 py-1 rounded-full">
                            <i class="fa fa-refresh mr-1"></i>更新
                        </button>
                    </div>
                    <p class="text-3xl font-bold">¥24,568.25</p>
                    <div class="flex justify-between text-xs mt-4">
                        <div>
                            <p class="opacity-80">本月收入</p>
                            <p class="text-secondary">¥8,450.00</p>
                        </div>
                        <div>
                            <p class="opacity-80">本月支出</p>
                            <p class="text-danger">¥3,280.50</p>
                        </div>
                        <div>
                            <p class="opacity-80">节省</p>
                            <p class="text-secondary">¥5,169.50</p>
                        </div>
                    </div>
                </div>
                
                <!-- 快捷操作 -->
                <div class="grid grid-cols-4 gap-3 mb-6">
                    <button class="bg-neutral-lighter rounded-xl p-3 flex flex-col items-center card-hover" data-page="add-transaction">
                        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                            <i class="fa fa-plus text-primary"></i>
                        </div>
                        <span class="text-xs font-medium">添加</span>
                    </button>
                    <button class="bg-neutral-lighter rounded-xl p-3 flex flex-col items-center card-hover">
                        <div class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                            <i class="fa fa-arrow-down text-secondary"></i>
                        </div>
                        <span class="text-xs font-medium">收入</span>
                    </button>
                    <button class="bg-neutral-lighter rounded-xl p-3 flex flex-col items-center card-hover">
                        <div class="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center mb-2">
                            <i class="fa fa-arrow-up text-danger"></i>
                        </div>
                        <span class="text-xs font-medium">支出</span>
                    </button>
                    <button class="bg-neutral-lighter rounded-xl p-3 flex flex-col items-center card-hover">
                        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                            <i class="fa fa-qrcode text-blue-600"></i>
                        </div>
                        <span class="text-xs font-medium">扫码</span>
                    </button>
                </div>
                
                <!-- 图表 -->
                <div class="bg-white rounded-xl p-4 mb-6 card-shadow">
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="font-semibold">月度收支</h4>
                        <div class="flex space-x-2">
                            <button class="px-3 py-1 text-xs rounded-full bg-primary text-white">月</button>
                            <button class="px-3 py-1 text-xs rounded-full bg-neutral-lighter">季</button>
                            <button class="px-3 py-1 text-xs rounded-full bg-neutral-lighter">年</button>
                        </div>
                    </div>
                    <div class="h-48">
                        <canvas id="incomeExpenseChart"></canvas>
                    </div>
                </div>
                
                <!-- 最近交易 -->
                <div class="bg-white rounded-xl p-4 card-shadow">
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="font-semibold">最近交易</h4>
                        <a href="#" class="text-primary text-sm">查看全部</a>
                    </div>
                    
                    <!-- 交易列表 -->
                    <div class="space-y-3">
                        ${renderRecentTransactions()}
                    </div>
                </div>
            </div>
            
            ${bottomNavigation('dashboard')}
        </div>
    `;
}

function renderRecentTransactions() {
    const transactions = [
        { type: 'expense', category: '餐饮', amount: 58.00, time: '今天 12:30', icon: 'cutlery', color: 'red' },
        { type: 'income', category: '工资', amount: 8000.00, time: '昨天 09:15', icon: 'briefcase', color: 'green' },
        { type: 'expense', category: '超市购物', amount: 245.50, time: '昨天 18:45', icon: 'shopping-bag', color: 'blue' },
        { type: 'expense', category: '房租', amount: 2500.00, time: '3月1日 08:00', icon: 'home', color: 'purple' }
    ];
    
    return transactions.map(transaction => `
        <div class="flex items-center p-2 rounded-lg hover:bg-neutral-lighter/50 transition">
            <div class="w-10 h-10 rounded-full bg-${transaction.color}-100 flex items-center justify-center mr-3">
                <i class="fa fa-${transaction.icon} text-${transaction.type === 'income' ? 'secondary' : 'danger'}"></i>
            </div>
            <div class="flex-1">
                <p class="font-medium">${transaction.category}</p>
                <p class="text-xs text-neutral-light">${transaction.time}</p>
            </div>
            <p class="font-medium ${transaction.type === 'income' ? 'text-secondary' : 'text-danger'}">
                ${transaction.type === 'income' ? '+' : '-'}¥${transaction.amount.toFixed(2)}
            </p>
        </div>
    `).join('');
}

export { renderDashboard };