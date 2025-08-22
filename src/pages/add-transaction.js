import { bottomNavigation } from '../components/navigation.js';

function renderAddTransaction(state) {
    return `
        <div class="bg-white rounded-2xl overflow-hidden card-shadow h-[700px] relative">
            <!-- 顶部导航栏 -->
            <div class="bg-primary text-white p-4 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <button class="p-1 rounded-full hover:bg-primary/80 transition" data-page="dashboard">
                        <i class="fa fa-arrow-left"></i>
                    </button>
                    <h2 class="font-semibold text-lg">添加记账</h2>
                </div>
                <button class="bg-white text-primary px-4 py-1 rounded-lg font-medium btn-hover">
                    保存
                </button>
            </div>
            
            <!-- 主内容区 -->
            <div class="p-5 overflow-y-auto h-[calc(100%-56px)]">
                <!-- 支出/收入切换 -->
                <div class="flex mb-6">
                    <button class="flex-1 py-3 bg-danger/10 text-danger rounded-l-lg font-medium">
                        支出
                    </button>
                    <button class="flex-1 py-3 bg-neutral-lighter text-neutral-light rounded-r-lg font-medium">
                        收入
                    </button>
                </div>
                
                <!-- 金额输入 -->
                <div class="mb-8 text-center">
                    <p class="text-neutral-light mb-1">金额</p>
                    <input type="text" value="58.00" class="text-4xl font-bold text-center border-b-2 border-gray-200 w-1/2 mx-auto focus:outline-none focus:border-primary transition">
                </div>
                
                <!-- 分类选择 -->
                <div class="mb-8">
                    <p class="text-neutral-light mb-3">分类</p>
                    <div class="grid grid-cols-4 gap-3">
                        ${renderCategoryButtons(state.categories)}
                    </div>
                </div>
                
                <!-- 日期和备注 -->
                <div class="space-y-5 mb-8">
                    <div>
                        <p class="text-neutral-light mb-2">日期</p>
                        <div class="flex items-center bg-neutral-lighter p-3 rounded-lg">
                            <i class="fa fa-calendar text-neutral-light mr-3"></i>
                            <input type="date" class="bg-transparent flex-1 focus:outline-none">
                        </div>
                    </div>
                    
                    <div>
                        <p class="text-neutral-light mb-2">时间</p>
                        <div class="flex items-center bg-neutral-lighter p-3 rounded-lg">
                            <i class="fa fa-clock-o text-neutral-light mr-3"></i>
                            <input type="time" class="bg-transparent flex-1 focus:outline-none">
                        </div>
                    </div>
                    
                    <div>
                        <p class="text-neutral-light mb-2">备注</p>
                        <div class="flex items-start bg-neutral-lighter p-3 rounded-lg">
                            <i class="fa fa-pencil text-neutral-light mr-3 mt-1"></i>
                            <textarea class="bg-transparent flex-1 focus:outline-none" rows="2" placeholder="添加备注..."></textarea>
                        </div>
                    </div>
                </div>
                
                <!-- AI 助手建议 -->
                <div class="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-8">
                    <div class="flex items-start">
                        <div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0">
                            <i class="fa fa-robot"></i>
                        </div>
                        <div>
                            <h4 class="font-medium text-primary mb-1">AI 建议</h4>
                            <p class="text-sm text-neutral">根据您的消费习惯，建议将这笔支出归类为"餐饮"类别。</p>
                        </div>
                    </div>
                </div>
            </div>
            
            ${bottomNavigation('add-transaction')}
        </div>
    `;
}

function renderCategoryButtons(categories) {
    return categories.map(category => `
        <button class="bg-${category.color}-100 text-${category.color === 'red' ? 'danger' : category.color === 'green' ? 'secondary' : 'neutral'} p-3 rounded-xl flex flex-col items-center card-hover">
            <i class="fa fa-${category.icon} text-xl mb-2"></i>
            <span class="text-xs">${category.name}</span>
        </button>
    `).join('');
}

export { renderAddTransaction };