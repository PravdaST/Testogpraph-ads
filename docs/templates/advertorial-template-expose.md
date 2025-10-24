# Advertorial Template: "Изложение на индустрията" (Expose/Scandal)

**High engagement angle** - Scandal + Righteous anger + "Us vs. Them"

⚠️ **Warning:** Може да звучи TOO aggressive. Use carefully to protect brand image.

---

## Template Variables

```
{{PRODUCT_NAME}} = Testograph
{{INDUSTRY}} = supplement industry
{{TESTED_COUNT}} = 12 популярни добавки
{{LAB_NAME}} = Bulgarian Independent Lab Testing
{{SHOCKING_STAT}} = 30-50% от declared ingredients
{{INVESTIGATOR_NAME}} = Д-р Мария Иванова
{{INVESTIGATOR_TITLE}} = независим биохимик
{{SCAM_EXAMPLE_1}} = "Testosterone Booster XYZ"
{{SCAM_EXAMPLE_2}} = "Male Performance Pro"
{{HONEST_ALTERNATIVE}} = Testograph
{{PERFIELD_URL}} = https://shop.testograph.eu/products/testograph-starter
```

---

## Headline Formula

**Pattern:** `Разследване: Защо [PERCENTAGE]% от [CATEGORY] в [LOCATION] са пълна измама (и какво наистина работи според [PROOF])`

**Examples:**
- "Разследване: Защо 90% от 'тесто бустерите' в България са пълна измама (и какво наистина работи според независимо тестване)"
- "Лабораторни тестове разкриват: 8 от 10 популярни добавки НЕ съдържат това което обещават"
- "Shocking investigation: Supplement industry's dirty secret exposed by independent lab"

---

## Sub-headline Formula

**Pattern:** `[ACTION] [NUMBER] [PRODUCTS]. [SHOCKING RESULT]. [CALL TO AWARENESS]`

**Examples:**
- "Хващаме supplement brands on the lie. Lab tests reveal shocking truth."
- "Изпратихме 12 бестселъра за независимо тестване. Резултатите ни шокираха."
- "Independent lab tests expose what's REALLY inside your testosterone boosters"

---

## Story Structure (1200-1800 words total)

### Section 1: Investigation Hook (150-200 words)

**Pattern:**
```
"Изпратихме {{TESTED_COUNT}} от най-продаваните {{PRODUCT_CATEGORY}} в {{LAB_NAME}} за независимо тестване.

Това което открихме ни шокира.

{{SHOCKING_STAT}}.

Някои продукти съдържаха {{FILLER_INGREDIENT}} вместо {{PROMISED_INGREDIENT}}.

Други имаха {{PERCENTAGE}}% от декларираното количество.

Един даже съдържаше {{DANGEROUS_FINDING}}.

'Това е systematic проблем в индустрията,' казва {{INVESTIGATOR_NAME}}, {{INVESTIGATOR_TITLE}}.
'Не е изолиран случай. Това е бизнес модел.'"
```

**Copy-paste код:**
```tsx
<ArticleSection>
  <p>
    Изпратихме {{TESTED_COUNT}} от най-продаваните {{PRODUCT_CATEGORY}} за независимо лабораторно тестване в {{LAB_NAME}}.
  </p>

  <p>
    Това което открихме ни шокира.
  </p>

  <p>
    <strong>{{SHOCKING_STAT}} от обещаните активни съставки.</strong>
  </p>

  <p>
    Някои продукти съдържаха {{FILLER}} вместо {{ACTIVE_INGREDIENT}}.
    Други имаха само {{LOW_PERCENTAGE}}% от декларираното количество.
    Един даже съдържаше {{DANGEROUS_FINDING}}.
  </p>

  <PullQuote
    quote="Това е systematic проблем в индустрията. Не е изолиран случай. Това е бизнес модел."
    attribution="{{INVESTIGATOR_NAME}}, {{INVESTIGATOR_TITLE}}"
  />
</ArticleSection>
```

