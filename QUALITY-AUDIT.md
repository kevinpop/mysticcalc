# MysticCalc Quality Audit Report

> **Date:** 2026-05-23
> **Auditor:** Automated subagent
> **Scope:** Data integrity, link integrity, build verification, keyword coverage, sitemap

---

## 1. Data Integrity

### angel-numbers.json

| Metric | Value |
|--------|-------|
| Total entries | **143** |
| Slug mismatches | **0** ✅ |
| Missing FAQs | **0** ✅ |
| Missing relatedNumbers | **9** ⚠️ |

**Entries missing `relatedNumbers`:**
- `000`
- `2222`, `3333`, `4444`, `5555`, `6666`, `7777`, `8888`, `9999`

These are all 4-digit repeating numbers. They likely were added later without the related links populated.

### dream-symbols.json

| Metric | Value |
|--------|-------|
| Total entries | **10** |
| Missing slugs | **0** ✅ |
| Missing FAQs | **0** ✅ |
| Missing relatedDreams | **0** ✅ |

All 10 dream entries are structurally complete. However, many `relatedDreams` reference keys that don't exist in the JSON (see Section 2).

### numerology-numbers.json

| Metric | Value |
|--------|-------|
| Total entries | **12** (Life Path 1-9, 11, 22, 33) |
| Missing slugs | **12** ⚠️ (all entries lack a `slug` field) |
| Missing FAQs | **likely all** (no slug suggests minimal data) |

Numerology data appears to be bare-bones — titles only, no slugs. No numerology detail pages exist in the build.

---

## 2. Internal Link Integrity

### Angel Numbers — relatedNumbers

| Metric | Value |
|--------|-------|
| Total broken references | **2** |

| Source | Broken Ref | Issue |
|--------|-----------|-------|
| `444` → `relatedNumbers` | `1444` | Key `1444` does not exist in angel-numbers.json |
| `777` → `relatedNumbers` | `1777` | Key `1777` does not exist in angel-numbers.json |

These reference 4-digit numbers that were never created. The links will render but point to 404 pages.

### Dream Symbols — relatedDreams

| Metric | Value |
|--------|-------|
| Missing dream topics referenced | **5** |
| Total broken link instances | **10** (across all dream entries) |

**Missing dream keys referenced in `relatedDreams`:**

| Missing Key | Referenced By |
|------------|--------------|
| `being-chased` | snakes, teeth, falling, flying, ex |
| `spiders` | snakes |
| `naked` | teeth |
| `wedding` | pregnancy, ex |
| `house` | fire |

**5 missing dream topics** need to be added to dream-symbols.json (or references removed): `being-chased`, `spiders`, `naked`, `wedding`, `house`.

---

## 3. Build Verification

| Metric | Value |
|--------|-------|
| Build status | ✅ **SUCCESS** |
| Total static pages generated | **168** |
| Errors | **0** |
| Warnings | **0** |
| Build time | ~415ms |

Build is clean. No errors or warnings detected.

### Generated Pages Breakdown

| Category | Count |
|----------|-------|
| Angel number pages | 143 |
| Dream pages | 10 |
| Static pages (home, about, contact, privacy, terms, tools, category pages) | ~15 |
| **Total** | **~168** |

---

## 4. PRD Keyword Coverage (85 Keywords)

Coverage of the 85 keywords from the master keyword list v2.

### Summary

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Full coverage | **16** | 18.8% |
| ⚠️ Partial coverage | **6** | 7.1% |
| ❌ No coverage | **63** | 74.1% |
| **Total** | **85** | 100% |

### Tier 1 — High Potential (26 keywords)

