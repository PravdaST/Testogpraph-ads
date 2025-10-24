# Advertorial Template: "Икономическа логика" (Value/ROI)

**Pre-qualified buyers** - Logic + Value seeking + Fear of wasting money

💰 **Advantage:** Price objection handled upfront, high purchase intent

---

## Template Variables

```
{{PRODUCT_NAME}} = Testograph
{{PRODUCT_PRICE}} = 67-179 лв
{{TRADITIONAL_TOTAL}} = 460 лв (first month), 310 лв (recurring)
{{SAVINGS_3_MONTHS}} = 930 лв - 179 лв = 751 лв savings
{{COMPONENT_1_SEPARATE_PRICE}} = 80 лв
{{COMPONENT_2_SEPARATE_PRICE}} = 200 лв/месец
{{COMPONENT_3_SEPARATE_PRICE}} = 150 лв
{{COMPONENT_4_SEPARATE_PRICE}} = 30 лв/месец
{{ANALYST_NAME}} = Михаил Петров
{{ANALYST_TITLE}} = financial advisor и fitness enthusiast
{{PERFIELD_URL}} = https://shop.testograph.eu/products/testograph-starter
```

---

## Headline Formula

**Pattern:** `Математиката е проста: Защо [LOW PRICE] за [COMPLETE SOLUTION] бият [HIGH PRICE] за [INCOMPLETE PARTS] (разбивка на цените)`

**Examples:**
- "Математиката е проста: Защо 67 лв за система бият 500 лв за отделни части (разбивка на цените)"
- "Cost breakdown: Защо all-in-one system е 4x по-евтин от DIY approach (detailed price analysis)"
- "Financial advisor изчислява: REAL cost на testosterone optimization (ще те изненада)"

---

## Sub-headline Formula

**Pattern:** `[AUTHORITY] breaks down real cost of [TRADITIONAL] vs. [SOLUTION]`

**Examples:**
- "Financial advisor breaks down real cost of traditional approach vs. all-in-one system"
- "Detailed price analysis shows WHERE your money goes (and how to save 75%)"
- "Cost comparison: What you REALLY pay when you buy supplements separately"

---

## Story Structure (1000-1400 words total)

### Section 1: The Question Hook (100-150 words)

**Start with simple question**

**Pattern:**
```
<h2>Колко РЕАЛНО струва да оптимизираш тестостерон?</h2>

Това беше въпросът който {{ANALYST_NAME}}, {{ANALYST_TITLE}}, реши да отговори.

"Виждах толкова реклами за добавки, програми, треньори," казва той.
"Всички обещаваха results. Но никой не говореше за total cost."

{{ANALYST_NAME}} направи нещо което малко хора правят:

Изчисли REAL price на различните подходи.

Резултатите го изненадаха.

И вероятно ще те изненадат и теб.
```

**Copy-paste код:**
```tsx
<ArticleSection>
  <h2>Колко РЕАЛНО струва да оптимизираш тестостерон?</h2>

  <p>
    Това беше въпросът който {{ANALYST_NAME}}, {{ANALYST_TITLE}}, реши да отговори.
  </p>

  <p>
    "Виждах толкова реклами за добавки, програми, треньори," казва той.
    "Всички обещаваха results. Но никой не говореше за total cost."
  </p>

  <p>
    {{ANALYST_NAME}} направи нещо което малко хора правят: Изчисли REAL price на различните подходи.
  </p>

  <p>
    Резултатите го изненадаха. И вероятно ще те изненадат и теб.
  </p>
</ArticleSection>
```

---

### Section 2: Traditional Approach Breakdown (400-500 words)

**DETAILED cost analysis - Show hidden costs**

**Pattern:**
```
<h2>Подход 1: "Правя го сам" (DIY Traditional)</h2>

[Component by component breakdown]

**Testosterone booster supplement:**
Цена: {{PRICE_1}}/месец
Hidden costs:
- Shipping: +{{SHIPPING}}
- Trial and error (не всички работят): +{{TRIAL_ERROR_COST}}
Реална цена: {{REAL_PRICE_1}}/месец

**Онлайн fitness треньор:**
Advertised: {{LOW_PRICE}}/месец
Reality:
- Starter package: {{ACTUAL_STARTER}}
- Custom program: {{CUSTOM_PRICE}}
- Месечна поддръжка: {{MONTHLY_SUPPORT}}
Реална цена: {{REAL_PRICE_2}} first month, {{RECURRING_2}}/месец after

**Nutritionist консултация:**
Initial: {{INITIAL_PRICE}}
Follow-ups: {{FOLLOWUP_PRICE}} × {{NUMBER}}
Meal plan creation: {{MEAL_PLAN_PRICE}}
Реална цена: {{TOTAL_NUTRITION_COST}}

**Tracking apps:**
"Free" versions = limited features
Premium versions: {{APP_1_PRICE}} + {{APP_2_PRICE}} + {{APP_3_PRICE}}
Реална цена: {{TOTAL_APP_COST}}/месец

**Blood testing:**
Initial panel: {{INITIAL_TEST}}
Follow-up (3 months): {{FOLLOWUP_TEST}}
Annual: {{ANNUAL_TEST_COST}}

[THE SHOCK - Total cost table]

**Month 1 Total:**
Setup costs: {{SETUP}}
Recurring costs: {{RECURRING_M1}}
TOTAL: {{MONTH_1_TOTAL}}

**Month 2-12 Average:**
{{MONTHLY_RECURRING}}/месец

**Year 1 Total:**
{{YEAR_1_TOTAL}}

"И това е ако всичко работи perfectly," отбелязва {{ANALYST_NAME}}.
"Ако нещо не работи, add още 200-300 лв за trial and error."
```

