# Advertorial Template: "Скритата причина" (Mystery/Curiosity) ⭐

**Recommended as PRIMARY template** - Highest engagement + Universal appeal

---

## Template Variables

```
{{PRODUCT_NAME}} = Testograph
{{PROTAGONIST_NAME}} = Иван Петров
{{PROTAGONIST_AGE}} = 32
{{PROTAGONIST_CITY}} = София
{{EXPERT_NAME}} = Д-р Георги Петров
{{EXPERT_TITLE}} = ендокринолог
{{PROBLEM_METRIC}} = bench press stuck на 100 кг
{{TIMELINE}} = 18 месеца
{{MONEY_WASTED}} = 1043 лв
{{RESULT_METRIC}} = bench press от 100кг на 125кг
{{RESULT_TIMELINE}} = 6 месеца
{{PERFIELD_URL}} = https://shop.testograph.eu/products/testograph-starter
```

---

## Headline Formula

**Pattern:** `[Authority Figure] разкрива: Ето защо [PROBLEM] въпреки [EFFORT] (и как да оправиш проблема)`

**Examples:**
- "Български ендокринолог разкрива: Ето защо силата ти е stuck въпреки 4 тренировки седмично (и как да оправиш проблема)"
- "Фитнес треньор разкрива: Защо не растеш въпреки перфектна диета (и как да фикснеш проблема за 30 дни)"
- "Спортен лекар разкрива: Скритата причина защо енергията ти е на нула въпреки 8 часа сън"

---

## Sub-headline Formula

**Pattern:** `[BIG NUMBER] [TARGET AUDIENCE] губят [TIME/MONEY] заради тази една грешка. Ти правиш ли я?`

**Examples:**
- "Хиляди мъже губят години тренировки заради тази една грешка. Ти правиш ли я?"
- "73% от мъжете над 30 губят сила и енергия заради това което никой не им казва"

---

## Story Structure (1200-1500 words total)

### Section 1: Hook (100-150 words)

**Pattern:**
```
{{PROTAGONIST_NAME}}, {{AGE}} години, от {{CITY}} не можеше да си обясни защо.

Въпреки {{EFFORT + TIMELINE}}, {{PROBLEM_METRIC}}.

Опита {{ATTEMPT_1}}. После {{ATTEMPT_2}}. Даже {{ATTEMPT_3}}.

Общо изхарчени: {{MONEY_WASTED}}. Резултат: нула.

"{{EMOTIONAL_QUOTE}}" споделя {{PROTAGONIST_NAME}}.

Докато {{DISCOVERY_TRIGGER}}.

Това което разбра промени всичко.
```

**Copy-paste код:**
```tsx
<ArticleSection>
  <p>
    <strong>{{CITY}}</strong> — {{PROTAGONIST_NAME}}, {{AGE}} години, от {{CITY}} не можеше да си обясни защо.
  </p>

  <p>
    Въпреки {{EFFORT}} в продължение на {{TIMELINE}}, {{PROBLEM_METRIC}}.
    Същите {{X}}. Същите {{Y}}. Нулев прогрес.
  </p>

  <p>
    Опита {{ATTEMPT_1}} за {{PRICE_1}}. После {{ATTEMPT_2}} за {{PRICE_2}}.
    Даже плати на {{ATTEMPT_3}} {{PRICE_3}}.
  </p>

  <p>
    <strong>Общо изхарчени: {{MONEY_WASTED}}. Резултат: нула.</strong>
  </p>

  <p>
    "{{EMOTIONAL_QUOTE}}," споделя {{PROTAGONIST_NAME}}.
  </p>

  <PullQuote
    quote="{{EXPERT_INSIGHT_QUOTE}}"
    attribution="{{EXPERT_NAME}}, {{EXPERT_TITLE}}"
  />
</ArticleSection>
```

---

### Section 2: Problem Deep Dive (300-400 words)

**Pattern:**
```
[Detail на frustration]
- Timeline на опитите
- Емоционален aspect
- Финансов aspect
- Social comparison

[Universal expansion]
"{{PROTAGONIST_NAME}} не е сам. Според [AUTHORITY SOURCE], [STATISTIC]%..."

[Checklist format - reader involvement]
Може би и ти:
✗ {{SYMPTOM_1}}
✗ {{SYMPTOM_2}}
✗ {{SYMPTOM_3}}
✗ {{SYMPTOM_4}}
```

---

### Section 3: Discovery (400-500 words)

**THE KEY SECTION - "AHA MOMENT"**