---

### Section 2: The Scandal Details (400-500 words)

**SHOW THE RECEIPTS - Be specific but legally safe**

**Pattern:**
```
[Test results table/visual]

Product A: "{{BRAND_HINT}}" (не наричаме директно)
Обещава: {{PROMISE}}
Реалност: {{REALITY}}
Цена: {{PRICE}}
Conclusion: {{VERDICT}}

[Repeat for 3-4 products]

[Most shocking case]
Най-шокиращият случай беше продукт който обещаваше {{BIG_PROMISE}}.

Лабораторните тестове показаха: {{SHOCKING_REALITY}}.

"{{EXPERT_REACTION_QUOTE}}"

[Industry practice expose]
Как правят това?

1. {{SCAM_TACTIC_1}}
2. {{SCAM_TACTIC_2}}
3. {{SCAM_TACTIC_3}}
4. {{SCAM_TACTIC_4}}

"Типичния consumer не може да провери," обяснява {{INVESTIGATOR_NAME}}.
"Нямат достъп до лабораторно оборудване. Просто вярват на етикета."
```

**Copy-paste код:**
```tsx
<ArticleSection>
  <h2>Резултатите от тестването</h2>

  <HighlightBox variant="info">
    <h4 className="font-semibold mb-4">Тествани продукти ({{TESTED_COUNT}} total)</h4>

    <div className="space-y-4">
      <div>
        <p className="font-semibold">Продукт A: "{{BRAND_HINT_1}}"</p>
        <p>Обещава: {{PROMISE_1}}</p>
        <p>Реалност: <strong className="text-red-600">{{REALITY_1}}</strong></p>
        <p className="text-sm text-neutral-600">Цена: {{PRICE_1}}</p>
      </div>

      <div>
        <p className="font-semibold">Продукт B: "{{BRAND_HINT_2}}"</p>
        <p>Обещава: {{PROMISE_2}}</p>
        <p>Реалност: <strong className="text-red-600">{{REALITY_2}}</strong></p>
        <p className="text-sm text-neutral-600">Цена: {{PRICE_2}}</p>
      </div>

      {/* Add 2-3 more examples */}
    </div>
  </HighlightBox>

  <p>
    Най-шокиращият случай беше продукт който обещаваше {{BIG_PROMISE}}.
    Лабораторните тестове показаха: <strong>{{SHOCKING_REALITY}}</strong>.
  </p>

  <PullQuote
    quote="{{EXPERT_REACTION_QUOTE}}"
    attribution="{{INVESTIGATOR_NAME}}"
  />
</ArticleSection>
```

---

### Section 3: Industry Secrets Exposed (300-400 words)

**"HOW THEY SCAM YOU" - Educate the reader**

**Pattern:**
```
<h2>Как supplement индустрията те мами</h2>

[Tactic 1: Proprietary Blends]
{{EXPLANATION}}
Защо правят това: {{REASON}}

[Tactic 2: Underdosing]
{{EXPLANATION}}
Example: {{SPECIFIC_CASE}}

[Tactic 3: Cheap Substitutes]
{{EXPLANATION}}
{{COMPARISON_TABLE}}

[Tactic 4: Marketing vs. Reality]
{{EXPLANATION}}

[The business model]
"Те разчитат на това че няма да забележиш," казва {{INVESTIGATOR_NAME}}.
"{{BUSINESS_MODEL_EXPLANATION}}"
```

---

### Section 4: Why This Matters to YOU (200-300 words)

**Make it personal - reader involvement**

**Pattern:**
```
Ако си купувал supplement в последните {{TIMEFRAME}}...

Вероятно си в една от тези ситуации:

❌ Scenario 1: {{WASTED_MONEY_STORY}}
❌ Scenario 2: {{WASTED_TIME_STORY}}
❌ Scenario 3: {{HEALTH_RISK_STORY}}

Това не е твоя вина.

Системата е designed да те заблуди.

Но има алтернатива...
```

