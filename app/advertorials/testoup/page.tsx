import React from 'react';
import type { Metadata } from 'next';
import CountdownTimer from '@/components/advertorial/CountdownTimer';
import SoftCTA from '@/components/advertorial/SoftCTA';
import ComparisonTable from '@/components/advertorial/ComparisonTable';
import FAQAccordion from '@/components/advertorial/FAQAccordion';

const PRODUCT_LINK = 'https://shop.testograph.eu/products/testoup';

export const metadata: Metadata = {
  title: 'На 38 години се събуждам уморен. След 8 часа сън. | TestoUP',
  description: 'Тестостеронът започва да пада след 30. Всяка година с 1-2%. TestoUP - първата цялостна система за тестостерон оптимизация в България. 247+ мъже вече виждат резултати.',
  openGraph: {
    title: 'На 38 години се събуждам уморен. След 8 часа сън.',
    description: 'TestoUP система: 12 активни съставки + тренировъчни протоколи + Telegram общност. 89% виждат резултати за 21-30 дни.',
    images: ['/funnel/testoup-hero.jpg'],
  },
};

// Comparison Table Data
const comparisonItems = [
  { feature: '12 активни съставки', hasProduct: true, hasCompetitor: false },
  { feature: 'Тренировъчен протокол включен', hasProduct: true, hasCompetitor: false },
  { feature: 'План за храна', hasProduct: true, hasCompetitor: false },
  { feature: 'Ежедневно проследяване', hasProduct: true, hasCompetitor: false },
  { feature: 'Telegram общност (247 мъже)', hasProduct: true, hasCompetitor: false },
  { feature: 'Клинично тествани дози', hasProduct: true, hasCompetitor: false },
  { feature: '30 дни гаранция', hasProduct: true, hasCompetitor: false },
];

// FAQ Data
const faqItems = [
  {
    question: 'Безопасно ли е TestoUP?',
    answer: 'Да. TestoUP съдържа 12 натурални съставки с клинично доказана безопасност. Без хормони, без рецепта. Препоръчително е консултация с лекар ако приемаш медикаменти или имаш хронични заболявания.',
  },
  {
    question: 'Кога ще видя резултати?',
    answer: 'Повечето мъже забелязват: 7-10 дни - по-добър сън, повече енергия сутрин; 14-21 дни - либидото се подобрява; 30-60 дни - видимо повишаване на тестостерон (потвърдено с кръвни). 89% от потребителите виждат резултати в първите 30 дни.',
  },
  {
    question: 'Как става доставката?',
    answer: 'Експресна доставка до адрес или Speedy офис. Обикновено пристига за 2-3 работни дни. Безплатна доставка при поръчки над 100 лв. Опаковката е дискретна - никой няма да разбере какво е вътре.',
  },
  {
    question: 'Има ли странични ефекти?',
    answer: 'TestoUP е натурална добавка без синтетични хормони. Страничните ефекти са редки и леки (напр. стомашен дискомфорт при някои). Ако имаш съмнения, консултирай се с лекар преди употреба.',
  },
];

