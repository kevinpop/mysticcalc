# PRD — MysticCalc.com

> **产品名称：** MysticCalc  
> **域名：** mysticcalc.com  
> **文档版本：** v1.0  
> **最后更新：** 2026-05-23  
> **负责人：** Kevin  

---

## 1. 产品愿景

**一句话：** MysticCalc 是英文世界第一个把玄学查询（天使数字、解梦）和免费互动工具结合的 SEO 工具站——用工具做差异化，用内容做流量，用广告和联盟做变现。

**给谁用：** 对天使数字、梦境解析、数字命理感兴趣的英文用户（以北美为主）。

**解决什么问题：**
- 现有竞品（angelnumber.org、numerology.com）只有静态内容，缺乏互动工具
- 用户搜完即走，停留时间短、页面深度浅
- 没有心理学 + 灵性的双视角内容，千篇一律

**核心差异化：**
| 维度 | 竞品 | MysticCalc |
|------|------|-----------|
| 互动工具 | ❌ 无 | ✅ 天使数字计算器 + 梦境测试 + 命理计算器 |
| 内容视角 | 单一灵性 | 心理学 + 灵性双视角 |
| 用户粘性 | 搜完即走 | 工具 → 结果 → 深度阅读 → 关联推荐 |

---

## 2. 用户画像

### 2.1 Sarah — 灵性探索者（主力用户，~40%）

- **年龄：** 25-40，女性为主
- **场景：** 刚经历人生转折（分手、换工作、搬家），开始关注"宇宙信号"
- **行为：** 频繁搜索"angel number 111 meaning""what does it mean when you keep seeing 444"
- **痛点：** 网上内容千篇一律，不知道哪个说法靠谱
- **变现路径：** 搜索 → 天使数字详情页 → 广告曝光 → 联盟产品推荐（灵性课程/水晶）

### 2.2 Mike — 好奇型探索者（~25%）

- **年龄：** 20-35，男女各半
- **场景：** 朋友提到天使数字、刷到 TikTok/YouTube 视频，好奇查一下
- **行为：** 搜索"angel number calculator""dream meaning of teeth falling out"
- **痛点：** 想快速知道答案，不想读长文
- **变现路径：** 搜索 → 计算器工具 → 结果页 → 广告曝光

### 2.3 Lisa — 梦境困扰者（~20%）

- **年龄：** 30-50，女性为主
- **场景：** 做了奇怪/反复出现的梦，想搞清楚含义
- **行为：** 搜索"dream about falling meaning""dream dictionary snakes"
- **痛点：** 解梦网站内容碎片化，缺乏系统性
- **变现路径：** 搜索 → 解梦详情页 → 梦境测试 → 联盟推荐（心理咨询/塔罗）

### 2.4 David — 命理爱好者（~15%）

- **年龄：** 30-55，对 numerology 有基础认知
- **场景：** 已经知道自己的 Life Path Number，想深入了解
- **行为：** 搜索"life path number 7 meaning""numerology calculator"
- **痛点：** 现有计算器功能单一，没有个性化解读
- **变现路径：** 搜索 → 命理计算器 → 深度解读 → 联盟推荐（Numerologist.com 报告）

### 2.5 用户旅程（通用）

```
Google 搜索 query
    ↓
SERP 点击（标题含数字 + 情感词）
    ↓
着陆页（3 秒内看到核心答案）
    ↓
工具互动（计算器/测试）← 停留时间 +2-3x
    ↓
关联推荐（"你可能还想知道…"）
    ↓
广告曝光 + 联盟 CTA
    ↓
回访 / 邮件订阅（Phase 2）
```

---

## 3. 功能需求

### 3.1 P0 — Week 1 必须上线（MVP）

#### 3.1.1 首页

