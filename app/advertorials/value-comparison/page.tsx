import { Metadata } from 'next';
import ArticleBody, { ArticleSection, PullQuote, HighlightBox } from '@/components/advertorial/ArticleBody';
import SoftCTA, { ProductMention } from '@/components/advertorial/SoftCTA';
import Disclaimer from '@/components/advertorial/Disclaimer';

/**
 * Value Comparison Advertorial Page
 *
 * Angle: Value/ROI + Economics + Smart Investment
 * Target: Budget-conscious men seeking maximum value
 * Hook: "Why paying more doesn't get you better results"
 */

// SEO Metadata
export const metadata: Metadata = {
  title: 'Финансовият съветник разкрива: Защо 67 лв за система бият 500 лв за отделни части',
  description: 'Финансовият анализ показва: повечето мъже overpay за testosterone optimization. Ето как да получиш максимален ROI от инвестицията в здравето си.',
  keywords: [
    'testosterone ROI',
    'хормонална оптимизация',
    'value comparison',
    'supplement economics',
    'мъжко здраве',
    'инвестиция в здраве',
    'cost benefit analysis',
    'финансова ефективност'
  ],
  authors: [{ name: 'Financial Health Analysis BG' }],
  openGraph: {
    title: 'Value Analysis: Защо по-евтиното е по-ефективното',
    description: 'Финансовият breakdown показва защо системният подход дава по-добри резултати от скъпите отделни части.',
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
const UTM_PARAMS = '?utm_source=advertorial&utm_medium=value-comparison&utm_campaign=cold-traffic-2025';

export default function ValueComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Value Header */}
      <div className="w-full bg-gradient-to-r from-green-600 to-green-700 py-6">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600">💰</svg>
            </div>
            <div>
              <p className="text-green-100 text-sm uppercase tracking-wide font-bold">
                ФИНАНСОВ АНАЛИЗ
              </p>
              <h1 className="text-white text-2xl font-bold">
                Защо 67 лв бият 500 лв
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
                Финансовият съветник разкрива: "Повечето мъже overpay за testosterone optimization"
              </h1>
              <h2 className="font-sans text-xl text-neutral-700 leading-[150%]">
                Детайлен cost-benefit analysis показва защо системният подход дава 3x по-добра възвръщаемост от скъпите отделни компоненти
              </h2>
            </div>

            {/* Author & Meta */}
            <div className="mb-8 pb-6 border-b border-neutral-200">
              <p className="text-sm font-sans text-neutral-600">
                <span className="font-semibold">Анализ:</span> Financial Health Analysis BG
              </p>
              <p className="text-sm font-sans text-neutral-500 mt-1">
                22 януари 2025 • 10 мин четене
              </p>
            </div>

            {/* Article Content */}
            <ArticleBody>
              <ArticleSection>
                <p>
                  <strong>ФИНАНСОВ АНАЛИЗ</strong> — Като финансов съветник с 15+ години опит, винаги съм анализирал инвестиции от гледна точка на ROI (return on investment).
                </p>

                <p>
                  Когато клиенти ме питат за инвестиции в здравето, винаги ги питам: "Какъв е ROI-ът? Колко ще получиш обратно за всеки похарчен лев?"
                </p>

                <p>
                  Testosterone optimization не е по-различен от всяка друга инвестиция. Но повечето мъже подхождат към него като към лотария, не като към calculated investment.
                </p>

                <PullQuote
                  quote="Здравето е най-добрата инвестиция, но само ако знаеш как да инвестираш правилно. Повечето мъже overpay за underperforming активи."
                  attribution="Александър Димитров, финансов съветник"
                />
              </ArticleSection>

              <ArticleSection>
                <h2>Типичният подход: Overpaying for Underperformance</h2>

                <p>
                  Ето как повечето мъже "инвестират" в testosterone optimization:
                </p>

                <div className="my-8 p-6 bg-red-50 rounded-xl border-2 border-red-200">
                  <h4 className="font-bold text-red-900 mb-4">Типичният подход (отделни части)</h4>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-red-300">
                      <span className="text-red-800">Premium добавки (месечно)</span>
                      <span className="font-bold text-red-900">120-200 лв</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-red-300">
                      <span className="text-red-800">Персонален треньор</span>
                      <span className="font-bold text-red-900">250 лв/месец</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-red-300">
                      <span className="text-red-800">Нутриционист консултации</span>
                      <span className="font-bold text-red-900">180 лв/месец</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-red-300">
                      <span className="text-red-800">Tracking apps & devices</span>
                      <span className="font-bold text-red-900">45 лв/месец</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-red-200 rounded-lg px-4">
                      <span className="font-bold text-red-900">ПЪРВИ МЕСЕЦ:</span>
                      <span className="font-bold text-red-900 text-xl">595 лв</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-red-200 rounded-lg px-4">
                      <span className="font-bold text-red-900">СЛЕДВАЩИ МЕСЕЦИ:</span>
                      <span className="font-bold text-red-900 text-xl">415 лв</span>
                    </div>
                  </div>
                </div>

                <p>
                  "Това е като да купуваш отделни части от различни магазини и да се надяваш да се сглобят сами," казвам на клиентите си.
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>ROI анализ: Защо отделните части не работят</h2>

                <p>
                  Проблемът с типичния подход не е само цената. Проблемът е че отделните части не работят заедно:
                </p>

                <HighlightBox
                  title="Защо отделните части подценяват?"
                  variant="warning"
                >
                  <ul>
                    <li><strong>Добавките сами:</strong> 15-20% improvement (според studies)</li>
                    <li><strong>Треньорът:</strong> Не знае за хормонална оптимизация</li>
                    <li><strong>Нутриционистът:</strong> Не разбира testosterone timing</li>
                    <li><strong>Tracking apps:</strong> Следят симптоми, не root cause</li>
                    <li><strong>Общ ROI:</strong> Нисък заради липса на синергия</li>
                  </ul>
                </HighlightBox>

                <p>
                  "Когато частите не работят заедно, губиш compounding effect," обяснявам на клиентите си.
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>Системният подход: Maximum ROI</h2>

                <p>
                  Системният подход е като добре балансиран инвестиционен портфейл - всяка част усилва другите:
                </p>

                <div className="my-8 p-6 bg-green-50 rounded-xl border-2 border-green-200">
                  <h4 className="font-bold text-green-900 mb-4">Системният подход (всичко включено)</h4>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-green-300">
                      <span className="text-green-800">Testograph система</span>
                      <span className="font-bold text-green-900">67 лв</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-300">
                      <span className="text-green-800">Включва:</span>
                      <span className="font-bold text-green-900">Добавки + Протоколи + Tracking</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-300">
                      <span className="text-green-800">Doctor-formulated</span>
                      <span className="font-bold text-green-900">✓</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-300">
                      <span className="text-green-800">30-дневна гаранция</span>
                      <span className="font-bold text-green-900">✓</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-green-200 rounded-lg px-4">
                      <span className="font-bold text-green-900">СПЕСТЯВАШ:</span>
                      <span className="font-bold text-green-900 text-xl">528 лв/месец</span>
                    </div>
                  </div>
                </div>

                <p>
                  "Когато всичко е оптимизирано да работи заедно, ROI-ът е драматично по-висок," казвам на клиентите си.
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>ROI сравнение: 6-месечен анализ</h2>

                <p>
                  Нека направим детайлен 6-месечен ROI анализ:
                </p>

                <div className="my-10 overflow-x-auto">
                  <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-neutral-800 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Метрика</th>
                        <th className="px-6 py-4 text-center">Отделни части</th>
                        <th className="px-6 py-4 text-center">Система</th>
                        <th className="px-6 py-4 text-center">Разлика</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      <tr>
                        <td className="px-6 py-4 font-medium">Първоначална инвестиция</td>
                        <td className="px-6 py-4 text-center text-red-600 font-bold">595 лв</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">67 лв</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">+528 лв</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-6 py-4 font-medium">Месечни разходи</td>
                        <td className="px-6 py-4 text-center text-red-600 font-bold">415 лв</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">67 лв</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">+348 лв</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">6-месечни разходи</td>
                        <td className="px-6 py-4 text-center text-red-600 font-bold">2,485 лв</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">402 лв</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">+2,083 лв</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-6 py-4 font-medium">Очаквани резултати</td>
                        <td className="px-6 py-4 text-center text-orange-600 font-bold">+15-20%</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">+35-45%</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">+20-25%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">ROI (резултати/разходи)</td>
                        <td className="px-6 py-4 text-center text-red-600 font-bold">0.06-0.08</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">0.87-1.12</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">+0.81-1.04</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  "Виждаш ли разликата?" казвам на клиентите си. "Системният подход дава 10x по-добър ROI."
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>Case Study: 35-годишен инвестира правилно</h2>

                <p>
                  Георги, 35 години, финансов аналитик. Изхарчи 1,876 лв за 8 месеца без резултат. Testosterone: 365 ng/dL.
                </p>

                <p>
                  "Беше като да инвестирам в акции без да знам fundamentals," казва Георги. "Плащах премиум цени за посредствени резултати."
                </p>

                <p>
                  Георги направи cost-benefit analysis:
                </p>

                <div className="my-8 p-6 bg-amber-50 rounded-xl border-2 border-amber-200">
                  <h4 className="font-bold text-amber-900 mb-4">Георги's Investment Analysis</h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-amber-800">Предишна инвестиция</p>
                      <p className="text-2xl font-bold text-amber-600">1,876 лв</p>
                      <p className="text-sm text-amber-700">8 месеца, минимални резултати</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-green-800">Нова инвестиция</p>
                      <p className="text-2xl font-bold text-green-600">67 лв</p>
                      <p className="text-sm text-green-700">Системен подход</p>
                    </div>
                  </div>
                </div>

                <p>
                  "Когато видях математиката, решението беше ясно," казва Георги.
                </p>

                <div className="my-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-4">Георги's Results (90 дни)</h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-blue-800">Testosterone ROI</p>
                      <p className="text-2xl font-bold text-blue-600">365 → 498 ng/dL</p>
                      <p className="text-sm text-blue-700">+36.4% ръст</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-800">Financial ROI</p>
                      <p className="text-2xl font-bold text-blue-600">1,876 лв → 67 лв</p>
                      <p className="text-sm text-blue-700">96% reduction в разходи</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-800">Energy Investment</p>
                      <p className="text-2xl font-bold text-blue-600">4/10 → 9/10</p>
                      <p className="text-sm text-blue-700">+125% improvement</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-800">Time Investment</p>
                      <p className="text-2xl font-bold text-blue-600">Complex → Simple</p>
                      <p className="text-sm text-blue-700">Systematic approach</p>
                    </div>
                  </div>
                </div>

                <PullQuote
                  quote="Като финансов аналитик, винаги търся maximum ROI. Системният подход дава 10x по-добра възвръщаемост от отделните части."
                  attribution="Георги, 35 години"
                />
              </ArticleSection>

              <ArticleSection>
                <h2>Opportunity cost: Какво губиш</h2>

                <p>
                  "Повечето мъже не мислят за opportunity cost," казвам на клиентите си. "Но това е най-важният фактор в инвестиционното решение."
                </p>

                <HighlightBox
                  title="Opportunity Cost на типичния подход"
                  variant="warning"
                >
                  <ul>
                    <li><strong>Време:</strong> 6-12 месеца trial and error</li>
                    <li><strong>Пари:</strong> 2,000+ лв за suboptimal резултати</li>
                    <li><strong>Frustration:</strong> Демотивация от липса на прогрес</li>
                    <li><strong>Здраве:</strong> Продължаващите симптоми</li>
                    <li><strong>Възможности:</strong> Пропуснати ползи от optimal хормони</li>
                  </ul>
                </HighlightBox>

                <p>
                  "Когато пресметнеш opportunity cost-а, системният подход винаги печели," казвам на клиентите си.
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>Заключение: Инвестирай smart, не hard</h2>

                <p>
                  "Testosterone optimization не е разход. Това е инвестиция в твоето най-ценно asset - здравето ти," казвам на клиентите си.
                </p>

                <p>
                  "Но като всяка инвестиция, трябва да избереш правилните активи. Системният подход дава maximum ROI с minimum risk."
                </p>

                <HighlightBox
                  title="Инвестиционен съвет"
                  variant="success"
                >
                  <ul>
                    <li><strong>Diversify:</strong> Не разчитай на една добавка</li>
                    <li><strong>Research:</strong> Следвай доказаните методи</li>
                    <li><strong>Track:</strong> Мониторь progress и adjust</li>
                    <li><strong>Compound:</strong> Използвай синергията между факторите</li>
                    <li><strong>ROI focus:</strong> Фокусирай върху резултати, не цена</li>
                  </ul>
                </HighlightBox>

                <PullQuote
                  quote="Здравето е най-добрата инвестиция. Но само ако инвестираш правилно."
                  attribution="Александър Димитров"
                />
              </ArticleSection>

              {/* Final CTA */}
              <SoftCTA
                headline="Готов за maximum ROI от testosterone optimization?"
                description="Финансовият анализ показва: системният подход дава 10x по-добра възвръщаемост. Инвестирай smart, не hard."
                ctaText="Виж TESTOGRAPH инвестиционния анализ"
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
                    alt="Testograph Investment Analysis"
                    className="w-48 h-auto mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    TESTOGRAPH ROI Analysis
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Maximum return on health investment
                  </p>
                </div>

                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>10x по-добър ROI от отделни части</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Systematic compounding effect</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Doctor-formulated optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>30-day risk-free trial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Complete tracking system</span>
                  </li>
                </ul>

                <a
                  href={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=sidebar-cta-1`}
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Инвестирай smart →
                </a>

                <p className="text-xs text-neutral-500 text-center mt-4">
                  10x ROI • Doctor approved • Risk-free trial
                </p>
              </div>

              {/* ROI Calculator */}
              <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                <div className="text-xs uppercase tracking-wider text-green-600 font-bold mb-2">
                  💰 ROI Calculator
                </div>
                <h4 className="font-bold text-neutral-900 mb-3">
                  6-месечна спестявания
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                    <span><strong>Отделни части:</strong> 2,485 лв</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                    <span><strong>Система:</strong> 402 лв</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                    <span><strong>Спестяваш:</strong> 2,083 лв</span>
                  </div>
                </div>
              </div>

              {/* Financial Advisor Card */}
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/funnel/georgi-avatar.jpg"
                    alt="Александър Димитров"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-neutral-900">Александър Димитров</p>
                    <p className="text-xs text-neutral-600">Финансов съветник</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 italic">
                  "Здравето е най-добрата инвестиция. Но само ако инвестираш правилно."
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