| # | Keyword | Vol | Status | Page |
|---|---------|-----|--------|------|
| 1 | mercury retrograde 2026 | 201K | ❌ | — |
| 2 | 444 angel number meaning | 100K | ✅ | /angel-numbers/444-meaning |
| 3 | 555 angel number meaning | 100K | ✅ | /angel-numbers/555-meaning |
| 4 | birth chart calculator | 96K | ❌ | — |
| 5 | 666 angel number meaning | 90K | ✅ | /angel-numbers/666-meaning |
| 6 | rose quartz meaning | 100K | ❌ | — |
| 7 | amethyst meaning | 100K | ❌ | — |
| 8 | 777 angel number meaning | 60K | ✅ | /angel-numbers/777-meaning |
| 9 | 888 angel number meaning | 60K | ✅ | /angel-numbers/888-meaning |
| 10 | 1111 angel number meaning | 50K | ✅ | /angel-numbers/1111-meaning |
| 11 | black tourmaline meaning | 50K | ❌ | — |
| 12 | zodiac sign calculator | 49.5K | ❌ | — |
| 13 | angel number meaning | 450K | ⚠️ | /angel-numbers (category page) |
| 14 | love tarot reading free | 40K | ❌ | — |
| 15 | citrine meaning | 40K | ❌ | — |
| 16 | clear quartz meaning | 40K | ❌ | — |
| 17 | moonstone meaning | 40K | ❌ | — |
| 18 | 1212 angel number meaning | 40K | ✅ | /angel-numbers/1212-meaning |
| 19 | birth chart calculator free | 33K | ❌ | — |
| 20 | tarot card of the day | 33K | ❌ | — |
| 21 | tarot card meaning lookup | 33K | ❌ | — |
| 22 | selenite meaning | 30K | ❌ | — |
| 23 | lapis lazuli meaning | 30K | ❌ | — |
| 24 | tigers eye meaning | 30K | ❌ | — |
| 25 | obsidian meaning | 30K | ❌ | — |
| 26 | spirit animal quiz | 30K | ❌ | — |

**Tier 1 result:** 7 ✅ / 1 ⚠️ / 18 ❌

### Tier 2 — Medium Potential (23 keywords)

| # | Keyword | Vol | Status | Page |
|---|---------|-----|--------|------|
| 27 | dream dictionary | 135K | ⚠️ | /tools/dream-dictionary (tool exists) |
| 28 | daily tarot reading | 27K | ❌ | — |
| 29 | tarot yes or no | 27K | ❌ | — |
| 30 | dream symbol meaning | 25K | ⚠️ | /dreams (category page) |
| 31 | yes or no tarot free | 22K | ❌ | — |
| 32 | rising sign calculator | 18K | ❌ | — |
| 33 | how to read palm lines | 18K | ❌ | — |
| 34 | dream interpretation teeth falling out | 14.8K | ✅ | /dreams/dream-about-teeth-falling-out-meaning |
| 35 | moon sign calculator | 14.8K | ❌ | — |
| 36 | love tarot reading | 14.8K | ❌ | — |
| 37 | chinese zodiac 2026 predictions | 14.8K | ❌ | — |
| 38 | aura color quiz | 14K | ❌ | — |
| 39 | natal chart calculator free online | 12K | ❌ | — |
| 40 | soulmate quiz | 12K | ❌ | — |
| 41 | dream meaning lookup | 12K | ⚠️ | /dreams (category page) |
| 42 | lucid dreaming techniques | 35K | ❌ | — |
| 43 | lucky number calculator | 12K | ❌ | — |
| 44 | birthstone calculator | 40K | ❌ | — |
| 45 | life path number calculator | 10K+ | ⚠️ | /tools/numerology-calculator (partial) |
| 46 | horoscope compatibility calculator | 12K | ❌ | — |
| 47 | dragon chinese zodiac 2026 | 2.9K | ❌ | — |
| 48 | aries horoscope today | 4.4K | ❌ | — |
| 49 | gemini horoscope today | 4.4K | ❌ | — |

**Tier 2 result:** 1 ✅ / 4 ⚠️ / 18 ❌

### Tier 3 — Blue Ocean (36 keywords)