**Pattern:**
```
[Meeting the expert - случайна среща]

[Expert perspective]
"На първата консултация, {{EXPERT_NAME}} каза нещо което {{PROTAGONIST_NAME}} никога не беше чувал:

'{{THE_REVEAL}}'"

[THE FORMULA VISUAL]
Formulate breakdown:
- Factor 1 (X%)
- Factor 2 (X%)
- Factor 3 (X%)
- Factor 4 (X%)
= Results (100%)

"Ако имаш само [ONE FACTOR],' обяснява {{EXPERT_NAME}}, 'работиш с X%. Останалите X% липсват.'"

[Scientific backing]
"Проучване на [JOURNAL] потвърждава това: [STUDY_RESULT]"

[Light bulb moment]
"За {{PROTAGONIST_NAME}}, всичко suddenly makes sense..."
```

**Copy-paste код:**
```tsx
<ArticleSection>
  <h2>Случайната среща, която промени всичко</h2>

  <p>
    Докато една вечер, {{DISCOVERY_TRIGGER}}, {{PROTAGONIST_NAME}} не се запозна с {{EXPERT_NAME}} —
    {{EXPERT_TITLE}}, специализирал {{EXPERT_FIELD}}.
  </p>

  <p>
    "{{CASUAL_CONVERSATION_QUOTE}}"
  </p>

  <p>
    {{EXPERT_NAME}} обясни нещо шокиращо: <strong>{{SHOCKING_STATISTIC}}</strong>
  </p>

  <HighlightBox
    title="Защо толкова мъже имат този проблем?"
    variant="info"
  >
    <p>
      {{EXPLANATION_OF_ROOT_CAUSE}}
    </p>
  </HighlightBox>
</ArticleSection>

<ArticleSection>
  <h2>"{{THE_REVEAL_HEADLINE}}"</h2>

  <p>
    {{EXPERT_NAME}} нарисува проста схема, която промени перспективата на {{PROTAGONIST_NAME}} завинаги.
  </p>

  <p>
    <strong>100% Formula за {{DESIRED_OUTCOME}}:</strong>
  </p>

  <ul>
    <li><strong>{{PERCENT_1}}%</strong> — {{FACTOR_1}}</li>
    <li><strong>{{PERCENT_2}}%</strong> — {{FACTOR_2}}</li>
    <li><strong>{{PERCENT_3}}%</strong> — {{FACTOR_3}}</li>
    <li><strong>{{PERCENT_4}}%</strong> — {{FACTOR_4}}</li>
  </ul>

  <PullQuote
    quote="{{KEY_INSIGHT_QUOTE}}"
    attribution="{{EXPERT_NAME}}"
  />
</ArticleSection>
```

---

### Section 4: Story Bridge (100-150 words)

**Pattern:**
```
"Разбирам концепцията," каза {{PROTAGONIST_NAME}}. "Но как това работи практически?
Как някой може да адресира всичките 100% от формулата без да {{OBJECTION}}?"

Това което {{EXPERT_NAME}} обясни промени перспективата на {{PROTAGONIST_NAME}} завинаги...
```

**Copy-paste код:**
```tsx
<aside className="my-12 p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border-l-4 border-primary">
  <p className="text-lg text-neutral-800 italic mb-4">
    "Разбирам концепцията," каза {{PROTAGONIST_NAME}}. "Но как това работи практически?
    Как някой може да {{KEY_QUESTION}}?"
  </p>
  <p className="text-base text-neutral-600">
    Това което {{EXPERT_NAME}} обясни промени перспективата на {{PROTAGONIST_NAME}} завинаги...
  </p>
</aside>
```

---

### Section 5: Solution Introduction (300-400 words)

**NATURAL PRODUCT INTRODUCTION - NOT PUSHY**

**Pattern:**
```
[Continuing the story]
"{{EXPERT_NAME}} обясни на {{PROTAGONIST_NAME}} че има два пътя:

Път 1: Събираш частите сам
[List difficulties + costs + time]

Път 2: Пълна система, вече оптимизирана
'Създадох система,' каза {{EXPERT_NAME}}, 'която включва всичките 100%.'

[Natural product introduction]
{{PRODUCT_NAME}} System:
✓ Component 1
✓ Component 2
✓ Component 3
✓ Component 4

Цена: {{PRICE}}
Success rate: {{STAT}}%

[Social proof from story]
"'{{USER_COUNT}} са го използвали до момента,' каза {{EXPERT_NAME}}."

[Decision moment]
"{{PROTAGONIST_NAME}} решава да опита."
```

---

### Section 6: Results Timeline (200-300 words)