**Copy-paste код:**
```tsx
<ArticleSection>
  <h2>Подход 1: "Правя го сам" (Traditional DIY)</h2>

  <HighlightBox variant="info">
    <h4 className="font-semibold mb-4">Detailed Cost Breakdown</h4>

    <div className="space-y-6">
      <div>
        <p className="font-semibold">Testosterone Booster Supplement</p>
        <p>Advertised: {{ADVERTISED_PRICE}}/месец</p>
        <p className="text-sm">+ Shipping: {{SHIPPING}}</p>
        <p className="text-sm">+ Trial/error costs: {{TRIAL_COST}}</p>
        <p className="text-red-600 font-semibold">Real cost: {{REAL_SUPP_COST}}/месец</p>
      </div>

      <div>
        <p className="font-semibold">Online Fitness Треньор</p>
        <p>Advertised: "от {{LOW_PRICE}}/месец"</p>
        <p className="text-sm">Starter package: {{STARTER}}</p>
        <p className="text-sm">Custom program: {{CUSTOM}}</p>
        <p className="text-sm">Monthly support: {{SUPPORT}}/месец</p>
        <p className="text-red-600 font-semibold">Real cost: {{REAL_COACH_COST}} (първи месец), {{RECURRING_COACH}}/месец</p>
      </div>

      <div>
        <p className="font-semibold">Nutritionist</p>
        <p>Initial consultation: {{INITIAL}}</p>
        <p className="text-sm">Follow-ups: {{FOLLOWUP_PRICE}} × {{COUNT}}</p>
        <p className="text-sm">Meal plan: {{MEAL_PLAN}}</p>
        <p className="text-red-600 font-semibold">Real cost: {{TOTAL_NUTRITION}}</p>
      </div>

      <div>
        <p className="font-semibold">Tracking Apps (Premium)</p>
        <p className="text-sm">{{APP_1}}: {{PRICE_1}}/месец</p>
        <p className="text-sm">{{APP_2}}: {{PRICE_2}}/месец</p>
        <p className="text-red-600 font-semibold">Real cost: {{TOTAL_APPS}}/месец</p>
      </div>

      <div className="pt-4 border-t border-neutral-300">
        <p className="text-xl font-bold">MONTH 1 TOTAL: <span className="text-red-600">{{MONTH_1_TOTAL}} лв</span></p>
        <p className="text-lg font-semibold">Месец 2-12: <span className="text-red-600">{{MONTHLY_AVG}} лв/месец</span></p>
        <p className="text-2xl font-bold mt-4">YEAR 1: <span className="text-red-600">{{YEAR_1_TOTAL}} лв</span></p>
      </div>
    </div>
  </HighlightBox>

  <PullQuote
    quote="И това е ако всичко работи perfectly. Ако трябва да пробваш 2-3 различни добавки докато намериш working one, add още 200-300 лв."
    attribution="{{ANALYST_NAME}}"
  />
</ArticleSection>
```

---

### Section 3: The Hidden Costs (200-300 words)

**Point out what people DON'T count**

**Pattern:**
```
<h2>Скритите цени (които никой не брои)</h2>

Но има още costs които хората не включват в calculation:

**Time Investment:**
- Research: {{RESEARCH_HOURS}} часа
- Coordination (trainer, nutritionist, testing): {{COORD_HOURS}} часа
- Trial and error adjustments: {{ADJUST_HOURS}} часа

{{ANALYST_NAME}}: "Ако ценим времето си на {{HOURLY_RATE}} лв/час..."

Time cost: {{TIME_COST}} лв

**Opportunity Cost:**
- "Wrong" supplements не работят = lost time
- Generic programs не са optimized for YOU
- Incomplete system = partial results

**Mental Energy:**
- Decision fatigue (choosing from 100+ options)
- Coordination stress (managing multiple providers)
- Tracking complexity (5 different apps/spreadsheets)

"Most people don't realize how draining it is," казва {{ANALYST_NAME}}.
"The mental overhead alone makes people quit след 2-3 месеца."
```