| 项目 | 说明 |
|------|------|
| 目标 | 分发入口页，引导用户进入两大主引擎 |
| 核心元素 | Logo + 一句话定位 + 天使数字分类入口 + 解梦分类入口 + 热门页面 Top 10 |
| SEO | Title: "MysticCalc — Angel Numbers, Dream Meanings & Numerology Tools" |
| CTA | "Discover Your Angel Number" / "Search Dream Meanings" |

#### 3.1.2 天使数字详情页（×10）

**核心数字（P0）：** 111, 222, 333, 444, 555, 666, 777, 888, 999, 000

**页面结构：**
```
H1: Angel Number [X] Meaning — [情感关键词]
├── TL;DR Box（3 秒内给出核心含义，2-3 句话）
├── 核心含义（灵性视角，300-500 字）
├── 心理学解读（科学视角，200-300 字）
├── 爱情中的含义
├── 事业中的含义
├── 看到这个数字时该做什么（行动建议）
├── 与其他数字的关系（内链）
├── FAQ（3-5 个常见问题，Schema FAQ markup）
└── CTA：「想知道你的个人天使数字？→ 计算器」
```

**每页目标字数：** 1,500-2,000 字  
**Schema：** Article + FAQ + BreadcrumbList  
**内链：** 每页至少 3 条指向其他天使数字页 + 首页

#### 3.1.3 解梦详情页（×10）

**核心梦境（P0）：** falling, teeth falling out, being chased, flying, death, water, snake, pregnancy, wedding, ex

**页面结构：**
```
H1: Dream About [主题] — What It Really Means
├── TL;DR Box（核心含义，2-3 句话）
├── 常见梦境场景（3-5 个变体）
├── 心理学解读（弗洛伊德/荣格视角）
├── 灵性/文化解读
├── 不同情境下的含义差异
├── 你需要做什么（行动建议）
├── 相关梦境（内链）
├── FAQ（3-5 个，Schema FAQ markup）
└── CTA：「做了奇怪的梦？→ 梦境测试」
```

**每页目标字数：** 1,500-2,000 字  
**Schema：** Article + FAQ + BreadcrumbList  
**内链：** 每页至少 3 条指向其他解梦页 + 首页

#### 3.1.4 SEO 基础设施

| 项目 | 说明 |
|------|------|
| Meta Tags | 每页独立 Title + Description（含目标关键词） |
| Schema Markup | Article, FAQ, BreadcrumbList, WebSite（搜索框） |
| Sitemap | 自动生成 sitemap.xml，包含所有已发布页面 |
| Robots.txt | 允许所有搜索引擎，屏蔽 /api/ 等非内容路径 |
| Canonical | 每页自引用 canonical |
| OG Tags | Open Graph + Twitter Card |
| 结构化 URL | `/angel-number/111`, `/dream/teeth-falling-out` |

#### 3.1.5 法律合规页

| 页面 | 内容 |
|------|------|
| Disclaimer | 免责声明：内容仅供娱乐和参考，不构成医疗/法律/财务建议 |
| Privacy Policy | 隐私政策：Cookie 使用、数据收集说明、GDPR/CCPA 合规 |
| About Us | 关于我们：网站定位、内容来源说明 |

---

### 3.2 P1 — Week 2-3

#### 3.2.1 天使数字计算器

| 项目 | 说明 |
|------|------|
| 功能 | 用户输入生日 → 计算个人天使数字 → 展示个性化解读 |
| 输入 | 出生日期（月/日/年） |
| 算法 | 各位数字相加至个位数（Numerology 标准算法） |
| 输出 | 个人天使数字 + 含义解读 + 与通用含义的区别 + 分享按钮 |
| 变现 | 结果页底部推荐 Numerologist.com 付费深度报告（联盟链接） |
| 留存 | "保存你的结果" → 邮件收集入口 |

#### 3.2.2 梦境搜索功能

| 项目 | 说明 |
|------|------|
| 功能 | 搜索框 + 自动补全，覆盖所有已发布梦境词条 |
| 交互 | 输入关键词 → 实时显示匹配结果 → 点击进入详情页 |
| 扩展 | 搜索无结果时显示"请求解析"按钮（收集用户需求） |
| SEO | 搜索结果页可被索引（动态生成 landing page） |