**Copy-paste код:**
```tsx
<ArticleSection>
  <h2>Защо това те засяга директно</h2>

  <p>
    Ако си купувал testosterone booster или performance supplement в последните {{TIMEFRAME}}...
  </p>

  <p>
    Вероятно си в една от тези ситуации:
  </p>

  <div className="my-6 space-y-4">
    <HighlightBox variant="info">
      <p className="mb-0">
        <strong>Scenario 1:</strong> {{WASTED_MONEY_DESCRIPTION}}
      </p>
    </HighlightBox>

    <HighlightBox variant="info">
      <p className="mb-0">
        <strong>Scenario 2:</strong> {{WASTED_TIME_DESCRIPTION}}
      </p>
    </HighlightBox>

    <HighlightBox variant="info">
      <p className="mb-0">
        <strong>Scenario 3:</strong> {{POTENTIAL_HARM_DESCRIPTION}}
      </p>
    </HighlightBox>
  </div>

  <p>
    Това не е твоя вина. Системата е designed да те заблуди.
  </p>

  <p>
    Но има алтернатива...
  </p>
</ArticleSection>
```

---

### Section 5: The Honest Alternative (300-400 words)

**Introduce product as CONTRAST to scam industry**

**Pattern:**
```
След тази investigation, питахме {{INVESTIGATOR_NAME}}:

"Има ли НЯКОЙ продукт на пазара който е честен?"

Тя се замисли.

"Има един който се откроява. {{PRODUCT_NAME}}."

Защо е различен?

✓ Point 1: {{TRANSPARENCY_FEATURE}}
✓ Point 2: {{THIRD_PARTY_TESTING}}
✓ Point 3: {{FULL_DISCLOSURE}}
✓ Point 4: {{DOSAGE_CLARITY}}

"{{EXPERT_ENDORSEMENT_QUOTE}}"

[Natural transition]
Решихме да проверим. Изпратихме {{PRODUCT_NAME}} за същото лабораторно тестване.

Резултат: {{POSITIVE_TEST_RESULT}}

Това което виждаш на етикета = това което получаваш.

"{{INVESTIGATOR_QUOTE_ON_PRODUCT}}"
```

**Copy-paste код:**
```tsx
<ArticleSection>
  <h2>Съществува ли честна алтернатива?</h2>

  <p>
    След investigation-а, попитахме {{INVESTIGATOR_NAME}}:
    "Има ли НЯКОЙ продукт на пазара който е честен?"
  </p>

  <p>
    Тя се замисли. "Има един който се откроява. {{PRODUCT_NAME}}."
  </p>

  <p>
    <strong>Защо е различен?</strong>
  </p>

  <ul>
    <li><strong>Пълна transparency:</strong> {{FEATURE_1}}</li>
    <li><strong>Third-party testing:</strong> {{FEATURE_2}}</li>
    <li><strong>No proprietary blends:</strong> {{FEATURE_3}}</li>
    <li><strong>Clinical dosages:</strong> {{FEATURE_4}}</li>
  </ul>

  <PullQuote
    quote="{{EXPERT_ENDORSEMENT_QUOTE}}"
    attribution="{{INVESTIGATOR_NAME}}"
  />

  <HighlightBox
    title="Нашият тест на {{PRODUCT_NAME}}"
    variant="success"
  >
    <p>
      Решихме да проверим. Изпратихме {{PRODUCT_NAME}} за същото независимо тестване.
    </p>
    <p className="mb-0">
      <strong>Резултат:</strong> {{POSITIVE_TEST_RESULT}}
    </p>
  </HighlightBox>
</ArticleSection>
```

---

### Section 6: Social Proof (150-200 words)

**Real users who switched from scam products**

