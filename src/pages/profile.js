import { bottomNavigation } from '../components/navigation.js';

function renderProfile(state) {
    return `
        <div class="bg-white rounded-2xl overflow-hidden card-shadow h-[700px] relative">
            <!-- 顶部导航栏 -->
            <div class="bg-primary text-white p-4 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <i class="fa fa-user-o text-xl"></i>
                    <h2 class="font-semibold text-lg">个人中心</h2>
                </div>
                <button class="p-1 rounded-full hover:bg-primary/80 transition">
                    <i class="fa fa-cog"></i>
                </button>
            </div>
            
            <!-- 主内容区 -->
            <div class="p-5 overflow-y-auto h-[calc(100%-56px)]">
                <!-- 用户信息 -->
                <div class="flex items-center mb-6">
                    <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <i class="fa fa-user text-primary text-2xl"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg">张三</h3>
                        <p class="text-neutral-light">zhangsan@example.com</p>
                    </div>
                </div>
                
                <!-- 账户概览 -->
                <div class="bg-white rounded-xl p-4 mb-6 card-shadow">
                    <h4 class="font-semibold mb-4">账户概览</h4>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="text-center">
                            <p class="text-neutral-light text-sm mb-1">总资产</p>
                            <p class="text-xl font-bold text-secondary">¥24,568.25</p>
                        </div>
                        <div class="text-center">
                            <p class="text-neutral-light text-sm mb-1">净资产</p>
                            <p class="text-xl font-bold text-primary">¥18,287.75</p>
                        </div>
                    </div>
                </div>
                
                <!-- 功能设置 -->
                <div class="space-y-3 mb-6">
                    <h4 class="font-semibold">功能设置</h4>
                    
                    <div class="bg-white rounded-xl p-4 card-shadow">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                    <i class="fa fa-bell text-blue-600"></i>
                                </div>
                                <div>
                                    <p class="font-medium">消息通知</p>
                                    <p class="text-xs text-neutral-light">接收账单提醒</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl p-4 card-shadow">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                    <i class="fa fa-shield text-secondary"></i>
                                </div>
                                <div>
                                    <p class="font-medium">隐私保护</p>
                                    <p class="text-xs text-neutral-light">数据加密存储</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl p-4 card-shadow">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                    <i class="fa fa-robot text-purple-600"></i>
                                </div>
                                <div>
                                    <p class="font-medium">AI 助手</p>
                                    <p class="text-xs text-neutral-light">智能记账建议</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>
                </div>
                
                <!-- 账户管理 -->
                <div class="space-y-3">
                    <h4 class="font-semibold">账户管理</h4>
                    
                    <div class="bg-white rounded-xl p-4 card-shadow">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                                    <i class="fa fa-credit-card text-danger"></i>
                                </div>
                                <div>
                                    <p class="font-medium">银行卡管理</p>
                                    <p class="text-xs text-neutral-light">2张银行卡</p>
                                </div>
                            </div>
                            <i class="fa fa-chevron-right text-neutral-light"></i>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl p-4 card-shadow">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                                    <i class="fa fa-history text-orange-600"></i>
                                </div>
                                <div>
                                    <p class="font-medium">交易记录</p>
                                    <p class="text-xs text-neutral-light">查看历史账单</p>
                                </div>
                            </div>
                            <i class="fa fa-chevron-right text-neutral-light"></i>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl p-4 card-shadow">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                    <i class="fa fa-cloud-download text-blue-600"></i>
                                </div>
                                <div>
                                    <p class="font-medium">数据备份</p>
                                    <p class="text-xs text-neutral-light">导出账单数据</p>
                                </div>
                            </div>
                            <i class="fa fa-chevron-right text-neutral-light"></i>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl p-4 card-shadow">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                    <i class="fa fa-sign-out text-gray-600"></i>
                                </div>
                                <div>
                                    <p class="font-medium">退出登录</p>
                                    <p class="text-xs text-neutral-light">安全退出账户</p>
                                </div>
                            </div>
                            <i class="fa fa-chevron-right text-neutral-light"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            ${bottomNavigation('profile')}
        </div>
    `;
}

export { renderProfile };