#### 3.2.3 数据库扩展

| 引擎 | P0 | P1 目标 | 内容来源 |
|------|-----|---------|---------|
| 天使数字 | 10 个 | 100 个（111-999 + 重复数字 + 特殊组合） | 批量生成 + 人工审核 |
| 解梦 | 10 个 | 50 个（高频搜索梦境主题） | 关键词研究确定优先级 |

**批量内容生产流程：**
1. 关键词研究 → 确定目标词列表
2. 模板化生成（MDX 模板 + 数据 JSON）
3. 人工审核（准确性 + E-E-A-T）
4. 发布 + 提交索引

#### 3.2.4 内链矩阵

| 策略 | 实现 |
|------|------|
| 同引擎内链 | 天使数字页之间互链（"你可能还想知道 222 的含义"） |
| 跨引擎内链 | 天使数字 ↔ 解梦（"看到 111 和梦见飞有关联"） |
| 工具 → 内容 | 计算器结果 → 相关详情页 |
| 面包屑导航 | 每页顶部：首页 > 分类 > 当前页 |
| 相关推荐 | 每页底部 3-6 个相关页面卡片 |

---

### 3.3 P2 — Month 2+

#### 3.3.1 数字命理计算器（Life Path Number）

- 输入生日 → 计算 Life Path Number → 展示性格分析 + 人生方向
- 与天使数字计算器形成工具矩阵
- 联盟变现：推荐 Numerologist.com 付费报告

#### 3.3.2 八字计算器（Bazi）

- 输入出生日期时间 → 生成八字排盘 → 基础解读
- 覆盖东方玄学搜索需求（竞争较低）
- 差异化：英文世界少有高质量八字工具

#### 3.3.3 风水指南

- 按房间分类（卧室、客厅、办公室）
- 按问题分类（财运、健康、桃花）
- 每篇 1,000-1,500 字，配图说明

#### 3.3.4 邮件订阅

- 入口：计算器结果页 + 文章底部 + Exit Intent Popup
- 内容：每周天使数字运势 + 新梦境解析推送
- 目标：Month 3 达到 500 订阅者

#### 3.3.5 会员系统（探索性）

- 免费用户：基础内容 + 工具
- 付费会员（$4.99/月）：深度个性化解读 + 无广告 + 专属内容
- 暂不开发，先验证免费模式的流量天花板

---

## 4. 技术架构

### 4.1 技术栈

| 层 | 选型 | 理由 |
|-----|------|------|
| 框架 | Next.js 16 (App Router) | SSG 静态生成，SEO 友好，Vercel 原生支持 |
| 语言 | TypeScript | 类型安全，减少运行时错误 |
| 样式 | Tailwind CSS | 快速开发，bundle 小 |
| 内容 | MDX + JSON | 结构化数据 + 灵活内容渲染 |
| 部署 | Vercel | 全球 CDN，自动 HTTPS，零运维 |
| 分析 | Google Analytics 4 + Search Console | 流量监控 + SEO 表现 |

### 4.2 项目结构

