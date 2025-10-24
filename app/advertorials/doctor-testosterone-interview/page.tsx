import { Metadata } from 'next';
import ArticleBody, { ArticleSection, PullQuote, HighlightBox } from '@/components/advertorial/ArticleBody';
import SoftCTA, { ProductMention } from '@/components/advertorial/SoftCTA';
import Disclaimer from '@/components/advertorial/Disclaimer';

/**
 * Doctor Testosterone Interview Advertorial Page
 *
 * Angle: Expert Interview + Q&A Format
 * Target: Men seeking professional medical advice
 * Hook: "Direct answers from a real endocrinologist"
 */

// SEO Metadata
export const metadata: Metadata = {
  title: 'Д-р Петров отговаря: "Това са най-честите въпроси за testosterone които получавам"',
  description: 'Ендокринолог с 847 пациенти отговаря на 7-те най-важни въпроса за хормонална оптимизация. Какво наистина работи и какво е мит.',
  keywords: [
    'testosterone optimization',
    'ендокринолог съвети',
    'хормонално лечение',
    'testosterone въпроси',
    'мъжко здраве',
    'д-р петров',
    'хормонален баланс'
  ],
  authors: [{ name: 'Д-р Георги Петров' }],
  openGraph: {
    title: 'Д-р Петров отговаря на въпроси за testosterone optimization',
    description: 'Експертни отговори от ендокринолог с 12+ години опит и 847 пациенти.',
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
const UTM_PARAMS = '?utm_source=advertorial&utm_medium=doctor-testosterone-interview&utm_campaign=cold-traffic-2025';

export default function DoctorTestosteroneInterviewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Interview Banner */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-6">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600">🎤</svg>
            </div>
            <div>
              <p className="text-blue-100 text-sm uppercase tracking-wide">
                Ексклузивно интервю
              </p>
              <h1 className="text-white text-2xl font-bold">
                Д-р Петров отговаря на въпроси за testosterone
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <main className="container mx-auto px-5 py-8 sm:py-12 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 lg:gap-12">
          {/* Expert Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
              {/* Expert Photo */}
              <div className="mb-4">
                <img
                  src="/funnel/georgi-avatar.jpg"
                  alt="Д-р Георги Петров"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100"
                />
              </div>

              {/* Name & Title */}
              <h3 className="text-xl font-bold text-center mb-2">
                Д-р Георги Петров
              </h3>
              <p className="text-center text-blue-600 font-medium mb-4">
                Ендокринолог
              </p>

              {/* Bio */}
              <div className="text-sm text-neutral-600 mb-4 space-y-2">
                <p>📚 12+ години опит</p>
                <p>🎓 Специализация в САЩ</p>
                <p>👥 847+ пациенти</p>
                <p>⭐ 4.9/5 рейтинг</p>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-neutral-200">
                <p className="text-xs text-neutral-500 mb-2">Свържи се:</p>
                <div className="flex gap-3 justify-center">
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    LinkedIn
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Column */}
          <div className="min-w-0">
            {/* Hero Headline */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-[42px] font-sans font-bold leading-[130%] text-neutral-900 mb-6">
                "Това са 7-те въпроса които всички мъже ми задават за testosterone"
              </h1>
              <h2 className="font-sans text-xl text-neutral-700 leading-[150%]">
                Ендокринолог с 847 пациенти разкрива какво наистина работи за хормонална оптимизация
              </h2>
            </div>

            {/* Author & Meta */}
            <div className="mb-8 pb-6 border-b border-neutral-200">
              <p className="text-sm font-sans text-neutral-600">
                <span className="font-semibold">Интервюира:</span> Редакция Men's Health BG
              </p>
              <p className="text-sm font-sans text-neutral-500 mt-1">
                19 януари 2025 • 8 мин четене
              </p>
            </div>

            {/* Article Content */}
            <ArticleBody>
              <ArticleSection>
                <p>
                  <strong>Д-р Георги Петров</strong> е един от водещите ендокринолози в България с над 12 години опит в хормонална оптимизация.
                  Работи с повече от 847 пациенти и е специализирал в САЩ в областта на мъжкото здраве.
                </p>

                <p>
                  В това ексклузивно интервю, д-р Петров отговаря на най-честите въпроси които получава от мъже 30-55 години.
                </p>

                <PullQuote
                  quote="Testosterone не е само за секс или мускули. Това е основен хормон за мъжкото здраве, енергия и качество на живот."
                  attribution="Д-р Георги Петров"
                />
              </ArticleSection>

              {/* Question 1 */}
              <ArticleSection>
                <div className="mb-8">
                  {/* Question */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">Q</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-neutral-900 leading-relaxed">
                        "Докторе, нормално ли е testosterone да пада след 30 години?"
                      </p>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className="flex items-start gap-4 ml-14">
                    <div className="flex-1">
                      <div className="bg-neutral-50 rounded-lg p-6 border-l-4 border-blue-500">
                        <p className="text-base text-neutral-700 leading-relaxed mb-0">
                          "Това е един от най-големите митове в медицината. Да, средното ниво на testosterone леко намалява с възрастта - около 1-2% годишно след 30-та година. Но това което виждам в практиката си е драматично различно."
                        </p>

                        <p className="text-base text-neutral-700 leading-relaxed mb-0 mt-4">
                          "Мъж на 35 години днес има testosterone нива на 50-годишен от преди 20 години. Това не е 'нормално стареене'. Това е хормонална криза."
                        </p>

                        <p className="text-base text-neutral-700 leading-relaxed mb-0 mt-4">
                          "Причините са в модерния начин на живот: хроничен стрес, липса на сън, processed храни, endocrine disruptors в пластмаси и пестициди. Тялото ни е под атака от всички страни."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Question 2 */}
              <ArticleSection>
                <div className="mb-8">
                  {/* Question */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">Q</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-neutral-900 leading-relaxed">
                        "Как да разбера дали имам проблем с testosterone?"
                      </p>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className="flex items-start gap-4 ml-14">
                    <div className="flex-1">
                      <div className="bg-neutral-50 rounded-lg p-6 border-l-4 border-blue-500">
                        <p className="text-base text-neutral-700 leading-relaxed mb-0">
                          "Симптомите са коварни защото се развиват бавно. Повечето мъже ги приписват на 'стрес' или 'възраст'. Но когато ги събера всички, картината е ясна:"
                        </p>

                        <HighlightBox
                          title="Класически симптоми на low testosterone"
                          variant="warning"
                        >
                          <ul>
                            <li><strong>Енергия:</strong> Уморен си дори след 8 часа сън</li>
                            <li><strong>Мотивация:</strong> Липсва ти drive и focus</li>
                            <li><strong>Либидо:</strong> Намалено сексуално желание</li>
                            <li><strong>Мускули:</strong> Трудно качваш мускулна маса</li>
                            <li><strong>Мазнини:</strong> Коремна мазнина която не си отива</li>
                            <li><strong>Сън:</strong> Лошо качество на съня</li>
                            <li><strong>Настроение:</strong> Irritability и mood swings</li>
                          </ul>
                        </HighlightBox>

                        <p className="text-base text-neutral-700 leading-relaxed mb-0 mt-4">
                          "Ако имате 3 или повече от тези симптоми, препоръчвам blood test. Не гадайте - тествайте."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Question 3 */}
              <ArticleSection>
                <div className="mb-8">
                  {/* Question */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">Q</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-neutral-900 leading-relaxed">
                        "Кои са най-големите митове за testosterone които чувате?"
                      </p>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className="flex items-start gap-4 ml-14">
                    <div className="flex-1">
                      <div className="bg-neutral-50 rounded-lg p-6 border-l-4 border-blue-500">
                        <p className="text-base text-neutral-700 leading-relaxed mb-0">
                          "Има няколко опасни мита които вредят на пациентите ми:"
                        </p>

                        <div className="my-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <h4 className="font-bold text-red-900 mb-2">Мит #1: "Това е нормално за възрастта"</h4>
                          <p className="text-red-800 text-sm">
                            "Лекарите казват това защото не знаят как да помогнат. Но low testosterone на 35 години НЕ е нормално."
                          </p>
                        </div>

                        <div className="my-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <h4 className="font-bold text-red-900 mb-2">Мит #2: "Добавките сами ще оправят всичко"</h4>
                          <p className="text-red-800 text-sm">
                            "Добавките помагат, но са само 20% от решението. Останалите 80% са lifestyle фактори."
                          </p>
                        </div>

                        <div className="my-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <h4 className="font-bold text-red-900 mb-2">Мит #3: "TRT е единственият вариант"</h4>
                          <p className="text-red-800 text-sm">
                            "Testosterone replacement therapy създава зависимост. Natural optimization е по-добро дългосрочно решение."
                          </p>
                        </div>

                        <p className="text-base text-neutral-700 leading-relaxed mb-0 mt-4">
                          "Тези митове държат мъжете в порочен кръг от frustration и wasted money."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Question 4 */}
              <ArticleSection>
                <div className="mb-8">
                  {/* Question */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">Q</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-neutral-900 leading-relaxed">
                        "Какво наистина работи за естествена оптимизация?"
                      </p>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className="flex items-start gap-4 ml-14">
                    <div className="flex-1">
                      <div className="bg-neutral-50 rounded-lg p-6 border-l-4 border-blue-500">
                        <p className="text-base text-neutral-700 leading-relaxed mb-0">
                          "След 847 пациенти, знам какво работи. Ето системния подход:"
                        </p>

                        <HighlightBox
                          title="The 5-Pillar Protocol"
                          variant="success"
                        >
                          <ul>
                            <li><strong>Sleep Optimization (35%):</strong> 7.5-8 часа deep sleep. 80% от testosterone се произвежда нощем.</li>
                            <li><strong>Training Strategy (25%):</strong> Heavy compounds + HIIT. Natural testosterone boost.</li>
                            <li><strong>Nutrition Protocol (20%):</strong> Zinc, Magnesium, Vitamin D3 + nutrient timing.</li>
                            <li><strong>Stress Management (15%):</strong> Cortisol control = testosterone preservation.</li>
                            <li><strong>Supplementation (5%):</strong> Targeted, evidence-based ingredients.</li>
                          </ul>
                        </HighlightBox>

                        <p className="text-base text-neutral-700 leading-relaxed mb-0 mt-4">
                          "Това не е random добавки. Това е systematic approach който адресира всички фактори simultaneously."
                        </p>

                        <ProductMention
                          productName="Testograph системата"
                          link={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=product-mention-1`}
                          description="За пациентите си препоръчвам structured protocol който включва"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Question 5 */}
              <ArticleSection>
                <div className="mb-8">
                  {/* Question */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">Q</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-neutral-900 leading-relaxed">
                        "Колко време отнема да се видят резултати?"
                      </p>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className="flex items-start gap-4 ml-14">
                    <div className="flex-1">
                      <div className="bg-neutral-50 rounded-lg p-6 border-l-4 border-blue-500">
                        <p className="text-base text-neutral-700 leading-relaxed mb-0">
                          "Резултатите идват на етапи, не изведнъж:"
                        </p>

                        <div className="my-6 p-4 bg-green-50 rounded-lg border border-green-200">
                          <h4 className="font-bold text-green-900 mb-3">Timeline на резултатите:</h4>

                          <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                              <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                              <div>
                                <p className="font-semibold text-green-800">Дни 1-7:</p>
                                <p className="text-green-700">По-добро качество на съня, повече енергия сутрин</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                              <div>
                                <p className="font-semibold text-green-800">Дни 8-21:</p>
                                <p className="text-green-700">Mental clarity се подобрява, motivation се връща</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                              <div>
                                <p className="font-semibold text-green-800">Дни 22-60:</p>
                                <p className="text-green-700">Testosterone levels се покачват, libido се връща</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
                              <div>
                                <p className="font-semibold text-green-800">Дни 61-90:</p>
                                <p className="text-green-700">Muscle gains, fat loss, sustained energy</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-base text-neutral-700 leading-relaxed mb-0 mt-4">
                          "Повечето пациенти виждат първите промени в рамките на 2 седмици. Но пълните резултати отнемат 90 дни."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Question 6 */}
              <ArticleSection>
                <div className="mb-8">
                  {/* Question */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">Q</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-neutral-900 leading-relaxed">
                        "Какво бихте казали на мъж който се колебае да започне?"
                      </p>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className="flex items-start gap-4 ml-14">
                    <div className="flex-1">
                      <div className="bg-neutral-50 rounded-lg p-6 border-l-4 border-blue-500">
                        <p className="text-base text-neutral-700 leading-relaxed mb-0">
                          "Бих му казал: 'Представи си живота си след 5 години. Искаш ли да си същият както сега - уморен, unmotivated, с ниска енергия? Или искаш да си energetic, focused, confident?'"
                        </p>

                        <p className="text-base text-neutral-700 leading-relaxed mb-0 mt-4">
                          "Testosterone optimization не е vanity project. Това е health investment. Когато хормоните ти са балансирани, всичко се подобрява - работа, relationships, fitness, mental health."
                        </p>

                        <p className="text-base text-neutral-700 leading-relaxed mb-0 mt-4">
                          "Най-голямата грешка която виждам е мъже които чакат 'перфектния момент'. Няма перфектен момент. Има само сега."
                        </p>

                        <PullQuote
                          quote="Здравето не е дестинация. Това е journey. И колкото по-рано започнеш, толкова по-добре ще се чувстваш."
                          attribution="Д-р Георги Петров"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Question 7 */}
              <ArticleSection>
                <div className="mb-8">
                  {/* Question */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">Q</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-neutral-900 leading-relaxed">
                        "Какво препоръчвате на пациентите си за начало?"
                      </p>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className="flex items-start gap-4 ml-14">
                    <div className="flex-1">
                      <div className="bg-neutral-50 rounded-lg p-6 border-l-4 border-blue-500">
                        <p className="text-base text-neutral-700 leading-relaxed mb-0">
                          "Започвам с основите. Преди да препоръчам каквато и да е система, пациентите ми трябва да направят 3 неща:"
                        </p>

                        <HighlightBox
                          title="Първите 3 стъпки"
                          variant="info"
                        >
                          <ul>
                            <li><strong>Blood test:</strong> Знайте къде сте сега. Не гадайте.</li>
                            <li><strong>Sleep audit:</strong> Проследете съня си за 1 седмица.</li>
                            <li><strong>Supplement review:</strong> Покажете ми какво приемате сега.</li>
                          </ul>
                        </HighlightBox>

                        <p className="text-base text-neutral-700 leading-relaxed mb-0 mt-4">
                          "След това препоръчвам systematic approach. Не random добавки, а structured protocol който адресира всички фактори."
                        </p>

                        <p className="text-base text-neutral-700 leading-relaxed mb-0 mt-4">
                          "За мъже които искат guided approach, препоръчвам Testograph системата. Тя включва всичко необходимо - от nutrition protocols до progress tracking."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* Final CTA */}
              <SoftCTA
                headline="Готов да започнеш testosterone optimization journey?"
                description="Д-р Петров препоръчва systematic approach за 847+ пациенти. Natural, sustainable, doctor-approved."
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
        </div>
      </main>
    </div>
  );
}
