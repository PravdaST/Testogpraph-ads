import { Metadata } from 'next';
import ArticleBody, { ArticleSection, PullQuote, HighlightBox } from '@/components/advertorial/ArticleBody';
import SoftCTA, { ProductMention } from '@/components/advertorial/SoftCTA';
import Disclaimer from '@/components/advertorial/Disclaimer';

/**
 * Testosterone Secret Advertorial Page
 *
 * Editorial-style landing page designed to educate and convert.
 * Built with Next.js 14 App Router for optimal performance.
 *
 * Features:
 * - Server-side rendering for fast initial load
 * - SEO-optimized metadata
 * - Mobile-first responsive design
 * - Accessibility compliance (WCAG 2.1 AA)
 * - UTM tracking on all CTAs
 * - Trust-building editorial design
 */

// SEO Metadata - Next.js 14 App Router
export const metadata: Metadata = {
  title: 'Математиката е проста: Защо 67 лв за система бият 500 лв за отделни части (разбивка на цените)',
  description: 'Иван Петров изхарчи 1043 лв за добавки и треньори без резултат. Д-р Петров му показа как да получи 100% от формулата за 67 лв. Ето математиката.',
  keywords: [
    'тестостерон',
    'мъжко здраве',
    'фитнес plateau',
    'сила',
    'мускули',
    'bench press',
    'хормони',
    'ендокринология',
    'естествено повишаване на тестостерон'
  ],
  authors: [{ name: 'Д-р Емил Георгиев' }],
  openGraph: {
    title: 'Тренирах 18 месеца без резултат. Изхарчих 1043 лв. Докато не открих скритата причина',
    description: '32-годишен мъж от София споделя как една случайна среща с ендокринолог промени всичко. Bench press: от 100 кг на 125 кг за 6 месеца.',
    type: 'article',
    locale: 'bg_BG',
    siteName: 'Health Insights BG',
    images: [
      {
        url: '/images/testosterone-secret-og.jpg', // TODO: Add actual image
        width: 1200,
        height: 630,
        alt: 'Иван Петров - трансформация след 6 месеца хормонална оптимизация'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '18 месеца stuck прогрес. 1043 лв изхарчени. Докато не открих причината',
    description: 'Историята на 32-годишен мъж от София и как една среща с ендокринолог промени всичко.',
  },
  robots: {
    index: true,
    follow: true
  }
};

// UTM Parameters for tracking
const PERFIELD_SHOP_URL = 'https://shop.testograph.eu/products/testograph-starter';
const UTM_PARAMS = '?utm_source=advertorial&utm_medium=fitness-plateau&utm_campaign=cold-traffic-2025';

export default function TestosteroneSecretPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Urgency Header */}
      <div className="w-full bg-[#242424] py-3 sm:py-4">
        <p className="text-white text-center text-sm sm:text-base font-semibold">
          🔥 РАЗКРИТИЕ: Системата която 127 българи използват за +40% testosterone naturally
        </p>
      </div>

      {/* Main Article Container - 2 column layout */}
      <main className="container mx-auto px-5 py-8 sm:py-12 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
          {/* Main Content Column */}
          <div className="min-w-0">
            {/* Hero Headline */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-[42px] font-sans font-bold leading-[130%] text-neutral-900 mb-6">
                32-годишен мъж от София: 'Тренирах 18 месеца без резултат. Докато не открих скритата причина'
              </h1>
              <h2 className="font-sans text-xl text-neutral-700 leading-[150%]">
                Иван Петров изхарчи 1043 лв за добавки и треньори. Нищо не работеше.
                Докато един ендокринолог не му разкри истината
              </h2>
            </div>

            {/* Author & Meta */}
            <div className="mb-8 pb-6 border-b border-neutral-200">
              <p className="text-sm font-sans text-neutral-600">
                <span className="font-semibold">Автор:</span> Д-р Емил Георгиев, Ендокринолог
              </p>
              <p className="text-sm font-sans text-neutral-500 mt-1">
                15 януари 2025 • 8 мин четене
              </p>
            </div>

            {/* Article Content */}
        <ArticleBody>
          <ArticleSection>
            <p>
              <strong>СОФИЯ</strong> — Иван Петров, 32 години, от София не можеше да си обясни защо.
            </p>

            <p>
              Въпреки 4 тренировки седмично в продължение на 18 месеца, бенч press-ът му остана блокиран на 100 кг.
              Същите тежести. Същите повторения. Нулев прогрес.
            </p>

            <p>
              Опита креатин от iHerb за 45 лв. После "тесто бустер" за 89 лв. Даже плати на онлайн треньор
              200 лв месечно за 3 месеца. После 120 лв на нутриционист за персонализиран хранителен план.
            </p>

            <p>
              <strong>Общо изхарчени: 1043 лв. Резултат: нула.</strong>
            </p>

            <p>
              "Започвах да се чувствам луд," споделя Иван. "Всички ми казваха - яж повече, тренирай по-усилено,
              спи повече. Правех всичко това. Но нищо не се случваше."
            </p>

            <PullQuote
              quote="Толкова мъже се чувстват дефектни, защото им казват да правят неща, които не работят. Проблемът не е в тях. Проблемът е че работят само с 20% от формулата."
              attribution="Д-р Георги Петров, ендокринолог"
            />

            <h2>Случайната среща, която промени всичко</h2>

            <p>
              Докато една вечер, на рожден ден на приятел, Иван не се запозна с д-р Георги Петров —
              ендокринолог, специализирал мъжко здраве и хормонална оптимизация.
            </p>

            <p>
              "Споменах му мимоходом за ситуацията. Очаквах стандартния съвет - 'тренирай по-усилено'
              или 'яж повече протеин'. Вместо това той ме попита: 'Кога последно си проверявал хормоните си?'"
            </p>

            <p>
              Иван никога не беше мислил за това. "За мен тестостеронът беше проблем на 50-годишни мъже,
              не на 32-годишни."
            </p>

            <p>
              Д-р Петров обясни нещо шокиращо: <strong>Средното ниво на тестостерон при мъжете между 25-45
              години е паднало с 22% за последните 20 години.</strong> Това не е нормално стареене. Това е
              епидемия, причинена от начина ни на живот.
            </p>

            <HighlightBox
              title="Защо толкова мъже имат този проблем?"
              variant="info"
            >
              <p>
                Хроничен стрес + лош сън + дефицит на хранителни вещества + възпаление от обработени храни
                = Хормонална катастрофа.
              </p>
              <p>
                "Не е въпрос на възраст. 32-годишен мъж може да има нива на 50-годишен, ако живее в хроничен
                стрес и спи по 5-6 часа," обяснява д-р Петров.
              </p>
            </HighlightBox>
          </ArticleSection>

          <ArticleSection>
            <h2>"Работиш с 20% от формулата"</h2>

            <p>
              Д-р Петров нарисува проста схема на салфетка, която промени перспективата на Иван завинаги.
            </p>

            <p>
              <strong>100% Formula за мускулен растеж и сила:</strong>
            </p>

            <ul>
              <li><strong>40%</strong> — Хормонално здраве (тестостерон, растежен хормон, инсулинова чувствителност)</li>
              <li><strong>25%</strong> — Възстановяване (сън, стрес управление, адекватна почивка)</li>
              <li><strong>20%</strong> — Тренировки (интензивност, обем, техника)</li>
              <li><strong>15%</strong> — Хранене (калории, макроси, timing)</li>
            </ul>

            <p>
              "Виждаш ли проблема? — попита д-р Петров. — Ти фокусираш 100% усилие върху 20% от формулата.
              Останалите 80% са напълно игнорирани."
            </p>

            <PullQuote
              quote="Можеш да имаш перфектна диета и тренировъчен план, но ако хормоните ти са на ниво на 55-годишен, тялото просто няма капацитет да прогресира."
              attribution="Д-р Георги Петров"
            />

            <p>
              Иван осъзна че проблемът не е в него. Проблемът е че никой не му е обяснил как работи системата.
            </p>

            {/* Expert Avatar - Visual break */}
            <div className="my-10 flex items-center gap-4 p-6 bg-neutral-50 rounded-xl">
              <img
                src="/funnel/georgi-avatar.jpg"
                alt="Д-р Георги Петров"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-neutral-900">Д-р Георги Петров</p>
                <p className="text-sm text-neutral-600">Ендокринолог, специалист по мъжко здраве</p>
                <p className="text-xs text-neutral-500 mt-1">12+ години опит в хормонална оптимизация</p>
              </div>
            </div>
          </ArticleSection>

          {/* Story Bridge - Maintains curiosity without asking for click */}
          <aside className="my-12 p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border-l-4 border-primary">
            <p className="text-lg text-neutral-800 italic mb-4">
              "Разбирам концепцията," каза Иван. "Но как това работи практически?
              Как някой може да адресира всичките 100% от формулата без да плаща 500+ лв месечно?"
            </p>
            <p className="text-base text-neutral-600">
              Това което д-р Петров обясни промени перспективата на Иван завинаги...
            </p>
          </aside>

          <ArticleSection>
            <h2>Математиката: Защо 67 лв бият 500 лв</h2>

            <p>
              "Преди да започнеш каквото и да е," каза д-р Петров на Иван, "нека направим математиката."
            </p>

            <div className="my-8 p-6 bg-amber-50 rounded-xl border-2 border-amber-200">
              <h4 className="font-bold text-amber-900 mb-4">Иван's предишни разходи (18 месеца)</h4>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-amber-300">
                  <span className="text-amber-800">Креатин (iHerb)</span>
                  <span className="font-bold text-amber-900">45 лв</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-300">
                  <span className="text-amber-800">Тесто бустер добавки</span>
                  <span className="font-bold text-amber-900">89 лв</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-300">
                  <span className="text-amber-800">Онлайн треньор (3 месеца)</span>
                  <span className="font-bold text-amber-900">600 лв</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-300">
                  <span className="text-amber-800">Нутриционист консултация</span>
                  <span className="font-bold text-amber-900">120 лв</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-300">
                  <span className="text-amber-800">Протеин и добавки</span>
                  <span className="font-bold text-amber-900">189 лв</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-amber-200 rounded-lg px-4">
                  <span className="font-bold text-amber-900">ОБЩО ИЗХАРЧЕНО:</span>
                  <span className="font-bold text-amber-900 text-xl">1043 лв</span>
                </div>
              </div>
            </div>

            <p>
              "Това е типичната грешка," обясни д-р Петров. "Мъжете купуват отделни части и се надяват да се сглобят сами."
            </p>

            <div className="my-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-4">Традиционният подход (отделни части)</h4>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-blue-300">
                  <span className="text-blue-800">Добавки (месечно)</span>
                  <span className="font-bold text-blue-900">80-150 лв</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-300">
                  <span className="text-blue-800">Онлайн треньор</span>
                  <span className="font-bold text-blue-900">200 лв/месец</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-300">
                  <span className="text-blue-800">Нутриционист</span>
                  <span className="font-bold text-blue-900">150 лв/месец</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-300">
                  <span className="text-blue-800">Tracking apps</span>
                  <span className="font-bold text-blue-900">30 лв/месец</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-blue-200 rounded-lg px-4">
                  <span className="font-bold text-blue-900">ПЪРВИ МЕСЕЦ:</span>
                  <span className="font-bold text-blue-900 text-xl">460 лв</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-blue-200 rounded-lg px-4">
                  <span className="font-bold text-blue-900">СЛЕДВАЩИ МЕСЕЦИ:</span>
                  <span className="font-bold text-blue-900 text-xl">310 лв</span>
                </div>
              </div>
            </div>

            <p>
              "Проблемът е че получаваш части, не система," обясни д-р Петров. "И всяка част е отделен бизнес с отделни маржове."
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
                  <span className="text-green-800">Doctor-approved formula</span>
                  <span className="font-bold text-green-900">✓</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-green-300">
                  <span className="text-green-800">30-дневна гаранция</span>
                  <span className="font-bold text-green-900">✓</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-green-200 rounded-lg px-4">
                  <span className="font-bold text-green-900">СПЕСТЯВАШ:</span>
                  <span className="font-bold text-green-900 text-xl">393 лв/месец</span>
                </div>
              </div>
            </div>

            <p>
              "Когато всичко е оптимизирано да работи заедно, не ти трябват отделни 'експерти' за всяка част," обясни д-р Петров.
            </p>

            <ProductMention
              productName="Testograph системата"
              link={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=product-mention-1`}
              description="За хора, които искат системно решение, д-р Петров често препоръчва"
            />
          </ArticleSection>

          <ArticleSection>
            <h2>Какво направи Иван?</h2>

            <p>
              След математиката, Иван реши да тества препоръките му. Но този път беше различно.
              Нямаше повече хаотични опити със случайни добавки. Имаше система.
            </p>

            <p>
              Д-р Петров обясни че за разлика от синтетичните хормонални терапии (които създават зависимост
              и са с множество странични ефекти), естественият подход фокусира върху това да даде на тялото
              <strong>правилните суровини и условия</strong> да произвежда собствения си тестостерон.
            </p>

            <h3>Системата се състои от 4 ключови елемента:</h3>

            <p>
              <strong>1. Хранителна оптимизация</strong><br />
              Тялото не може да произвежда хормони без необходимите суровини:
            </p>

            <ul>
              <li><strong>Магнезий</strong> — активира над 300 ензимни реакции, включително за синтез на тестостерон</li>
              <li><strong>Цинк</strong> — директно участва в производството на тестостерон (дефицитът намалява нивата с до 40%)</li>
              <li><strong>Витамин D3</strong> — действа като хормон; мъжете с оптимални нива имат средно 25% по-висок тестостерон</li>
              <li><strong>Омега-3 мастни киселини</strong> — намаляват възпалението, което блокира хормоналните рецептори</li>
            </ul>

            <p>
              <strong>2. Адаптогенна подкрепа</strong><br />
              Ашваганда, родиола и други адаптогени помагат на тялото да управлява стреса без да повишава кортизола.
            </p>

            <p>
              <strong>3. Стрес управление</strong><br />
              Кортизолът (стрес хормонът) и тестостеронът използват същите биологични прекурсори. Колкото повече
              кортизол произвеждаш, толкова по-малко тестостерон можеш да направиш.
            </p>

            <p>
              <strong>4. Качествен сън</strong><br />
              80% от дневното производство на тестостерон се случва по време на дълбокия сън. Една седмица със сън
              под 5 часа може да намали тестостерона с 10-15%.
            </p>

            <PullQuote
              quote="Не търся магия. Търся система която работи последователно. Това което д-р Петров ми обясни имаше смисъл - не само за мускулите, но и за енергията, съня, цялостното ми здраве."
              attribution="Иван Петров"
            />

            <ProductMention
              productName="Testograph системата"
              link={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=product-mention-1`}
              description="За хора, които искат системно решение, д-р Петров често препоръчва"
            />
          </ArticleSection>

          <ArticleSection>
            <h2>Резултатите</h2>

            <p>
              Иван започна да следва системния подход. Не очакваше чудеса след 7 дни. Но това което се случи
              го изненада.
            </p>

            <p>
              <strong>След 14 дни:</strong> Първото което забеляза беше енергията. "Събуждах се без будилник.
              Чувствах се освежен. Либидото се върна на нивото от 25-годишен."
            </p>

            <p>
              <strong>След 30 дни:</strong> Бенч press-ът му скочи на 105 кг. "Първото увеличение за 18 месеца.
              Не можех да повярвам."
            </p>

            <p>
              <strong>След 90 дни:</strong> Иван вдигна 115 кг на бенч. Плюс 2.3 кг чиста мускулна маса (измерена с
              InBody скенер). Коремната мазнина намаля с 3%.
            </p>

            {/* Before/After Timeline Grid - Visual proof */}
            <div className="my-12 sm:my-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                Трансформацията: 90-дневен timeline
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                {/* Before - Day 0 */}
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-neutral-900 text-white px-4 py-2 rounded-lg font-bold z-10">
                    Day 0
                  </div>
                  <img
                    src="/funnel/martin-before.jpg"
                    alt="Преди протокола - Day 0"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="mt-4 text-center">
                    <p className="text-sm font-semibold text-neutral-700">
                      Тестостерон: 320 ng/dL
                    </p>
                    <p className="text-sm text-neutral-600">
                      Bench press: 100 кг (stuck 18 месеца)
                    </p>
                  </div>
                </div>

                {/* After - Day 90 */}
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold z-10">
                    Day 90
                  </div>
                  <img
                    src="/funnel/martin-after.jpg"
                    alt="След протокола - Day 90"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="mt-4 text-center">
                    <p className="text-sm font-semibold text-green-700">
                      Тестостерон: 448 ng/dL (+40%)
                    </p>
                    <p className="text-sm text-neutral-600">
                      Bench press: 115 кг (+15 кг)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <HighlightBox
              title="Защо системата работи?"
              variant="success"
            >
              <p>
                Не е магия. Просто за първи път тялото на Иван получи всичко от което се нуждае да произвежда
                хормони оптимално. Вместо да работи с 20% от формулата, той работеше със 100%.
              </p>
            </HighlightBox>
          </ArticleSection>


          <ArticleSection>
            <h2>Иван днес</h2>

            {/* Protagonist Avatar - Visual break */}
            <div className="my-8 flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-600">
              <img
                src="/funnel/ivan-avatar.jpg"
                alt="Иван Петров, 32 години"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <p className="font-bold text-lg text-neutral-900">Иван Петров, 32</p>
                <p className="text-sm text-neutral-600">София, България</p>
                <p className="text-xs text-green-700 font-semibold mt-1">6 месеца след започване на протокола</p>
              </div>
            </div>

            <p>
              Минаха 6 месеца откакто Иван започна да следва системата. Bench press-ът му е вече на 125 кг.
              Но, както той казва, цифрите не са най-важното.
            </p>

            <p>
              "Най-голямата промяна е в начина, по който се чувствам всеки ден. Събуждам се с енергия.
              Концентрацията ми в работа е laser-focused. Либидото е на нивото от 20-те ми. Чувствам се
              като мъж отново."
            </p>

            <p>
              Иван сподели че съжалява само за едно: "Че не открих това преди 18 месеца. Щях да спестя
              1043 лв, 18 месеца frustration и безброй часове в залата без резултат."
            </p>

            <PullQuote
              quote="Ако си на 30+ години и силата ти е stuck, независимо колко усилено тренираш - не си сам. И проблемът не е в теб. Просто работиш с 20% от формулата."
              attribution="Иван Петров"
            />
          </ArticleSection>

          <ArticleSection>
            <h2>Заключение от д-р Петров</h2>

            <p>
              Историята на Иван не е уникална. Хиляди български мъже между 25-45 години преживяват същото —
              тренират усилено, но резултатите не идват.
            </p>

            <p>
              Проблемът не е в теб. Не си "генетично ограничен". Проблемът е че никой не ти е обяснил как
              работи системата. Че мускулният растеж не е само за тренировки и протеин. Че хормоналното
              здраве е 40% от формулата.
            </p>

            <p>
              Добрата новина? Това може да се коригира. Естествено, системно и без странични ефекти.
            </p>

            <HighlightBox
              title="Следващата стъпка"
              variant="success"
            >
              <p>
                Ако се разпознаваш в историята на Иван - stuck прогрес въпреки усилията, намалена енергия,
                frustration - може да е време да погледнеш на 100% от формулата, не само на 20%.
              </p>
            </HighlightBox>

            <p>
              "Тялото иска да бъде силно и здраво," казва д-р Петров. "Просто трябва да му дадеш правилните
              условия. А това започва с хормоналното здраве."
            </p>
          </ArticleSection>

          {/* Final CTA - Soft journalistic tone */}
          <SoftCTA
            headline="Искаш да научиш повече за системата?"
            description="Историята на Иван е една от многото. Системният подход към testosterone optimization е relatively new в България, но rapidly gaining recognition."
            ctaText="Виж как работи TESTOGRAPH системата"
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
                    TESTOGRAPH Complete System
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    5-factor testosterone optimization protocol
                  </p>
                </div>

                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Hormonal building blocks (Zinc, Magnesium, D3)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Adaptogenic stress management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Sleep optimization protocol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Training & nutrition guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>90-day progress tracker</span>
                  </li>
                </ul>

                <a
                  href={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=sidebar-cta-1`}
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Виж пълната система →
                </a>

                <p className="text-xs text-neutral-500 text-center mt-4">
                  30-дневна гаранция • Natural ingredients • No hormones
                </p>
              </div>

              {/* Premium Digital Offer */}
              <div className="bg-white border-2 border-neutral-200 rounded-xl p-6">
                <div className="text-xs uppercase tracking-wider text-primary font-bold mb-2">
                  🎁 Bonus Value
                </div>
                <h4 className="font-bold text-neutral-900 mb-3">
                  Digital Testosterone Optimization Guide
                </h4>
                <img
                  src="/funnel/digital-guide-mockup.png"
                  alt="Digital Guide"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <p className="text-sm text-neutral-600 mb-4">
                  Get instant access to the complete protocol PDF when you order today.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>90-day meal plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Training templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Blood test interpretation guide</span>
                  </li>
                </ul>
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
                  "Testosterone optimization не е магия. Просто трябва да дадеш на тялото правилните conditions да произвежда хормони naturally."
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Tracking Scripts Placeholder */}
      {/* TODO: Add Facebook Pixel, Google Analytics, etc. */}
      {/*
      <Script id="fb-pixel">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>
      */}
    </div>
  );
}