---

### Section 4: The System Approach (300-400 words)

**Introduce all-in-one solution with CLEAR price comparison**

**Pattern:**
```
<h2>Подход 2: All-in-One System</h2>

След като {{ANALYST_NAME}} анализира traditional approach, той изследва system-based алтернативите.

"Интересувах се: Може ли система която включва ВСИЧКО наистина да бъде по-евтина?"

{{PRODUCT_NAME}} System:

**Какво включва:**
✓ {{COMPONENT_1}} (equal to {{SEPARATE_PRICE_1}})
✓ {{COMPONENT_2}} (equal to {{SEPARATE_PRICE_2}})
✓ {{COMPONENT_3}} (equal to {{SEPARATE_PRICE_3}})
✓ {{COMPONENT_4}} (equal to {{SEPARATE_PRICE_4}})
✓ {{COMPONENT_5}} (equal to {{SEPARATE_PRICE_5}})

**Traditional total value:** {{TOTAL_VALUE}} лв/месец

**System price:** {{SYSTEM_PRICE}} лв (one-time? or per month?)

[The math]
{{ANALYST_NAME}} направи comparison:

**3-Month Total:**
Traditional approach: {{TRAD_3_MONTH}}
System approach: {{SYSTEM_3_MONTH}}

Savings: {{SAVINGS_3_MONTH}}

**6-Month Total:**
Traditional approach: {{TRAD_6_MONTH}}
System approach: {{SYSTEM_6_MONTH}}

Savings: {{SAVINGS_6_MONTH}}

"Не вярвах на математиката първо," признава {{ANALYST_NAME}}.
"Как е възможно?"

[Explanation]
Отговорът е в business model:

Traditional: Everyone takes margin (supplement company, trainer, nutritionist, app developers)

System: Integrated model = no middlemen

Plus: Bulk производство = lower per-unit cost
```

**Copy-paste код:**
```tsx
<ArticleSection>
  <h2>Подход 2: All-in-One System</h2>

  <p>
    След анализ на traditional approach, {{ANALYST_NAME}} изследва system-based алтернативите.
  </p>

  <HighlightBox
    title="{{PRODUCT_NAME}} System - Какво включва"
    variant="success"
  >
    <ul className="mb-4">
      <li>✓ {{COMPONENT_1}} <span className="text-neutral-600">(отделно: {{PRICE_1}})</span></li>
      <li>✓ {{COMPONENT_2}} <span className="text-neutral-600">(отделно: {{PRICE_2}})</span></li>
      <li>✓ {{COMPONENT_3}} <span className="text-neutral-600">(отделно: {{PRICE_3}})</span></li>
      <li>✓ {{COMPONENT_4}} <span className="text-neutral-600">(отделно: {{PRICE_4}})</span></li>
      <li>✓ {{COMPONENT_5}} <span className="text-neutral-600">(отделно: {{PRICE_5}})</span></li>
    </ul>

    <p className="text-sm text-neutral-600 mb-2">Traditional total value: {{TOTAL_VALUE}}</p>
    <p className="text-2xl font-bold text-green-600">System price: {{SYSTEM_PRICE}}</p>
  </HighlightBox>

  <div className="my-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
    <h4 className="font-semibold text-lg mb-4">Cost Comparison (3 месеца)</h4>

    <div className="space-y-2">
      <div className="flex justify-between">
        <span>Traditional approach:</span>
        <span className="font-semibold text-red-600">{{TRAD_3M}} лв</span>
      </div>
      <div className="flex justify-between">
        <span>System approach:</span>
        <span className="font-semibold text-green-600">{{SYSTEM_3M}} лв</span>
      </div>
      <div className="pt-2 border-t border-neutral-300 flex justify-between">
        <span className="font-bold">Savings:</span>
        <span className="font-bold text-green-600">{{SAVINGS}} лв ({{PERCENT}}%)</span>
      </div>
    </div>
  </div>

  <PullQuote
    quote="Не вярвах на математиката първо. Как integrated system може да бъде ТАК по-евтин? Отговорът е в business model — no middlemen, bulk production, single margin."
    attribution="{{ANALYST_NAME}}"
  />
</ArticleSection>
```

---

### Section 5: ROI Analysis (200-300 words)

**Show value beyond just money**

