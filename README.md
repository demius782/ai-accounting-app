# AI 自动记账 APP

基于原型设计的现代化记账应用，具有AI智能建议功能。

## 功能特性

### 📊 仪表盘
- 实时财务概览
- 月度收支图表
- 最近交易记录
- 快捷操作入口

### 💰 智能记账
- 支出/收入分类管理
- 日期时间记录
- 备注功能
- AI智能分类建议

### 📈 财务分析
- 消费分类分析
- 预算进度管理
- 趋势图表展示
- 月度/季度/年度统计

### 👤 个人中心
- 账户信息管理
- 功能设置
- 数据备份
- 隐私保护

## 技术栈

- **前端框架**: 原生JavaScript (ES6+)
- **UI框架**: Tailwind CSS
- **图表库**: Chart.js
- **图标库**: Font Awesome
- **字体**: Inter

## 项目结构

```
src/
├── components/          # 可复用组件
│   └── navigation.js   # 底部导航组件
├── pages/              # 页面组件
│   ├── dashboard.js    # 仪表盘页面
│   ├── add-transaction.js # 记账页面
│   ├── analytics.js    # 分析页面
│   └── profile.js      # 个人中心页面
├── utils/              # 工具函数
│   └── charts.js       # 图表工具
├── main.js             # 应用主逻辑
├── router.js           # 路由管理
└── init.js             # 应用初始化
```

## 快速开始

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm run dev
```

3. 打开浏览器访问 `http://localhost:3000`

## 构建

```bash
npm run build
```

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License