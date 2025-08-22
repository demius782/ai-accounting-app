// 移动端应用主逻辑
import { initCharts } from './utils/charts.js';

// 应用状态管理
let appState = {
    currentPage: 'dashboard',
    transactions: [],
    categories: [
        { id: 1, name: '餐饮', icon: 'cutlery', color: 'red' },
        { id: 2, name: '饮料', icon: 'coffee', color: 'orange' },
        { id: 3, name: '购物', icon: 'shopping-bag', color: 'blue' },
        { id: 4, name: '住房', icon: 'home', color: 'purple' },
        { id: 5, name: '交通', icon: 'car', color: 'green' },
        { id: 6, name: '娱乐', icon: 'film', color: 'pink' },
        { id: 7, name: '医疗', icon: 'heartbeat', color: 'red' }
    ]
};

// 初始化应用
function initApp() {
    console.log('AI记账应用初始化');
    loadPage(appState.currentPage);
    setupNavigation();
    setupMobileEvents();
    initCharts();
}

// 加载页面
async function loadPage(pageName) {
    const app = document.getElementById('app');
    
    try {
        switch(pageName) {
            case 'dashboard':
                const dashboardModule = await import('./pages/dashboard.js');
                app.innerHTML = dashboardModule.renderDashboard(appState);
                break;
            case 'add-transaction':
                const addModule = await import('./pages/add-transaction.js');
                app.innerHTML = addModule.renderAddTransaction(appState);
                break;
            case 'analytics':
                const analyticsModule = await import('./pages/analytics.js');
                app.innerHTML = analyticsModule.renderAnalytics(appState);
                break;
            case 'profile':
                const profileModule = await import('./pages/profile.js');
                app.innerHTML = profileModule.renderProfile(appState);
                break;
        }
        
        appState.currentPage = pageName;
        updateActiveNav(pageName);
        
    } catch (error) {
        console.error('加载页面失败:', error);
        app.innerHTML = `
            <div class="p-8 text-center">
                <i class="fa fa-exclamation-triangle text-danger text-4xl mb-4"></i>
                <p class="text-danger font-medium mb-2">页面加载失败</p>
                <button onclick="location.reload()" class="bg-primary text-white px-6 py-2 rounded-lg">
                    重新加载
                </button>
            </div>
        `;
    }
}

// 设置导航事件
function setupNavigation() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-page]')) {
            const page = e.target.closest('[data-page]').dataset.page;
            navigateTo(page);
        }
    });
}

// 设置移动端特定事件
function setupMobileEvents() {
    // 防止双击缩放
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // 处理输入框焦点
    document.addEventListener('focusin', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            setTimeout(() => {
                e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    });
}

// 路由导航
function navigateTo(pageName) {
    loadPage(pageName);
}

// 更新导航激活状态
function updateActiveNav(pageName) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.dataset.page === pageName) {
            item.classList.add('text-primary');
            item.classList.remove('text-neutral-light');
        } else {
            item.classList.remove('text-primary');
            item.classList.add('text-neutral-light');
        }
    });
}

// 底部导航组件
function bottomNavigation(activePage) {
    const navItems = [
        { page: 'dashboard', icon: 'dashboard', label: '仪表盘' },
        { page: 'analytics', icon: 'pie-chart', label: '分析' },
        { page: 'add-transaction', icon: 'plus-circle', label: '记账', isMain: true },
        { page: 'profile', icon: 'user-o', label: '我的' }
    ];

    return `
        <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 px-4 safe-area-bottom">
            <div class="grid grid-cols-4 gap-2">
                ${navItems.map(item => `
                    <button class="nav-item flex flex-col items-center ${activePage === item.page ? 'text-primary' : 'text-neutral-light'}" 
                            data-page="${item.page}">
                        ${item.isMain ? 
                            `<i class="fa fa-${item.icon} text-2xl"></i>` : 
                            `<i class="fa fa-${item.icon}"></i>`
                        }
                        <span class="text-xs mt-1">${item.label}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

// 导出功能
export { initApp, appState, loadPage, bottomNavigation };