**Pattern:**
```
<h2>ROI Beyond Money</h2>

{{ANALYST_NAME}} отбеляза че price comparison е само part от equation.

**Time ROI:**
Traditional: {{TRAD_TIME_HOURS}} часа setup + coordination
System: {{SYSTEM_TIME_HOURS}} часа (all-in-one)

Time saved: {{TIME_SAVED}} часа

**Simplicity ROI:**
Traditional: Managing {{NUMBER}} separate providers/apps/accounts
System: Single platform

Mental overhead: MASSIVELY reduced

**Results ROI:**
Traditional: Parts може да не работят together optimally
System: Designed to work integrated

Success rate:
Traditional DIY: ~30%
System approach: ~85%

"Ако DIY approach не работи," казва {{ANALYST_NAME}}, "изхарчил си {{MONEY}} + {{TIME}} часа + {{MONTHS}} месеца за нула results.

Ако system approach работи (85% chance), получаваш резултати за {{SUCCESS_PRICE}}."

Expected value calculation:
Traditional: {{MONEY}} × 30% = {{EV_TRAD}}
System: {{SYSTEM_PRICE}} × 85% = {{EV_SYSTEM}}

"Математиката е clear."
```

---

### Section 6: Who Is This For? (150-200 words)

**Qualification based on value priorities**

**Pattern:**
```
<h2>За кого е system approach?</h2>

System approach е optimal за:

✅ Value-seeking mindset (smart buyer)
✅ Busy professionals (time = money)
✅ Results-oriented (не искаш да губиш време)
✅ Prefer simplicity over complexity
✅ Tired от trial-and-error

Може ДА НЕ Е за теб ако:

❌ Обичаш DIY challenges
❌ Имаш unlimited time за research
❌ Искаш да customize всичко сам
❌ Предпочиташ да плащаш повече за "premium" separate services

"Няма right или wrong choice," казва {{ANALYST_NAME}}.
"Има choice който matches твоите priorities."
```

---

### Section 7: Soft CTA (100-150 words)

**Value-focused call to action**

**Pattern:**
```
За тези които value smart spending и integrated solutions...

{{PRODUCT_NAME}} system предлага full breakdown на какво получаваш за цената.

[Button]
→ Виж пълна price breakdown и какво включва системата

[Value emphasis]
30-дневна гаранция за връщане на пари.
Ако не видиш value, връщаш продукта.

Risk = zero.
Upside = {{POTENTIAL_SAVINGS}} savings + results.

"{{FINAL_QUOTE}}"
```

**Copy-paste код:**
```tsx
<SoftCTA
  headline="Виж пълния cost breakdown"
  description="{{PRODUCT_NAME}} system предлага transparency: точно какво получаваш, колко струва всеки component, и защо integrated approach saves {{SAVINGS_PERCENT}}%."
  ctaText="Виж full price breakdown"
  link={`{{PERFIELD_URL}}?utm_source=advertorial&utm_medium=value&utm_campaign=cold-traffic-2025&utm_content=final-cta`}
  variant="default"
/>
```

---

## Psychology Principles

✅ **Price Shock** - "Traditional costs THIS much?!"
✅ **Hidden Costs Reveal** - Show what people don't count
✅ **Logical Analysis** - Math doesn't lie
✅ **Value Recognition** - "This makes sense"
✅ **Risk Reduction** - Money-back guarantee
✅ **Smart Buyer Appeal** - "I'm making intelligent choice"
✅ **Time Value** - Not just money, but time/effort saved

---

## Expected Performance

- **Ad CTR:** 1-3% (lower volume, analytical audience)
- **Advertorial → Product click:** 8-12%
- **Overall conversion:** 4-6%
- **Reading time:** 8-10 minutes
- **Purchase intent:** HIGH (price objection pre-handled)

---

## Target Audience

- Мъже 28-45
- Budget-conscious (но не cheap)
- Have tried expensive options before
- Want maximum value
- Analytical thinkers
- Appreciate transparency

---

## Ad Creative Guidelines

**Headline:** Lead with price/value proposition
**Image:** Money, calculator, cost comparison visual
**CTA:** "See the breakdown" or "Compare costs"
**Tone:** Analytical, transparent, logical

---

## Quick Start Checklist

- [ ] Research real market prices for components
- [ ] Calculate traditional total cost (accurate)
- [ ] List all hidden costs (time, coordination, trial/error)
- [ ] Show system price comparison clearly
- [ ] Create visual cost breakdown table
- [ ] Calculate savings (3 month, 6 month, 1 year)
- [ ] Explain WHY system is cheaper (business model)
- [ ] Add ROI beyond money (time, simplicity)
- [ ] Show expected value calculation
- [ ] Money-back guarantee emphasis

---

## When to Use This Template

✅ **Use when:**
- Competing with expensive alternatives
- Target audience is value-conscious
- Can show clear cost savings
- Product IS comprehensive system
- Price transparency is advantage

❌ **Don't use when:**
- Premium positioning strategy
- Audience doesn't care about price
- Can't show clear cost comparison
- Product is single-component

---

**Time to create:** 3-4 hours (requires price research)
**Reusability:** Medium (prices change, needs updates)
**A/B test:** Price points shown, savings emphasis, ROI calculations
**Pre-qualifies buyers:** YES (price-conscious, value-seekers)
