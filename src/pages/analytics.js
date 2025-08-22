import { bottomNavigation } from '../components/navigation.js';

function renderAnalytics(state) {
    return `
        <div class="bg-white rounded-2xl overflow-hidden card-shadow h-[700px] relative">
            <!-- 顶部导航栏 -->
            <div class="bg-primary text-white p-4 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <i class="fa fa-pie-chart text-xl"></i>
                    <h2 class="font-semibold text-lg">财务分析</h2>
                </div>
                <div class="flex space-x-4">
                    <button class="p-1 rounded-full hover:bg-primary/80 transition">
                        <i class="fa fa-filter"></i>
                    </button>
                    <button class="p-1 rounded-full hover:bg-primary/80 transition">
                        <i class="fa fa-download"></i>
                    </button>
                </div>
            </div>
            
            <!-- 主内容区 -->
            <div class="p-5 overflow-y-auto h-[calc(100%-56px)]">
                <!-- 时间筛选 -->
                <div class="flex justify-center mb-6">
                    <div class="bg-neutral-lighter rounded-lg p-1">
                        <button class="px-4 py-2 rounded-md bg-white text-primary font-medium">本月</button>
                        <button class="px-4 py-2 rounded-md text-neutral-light">季度</button>
                        <button class="px-4 py-2 rounded-md text-neutral-light">年度</button>
                    </div>
                </div>
                
                <!-- 统计卡片 -->
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="bg-white rounded-xl p-4 card-shadow">
                        <div class="flex items-center mb-3">
                            <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                <i class="fa fa-arrow-down text-secondary"></i>
                            </div>
                            <p class="text-neutral-light">总收入</p>
                        </div>
                        <p class="text-2xl font-bold text-secondary">¥8,450.00</p>
                        <p class="text-xs text-neutral-light mt-1">↑ 15% 较上月</p>
                    </div>
                    
                    <div class="bg-white rounded-xl p-4 card-shadow">
                        <div class="flex items-center mb-3">
                            <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                                <i class="fa fa-arrow-up text-danger"></i>
                            </div>
                            <p class="text-neutral-light">总支出</p>
                        </div>
                        <p class="text-2xl font-bold text-danger">¥3,280.50</p>
                        <p class="text-xs text-neutral-light mt-1">↑ 8% 较上月</p>
                    </div>
                </div>
                
                <!-- 消费分类图表 -->
                <div class="bg-white rounded-xl p-4 mb-6 card-shadow">
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="font-semibold">消费分类</h4>
                        <button class="text-primary text-sm">详细分析</button>
                    </div>
                    <div class="h-48">
                        <canvas id="categoryChart"></canvas>
                    </div>
                </div>
                
                <!-- 预算进度 -->
                <div class="bg-white rounded-xl p-4 mb-6 card-shadow">
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="font-semibold">预算进度</h4>
                        <button class="text-primary text-sm">管理预算</button>
                    </div>
                    
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <span class="text-neutral-light">餐饮预算</span>
                                <span class="font-medium">¥1,200 / ¥1,500</span>
                            </div>
                            <div class="w-full bg-neutral-lighter rounded-full h-2">
                                <div class="bg-danger h-2 rounded-full" style="width: 80%"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <span class="text-neutral-light">购物预算</span>
                                <span class="font-medium">¥800 / ¥1,000</span>
                            </div>
                            <div class="w-full bg-neutral-lighter rounded-full h-2">
                                <div class="bg-blue-600 h-2 rounded-full" style="width: 80%"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <span class="text-neutral-light">交通预算</span>
                                <span class="font-medium">¥300 / ¥500</span>
                            </div>
                            <div class="w-full bg-neutral-lighter rounded-full h-2">
                                <div class="bg-secondary h-2 rounded-full" style="width: 60%"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 趋势分析 -->
                <div class="bg-white rounded-xl p-4 card-shadow">
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="font-semibold">消费趋势</h4>
                        <button class="text-primary text-sm">查看报告</button>
                    </div>
                    <div class="h-48">
                        <canvas id="trendChart"></canvas>
                    </div>
                </div>
            </div>
            
            ${bottomNavigation('analytics')}
        </div>
    `;
}

export { renderAnalytics };