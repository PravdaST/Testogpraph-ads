import { Metadata } from 'next';
import ArticleBody, { ArticleSection, PullQuote, HighlightBox } from '@/components/advertorial/ArticleBody';
import SoftCTA, { ProductMention } from '@/components/advertorial/SoftCTA';
import Disclaimer from '@/components/advertorial/Disclaimer';

/**
 * Age Reversal Protocol Advertorial Page
 *
 * Angle: Hope + "It's not too late" + Vanity
 * Target: Men 40-55 feeling "old"
 * Hook: Looking and feeling years younger naturally
 */

// SEO Metadata
export const metadata: Metadata = {
  title: '47-годишен изглежда на 38. Секретът не е в gene therapy | Men\'s Health BG',
  description: 'Петко, 47, беше чувствал се "стар" на 42. Сега изглежда и се чувства на 10 години по-млад. Ето как biological age reversal е възможен.',
  keywords: [
    'anti-aging',
    'biological age',
    'age reversal',
    'testosterone optimization',
    'мъжко здраве',
    'младост',
    'енергия',
    'виталност'
  ],
  authors: [{ name: 'Редакция Men\'s Health BG' }],
  openGraph: {
    title: '47 изглежда на 38: Biological Age Reversal без gene therapy',
    description: 'Историята на Петко - от feeling old на 42 до looking young на 47.',
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
const UTM_PARAMS = '?utm_source=advertorial&utm_medium=age-reversal&utm_campaign=cold-traffic-2025';

export default function AgeReversalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Split Image */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {/* Before/After Split */}
        <div className="grid grid-cols-2 h-full">
          {/* Before */}
          <div className="relative bg-neutral-800">
            <img src="/funnel/martin-before.jpg" className="w-full h-full object-cover opacity-90" />
            <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
              DAY 0
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-3xl font-bold mb-2">
                42 години
              </p>
              <div className="grid grid-cols-2 gap-4 text-white text-sm">
                <div>
                  <span className="text-neutral-300">Тегло:</span>
                  <span className="font-bold ml-2">92 кг</span>
                </div>
                <div>
                  <span className="text-neutral-300">Body Fat:</span>
                  <span className="font-bold ml-2">26%</span>
                </div>
                <div>
                  <span className="text-neutral-300">Енергия:</span>
                  <span className="font-bold ml-2">3/10</span>
                </div>
                <div>
                  <span className="text-neutral-300">Testosterone:</span>
                  <span className="font-bold ml-2">298 ng/dL</span>
                </div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="relative bg-green-800">
            <img src="/funnel/martin-after.jpg" className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold">
              DAY 90
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-3xl font-bold mb-2">
                Същият човек
              </p>
              <div className="grid grid-cols-2 gap-4 text-white text-sm">
                <div>
                  <span className="text-green-200">Тегло:</span>
                  <span className="font-bold ml-2 text-green-400">83 кг (-9)</span>
                </div>
                <div>
                  <span className="text-green-200">Body Fat:</span>
                  <span className="font-bold ml-2 text-green-400">18% (-8)</span>
                </div>
                <div>
                  <span className="text-green-200">Енергия:</span>
                  <span className="font-bold ml-2 text-green-400">9/10 (+6)</span>
                </div>
                <div>
                  <span className="text-green-200">Testosterone:</span>
                  <span className="font-bold ml-2 text-green-400">487 ng/dL (+63%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Divider with Arrow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-2xl">
            <svg className="w-10 h-10 text-green-600">→</svg>
          </div>
        </div>
      </div>

      {/* Title Overlay */}
      <div className="bg-gradient-to-b from-transparent via-black/50 to-black/80 absolute bottom-0 left-0 right-0 py-12" style={{top: '400px', position: 'absolute'}}>
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            90 дни. Една трансформация.
          </h1>
          <p className="text-xl text-white/90">
            Ето как Петко обърна биологичната си възраст
          </p>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="sticky top-0 z-50 bg-white border-b-2 border-neutral-200 shadow-md">
        <div className="container mx-auto px-5 py-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">0</span>
              </div>
              <p className="text-xs text-neutral-600">Начало</p>
            </div>
            <div className="flex-1 h-1 bg-neutral-200 mx-4">
              <div className="h-full bg-gradient-to-r from-red-500 to-green-500" style={{width: '100%'}}></div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">30</span>
              </div>
              <p className="text-xs text-neutral-600">1 месец</p>
            </div>
            <div className="flex-1 h-1 bg-neutral-200 mx-4"></div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">60</span>
              </div>
              <p className="text-xs text-neutral-600">2 месеца</p>
            </div>
            <div className="flex-1 h-1 bg-neutral-200 mx-4"></div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">90</span>
              </div>
              <p className="text-xs text-neutral-600">3 месеца</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <main className="container mx-auto px-5 py-8 sm:py-12 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
          {/* Main Content Column */}
          <div className="min-w-0">
            {/* Author & Meta */}
            <div className="mb-8 pb-6 border-b border-neutral-200">
              <p className="text-sm font-sans text-neutral-600">
                <span className="font-semibold">Автор:</span> Редакция Men's Health BG
              </p>
              <p className="text-sm font-sans text-neutral-500 mt-1">
                16 януари 2025 • 9 мин четене
              </p>
            </div>

            {/* Article Content */}
            <ArticleBody>
              <ArticleSection>
                <p>
                  <strong>СОФИЯ</strong> — На 42 години, Петко Николов се чувстваше като на 60.
                </p>

                <p>
                  Събуждаше се изтощен. Стигаше офиса с чувство на тревога. В 14:00 енергията му рухваше толкова силно, че имаше нужда от 3-ти espresso само за да свърши работния ден.
                </p>

                <p>
                  "Огледалото беше безмилостно честно," споделя Петко. "Виждах мъж на 55-60 години. Не човекът на 42 който бях."
                </p>

                <p>
                  Коремна мазнина която не си отиваше. Торбички под очите. Посивели коси. Ниска енергия. Нулево либидо.
                </p>

                <p>
                  "Мислех - това е стареене. Това е животът сега."
                </p>

                <PullQuote
                  quote="Има разлика между chronological age (възрастта в паспорта) и biological age (възрастта на тялото). Първото не можеш да контролираш. Второто можеш."
                  attribution="Д-р Георги Петров, ендокринолог"
                />
              </ArticleSection>

              <ArticleSection>
                <h2>Моментът когато всичко се промени</h2>

                <p>
                  На 45-ия си рожден ден, племенникът на Петко - 23-годишен фитнес enthusiast - го покани да отидат заедно на gym.
                </p>

                <p>
                  "Отказах. Усещането че 23-годишно момче ще ме види слаб и жалък беше непоносимо."
                </p>

                <p>
                  Но племенникът не се отказа. Каза нещо което Петко никога не е забравил:
                </p>

                <p className="italic text-lg text-neutral-700 ml-4 pl-4 border-l-4 border-neutral-300">
                  "Чичо, баща ми е на 52 и изглежда на 40. Ти си на 45 и изглеждаш на 55. Разликата НЕ е генетична. Разликата е в хормоните."
                </p>

                <p>
                  Това беше тревожен сигнал.
                </p>

                <p>
                  Петко направи кръвни изследвания. Резултатът беше шокиращ:
                </p>

                <ul>
                  <li>Testosterone: 298 ng/dL (критично ниско за 45-годишен)</li>
                  <li>Vitamin D3: 18 ng/mL (дефицит)</li>
                  <li>Cortisol: Elevated (chronic stress marker)</li>
                  <li>Insulin sensitivity: Suboptimal</li>
                </ul>

                <p>
                  "Лекарят каза: 'Нормално за възрастта.' Но племенникът ми свърза с ендокринолог който каза обратното."
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>Biological Age vs. Chronological Age</h2>

                <p>
                  Д-р Георги Петров обясни на Петко концепцията която промени перспективата му:
                </p>

                <p>
                  <strong>Chronological age</strong> = Годините които са минали откакто си роден<br />
                  <strong>Biological age</strong> = Възрастта на клетките и системите ти
                </p>

                <p>
                  "Можеш да си 50 chronologically, но 40 biologically. Или обратното - 40 chronologically, но 55 biologically," обяснява д-р Петров.
                </p>

                <HighlightBox
                  title="Markers на biological age"
                  variant="info"
                >
                  <ul>
                    <li><strong>Testosterone levels</strong> - Master hormone за мъжко aging</li>
                    <li><strong>Telomere length</strong> - Индикатор за клетъчно aging</li>
                    <li><strong>Inflammatory markers</strong> (CRP, IL-6) - Chronic inflammation ages faster</li>
                    <li><strong>Insulin sensitivity</strong> - Metabolic health marker</li>
                    <li><strong>VO2 max</strong> - Cardiovascular fitness</li>
                    <li><strong>Muscle mass to fat ratio</strong> - Body composition</li>
                  </ul>
                </HighlightBox>

                <p>
                  "Добрата новина? Biological age е reversible. Можеш да 'помладееш' biologically," казва д-р Петров.
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>90-дневният протокол</h2>

                <p>
                  Д-р Петров създаде за Петко personalized hormone optimization protocol. Не беше testosterone replacement therapy (което създава dependency). Беше systematic approach за оптимизация на собственото production.
                </p>

                <h3>Phase 1: Foundation Reset (Days 1-30)</h3>

                <p>
                  <strong>Sleep Protocol</strong><br />
                  Target: 8 часа, consistent schedule (23:00-07:00). Magnesium преди лягане. Blackout curtains. No screens 1h преди сън.
                </p>

                <p>
                  "Първите 2 седмици бяха трудни. После тялото се адаптира. Събуждах се без будилник. Чувствах се освежен за първи път от години," споделя Петко.
                </p>

                <p>
                  <strong>Nutritional Optimization</strong><br />
                  Zinc (30mg), Magnesium (400mg), Vitamin D3 (5000 IU), Omega-3 (2g). Whole foods diet. Eliminate processed foods.
                </p>

                <p>
                  <strong>Stress Management</strong><br />
                  10 минути breathing exercises сутрин. Ashwagandha (600mg) за cortisol management.
                </p>

                <h3>Phase 2: Activation (Days 31-60)</h3>

                <p>
                  <strong>Resistance Training</strong><br />
                  3x седмица. Compound movements (squats, deadlifts, bench press). Heavy weights, low reps (5-8 reps) - proven да stimulate testosterone.
                </p>

                <p>
                  "Не бях вдигал тежести от 10 години. Започнах с леки тежести. Но постоянството беше ключът," казва Петко.
                </p>

                <p>
                  <strong>HIIT Cardio</strong><br />
                  2x седмица. 20-minute sessions. Sprint intervals - boost growth hormone и testosterone.
                </p>

                <h3>Phase 3: Optimization (Days 61-90)</h3>

                <p>
                  <strong>Advanced Supplementation</strong><br />
                  Добавиха се adaptogenic herbs и testosterone-boosting botanicals.
                </p>

                <ProductMention
                  productName="Testograph системата"
                  link={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=product-mention-1`}
                  description="Петко използва comprehensive protocol който включваше"
                />

                <p>
                  <strong>Intermittent Fasting</strong><br />
                  16:8 protocol (eating window 12:00-20:00). Proven да improve insulin sensitivity и autophagy (cellular cleanup).
                </p>

                <p>
                  "Първоначално мислех че ще съм гладен. Но след 1 седмица, енергията ми експлодира," споделя Петко.
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>Резултатите (lab-verified)</h2>

                <p>
                  След 90 дни, Петко направи control blood tests. Числата говорят сами за себе си:
                </p>

                <div className="my-8 p-6 bg-green-50 rounded-xl border-2 border-green-200">
                  <h4 className="font-bold text-neutral-900 mb-4">Blood Test Results</h4>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-neutral-700">Testosterone</p>
                      <p className="text-neutral-600">Before: 298 ng/dL → After: 487 ng/dL <span className="text-green-700 font-bold">(+63%)</span></p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-700">Vitamin D3</p>
                      <p className="text-neutral-600">Before: 18 ng/mL → After: 52 ng/mL <span className="text-green-700 font-bold">(Optimal)</span></p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-700">Cortisol (morning)</p>
                      <p className="text-neutral-600">Before: Elevated → After: Normal range <span className="text-green-700 font-bold">(Improved)</span></p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-700">Fasting Insulin</p>
                      <p className="text-neutral-600">Before: 12.4 μIU/mL → After: 6.8 μIU/mL <span className="text-green-700 font-bold">(Better sensitivity)</span></p>
                    </div>
                  </div>
                </div>

                <p>
                  Но цифрите са само част от историята. Истинската трансформация беше в това как изглеждаше и се чувстваше:
                </p>

                <ul>
                  <li><strong>Тегло:</strong> -9 кг (от 92 кг на 83 кг)</li>
                  <li><strong>Body fat:</strong> От 26% на 18%</li>
                  <li><strong>Мускулна маса:</strong> +2.5 кг</li>
                  <li><strong>Energy levels:</strong> "10/10 - като на 30-те ми"</li>
                  <li><strong>Sleep quality:</strong> Deep sleep improved 40% (tracked с Oura ring)</li>
                  <li><strong>Libido:</strong> "Върна се на нивото от 20-те ми"</li>
                </ul>

                <PullQuote
                  quote="Хората започнаха да ме питат дали съм сменил фризьор или дали съм ходил на почивка. Истината беше - смених хормоналното си здраве."
                  attribution="Петко Николов, 47 години"
                />
              </ArticleSection>

              <ArticleSection>
                <h2>Петко днес (2 години по-късно)</h2>

                <p>
                  Петко е сега на 47 години. Но biological age е estimated на 38-40 години (based на biomarkers).
                </p>

                <p>
                  "Най-големият комплимент беше когато нов клиент ме помоли за визитка и каза: 'Впечатлен съм че си изградил такъв бизнес на толкова млада възраст.' Аз съм на 47. Той мислеше че съм на 35-38."
                </p>

                <p>
                  Testosterone нивата му са stable на 450-480 ng/dL. Энергията е consistent. Sleep quality е excellent.
                </p>

                <p>
                  "Не търся 'eternal youth'. Търся optimal aging. Да изглеждам и се чувствам както тялото ми е designed - не както lifestyle-ът ми го е damaged," споделя Петко.
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>Biological age reversal е възможен</h2>

                <p>
                  Д-р Петров обяснява:
                </p>

                <p>
                  "Aging е inevitable. Но скоростта на aging е controllable. Можеш да биологически 'помладееш' като оптимизираш hormone levels, inflammation, cellular health."
                </p>

                <HighlightBox
                  title="Ключови принципи на biological age reversal"
                  variant="success"
                >
                  <ul>
                    <li><strong>Hormone optimization</strong> - Testosterone като master anti-aging hormone</li>
                    <li><strong>Inflammation reduction</strong> - Chronic inflammation ages cells faster</li>
                    <li><strong>Metabolic health</strong> - Insulin sensitivity, glucose control</li>
                    <li><strong>Sleep quality</strong> - Cellular repair happens during deep sleep</li>
                    <li><strong>Stress management</strong> - High cortisol accelerates aging</li>
                    <li><strong>Muscle maintenance</strong> - Sarcopenia (muscle loss) е aging marker</li>
                  </ul>
                </HighlightBox>

                <p>
                  "Не е въпрос на 'anti-aging cream' или gene therapy. Е въпрос на systematic approach към hormonal и cellular health," казва д-р Петров.
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>Заключение от Петко</h2>

                <p>
                  "Ако ме беше срещнал на 42, щеше да видиш примирен мъж който е приел стареенето като неизбежен упадък."
                </p>

                <p>
                  "Сега на 47, чувствам се по-добре отколкото на 35. Изглеждам по-добре отколкото на 40. И знам че това е устойчиво защото не разчитам на външни хормони или лекарства."
                </p>

                <PullQuote
                  quote="Чувството за старост не е неизбежно. Това е сигнал че нещо е в дисбаланс. И балансът може да се възстанови."
                  attribution="Петко Николов"
                />

                <HighlightBox
                  title="Следващата стъпка"
                  variant="success"
                >
                  <p>
                    Ако си на 40+ и се чувстваш по-стар отколкото искаш - знай че biological age е reversible.
                  </p>
                  <p className="mt-2">
                    Не е въпрос на genetics. Въпрос е на hormones, lifestyle и systematic optimization.
                  </p>
                </HighlightBox>
              </ArticleSection>

              {/* Final CTA */}
              <SoftCTA
                headline="Готов за biological age reversal?"
                description="Историята на Петко не е уникална. Systematic hormone optimization protocol използван от стотици мъже 40+ за natural age reversal."
                ctaText="Виж TESTOGRAPH протокола"
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
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <img
                    src="/funnel/testoup-bottle.webp"
                    alt="Testograph Complete System"
                    className="w-48 h-auto mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    TESTOGRAPH Age Reversal Protocol
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Natural biological age optimization
                  </p>
                </div>

                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Testosterone optimization (natural)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Inflammation reduction protocol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Cellular health enhancement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Energy & vitality restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Look & feel years younger</span>
                  </li>
                </ul>

                <a
                  href={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=sidebar-cta-1`}
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Започни age reversal →
                </a>

                <p className="text-xs text-neutral-500 text-center mt-4">
                  30-дневна гаранция • Natural approach • Sustainable results
                </p>
              </div>

              {/* Before/After Visual */}
              <div className="bg-white border-2 border-neutral-200 rounded-xl p-6">
                <div className="text-xs uppercase tracking-wider text-primary font-bold mb-2">
                  ✨ Transformation
                </div>
                <h4 className="font-bold text-neutral-900 mb-3">
                  Петко's Biological Age
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-neutral-700">At Age 42</p>
                    <p className="text-neutral-600">Looked: 55 • Felt: 60 • Biological age: 52-55</p>
                  </div>
                  <div className="h-px bg-neutral-200"></div>
                  <div>
                    <p className="text-sm font-semibold text-green-700">At Age 47</p>
                    <p className="text-neutral-600">Looks: 38 • Feels: 35 • Biological age: 38-40</p>
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
                  "Biological age е reversible. Testosterone optimization е foundational за age reversal."
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
