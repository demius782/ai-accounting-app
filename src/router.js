import { loadPage } from './main.js';

// 路由导航
function navigateTo(pageName) {
    loadPage(pageName);
    updateActiveNav(pageName);
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

// 导出路由功能
export { navigateTo, updateActiveNav };