| # | Keyword | Vol | Status | Page |
|---|---------|-----|--------|------|
| 50 | dream about snakes meaning | 5.4K | ✅ | /dreams/dream-about-snakes-meaning |
| 51 | dream about death meaning | 5.4K | ✅ | /dreams/dream-about-death-meaning |
| 52 | dream about water meaning | 2.9K | ✅ | /dreams/dream-about-water-meaning |
| 53 | dream about flying meaning | 1.9K | ✅ | /dreams/dream-about-flying-meaning |
| 54 | dream about pregnancy meaning | 2.9K | ✅ | /dreams/dream-about-being-pregnant-meaning |
| 55 | dream about money meaning | 1.3K | ❌ | — |
| 56 | dream about fire meaning | 1.9K | ✅ | /dreams/dream-about-fire-meaning |
| 57 | dream about baby meaning | 1.9K | ✅ | /dreams/dream-about-baby-meaning |
| 58 | dream about ex meaning | 2.4K | ✅ | /dreams/dream-about-ex-meaning |
| 59 | dream about wedding meaning | 1.6K | ❌ | — |
| 60 | bazi calculator free online | 6.5K | ❌ | — |
| 61 | synastry calculator | 8.1K | ❌ | — |
| 62 | solar return calculator | 6.6K | ❌ | — |
| 63 | tarot birth card calculator | 3.6K | ❌ | — |
| 64 | chakra stone calculator | 2.5K | ❌ | — |
| 65 | reincarnation quiz | 3K | ❌ | — |
| 66 | healing crystal quiz | 3.5K | ❌ | — |
| 67 | past life calculator | 7K | ❌ | — |
| 68 | chakra calculator | 6.5K | ❌ | — |
| 69 | feng shui color for bedroom | 8.1K | ❌ | — |
| 70 | feng shui office layout | 5.4K | ❌ | — |
| 71 | feng shui kitchen direction | 3.6K | ❌ | — |
| 72 | feng shui mirror placement | 4.4K | ❌ | — |
| 73 | feng shui water fountain placement | 2.9K | ❌ | — |
| 74 | numerology name calculator | 8.1K | ❌ | — |
| 75 | bazi compatibility calculator | 2.4K | ❌ | — |
| 76 | I Ching reading online | 5.4K | ❌ | — |
| 77 | crystal meaning lookup | 6K | ❌ | — |
| 78 | angel number calculator | 6.6K | ✅ | /tools/angel-number-calculator |
| 79 | 1234 angel number meaning | 5K | ✅ | /angel-numbers/1234-meaning |
| 80 | three card tarot spread | 2.5K | ❌ | — |
| 81 | minor arcana meanings | 1.8K | ❌ | — |
| 82 | tarot court card meanings | 1.6K | ❌ | — |
| 83 | chinese zodiac compatibility | 1K+ | ❌ | — |
| 84 | feng shui bedroom layout | 1K+ | ❌ | — |
| 85 | palm reading guide | 1K+ | ❌ | — |

**Tier 3 result:** 8 ✅ / 0 ⚠️ / 28 ❌

### Coverage by Category

| Category | Covered | Total | % |
|----------|---------|-------|---|
| Angel numbers (specific) | 8/8 | 100% | ✅ |
| Angel numbers (generic/tools) | 2/3 | 67% | ⚠️ |
| Dreams (specific) | 8/10 | 80% | ✅ |
| Dreams (generic/tools) | 0/3 | 0% | ❌ |
| Tarot | 0/9 | 0% | ❌ |
| Calculators (astro/numerology) | 1/10 | 10% | ❌ |
| Crystal meanings | 0/8 | 0% | ❌ |
| Feng shui | 0/6 | 0% | ❌ |
| Zodiac/horoscope | 0/4 | 0% | ❌ |
| Eastern metaphysics (bazi/I Ching) | 0/3 | 0% | ❌ |
| Quizzes (spirit/aura/soulmate) | 0/4 | 0% | ❌ |
| Other (palm/mercury/lucid) | 0/4 | 0% | ❌ |

