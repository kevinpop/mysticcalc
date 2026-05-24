# MysticCalc 夜间推进计划

> 创建：2026-05-24 22:59
> 目标：Kevin 睡觉期间持续推进 Phase 2

---

## 任务清单（按优先级排序）

### P0：Crystal Meaning Lookup 工具开发
- 目标：验证工具型流量模型
- 关键词：crystal meaning lookup（6K 月搜索，竞争 0.30，无 AI Overview）
- 产出：一个交互式工具页面，用户输入水晶名称/关键词，返回含义和属性
- 技术：React 组件 + 搜索功能 + SEO 友好

### P1：水晶 batch3 扩展（剩余 ~20 个关键词）
- 目标：覆盖更多长尾关键词
- 清单：labradorite, malachite, pyrite, ametrine, celestite, rhodonite, amazonite, hematite, turquoise, opal, peridot, tourmaline, apatite, kunzite, larimar, moldavite, shungite, howlite, sunstone, rutilated quartz
- 每页：meaning + properties + healing + FAQ + relatedCrystals

### P2：内容提质（18 页 Phase 2 内容）
- 目标：提升已有页面的信息深度
- 范围：8 个风水页 + 10 个水晶页（Phase 2 新增）
- 动作：补充深度内容、FAQ、内链、使用场景

---

## 执行策略
- spawn agent 并行执行 P0 + P1
- P2 在 P1 完成后启动
- 每完成一个 batch 就 git push + 验证构建