```
mysticcalc/
├── app/
│   ├── page.tsx                    # 首页
│   ├── angel-number/
│   │   ├── page.tsx                # 天使数字列表页
│   │   └── [slug]/page.tsx         # 天使数字详情页（SSG）
│   ├── dream/
│   │   ├── page.tsx                # 解梦列表页
│   │   └── [slug]/page.tsx         # 解梦详情页（SSG）
│   ├── tools/
│   │   ├── angel-calculator/page.tsx  # 天使数字计算器
│   │   └── dream-test/page.tsx        # 梦境测试
│   ├── about/page.tsx
│   ├── disclaimer/page.tsx
│   └── privacy/page.tsx
├── components/
│   ├── AngelNumberCard.tsx
│   ├── DreamMeaningCard.tsx
│   ├── Calculator.tsx
│   ├── SearchBar.tsx
│   ├── RelatedLinks.tsx
│   └── AdSlot.tsx
├── content/
│   ├── angel-numbers/              # MDX 文件
│   │   ├── 111.mdx
│   │   ├── 222.mdx
│   │   └── ...
│   └── dreams/                     # MDX 文件
│       ├── falling.mdx
│       ├── teeth-falling-out.mdx
│       └── ...
├── data/
│   ├── angel-numbers.json          # 结构化数据（数字、含义、关键词）
│   └── dreams.json                 # 结构化数据（主题、场景、解读）
├── lib/
│   ├── numerology.ts               # 命理计算逻辑
│   └── utils.ts
├── public/
│   ├── sitemap.xml
│   └── robots.txt
└── tailwind.config.ts
```

### 4.3 SSG 生成策略

```typescript
// app/angel-number/[slug]/page.tsx
export async function generateStaticParams() {
  return angelNumbers.map(n => ({ slug: n.slug }));
}

export async function generateMetadata({ params }) {
  const angel = getAngelNumber(params.slug);
  return {
    title: `Angel Number ${angel.number} Meaning — MysticCalc`,
    description: angel.metaDescription,
    openGraph: { /* ... */ },
  };
}
```

