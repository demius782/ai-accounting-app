import { navigateTo } from './router.js';
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
    loadPage(appState.currentPage);
    setupNavigation();
    initCharts();
}

// 加载页面
function loadPage(pageName) {
    const app = document.getElementById('app');
    
    switch(pageName) {
        case 'dashboard':
            import('./pages/dashboard.js').then(module => {
                app.innerHTML = module.renderDashboard(appState);
            });
            break;
        case 'add-transaction':
            import('./pages/add-transaction.js').then(module => {
                app.innerHTML = module.renderAddTransaction(appState);
            });
            break;
        case 'analytics':
            import('./pages/analytics.js').then(module => {
                app.innerHTML = module.renderAnalytics(appState);
            });
            break;
        case 'profile':
            import('./pages/profile.js').then(module => {
                app.innerHTML = module.renderProfile(appState);
            });
            break;
    }
    
    appState.currentPage = pageName;
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

// 导出功能
export { initApp, appState, loadPage };