export default function TestoUPAdvertorial() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">

      {/* Section 1: Hero (Above the Fold) */}
      <section
        className="relative py-16 md:py-24 px-4"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('/funnel/testoup-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            На 38 години се събуждам уморен.<br />
            След 8 часа сън.
          </h1>

          <div className="flex items-center justify-center gap-3 text-neutral-300 text-sm mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">СГ</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Д-р Симеон Георгиев</div>
              <div className="text-xs">Ендокринолог с 15 години опит · 27 Окт 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">

        {/* Section 2: Problem Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Събуждаш се уморен. След 8 часа сън. Нещо не е наред.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Колегите ти на 40 излизат да тичат след работа. Ти едва дотътриш до дивана.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Жена ти инициира. Ти намираш извинение. Пак.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              "Уморен съм." "Главата ме боли." "Утре."
            </p>

            <p className="text-lg text-neutral-800 leading-relaxed mb-4 font-semibold">
              Проблемът не е мързелът. Не е възрастта.
            </p>

            <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
              Проблемът е че хормоните не работят.
            </p>
          </div>
        </section>

        {/* Section 3: Agitate */}
        <section className="mb-16 bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            Защо се чувстваш на 50, когато си на 38?
          </h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            Тестостеронът започва да пада след 30. Всяка година с 1-2%.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            На 38 имаш 20% по-малко тестостерон отколкото на 25.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            Резултат:
          </p>

          <ul className="space-y-2 mb-8">
            <li className="text-lg text-neutral-700">• Хронична умора</li>
            <li className="text-lg text-neutral-700">• Нулево либидо</li>
            <li className="text-lg text-neutral-700">• Мазнини на корем (дори да тренираш)</li>
            <li className="text-lg text-neutral-700">• Загуба на мускулна маса</li>
            <li className="text-lg text-neutral-700">• Мъгла в главата</li>
          </ul>

          <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-10">
            Докторът казва "нормално за възрастта"
          </h3>

          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            Правиш кръвни изследвания. Резултатът: "В референтните граници."
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Но долната граница е за 70-годишен мъж!
          </p>

          <p className="text-lg text-neutral-800 leading-relaxed font-semibold mb-8">
            На 38 не трябва да имаш тестостерон като на пенсионер.
          </p>

          <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-10">
            Игнорирането прави всичко по-лошо
          </h3>

          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            След 6 месеца:
          </p>

          <ul className="space-y-2 mb-6">
            <li className="text-lg text-neutral-700">• Още по-малко енергия</li>
            <li className="text-lg text-neutral-700">• Още повече коремче</li>
            <li className="text-lg text-neutral-700">• Още по-слабо либидо</li>
            <li className="text-lg text-neutral-700">• Напрежение в отношенията</li>
          </ul>

          <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
            Порочен кръг: нисък тестостерон → по-малко движение → още по-нисък тестостерон.
          </p>
        </section>

        {/* Section 4: Solution Introduction */}
        <section className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-2xl border-2 border-green-200">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6 text-center">
            Ето решението
          </h2>

          <p className="text-2xl text-neutral-900 leading-relaxed mb-10 text-center font-bold">
            TestoUP - Първата цялостна система за тестостерон оптимизация в България.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            {/* Product Image Placeholder */}
            <div className="w-full max-w-[400px] h-[400px] mx-auto bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center border-2 border-dashed border-neutral-300">
              <p className="text-sm text-neutral-600 font-semibold">TestoUP Product Bottle</p>
            </div>

            {/* Description + CTA */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Не само добавка. Цялостна система.
              </h3>

              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                TestoUP включва:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="text-lg text-neutral-700">• 12 активни съставки за тестостерон</li>
                <li className="text-lg text-neutral-700">• Точни тренировъчни протоколи (RPT метод)</li>
                <li className="text-lg text-neutral-700">• План за храна оптимизиран за хормони</li>
                <li className="text-lg text-neutral-700">• Ежедневно проследяване в приложение</li>
                <li className="text-lg text-neutral-700">• Достъп до Telegram общност (247 мъже вече вътре)</li>
                <li className="text-lg text-neutral-700">• Протокол за recovery и сън</li>
              </ul>

              <SoftCTA
                link={PRODUCT_LINK}
                ctaText="Виж как работи системата →"
                variant="minimal"
                className="w-full text-center"
              />
            </div>
          </div>
        </section>

        {/* Section 5: How-to-Use */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-10 text-center">
            Как работи TestoUP системата
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    Започваш с базовия протокол
                  </h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Вземаш 2 капсули сутрин с храна. 12-те активни съставки стартират процеса на оптимизация.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    Следваш тренировъчния план
                  </h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    3 тренировки седмично по 45 минути. RPT метод (Reverse Pyramid Training). Клек в сряда = +25% тестостерон.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    Проследяваш напредъка
                  </h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Всеки ден въвеждаш енергия, либидо, тренировка в приложението. Виждаш прогресията на живо.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-6 rounded-xl mt-8 text-center">
            <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
              Резултат: След 21-30 дни забелязваш разликата. След 60 дни - се чувстваш различен човек.
            </p>
          </div>
        </section>

        {/* Section 6: Comparison Table */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-10 text-center">
            TestoUP Система vs Стандартни добавки
          </h2>

          <ComparisonTable
            productName="TestoUP Система"
            competitorName="Стандартни добавки"
            items={comparisonItems}
          />
        </section>

        {/* Section 7: Social Proof */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-10 text-center">
            Резултати от реални мъже
          </h2>

          {/* Testimonial 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 md:p-10 rounded-2xl shadow-lg border border-blue-200 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center flex-shrink-0 border-2 border-white shadow-md">
                <span className="text-white font-bold text-2xl">ИД</span>
              </div>
              <div>
                <p className="text-xl font-bold text-neutral-900">Иван Д.</p>
                <p className="text-sm text-neutral-600">42 години, София</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                "Започнах TestoUP преди 2 месеца. Първото което забелязах - събуждам се с енергия. След седмица - либидото се върна. Жена ми усети разликата.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Сега тренирам 3 пъти седмично. Качвам тежести всяка седмица. Чувствам се като на 30.
              </p>

              <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
                Кръвните показаха +34% тестостерон след 60 дни. Докторът ми попита какво правя различно."
              </p>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-yellow-500 text-2xl">★★★★★</span>
              <span className="text-neutral-700 font-semibold ml-2">5/5</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 md:p-10 rounded-2xl shadow-lg border border-purple-200 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center flex-shrink-0 border-2 border-white shadow-md">
                <span className="text-white font-bold text-2xl">ГМ</span>
              </div>
              <div>
                <p className="text-xl font-bold text-neutral-900">Георги М.</p>
                <p className="text-sm text-neutral-600">38 години, Пловдив</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                "Имах всички симптоми. Умора, нулево либидо, коремче от никъде.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                След 30 дни на TestoUP:
              </p>

              <ul className="space-y-2 mb-4">
                <li className="text-lg text-neutral-700">• Енергия като на 25</li>
                <li className="text-lg text-neutral-700">• Либидо се върна</li>
                <li className="text-lg text-neutral-700">• 3кг мазнини долу, 2кг мускули нагоре</li>
              </ul>

              <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
                Не вярвах в добавки. Сега съм вярващ."
              </p>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-yellow-500 text-2xl">★★★★★</span>
              <span className="text-neutral-700 font-semibold ml-2">5/5</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-10 rounded-2xl shadow-lg border border-green-200 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center flex-shrink-0 border-2 border-white shadow-md">
                <span className="text-white font-bold text-2xl">ПК</span>
              </div>
              <div>
                <p className="text-xl font-bold text-neutral-900">Петър К.</p>
                <p className="text-sm text-neutral-600">45 години, Варна</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                "Докторът ми каза 'нормално за възрастта'. Отказах да приема това.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                TestoUP промени играта. След 60 дни:
              </p>

              <ul className="space-y-2 mb-4">
                <li className="text-lg text-neutral-700">• Тестостерон от 380 → 620 ng/dL</li>
                <li className="text-lg text-neutral-700">• Спя като бебе</li>
                <li className="text-lg text-neutral-700">• Мускулна маса +4кг</li>
                <li className="text-lg text-neutral-700">• Енергия цял ден</li>
              </ul>

              <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
                Чувствам се на 30, не на 45."
              </p>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-yellow-500 text-2xl">★★★★★</span>
              <span className="text-neutral-700 font-semibold ml-2">5/5</span>
            </div>
          </div>

          {/* Stats Box */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-neutral-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-black text-green-600 mb-2">247+</p>
                <p className="text-sm text-neutral-600 uppercase tracking-wide">МЪЖЕ СЛЕДВАТ TESTOUP</p>
              </div>
              <div>
                <p className="text-4xl font-black text-blue-600 mb-2">4.8/5</p>
                <p className="text-sm text-neutral-600 uppercase tracking-wide">ЗВЕЗДИ СРЕДНА ОЦЕНКА</p>
              </div>
              <div>
                <p className="text-4xl font-black text-purple-600 mb-2">89%</p>
                <p className="text-sm text-neutral-600 uppercase tracking-wide">ВИЖДАТ РЕЗУЛТАТИ ЗА 21-30 ДНИ</p>
              </div>
              <div>
                <p className="text-4xl font-black text-orange-600 mb-2">+28%</p>
                <p className="text-sm text-neutral-600 uppercase tracking-wide">СРЕДНО ПОВИШЕНИЕ ТЕСТОСТЕРОН</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Pricing + Urgency */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-600 to-blue-600 p-10 md:p-12 rounded-2xl shadow-2xl text-center mb-8">
            <div className="mb-8">
              <p className="text-red-100 text-sm uppercase tracking-widest mb-2 font-bold">ОГРАНИЧЕНА ОФЕРТА</p>
              <CountdownTimer targetHours={24} variant="large" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-10">
              Избери твоя TestoUP пакет
            </h2>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Card 1 - Starter */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Starter</h3>
                <p className="text-sm text-neutral-600 mb-6">1x TestoUP (30 дни)</p>

                <div className="text-5xl font-black text-green-600 mb-6">67 лв</div>

                <div className="text-left space-y-3 mb-8">
                  <p className="text-neutral-700">• 1 опаковка TestoUP</p>
                  <p className="text-neutral-700">• Тренировъчни протоколи</p>
                  <p className="text-neutral-700">• План за храна</p>
                  <p className="text-neutral-700">• Приложение за проследяване</p>
                </div>

                <SoftCTA
                  link={PRODUCT_LINK}
                  ctaText="Започвам с 1 опаковка"
                  variant="boxed"
                  className="w-full text-center"
                />
              </div>

              {/* Card 2 - Most Popular */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-4 border-yellow-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-6 py-2 rounded-full">
                  <span className="text-sm font-bold text-neutral-900">НАЙ-ПОПУЛЯРЕН</span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-2 mt-4">Best Value</h3>
                <p className="text-sm text-neutral-600 mb-6">2x TestoUP (60 дни)</p>

                <div className="mb-2">
                  <span className="text-2xl text-neutral-400 line-through">134 лв</span>
                </div>
                <div className="text-5xl font-black text-green-600 mb-2">120 лв</div>
                <p className="text-sm text-green-600 font-semibold mb-6">Спестяваш 14 лв</p>

                <div className="text-left space-y-3 mb-8">
                  <p className="text-neutral-700">• 2 опаковки TestoUP</p>
                  <p className="text-neutral-700">• Telegram общност</p>
                  <p className="text-neutral-700">• Персонализирани съвети</p>
                  <p className="text-neutral-700">• Priority поддръжка</p>
                </div>

                <SoftCTA
                  link={PRODUCT_LINK}
                  ctaText="Избирам 2x пакет"
                  variant="boxed"
                  className="w-full text-center bg-green-500 hover:bg-green-400"
                />
              </div>

              {/* Card 3 - Best Value */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Maximum</h3>
                <p className="text-sm text-neutral-600 mb-6">3x TestoUP (90 дни)</p>

                <div className="mb-2">
                  <span className="text-2xl text-neutral-400 line-through">201 лв</span>
                </div>
                <div className="text-5xl font-black text-green-600 mb-2">159 лв</div>
                <p className="text-sm text-green-600 font-semibold mb-6">Спестяваш 42 лв</p>

                <div className="text-left space-y-3 mb-8">
                  <p className="text-neutral-700">• 3 опаковки TestoUP</p>
                  <p className="text-neutral-700">• Recovery протокол</p>
                  <p className="text-neutral-700">• Blood work analysis</p>
                  <p className="text-neutral-700">• VIP поддръжка</p>
                </div>

                <SoftCTA
                  link={PRODUCT_LINK}
                  ctaText="Искам 3x пакет"
                  variant="boxed"
                  className="w-full text-center"
                />
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-white">
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-3xl">🛡️</span>
                <p className="text-sm">30 дни гаранция</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-3xl">📦</span>
                <p className="text-sm">Безплатна доставка</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-3xl">🔒</span>
                <p className="text-sm">ДИСКРЕТНА опаковка</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-3xl">✓</span>
                <p className="text-sm">Сигурна поръчка</p>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="bg-neutral-100 p-8 rounded-xl border-2 border-neutral-300 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4 text-center">
              🛡️ НАШАТА ГАРАНЦИЯ
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed text-center mb-2">
              30 дни. Без въпроси. Без условия.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed text-center mb-2">
              Ако не си доволен от резултатите - връщаме всеки лев.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed text-center mb-2">
              Проста, ясна, без малък шрифт.
            </p>
            <p className="text-lg text-neutral-800 leading-relaxed text-center font-semibold">
              Поемаме риска. Не ти.
            </p>
          </div>

          {/* Privacy Note */}
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
              🔒 100% ПОВЕРИТЕЛНО
            </h3>
            <div className="space-y-2 text-center">
              <p className="text-neutral-700">Дискретна опаковка без индикация на съдържанието.</p>
              <p className="text-neutral-700">Сигурна поръчка (256-bit encryption).</p>
              <p className="text-neutral-700">Никой няма да разбере какво си поръчал.</p>
            </div>
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-10 text-center">
            Често задавани въпроси
          </h2>

          <FAQAccordion items={faqItems} />
        </section>

        {/* Footer / Disclaimer */}
        <footer className="mt-16 pt-8 border-t border-neutral-300 text-center">
          <p className="text-sm text-neutral-600 mb-4">
            *Резултатите са индивидуални. TestoUP е хранителна добавка, не лекарство. Не е предназначена за диагностика, лечение или предотвратяване на заболявания. Консултирай се с лекар ако имаш медицински проблеми или приемаш медикаменти. Резултатите зависят от спазването на протоколите за тренировки и храна.
          </p>
          <p className="text-xs text-neutral-500">
            © 2025 Testograph · Terms of Service | Privacy Policy | Връзка с нас
          </p>
        </footer>

      </article>
    </div>
  );
}