### 4.4 SEO Schema 示例

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Angel Number 111 Meaning",
  "author": { "@type": "Organization", "name": "MysticCalc" },
  "datePublished": "2026-05-23",
  "dateModified": "2026-05-23",
  "mainEntityOfPage": "https://mysticcalc.com/angel-number/111"
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does angel number 111 mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Angel number 111 is a powerful signal..."
      }
    }
  ]
}
```

---

## 5. 变现策略

### 5.1 AdSense（主力）

| 项目 | 说明 |
|------|------|
| 申请时机 | 20+ 页被 Google 收录后申请 |
| 广告位 | 文章顶部（首屏下方）、文章中部（折叠线附近）、文章底部、侧边栏 |
| 格式 | 展示广告 + 文章内原生广告 |
| 预期 RPM | $5-15（玄学类英文站） |
| 备选 | Mediavine（需 50K sessions/月）、Ezoic |

### 5.2 联盟 CPA

| 联盟 | 产品 | 佣金 | 放置位置 |
|------|------|------|---------|
| Numerologist.com | 个性化命理报告 | $20-40/lead | 计算器结果页 + 文章 CTA |
| ClickBank | 灵性课程/塔罗 | 50-75% 佣金 | 文章内推荐 + 侧边栏 |
| Kasamba | 在线塔罗/灵性咨询 | $20-30/lead | 解梦页底部推荐 |
| Amazon | 水晶/灵性书籍 | 4-8% | 文章内产品推荐 |

### 5.3 变现节奏

```
Month 1-2:  无广告（积累内容 + 申请 AdSense）
Month 2-3:  AdSense 上线 + 联盟链接测试
Month 3-6:  优化广告位 + 联盟转化率
Month 6-12: 探索会员制 + 邮件营销变现
```

---

## 6. 非功能需求

### 6.1 性能

| 指标 | 目标 | 工具 |
|------|------|------|
| LCP (Largest Contentful Paint) | < 2.5s | Lighthouse, PageSpeed Insights |
| FID (First Input Delay) | < 100ms | Web Vitals |
| CLS (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| TTFB (Time to First Byte) | < 200ms | Vercel Analytics |
| Bundle Size | < 100KB (首屏 JS) | Webpack Bundle Analyzer |

**实现策略：**
- SSG 静态生成（所有内容页在构建时预渲染）
- 图片优化：WebP/AVIF + lazy loading
- 字体：`font-display: swap` + 预加载关键字体
- CDN：Vercel Edge Network 全球分发

### 6.2 SEO

| 项目 | 要求 |
|------|------|
| Core Web Vitals | 全绿（LCP/FID/CLS） |
| Mobile-Friendly | 通过 Google Mobile-Friendly Test |
| Structured Data | Article + FAQ + BreadcrumbList + WebSite |
| Internal Linking | 每页 ≥3 条内链 |
| Sitemap | 自动生成，< 50,000 URLs |
| Page Speed | Lighthouse Performance ≥ 90 |

### 6.3 可访问性

| 项目 | 要求 |
|------|------|
| 标准 | WCAG 2.1 AA |
| 键盘导航 | 所有交互元素可 Tab 访问 |
| 屏幕阅读器 | 语义化 HTML + ARIA labels |
| 颜色对比 | ≥ 4.5:1 |
| 图片 alt | 所有图片必须有 alt 文本 |

### 6.4 移动端优先

- 设计断点：320px / 768px / 1024px / 1440px
- 触摸目标：≥ 44×44px
- 字体：正文 ≥ 16px
- 无水平滚动

---

## 7. 成功指标

### 7.1 北极星指标

**月活跃用户（MAU）** — 衡量产品是否真正满足用户需求。

### 7.2 阶段性里程碑

| 时间 | 指标 | 目标 |
|------|------|------|
| Week 1 | 页面上线 | 22+ 页（首页 + 10 天使数字 + 10 解梦 + 法律页） |
| Month 1 | Google 收录 | 20+ 页被索引 |
| Month 1 | 基础流量 | 100+ UV |
| Month 3 | 月流量 | > 1,000 UV |
| Month 3 | AdSense | 获批上线 |
| Month 6 | 月流量 | > 10,000 UV |
| Month 6 | 月收入 | > $100（AdSense + 联盟） |
| Month 12 | 月流量 | > 50,000 UV |
| Month 12 | 月收入 | > $500 |
| Month 12 | 内容总量 | 400+ 页 |

### 7.3 过程指标

| 类别 | 指标 | 监控频率 |
|------|------|---------|
| SEO | 关键词排名（Top 10 数量） | 每周 |
| SEO | 收录页面数 | 每周 |
| 流量 | 有机搜索流量占比 | 每日 |
| 用户 | 平均停留时间 | 每周 |
| 用户 | 跳出率 | 每周 |
| 用户 | 页面/会话 | 每周 |
| 转化 | 计算器使用率 | 每周 |
| 转化 | 联盟链接点击率 | 每周 |
| 收入 | RPM（千次展示收入） | 每月 |

---

## 8. 风险与缓解

### 8.1 风险矩阵

| 风险 | 概率 | 影响 | 缓解策略 |
|------|------|------|---------|
| **Google AI 内容惩罚** | 中 | 高 | 人工审核每篇内容 + 注入个人经验/观点（E-E-A-T）+ 避免纯模板化输出 |
| **AdSense 拒审** | 中 | 中 | 完善法律页面（Disclaimer/Privacy/About）+ 确保内容原创性 + 备选联盟变现 |
| **竞品跟进** | 高 | 中 | 快速铺量（先发优势）+ 工具差异化（计算器/测试）+ 持续迭代 |
| **关键词竞争加剧** | 中 | 中 | 长尾关键词策略 + 工具型内容（竞品难以复制）+ 内链矩阵提升权重 |
| **内容质量瓶颈** | 中 | 高 | 建立内容审核 checklist + 参考权威来源 + 引用心理学研究 |
| **技术债务** | 低 | 低 | Next.js + TypeScript 类型安全 + Vercel 零运维 |
| **Vercel 费用超标** | 低 | 低 | SSG 静态页面为主，带宽消耗极低，Pro 计划 $20/月足够 |

### 8.2 E-E-A-T 策略

Google 对 YMYL（Your Money Your Life）类内容有更高的 E-E-A-T 要求。玄学类内容虽非严格 YMYL，但需注意：

| 维度 | 实施 |
|------|------|
| Experience | 内容中加入"我在实践中发现…"等第一人称叙述 |
| Expertise | 引用心理学研究（荣格、弗洛伊德）+ 数字命理学经典文献 |
| Authoritativeness | 建立 About 页面 + 作者页面 + 外链建设 |
| Trustworthiness | 免责声明 + 隐私政策 + HTTPS + 联系方式 |

---

## 9. 里程碑时间线

### Phase 1 — MVP（Week 1）

```
Day 1-2:  项目初始化（Next.js + Tailwind + Vercel 部署）
Day 2-3:  首页 + 导航 + 全局布局
Day 3-5:  10 个天使数字详情页（内容撰写 + MDX 集成）
Day 5-7:  10 个解梦详情页（内容撰写 + MDX 集成）
Day 7-8:  SEO 基础设施（meta/schema/sitemap/robots）
Day 8-9:  法律页面（Disclaimer/Privacy/About）
Day 9-10: 测试 + 修复 + 正式上线
```

**Week 1 交付物：**
- [x] 首页上线
- [x] 10 个天使数字详情页
- [x] 10 个解梦详情页
- [x] SEO 基础设施
- [x] 法律合规页
- [x] Vercel 部署 + 自定义域名

### Phase 2 — 扩展（Week 2-3）

```
Week 2:
  - 天使数字计算器开发 + 上线
  - 梦境搜索功能开发
  - 天使数字数据库扩展到 50 个
  
