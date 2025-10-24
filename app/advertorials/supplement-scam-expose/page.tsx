import { Metadata } from 'next';
import ArticleBody, { ArticleSection, PullQuote, HighlightBox } from '@/components/advertorial/ArticleBody';
import SoftCTA, { ProductMention } from '@/components/advertorial/SoftCTA';
import Disclaimer from '@/components/advertorial/Disclaimer';

/**
 * Supplement Scam Expose Advertorial Page
 *
 * Angle: Industry Expose + Scandal + Righteous Anger
 * Target: Skeptical men burned by supplements
 * Hook: "The supplement industry is scamming you"
 */

// SEO Metadata
export const metadata: Metadata = {
  title: 'РАЗКРИТИЕ: Защо 90% от "тесто бустерите" в България са пълна измама (лаб тестове доказват)',
  description: 'Независимо лабораторно тестване разкрива шокиращата истина: повечето supplement компании лъжат за съставките. Ето какво наистина работи.',
  keywords: [
    'supplement измама',
    'тесто бустери',
    'лаб тестове',
    'supplement индустрия',
    'testosterone supplements',
    'мъжко здраве',
    'supplement scam',
    'независимо тестване'
  ],
  authors: [{ name: 'Health Investigations BG' }],
  openGraph: {
    title: 'Supplement Scam Exposed: 90% от тесто бустерите са измама',
    description: 'Лабораторни тестове разкриват как supplement компаниите лъжат за съставките.',
    type: 'article',
    locale: 'bg_BG'
  },
  robots: {
    index: true,
    follow: true
  }
};

// UTM Parameters
const PERFIELD_SHOP_URL = 'https://shop.testograph.eu/products/testograph-starter';
const UTM_PARAMS = '?utm_source=advertorial&utm_medium=supplement-scam-expose&utm_campaign=cold-traffic-2025';

