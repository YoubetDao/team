# YouBetDao 官方网站

> 🚀 使用 Next.js 14 和 Framer Motion 构建的现代化暗黑主题官网

## ✨ 项目特色

- **🎨 现代化设计**: 采用暗黑主题和渐变色彩设计
- **🎭 酷炫动画**: 使用 Framer Motion 实现流畅的页面动画效果
- **📱 响应式布局**: 完美适配桌面端、平板和移动设备
- **⚡ 高性能**: 基于 Next.js 14 的最新特性构建
- **🎪 交互体验**: 丰富的悬停效果和页面过渡动画
- **🌐 国际化友好**: 支持中英文内容展示

## 🛠️ 技术栈

- **前端框架**: Next.js 14 + React 19
- **样式方案**: Tailwind CSS 4
- **动画库**: Framer Motion
- **图标库**: Lucide React
- **类型检查**: TypeScript
- **包管理器**: pnpm

## 📦 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式和动画定义
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx          # 首页组件
├── components/            # UI 组件
│   ├── Header.tsx        # 导航头部
│   ├── Hero.tsx          # 英雄区域
│   ├── Partners.tsx      # 合作伙伴
│   ├── Portfolio.tsx     # 作品集展示
│   ├── Achievements.tsx  # 成就展示
│   ├── Services.tsx      # 服务介绍
│   └── Footer.tsx        # 页脚
└── lib/
    └── utils.ts           # 工具函数
```

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm (推荐) 或 npm/yarn

### 安装与运行

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd youbetdao-official-website
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **启动开发服务器**
   ```bash
   pnpm dev
   ```

4. **访问应用**
   
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 其他命令

```bash
# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 代码检查
pnpm lint
```

## 🎯 页面功能

### 🏠 首页 (Hero)
- 渐变文字动画
- 浮动粒子效果
- 响应式统计数据展示
- CTA 按钮交互

### 🤝 合作伙伴 (Partners)
- 无限滚动动画
- 悬停放大效果
- 渐变边框蒙版

### 💼 作品集 (Portfolio)
- 项目卡片展示
- 悬停发光效果
- 标签分类显示
- 外链跳转功能

### 🏆 成就展示 (Achievements)
- 时间线布局
- 分年份展示
- 统计数据可视化
- 渐进式动画加载

### 🛠️ 服务介绍 (Services)
- 三大核心服务
- 特色优势展示
- CTA 行动引导

### 📧 页脚 (Footer)
- 社交媒体链接
- 快速导航
- 联系方式
- 版权信息

## 🎨 设计系统

### 颜色主题
- **主色调**: 蓝色 (#6366f1) 到紫色 (#8b5cf6) 渐变
- **背景色**: 纯黑 (#000000)
- **文字色**: 白色 (#ffffff) 和灰色系
- **强调色**: 各种彩色用于不同模块

### 动画效果
- **页面进入**: fadeInUp 动画
- **滚动触发**: Intersection Observer
- **悬停效果**: scale 和 glow 变换
- **浮动元素**: 循环上下浮动

### 响应式设计
- **移动端**: < 768px
- **平板端**: 768px - 1024px  
- **桌面端**: > 1024px

## 🔧 自定义配置

### 修改主题色彩
在 `src/app/globals.css` 中修改 CSS 变量：

```css
:root {
  --primary: #6366f1;
  --primary-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
}
```

### 添加新组件
1. 在 `src/components/` 创建新组件
2. 在 `src/app/page.tsx` 中引入
3. 添加对应的动画和样式

### 修改内容
直接编辑各组件文件中的数据数组，如：
- `partners` 数组 (Partners.tsx)
- `projects` 数组 (Portfolio.tsx)
- `achievements` 数组 (Achievements.tsx)

## 📈 性能优化

- **代码分割**: 自动路由级别的代码分割
- **图片优化**: Next.js 内置 Image 组件优化
- **CSS 优化**: Tailwind CSS 的 JIT 编译
- **动画优化**: Framer Motion 的硬件加速

## 🌟 特色亮点

1. **视觉冲击力**: 暗黑主题 + 渐变色彩 + 发光效果
2. **交互体验**: 流畅的动画过渡和悬停反馈
3. **现代化**: 使用最新的 Web 技术栈
4. **可维护性**: 组件化架构，易于扩展和维护
5. **SEO 友好**: 完整的 meta 信息和语义化结构

## 📝 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**YouBetDao** - 创建去中心化协作网络，赋能 Web3 建设者 🚀