**Pattern:**
```
След като публикувахме първоначалните резултати, получихме {{NUMBER}} emails от читатели.

Много споделиха че преминаха към {{PRODUCT_NAME}} след scandal-а.

"{{TESTIMONIAL_1}}" - {{NAME_1}}

"{{TESTIMONIAL_2}}" - {{NAME_2}}

{{USAGE_STAT}} switched в последните {{TIMEFRAME}}.
```

---

### Section 7: Call to Action (100-150 words)

**Righteous anger → Action**

**Pattern:**
```
Индустрията няма да се промени сама.

Единственият начин да спрем scam-а е да гласуваме с портфейлите си.

Ако искаш transparency, ако искаш honesty, ако искаш продукт който РАБОТИ...

[Button]
→ Виж {{PRODUCT_NAME}} и full lab reports

[Anger-to-empowerment]
Достатъчно беше. Време е за честност.
```

**Copy-paste код:**
```tsx
<SoftCTA
  headline="Време е за честен избор"
  description="Индустрията няма да се промени сама. Единственият начин да спрем scam-а е да избираме transparency и honesty."
  ctaText="Виж {{PRODUCT_NAME}} и full lab reports"
  link={`{{PERFIELD_URL}}?utm_source=advertorial&utm_medium=expose&utm_campaign=cold-traffic-2025&utm_content=final-cta`}
  variant="default"
/>
```

---

## Psychology Principles

✅ **Scandal/Shock Value** - Investigation hooks attention
✅ **Righteous Anger** - "They're scamming us!"
✅ **Us vs. Them** - Industry (bad) vs. Honest alternative (good)
✅ **Validation** - "It's not your fault it didn't work"
✅ **Education** - How scams work = feeling empowered
✅ **Contrast** - Scam vs. Honest = makes choice obvious
✅ **Social Proof** - Others who switched

---

## Expected Performance

- **Ad CTR:** 4-6% (scandal headlines = high CTR)
- **Advertorial → Product click:** 10-15%
- **Overall conversion:** 5-8%
- **Reading time:** 10-15 minutes (longer due to investigation details)
- **Scroll depth target:** 75%+

---

## Target Audience

- Мъже 30-50
- **Skeptical** - burned by supplements before
- Want transparency and proof
- Value-conscious (tired of wasting money)
- Appreciate investigative journalism

---

## Ad Creative Guidelines

**Headline:** Use scandal/investigation angle
**Image:** Lab testing, documents, investigative style
**CTA:** "Прочети разследването" or "See the lab results"
**Tone:** Serious, journalistic, righteous

---

## Legal Warnings ⚠️

- **DO NOT name specific brands directly** - Use hints ("Product A", "Popular brand X")
- **Have actual lab tests** - Claims must be verifiable
- **Avoid defamation** - Stick to facts, not opinions
- **Disclaimer required** - "Independent investigation, results verified by [LAB]"
- **Be careful with "scam" language** - Use "misleading", "underdosed", "inaccurate labeling"

---

## Quick Start Checklist

- [ ] **Get real lab tests** (critical for credibility)
- [ ] Create test results visual/table
- [ ] Write brand hints (legally safe)
- [ ] Document scam tactics with examples
- [ ] Find expert quotes (investigator/scientist)
- [ ] Show YOUR product test results
- [ ] Add transparency features comparison
- [ ] Legal review (defamation risk)
- [ ] Strong disclaimer at end

---

## When to Use This Template

✅ **Use when:**
- You have actual test data
- Industry has known problems
- Audience is skeptical
- Your product IS transparent
- You can back up claims

❌ **Don't use when:**
- No proof/data available
- Risk of legal issues
- Brand wants to stay neutral
- Audience prefers positive messaging

---

**Time to create:** 4-6 hours (requires research + legal review)
**Reusability:** Medium (requires industry-specific investigation)
**A/B test:** Scandal intensity, number of examples, expert quotes
**Risk level:** HIGH - Must have proof and legal clearance