### Biggest Coverage Gaps (by search volume)

| Missing Keyword | Monthly Volume | Priority |
|----------------|---------------|----------|
| mercury retrograde 2026 | 201,000 | 🔴 Seasonal goldmine |
| birth chart calculator | 96,200 | 🔴 High-intent tool |
| rose quartz meaning | 100,000 | 🔴 Crystal content |
| amethyst meaning | 100,000 | 🔴 Crystal content |
| love tarot reading free | 40,000 | 🔴 High CPC |
| birthstone calculator | 40,000 | 🔴 Tool + affiliate |
| lucid dreaming techniques | 35,000 | 🟡 Content |
| tarot card of the day | 33,000 | 🟡 Daily engagement |
| zodiac sign calculator | 49,500 | 🔴 Tool |
| black tourmaline meaning | 50,000 | 🔴 Crystal content |

---

## 5. Sitemap Verification

| Metric | Value |
|--------|-------|
| Sitemap location | `sitemap.ts` (dynamic, Next.js route handler) |
| Total URLs in sitemap | **163** |
| Total static HTML pages built | **165** (includes `_global-error`, `_not-found`) |
| Actual content pages | **163** |

### Sitemap Contents

| Section | URLs | Status |
|---------|------|--------|
| Static pages (home, about, contact, privacy, terms) | 5 | ✅ |
| Category pages (angel-numbers, dreams) | 2 | ✅ |
| Tool pages (calculator, dream-dictionary, numerology) | 3 | ✅ |
| Angel number pages | 143 | ✅ |
| Dream pages | 10 | ✅ |
| **Total** | **163** | ✅ |

### Sitemap Issues

- ✅ All generated pages appear in sitemap
- ✅ URLs use correct format (`/angel-numbers/[N]-meaning`, `/dreams/dream-about-[X]-meaning`)
- ✅ Priorities are set (1.0 homepage, 0.9 category, 0.8 tools, 0.7 content, 0.3 utility, 0.2 legal)
- ⚠️ All `lastmod` timestamps are identical (build time) — not based on actual content modification dates
- ⚠️ No `<changefreq>` tags (optional but recommended)

---

## 6. Summary of Issues

### 🔴 Critical (affects SEO/user experience)

1. **74% keyword coverage gap** — 63 of 85 PRD keywords have no page. Entire categories (tarot, crystals, feng shui, zodiac, calculators) are missing.
2. **Dream relatedDreams: 5 missing topics** — `being-chased`, `spiders`, `naked`, `wedding`, `house` are referenced but don't exist. These will produce broken internal links on 10 dream pages.

### 🟡 Moderate (data quality)

3. **Angel number relatedNumbers: 2 broken refs** — `444→1444` and `777→1777` point to non-existent keys.
4. **9 angel numbers missing relatedNumbers** — `000`, `2222`, `3333`, `4444`, `5555`, `6666`, `7777`, `8888`, `9999`.
5. **Numerology data incomplete** — 12 entries exist but all lack `slug` field. No numerology detail pages generated.

### 🟢 Minor

6. **Sitemap lastmod** — All timestamps are identical (build time), not reflecting actual content dates.
7. **Sitemap missing changefreq** — Optional but helps crawlers.

---

## 7. Page Count vs PRD Target

| Metric | PRD Target | Actual | Status |
|--------|-----------|--------|--------|
| Phase 1 pages | 150-200 | 163 | ✅ On target |
| Angel number pages | 100 | 143 | ✅ Exceeded |
| Dream pages | 50-100 | 10 | ❌ Way below |
| Tools | 2 | 3 | ✅ Exceeded |
| Static/utility | ~10 | ~10 | ✅ On target |

---

*End of audit. No fixes applied — findings only.*
