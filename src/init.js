// 应用初始化脚本
import { initApp } from './main.js';

// 等待DOM加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    console.log('AI记账APP正在启动...');
    initApp();
});

// 导出初始化函数
export function startApp() {
    initApp();
}