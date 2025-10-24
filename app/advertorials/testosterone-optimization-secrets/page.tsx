import { Metadata } from 'next';
import ArticleBody, { ArticleSection, PullQuote, HighlightBox } from '@/components/advertorial/ArticleBody';
import SoftCTA, { ProductMention } from '@/components/advertorial/SoftCTA';
import Disclaimer from '@/components/advertorial/Disclaimer';

/**
 * Testosterone Optimization Secrets Advertorial Page
 *
 * Template: Interview Style (Q&A format with expert)
 * Angle: Mystery/Curiosity + Hidden Knowledge
 * Target: Men 30-45 frustrated with supplements
 * Hook: "What doctors know that supplement companies don't tell you"
 */

// SEO Metadata
export const metadata: Metadata = {
  title: 'Какво крият лекарите за testosterone optimization (и защо supplement индустрията мрази това)',
  description: 'Д-р Петров разкрива 3-те тайни които supplement компаниите не искат да знаете. Защо 90% от добавките не работят и какво наистина оптимизира хормоните.',
  keywords: [
    'testosterone optimization',
    'хормонална оптимизация',
    'testosterone тайни',
    'supplement измама',
    'ендокринология',
    'мъжко здраве',
    'хормонален баланс'
  ],
  authors: [{ name: 'Д-р Георги Петров' }],
  openGraph: {
    title: 'Testosterone Optimization Secrets: Какво крият лекарите',
    description: '3-те тайни които supplement компаниите не искат да знаете за хормонална оптимизация.',
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
const UTM_PARAMS = '?utm_source=advertorial&utm_medium=testosterone-optimization-secrets-interview&utm_campaign=cold-traffic-2025';

export default function TestosteroneOptimizationSecretsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Interview Banner */}
      <div className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 py-10 sm:py-14">
        <div className="container mx-auto px-5 max-w-[1100px]">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <span>🎤</span>
            <span className="text-sm font-semibold">ЕКСКЛУЗИВНО ИНТЕРВЮ</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            "90% от мъжете оптимизират testosterone погрешно"
          </h1>

          <p className="text-lg sm:text-xl text-purple-100 leading-relaxed mb-6">
            Д-р Георги Петров разкрива 3-те тайни които supplement индустрията крие от вас
          </p>

          <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
            <span>📅 18 януари 2025</span>
            <span>•</span>
            <span>⏱️ 12 мин четене</span>
            <span>•</span>
            <span>👥 847+ пациенти</span>
          </div>
        </div>
      </div>

      {/* Main Interview Container */}
      <main className="container mx-auto px-5 py-8 sm:py-12 max-w-[1100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Expert Sidebar - Sticky */}
          <aside className="lg:block">
            <div className="lg:sticky lg:top-8 space-y-6">
              {/* Expert Profile Card */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-lg border-2 border-purple-200">
                <div className="text-center">
                  <img
                    src="/funnel/georgi-avatar.jpg"
                    alt="Д-р Георги Петров"
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
                  />

                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    Д-р Георги Петров
                  </h3>
                  <p className="text-sm text-purple-700 font-semibold mb-4">
                    Ендокринолог
                  </p>

                  <div className="text-left space-y-2 text-sm text-neutral-700 mb-6">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600">🎓</span>
                      <span>12+ години опит в ендокринология</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600">👥</span>
                      <span>847+ пациенти с хормонална оптимизация</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600">📊</span>
                      <span>Специалист по testosterone optimization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600">🏥</span>
                      <span>Практикуващ лекар, София</span>
                    </div>
                  </div>

                  <div className="border-t border-purple-200 pt-4">
                    <p className="text-xs text-neutral-600 italic">
                      "Supplement индустрията иска да вярвате че една таблетка ще реши всичко. Но истината е по-сложна. И по-мощна."
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Navigation */}
              <div className="hidden lg:block bg-white border-2 border-neutral-200 rounded-xl p-5">
                <h4 className="font-bold text-neutral-900 mb-3 text-sm">
                  📋 В ТОВА ИНТЕРВЮ:
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Защо 90% грешат при оптимизация</li>
                  <li>• Тайна #1: Timing на съставките</li>
                  <li>• Тайна #2: Synergy комбинации</li>
                  <li>• Тайна #3: Lifestyle факторите</li>
                  <li>• Case study: 49% ръст за 90 дни</li>
                  <li>• Какво крият supplement компаниите</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Q&A Content Column */}
          <div className="min-w-0">

            {/* Interview Introduction */}
            <div className="mb-10 pb-8 border-b-2 border-neutral-200">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Д-р Георги Петров е ендокринолог с 12+ години опит и 847+ пациенти специализирани в testosterone optimization. В това ексклузивно интервю той разкрива 3-те тайни които supplement индустрията крие от вас.
              </p>
            </div>

            {/* Article Content */}
            <ArticleBody>
              {/* Question 1 */}
              <ArticleSection>
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl font-bold text-purple-600 mt-1">Q:</span>
                    <h2 className="text-2xl font-bold text-neutral-900 leading-tight pt-1">
                      Д-р Петров, защо твърдите че 90% от мъжете оптимизират testosterone погрешно?
                    </h2>
                  </div>
                </div>

                <div className="pl-12 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-indigo-600 mt-1">A:</span>
                    <div className="flex-1 space-y-4">
                      <p>
                        <strong>Д-р Петров:</strong> Пациентите ми идват с пълни шкафове от supplement бутилки. Креатин, протеин, "тесто бустери", витамини. Харчат 200-300 лв месечно. И въпреки това testosterone нивата им са на дъното.
                      </p>

                      <p>
                        Проблемът е че те се фокусират върху <em>какво</em> приемат, а не <em>как</em> го приемат. Supplement компаниите продават продукти, но не системи. Защото е по-лесно да продаваш "magic pills" отколкото да обясняваш наука.
                      </p>

                      <p>
                        Има 3 тайни които supplement индустрията не иска да знаете. И тези тайни правят разликата между 15% подобрение и 49% подобрение.
                      </p>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Question 2 - Тайна #1 */}
              <ArticleSection>
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl font-bold text-purple-600 mt-1">Q:</span>
                    <h2 className="text-2xl font-bold text-neutral-900 leading-tight pt-1">
                      Каква е първата тайна която supplement компаниите крият?
                    </h2>
                  </div>
                </div>

                <div className="pl-12 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-indigo-600 mt-1">A:</span>
                    <div className="flex-1 space-y-4">
                      <p>
                        <strong>Д-р Петров:</strong> Тайна #1 е <strong>Timing</strong>. Повечето мъже мислят че съставките са всичко. Но истината е че <strong>КОГА</strong> приемате добавките е по-важно от <strong>КАКВО</strong> приемате.
                      </p>

                      <p>
                        Позволете ми да ви дам пример: Zinc. Ако го приемете вечер, ще получите минимален ефект. Но ако го приемете сутрин между 6:00-8:00 когато testosterone production е на peak, ефектът е 3 пъти по-силен.
                      </p>

                      <HighlightBox
                        title="🕐 Optimal Timing Protocol"
                        variant="info"
                      >
                        <ul>
                          <li><strong>Сутрин (6:00-8:00):</strong> Testosterone production peak - приемайте zinc + vitamin D</li>
                          <li><strong>Преди тренировка:</strong> Carbs + protein за optimal hormone response</li>
                          <li><strong>Вечер (21:00-23:00):</strong> Magnesium за deep sleep (80% от T production)</li>
                          <li><strong>Post-workout:</strong> Протеин в рамките на 30 мин за muscle repair</li>
                        </ul>
                      </HighlightBox>

                      <p>
                        Една и съща добавка може да повиши testosterone с 15% или с 45% в зависимост от timing-а. Supplement компаниите знаят това, но не говорят за него. Защото е по-лесно да продаваш "вземи 2 таблетки дневно" отколкото да обясняваш сложни протоколи.
                      </p>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Question 3 - Тайна #2 */}
              <ArticleSection>
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl font-bold text-purple-600 mt-1">Q:</span>
                    <h2 className="text-2xl font-bold text-neutral-900 leading-tight pt-1">
                      А втората тайна? Какво още крият supplement компаниите?
                    </h2>
                  </div>
                </div>

                <div className="pl-12 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-indigo-600 mt-1">A:</span>
                    <div className="flex-1 space-y-4">
                      <p>
                        <strong>Д-р Петров:</strong> Тайна #2 е <strong>Nutrient Synergy</strong>. Мъжете купуват отделни добавки - един продукт за zinc, друг за vitamin D, трети за магнезий. Но хормоните не работят така. Те се влияят от комбинации, не от изолирани нутриенти.
                      </p>

                      <p>
                        Ето реален пример: Вземате 50mg zinc дневно за testosterone. Звучи добре, нали? Но без copper, zinc всъщност <em>блокира</em> testosterone synthesis. Резултатът? Влошавате си състоянието вместо да го подобрявате.
                      </p>

                      <HighlightBox
                        title="🧪 Synergy Combinations That Work"
                        variant="success"
                      >
                        <ul>
                          <li><strong>Zinc (30mg) + Copper (2mg):</strong> Perfect 15:1 ratio за testosterone synthesis</li>
                          <li><strong>Vitamin D3 (5000 IU) + K2 (100mcg):</strong> Bone health + hormone optimization</li>
                          <li><strong>Magnesium + B6:</strong> Sleep quality + stress reduction (критично за T production)</li>
                          <li><strong>Omega-3 + Antioxidants:</strong> Inflammation control + hormone balance</li>
                        </ul>
                      </HighlightBox>

                      <p>
                        Това е като да сглобяваш пъзел. Една липсваща част и цялата картина се разпада. Supplement компаниите печелят повече когато купувате 5 отделни продукта вместо една правилна комбинация.
                      </p>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Question 4 - Тайна #3 */}
              <ArticleSection>
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl font-bold text-purple-600 mt-1">Q:</span>
                    <h2 className="text-2xl font-bold text-neutral-900 leading-tight pt-1">
                      И третата тайна? Тя звучи като най-важната...
                    </h2>
                  </div>
                </div>

                <div className="pl-12 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-indigo-600 mt-1">A:</span>
                    <div className="flex-1 space-y-4">
                      <p>
                        <strong>Д-р Петров:</strong> Тайна #3 е най-важната и supplement компаниите най-много мразят да говорят за нея: <strong>Добавките са само 20% от уравнението</strong>.
                      </p>

                      <p>
                        Останалите 80% са lifestyle фактори. И те са безплатни. Което обяснява защо индустрията не говори за тях.
                      </p>

                      <div className="my-6 p-6 bg-amber-50 rounded-xl border-2 border-amber-200">
                        <h4 className="font-bold text-amber-900 mb-4 text-lg">📊 The 80% Formula</h4>

                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-semibold text-amber-800">Sleep (35%)</p>
                            <p className="text-amber-700">7.5-8 часа deep sleep = 80% от testosterone production става по време на сън</p>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-amber-800">Training (25%)</p>
                            <p className="text-amber-700">Heavy compounds + HIIT = natural testosterone boost до 40%</p>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-amber-800">Nutrition (15%)</p>
                            <p className="text-amber-700">Calorie cycling + nutrient timing = hormone optimization</p>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-amber-800">Stress Management (5%)</p>
                            <p className="text-amber-700">Cortisol control = testosterone preservation (high cortisol убива T)</p>
                          </div>

                          <div className="pt-2 border-t border-amber-300">
                            <p className="text-sm font-semibold text-amber-800">Supplements (20%)</p>
                            <p className="text-amber-700">Right ingredients + timing = amplification ефект</p>
                          </div>
                        </div>
                      </div>

                      <p>
                        Supplement компаниите продават 20% от решението и ви карат да вярвате че е 100%. Но когато комбинирате правилните добавки с правилните lifestyle фактори, резултатите са драматични.
                      </p>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Question 5 - Case Study */}
              <ArticleSection>
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl font-bold text-purple-600 mt-1">Q:</span>
                    <h2 className="text-2xl font-bold text-neutral-900 leading-tight pt-1">
                      Имате ли реален пример как тези 3 тайни работят в практиката?
                    </h2>
                  </div>
                </div>

                <div className="pl-12 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-indigo-600 mt-1">A:</span>
                    <div className="flex-1 space-y-4">
                      <p>
                        <strong>Д-р Петров:</strong> О, да. Мартин, 38 години, IT специалист. Класически случай. Харчеше 250 лв месечно за добавки. Testosterone: 320 ng/dL - ниско за възрастта му.
                      </p>

                      <p>
                        "Имах шкаф пълен с бутилки," каза ми той. "Креатин, тестостерон бустери, витамини. Но резултати? Нула."
                      </p>

                      <p>
                        Направих анализ на supplement stack-а му и открих класическите грешки:
                      </p>

                      <div className="my-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                        <ul className="space-y-2">
                          <li>❌ <strong>Zinc: 50mg</strong> - твърде много, блокира copper absorption</li>
                          <li>❌ <strong>No magnesium</strong> - лош сън, а 80% от T production е през нощта</li>
                          <li>❌ <strong>No vitamin D</strong> - дефицит (живее в офис цял ден)</li>
                          <li>❌ <strong>Wrong timing</strong> - вземаше всичко наведнъж сутрин</li>
                        </ul>
                      </div>

                      <p>
                        "Беше като да караш Ferrari с велосипедни гуми," казах му.
                      </p>

                      <ProductMention
                        productName="Testograph Optimization Protocol"
                        link={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=product-mention-1`}
                        description="Препоръчах му structured approach който включва всички 3 тайни - timing, synergy и lifestyle integration"
                      />

                      <p>
                        90 дни по-късно, резултатите бяха впечатляващи:
                      </p>

                      <div className="my-6 p-6 bg-green-50 rounded-xl border-2 border-green-200">
                        <h4 className="font-bold text-green-900 mb-4 text-lg">✅ Transformation Results (90 дни)</h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-3 bg-white rounded-lg">
                            <p className="text-sm font-semibold text-green-800">Testosterone</p>
                            <p className="text-2xl font-bold text-green-600">320 → 478 ng/dL</p>
                            <p className="text-sm text-green-700">+49% increase</p>
                          </div>

                          <div className="p-3 bg-white rounded-lg">
                            <p className="text-sm font-semibold text-green-800">Energy Levels</p>
                            <p className="text-2xl font-bold text-green-600">3/10 → 9/10</p>
                            <p className="text-sm text-green-700">+6 points</p>
                          </div>

                          <div className="p-3 bg-white rounded-lg">
                            <p className="text-sm font-semibold text-green-800">Sleep Quality</p>
                            <p className="text-2xl font-bold text-green-600">Poor → Deep</p>
                            <p className="text-sm text-green-700">7.5h consistent</p>
                          </div>

                          <div className="p-3 bg-white rounded-lg">
                            <p className="text-sm font-semibold text-green-800">Libido</p>
                            <p className="text-2xl font-bold text-green-600">Low → High</p>
                            <p className="text-sm text-green-700">Restored</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
                        <p className="italic text-neutral-800">
                          <strong className="text-purple-900">"Мислех че знам какво правя. Оказа се че правех всичко погрешно. Timing и комбинациите са всичко."</strong>
                        </p>
                        <p className="text-sm text-neutral-600 mt-2">- Мартин, 38 години</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Question 6 - Why companies hide this */}
              <ArticleSection>
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl font-bold text-purple-600 mt-1">Q:</span>
                    <h2 className="text-2xl font-bold text-neutral-900 leading-tight pt-1">
                      Защо supplement индустрията крие тези тайни?
                    </h2>
                  </div>
                </div>

                <div className="pl-12 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-indigo-600 mt-1">A:</span>
                    <div className="flex-1 space-y-4">
                      <p>
                        <strong>Д-р Петров:</strong> Просто е по-лесно да продават "magic pills". Хормоналната оптимизация е система, не продукт. Но системите са сложни да се обясняват.
                      </p>

                      <p>
                        Supplement компаниите печелят от:
                      </p>

                      <div className="my-4 p-4 bg-neutral-50 rounded-lg border-l-4 border-neutral-300">
                        <ul className="space-y-2">
                          <li>🔸 <strong>Confusion marketing</strong> - повече добавки = повече продажби</li>
                          <li>🔸 <strong>Overpromising</strong> - резултати без effort звучи по-добре</li>
                          <li>🔸 <strong>Ignoring science</strong> - timing, combinations и lifestyle компликуват посланието</li>
                        </ul>
                      </div>

                      <p>
                        Но пациентите ми искат резултати, не обещания.
                      </p>

                      <HighlightBox
                        title="✅ Какво работи наистина"
                        variant="success"
                      >
                        <ul>
                          <li><strong>Right timing:</strong> Кога приемате добавките</li>
                          <li><strong>Nutrient synergy:</strong> Как се комбинират</li>
                          <li><strong>Lifestyle integration:</strong> Как се вписват в живота ви</li>
                          <li><strong>Tracking & adjustment:</strong> Мониторинг и оптимизация</li>
                        </ul>
                      </HighlightBox>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Question 7 - Final Takeaway */}
              <ArticleSection>
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl font-bold text-purple-600 mt-1">Q:</span>
                    <h2 className="text-2xl font-bold text-neutral-900 leading-tight pt-1">
                      Каква е вашата финална препоръка за мъжете които четат това?
                    </h2>
                  </div>
                </div>

                <div className="pl-12 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-indigo-600 mt-1">A:</span>
                    <div className="flex-1 space-y-4">
                      <p>
                        <strong>Д-р Петров:</strong> 90% от мъжете се борят с testosterone optimization защото не знаят тези 3 тайни. Supplement индустрията иска да остане така. Но вие имате избор.
                      </p>

                      <p>
                        Когато разберете как работи тялото - timing, synergy, lifestyle - можете да го оптимизирате. Това е истинската сила.
                      </p>

                      <div className="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl">
                        <p className="text-lg font-semibold text-purple-900 mb-2">
                          💡 Следващата стъпка
                        </p>
                        <p className="text-neutral-700">
                          Ако сте готови да научите как да оптимизирате testosterone правилно - без да харчите стотици левове за добавки които не работят - има по-добър начин.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Final CTA */}
              <SoftCTA
                headline="Готов да откриеш testosterone optimization тайните?"
                description="Д-р Петров е създал systematic protocol който включва всички 3 тайни - timing, combinations и lifestyle integration. Използван от 847+ пациенти с measurable резултати."
                ctaText="Виж TESTOGRAPH Optimization Protocol →"
                link={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=final-cta`}
                variant="default"
              />
            </ArticleBody>

            {/* Legal Disclaimer Footer */}
            <div className="mt-12">
              <Disclaimer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