**Pattern:**
```
След {{TIMEFRAME_1}}:
{{PROTAGONIST_NAME}} забеляза {{FIRST_RESULT}}.

След {{TIMEFRAME_2}}:
{{SECOND_RESULT}}. "{{QUOTE}}"

След {{TIMEFRAME_3}}:
{{FINAL_RESULT}}
[Measurable data]

[Quote from protagonist]
"{{REFLECTION_QUOTE}}"
```

**Copy-paste код:**
```tsx
<ArticleSection>
  <h2>Резултатите</h2>

  <p>
    {{PROTAGONIST_NAME}} започна да следва системния подход. Не очакваше чудеса след 7 дни.
    Но това което се случи го изненада.
  </p>

  <p>
    <strong>След {{TIMEFRAME_1}}:</strong> {{FIRST_RESULT}}
  </p>

  <p>
    <strong>След {{TIMEFRAME_2}}:</strong> {{SECOND_RESULT}}
  </p>

  <p>
    <strong>След {{TIMEFRAME_3}}:</strong> {{FINAL_RESULT}}
  </p>

  <HighlightBox
    title="Защо системата работи?"
    variant="success"
  >
    <p>
      {{EXPLANATION}}
    </p>
  </HighlightBox>
</ArticleSection>
```

---

### Section 7: Current State (150-200 words)

**Pattern:**
```
Минаха {{TOTAL_TIME}} откакто {{PROTAGONIST_NAME}} започна системата.

{{CURRENT_METRIC}}.

Но както той казва, цифрите не са най-важното.

"{{LIFESTYLE_IMPROVEMENT_QUOTE}}"

{{PROTAGONIST_NAME}} сподели че съжалява само за едно:
"{{REGRET_QUOTE}}"
```

---

### Section 8: Expert Conclusion (150-200 words)

**Journalistic closing**

**Pattern:**
```
Историята на {{PROTAGONIST_NAME}} е една от many.

{{EXPERT_NAME}}: "{{FINAL_EXPERT_WISDOM}}"
```

---

### Section 9: Soft CTA (50-100 words)

**NO PRESSURE - Journalistic tone**

**Pattern:**
```
За тези които искат да научат повече за {{PRODUCT_NAME}} системата...

[Button]
→ Виж как работи {{PRODUCT_NAME}} системата

[Legal disclosure]
_Disclaimer: Тази статия съдържа връзки към {{PRODUCT_NAME}}. Резултатите варират._
```

**Copy-paste код:**
```tsx
<SoftCTA
  headline="Искаш да научиш повече за системата?"
  description="Историята на {{PROTAGONIST_NAME}} е една от многото. Системният подход към {{GOAL}} е relatively new в България, но rapidly gaining recognition."
  ctaText="Виж как работи {{PRODUCT_NAME}} системата"
  link={`{{PERFIELD_URL}}?utm_source=advertorial&utm_medium={{ANGLE}}&utm_campaign=cold-traffic-2025&utm_content=final-cta`}
  variant="default"
/>
```

---

## Psychology Principles

✅ **Curiosity Gap** - "Скритата причина" = must know
✅ **Authority Transfer** - Expert reveals secret
✅ **Problem Agitation** - Reader sees himself in story
✅ **"Aha Moment"** - Formula revelation = light bulb
✅ **Natural Solution** - Product introduced via story, not ad
✅ **Social Proof** - Other users mentioned naturally
✅ **Soft Transition** - No hard sell, just "learn more"

---

## Expected Performance

- **Ad CTR:** 3-5%
- **Advertorial → Product click:** 12-18%
- **Overall conversion:** 6-10%
- **Reading time:** 8-12 minutes
- **Scroll depth target:** 70%+

---

## Target Audience

- Мъже 25-45
- Currently training/trying
- Frustrated with plateaus
- Searching for answers
- Not yet skeptical (open to solutions)

---

## Ad Creative Guidelines

**Headline:** Use curiosity-driven angle
**Image:** Editorial style (doctor, research, NOT product)
**CTA:** "Прочети статията" (NOT "Buy")
**Tone:** Informative, not salesy

---

## Quick Start Checklist

- [ ] Fill all {{VARIABLES}} with your product data
- [ ] Customize protagonist story (make it relatable)
- [ ] Find real study/statistic for credibility
- [ ] Create "formula breakdown" visual
- [ ] Write expert quotes (authoritative tone)
- [ ] Add 2-3 problem symptoms checklist
- [ ] Timeline results (realistic, not exaggerated)
- [ ] Legal disclaimer at end
- [ ] UTM tracking on CTA links

---

**Time to create:** 2-4 hours (with all content ready)
**Reusability:** High - works for any "stuck progress" problem
**A/B test:** Headlines, expert quotes, formula percentages
