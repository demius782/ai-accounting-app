// 底部导航组件
function bottomNavigation(activePage) {
    const navItems = [
        { page: 'dashboard', icon: 'dashboard', label: '仪表盘' },
        { page: 'analytics', icon: 'pie-chart', label: '分析' },
        { page: 'add-transaction', icon: 'plus-circle', label: '记账', isMain: true },
        { page: 'profile', icon: 'user-o', label: '我的' }
    ];

    return `
        <div class="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 px-4">
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

export { bottomNavigation };