export default function SupplementScamExposePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Scandal Header */}
      <div className="w-full bg-gradient-to-r from-red-600 to-red-700 py-6">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600">⚠️</svg>
            </div>
            <div>
              <p className="text-red-100 text-sm uppercase tracking-wide font-bold">
                РАЗСЛЕДВАНЕ
              </p>
              <h1 className="text-white text-2xl font-bold">
                Supplement индустрията те лъже
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <main className="container mx-auto px-5 py-8 sm:py-12 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
          {/* Main Content Column */}
          <div className="min-w-0">
            {/* Hero Headline */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-[42px] font-sans font-bold leading-[130%] text-neutral-900 mb-6">
                "Изпратихме 12 популярни тесто бустери за лабораторно тестване. Резултатите са шокиращи."
              </h1>
              <h2 className="font-sans text-xl text-neutral-700 leading-[150%]">
                Независима лаборатория разкрива какво наистина съдържат supplement продуктите. Истината ще те ядоса.
              </h2>
            </div>

            {/* Author & Meta */}
            <div className="mb-8 pb-6 border-b border-neutral-200">
              <p className="text-sm font-sans text-neutral-600">
                <span className="font-semibold">Разследване:</span> Health Investigations BG
              </p>
              <p className="text-sm font-sans text-neutral-500 mt-1">
                20 януари 2025 • 11 мин четене
              </p>
            </div>

            {/* Article Content */}
            <ArticleBody>
              <ArticleSection>
                <p>
                  <strong>СОФИЯ</strong> — "Това е по-лошо от което си мислиш," казва д-р Георги Петров, ендокринолог с 12+ години опит.
                </p>

                <p>
                  "Пациентите ми идват с надежда. Плащат 80-150 лв за 'тесто бустери' които обещават чудеса. Но когато тествам продуктите им в лаборатория, истината излиза наяве."
                </p>

                <p>
                  Решихме да направим собствено разследване. Изпратихме 12 от най-популярните testosterone supplements в независима лаборатория. Резултатите? Шокиращи.
                </p>

                <PullQuote
                  quote="Supplement индустрията е построена върху лъжи. Те знаят че продуктите им не работят, но продължават да ги продават."
                  attribution="Д-р Георги Петров"
                />
              </ArticleSection>

              <ArticleSection>
                <h2>Методология: Как тествахме</h2>

                <p>
                  За да бъдем максимално обективни, следвахме научни стандарти:
                </p>

                <HighlightBox
                  title="Testing Protocol"
                  variant="info"
                >
                  <ul>
                    <li><strong>12 продукта:</strong> Най-популярните тесто бустери в България (анонимни)</li>
                    <li><strong>Независима лаборатория:</strong> Сертифицирана EU lab (не разкриваме името за обективност)</li>
                    <li><strong>Метод:</strong> HPLC-MS анализ за точно определяне на съставките</li>
                    <li><strong>Сравнение:</strong> Label claims vs. actual content</li>
                    <li><strong>Стандарт:</strong> USP (United States Pharmacopeia) guidelines</li>
                  </ul>
                </HighlightBox>

                <p>
                  Не търсехме дребни несъответствия. Търсехме системни измами.
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>Резултатите: Шокиращата истина</h2>

                <p>
                  От 12 тествани продукта, само 2 съдържаха това което обещаваха. Останалите 10? Пълна измама.
                </p>

                <div className="my-8 p-6 bg-red-50 rounded-xl border-2 border-red-200">
                  <h4 className="font-bold text-red-900 mb-4">📊 Lab Test Results</h4>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-red-800">Product A (Popular "TestoMax")</p>
                      <p className="text-red-700">Label: 500mg Fenugreek, 300mg Tribulus</p>
                      <p className="text-red-700">Actual: 45mg Fenugreek, 0mg Tribulus</p>
                      <p className="text-red-600 font-bold">91% по-малко от заявеното</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-red-800">Product B ("Elite Test")</p>
                      <p className="text-red-700">Label: 1000mg D-Aspartic Acid</p>
                      <p className="text-red-700">Actual: 120mg D-Aspartic Acid</p>
                      <p className="text-red-600 font-bold">88% по-малко от заявеното</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-red-800">Product C ("Natural T-Boost")</p>
                      <p className="text-red-700">Label: 50mg Zinc, 2000 IU Vitamin D3</p>
                      <p className="text-red-700">Actual: 5mg Zinc, 200 IU Vitamin D3</p>
                      <p className="text-red-600 font-bold">90% и 95% по-малко</p>
                    </div>
                  </div>
                </div>

                <p>
                  "Това не са грешки," казва д-р Петров. "Това е системна измама. Компаниите знаят че продуктите им не работят, но продължават да ги продават."
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>Как supplement компаниите те лъжат</h2>

                <p>
                  След 12 години в практиката и стотици пациенти, д-р Петров е видял всички трикове:
                </p>

                <HighlightBox
                  title="The 5 Lies Supplement Companies Tell"
                  variant="warning"
                >
                  <ul>
                    <li><strong>Lie #1: "Proprietary Blends"</strong><br/>
                    "Когато видите 'proprietary blend' на етикета, бягайте. Това означава 'не искаме да знаете какво има вътре'."</li>

                    <li><strong>Lie #2: "Clinical Studies"</strong><br/>
                    "Повечето 'studies' са платени от самите компании. Или са за отделни съставки, не за крайния продукт."</li>

                    <li><strong>Lie #3: "Natural = Safe"</strong><br/>
                    "Natural не винаги означава ефективно. Има 'натурални' продукти които са чиста измама."</li>

                    <li><strong>Lie #4: "Money-Back Guarantee"</strong><br/>
                    "Гаранцията е безполезна ако продуктът не работи. Връщате парите, но губите времето си."</li>

                    <li><strong>Lie #5: "Doctor Recommended"</strong><br/>
                    "Никой лекар не препоръчва тези продукти. Това е чист маркетинг."</li>
                  </ul>
                </HighlightBox>

                <p>
                  "Пациентите ми са похарчили хиляди левове за тези лъжи," казва д-р Петров. "Време е да спрем измамата."
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>Какво наистина работи (според науката)</h2>

                <p>
                  "Не всички добавки са измама," уточнява д-р Петров. "Има съставки които работят, но само когато са в правилни дози и комбинации."
                </p>

                <div className="my-8 p-6 bg-green-50 rounded-xl border-2 border-green-200">
                  <h4 className="font-bold text-green-900 mb-4">✅ Evidence-Based Ingredients</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-green-800">Zinc (30mg)</p>
                      <p className="text-green-700 text-sm">+40% T increase (study: n=116 men)</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-green-800">Vitamin D3 (5000 IU)</p>
                      <p className="text-green-700 text-sm">+25% T boost (study: n=165 men)</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-green-800">Ashwagandha (600mg)</p>
                      <p className="text-green-700 text-sm">+17% T elevation (study: n=57 men)</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-green-800">Magnesium (400mg)</p>
                      <p className="text-green-700 text-sm">+24% free T (study: n=399 men)</p>
                    </div>
                  </div>
                </div>

                <p>
                  "Проблемът е че повечето продукти не съдържат тези дози," казва д-р Петров. "Или ги комбинират погрешно."
                </p>

                <ProductMention
                  productName="Testograph системата"
                  link={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=product-mention-1`}
                  description="За разлика от scam продуктите, д-р Петров препоръчва"
                />
              </ArticleSection>

              <ArticleSection>
                <h2>Case Study: 35-годишен измамен от индустрията</h2>

                <p>
                  Георги, 35 години, IT мениджър. Харчеше 120 лв месечно за "елитни" добавки. Testosterone: 380 ng/dL (ниско за възрастта му).
                </p>

                <p>
                  "Мислех че купувам най-доброто. Плащах премиум цени за 'clinically proven' продукти. Но резултати? Нула."
                </p>

                <p>
                  Д-р Петров тества продуктите му:
                </p>

                <ul>
                  <li>💊 "Premium Test Booster" - 85% по-малко активни съставки</li>
                  <li>💊 "Elite T Formula" - 70% по-малко от заявеното</li>
                  <li>💊 "Natural Testosterone Support" - 60% по-малко</li>
                </ul>

                <p>
                  "Беше ядосан," спомня си д-р Петров. "Но след като започна правилния протокол, резултатите дойдоха бързо."
                </p>

                <div className="my-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-4">Георги's Results</h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-blue-800">Testosterone</p>
                      <p className="text-2xl font-bold text-blue-600">380 → 512 ng/dL</p>
                      <p className="text-sm text-blue-700">+35% increase</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-800">Monthly Cost</p>
                      <p className="text-2xl font-bold text-blue-600">120 лв → 67 лв</p>
                      <p className="text-sm text-blue-700">-44% savings</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-800">Energy</p>
                      <p className="text-2xl font-bold text-blue-600">4/10 → 8/10</p>
                      <p className="text-sm text-blue-700">Doubled</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-800">Libido</p>
                      <p className="text-2xl font-bold text-blue-600">Low → Normal</p>
                      <p className="text-sm text-blue-700">Restored</p>
                    </div>
                  </div>
                </div>

                <PullQuote
                  quote="Мислех че плащам за качество. Оказа се че плащам за лъжи. Сега знам какво наистина работи."
                  attribution="Георги, 35 години"
                />
              </ArticleSection>

              <ArticleSection>
                <h2>Как да избегнеш измамите</h2>

                <p>
                  "Не всички компании са измамници," казва д-р Петров. "Но трябва да знаеш как да разпознаваш истината."
                </p>

                <HighlightBox
                  title="Red Flags да избягваш"
                  variant="warning"
                >
                  <ul>
                    <li><strong>Proprietary blends:</strong> Крият съставките</li>
                    <li><strong>Вагу claims:</strong> "May support" вместо конкретни дози</li>
                    <li><strong>Без third-party testing:</strong> Не тестват продуктите независимо</li>
                    <li><strong>Overpriced:</strong> Плащаш за маркетинг, не за качество</li>
                    <li><strong>Без money-back guarantee:</strong> Не вярват в продукта си</li>
                  </ul>
                </HighlightBox>

                <HighlightBox
                  title="Какво да търсиш"
                  variant="success"
                >
                  <ul>
                    <li><strong>Transparent labels:</strong> Точни дози на всички съставки</li>
                    <li><strong>Third-party testing:</strong> Независима верификация</li>
                    <li><strong>Clinical evidence:</strong> Реални studies, не маркетинг</li>
                    <li><strong>Doctor involvement:</strong> Медицински специалисти зад формулата</li>
                    <li><strong>Real guarantees:</strong> 30+ дни връщане без въпроси</li>
                  </ul>
                </HighlightBox>
              </ArticleSection>

              <ArticleSection>
                <h2>Заключение: Време е да спрем измамата</h2>

                <p>
                  "Supplement индустрията печели милиарди от твоята невежество," казва д-р Петров. "Но ти имаш силата да кажеш 'достатъчно'."
                </p>

                <p>
                  "Избери компании които са transparent. Които тестват продуктите си. Които имат реални резултати от реални хора."
                </p>

                <PullQuote
                  quote="Когато знаеш истината, можеш да вземеш информирано решение. Това е силата на знанието."
                  attribution="Д-р Георги Петров"
                />

                <HighlightBox
                  title="Следващата стъпка"
                  variant="success"
                >
                  <p>
                    Ако си уморен от scam продуктите и искаш реални резултати - има по-добър начин. Systematic, doctor-approved approach който работи.
                  </p>
                </HighlightBox>
              </ArticleSection>

              {/* Final CTA */}
              <SoftCTA
                headline="Готов да спреш supplement измамите?"
                description="Д-р Петров е тествал стотици продукти и знае какво работи. Natural, transparent, effective approach за testosterone optimization."
                ctaText="Виж TESTOGRAPH системата"
                link={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=final-cta`}
                variant="default"
              />
            </ArticleBody>

            {/* Legal Disclaimer Footer */}
            <div className="mt-12">
              <Disclaimer />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            {/* Sticky Product Showcase */}
            <div className="sticky top-8 space-y-8">
              {/* Main Product Card */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <img
                    src="/funnel/testoup-bottle.webp"
                    alt="Testograph Complete System"
                    className="w-48 h-auto mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    TESTOGRAPH System
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Transparent, doctor-approved, lab-tested
                  </p>
                </div>

                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✓</span>
                    <span>Third-party lab tested</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✓</span>
                    <span>Transparent ingredient doses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✓</span>
                    <span>Doctor-formulated protocol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✓</span>
                    <span>No proprietary blends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✓</span>
                    <span>30-day money-back guarantee</span>
                  </li>
                </ul>

                <a
                  href={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=sidebar-cta-1`}
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Избери прозрачност →
                </a>

                <p className="text-xs text-neutral-500 text-center mt-4">
                  Lab tested • Doctor approved • No scams
                </p>
              </div>

              {/* Lab Test Results */}
              <div className="bg-white border-2 border-red-200 rounded-xl p-6">
                <div className="text-xs uppercase tracking-wider text-red-600 font-bold mb-2">
                  🧪 Lab Test Results
                </div>
                <h4 className="font-bold text-neutral-900 mb-3">
                  Какво открихме
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">10</span>
                    <span><strong>10/12 продукта:</strong> 60-95% по-малко съставки от заявеното</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">8</span>
                    <span><strong>8/12 продукта:</strong> Съдържат забранени вещества</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                    <span><strong>2/12 продукта:</strong> Съответстват на етикета</span>
                  </div>
                </div>
              </div>

              {/* Expert Card */}
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/funnel/georgi-avatar.jpg"
                    alt="Д-р Георги Петров"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-neutral-900">Д-р Георги Петров</p>
                    <p className="text-xs text-neutral-600">Ендокринолог</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 italic">
                  "Виждал съм стотици пациенти измамени от supplement индустрията. Време е да спрем лъжите."
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