Week 3:
  - 天使数字数据库扩展到 100 个
  - 解梦数据库扩展到 50 个
  - 内链矩阵建设
  - 提交 Google Search Console 索引
```

### Phase 3 — 变现（Month 2）

```
Month 2:
  - AdSense 申请
  - 联盟链接集成（Numerologist/ClickBank/Kasamba）
  - 内容扩展到 250 页
  - 性能优化（Core Web Vitals 全绿）
```

### Phase 4 — 增长（Month 3-6）

```
Month 3-6:
  - 内容扩展到 400 页
  - 命理计算器上线
  - 八字计算器上线
  - 邮件订阅系统
  - 广告位优化
  - 目标：月流量 > 10K UV，月收入 > $100
```

### Phase 5 — 成熟（Month 6-12）

```
Month 6-12:
  - 风水指南上线
  - 内链矩阵持续优化
  - 外链建设
  - 目标：月流量 > 50K UV，月收入 > $500
  - 评估会员制可行性
```

---

## 10. 内容规划

### 10.1 天使数字内容矩阵

**P0（Week 1）：** 111, 222, 333, 444, 555, 666, 777, 888, 999, 000

**P1（Week 2-3，按搜索量排序）：**
- 重复数字：1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999
- 高频组合：1212, 1010, 1234, 1122, 1133, 1144, 1155
- 特殊数字：11:11, 12:34, 1313, 1414, 1515
- 扩展至 100 个

**P2（Month 2+）：**
- 扩展至 500+ 个
- 覆盖所有三位数组合（100-999）

### 10.2 解梦内容矩阵

**P0（Week 1）：** falling, teeth falling out, being chased, flying, death, water, snake, pregnancy, wedding, ex

**P1（Week 2-3，按搜索量排序）：**
- 高频梦境：spider, fire, baby, dog, cat, house, car, money, blood, crying, rain, ocean, mountain
- 扩展至 50 个

**P2（Month 2+）：**
- 扩展至 200+ 个
- 覆盖所有常见梦境主题

### 10.3 内容质量标准

| 维度 | 要求 |
|------|------|
| 字数 | 1,500-2,000 字/页 |
| 结构 | 必须包含 TL;DR + 核心含义 + 心理学视角 + 行动建议 + FAQ |
| 内链 | 每页 ≥ 3 条内链 |
| 图片 | 每页至少 1 张相关图片（带 alt） |
| 原创性 | Copyscape 检测通过率 100% |
| 可读性 | Flesch Reading Ease ≥ 60 |
| 更新频率 | 核心页面每季度审核一次 |

---

## 11. SEO 策略

### 11.1 关键词策略

| 类型 | 示例 | 搜索量 | 竞争 | 优先级 |
|------|------|--------|------|--------|
| 核心词 | angel number 111 meaning | 100K+ | 中 | P0 |
| 核心词 | dream about teeth falling out | 50K+ | 中 | P0 |
| 长尾词 | angel number 111 meaning love | 10K+ | 低 | P1 |
| 长尾词 | dream about teeth falling out spiritual meaning | 5K+ | 低 | P1 |
| 工具词 | angel number calculator | 20K+ | 低 | P1 |
| 工具词 | numerology calculator | 30K+ | 中 | P2 |

### 11.2 On-Page SEO Checklist

- [ ] Title 含目标关键词，< 60 字符
- [ ] Meta Description 含关键词，< 160 字符
- [ ] H1 含关键词，每页仅 1 个 H1
- [ ] URL 简洁含关键词（`/angel-number/111`）
- [ ] 图片 alt 文本含关键词
- [ ] 内链 ≥ 3 条
- [ ] Schema markup（Article + FAQ）
- [ ] 页面加载 < 2.5s

### 11.3 Off-Page SEO（Month 3+）

| 策略 | 说明 |
|------|------|
| Guest Post | 在灵性/玄学博客发布客座文章 |
| Forum | Reddit r/numerology, r/dreams 参与讨论（不 spam） |
| Social | Pinterest（玄学类内容在 Pinterest 传播性强） |
| HARO | 回应记者关于灵性/命理的提问 |

---

## 12. 竞品分析

### 12.1 直接竞品

| 竞品 | 月流量 | 优势 | 劣势 |
|------|--------|------|------|
| angelnumber.org | 63 万 | 内容全面，SEO 强 | 无互动工具，纯静态内容 |
| numerology.com | 10 万+ | 品牌知名度高 | 内容陈旧，工具付费 |
| dreamdictionary.org | 5 万+ | 梦境数据库大 | 设计老旧，无个性化 |

### 12.2 MysticCalc 差异化优势

| 维度 | 竞品 | MysticCalc |
|------|------|-----------|
| 互动工具 | ❌ 无 | ✅ 天使数字计算器 + 梦境测试 + 命理计算器 |
| 内容视角 | 单一灵性 | 心理学 + 灵性双视角 |
| 用户体验 | 传统网页 | 现代 SPA + 移动端优先 |
| 技术栈 | WordPress/传统 | Next.js SSG + Vercel CDN |
| 变现模式 | 纯广告 | 广告 + 联盟 CPA + 邮件营销 |

---

## 附录

### A. 术语表

| 术语 | 定义 |
|------|------|
| Angel Number | 天使数字，反复出现的数字序列，被认为有灵性含义 |
| Numerology | 数字命理学，通过数字解读性格和命运 |
| SSG | Static Site Generation，静态站点生成 |
| E-E-A-T | Experience, Expertise, Authoritativeness, Trustworthiness |
| YMYL | Your Money Your Life，Google 对高影响内容的质量标准 |
| CPA | Cost Per Action，按行动付费的联盟模式 |
| RPM | Revenue Per Mille，千次展示收入 |
| LCP | Largest Contentful Paint，最大内容绘制时间 |
| CLS | Cumulative Layout Shift，累积布局偏移 |

### B. 参考资料

- [Google Search Quality Evaluator Guidelines](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)
- [Next.js Documentation](https://nextjs.org/docs)
- [Web Vitals](https://web.dev/vitals/)
- [Schema.org - Article](https://schema.org/Article)
- [Schema.org - FAQPage](https://schema.org/FAQPage)

### C. 变更记录

| 版本 | 日期 | 变更内容 |
|------|------|---------|
| v1.0 | 2026-05-23 | 初始版本 |

---

*文档结束。如有疑问或需要调整，请联系 Kevin。*
