import CountdownTimer from '@/components/advertorial/CountdownTimer';

/**
 * TESTOGRAPH Male Vitality System - Advertorial Page
 *
 * Target: Men 35-50+ experiencing low libido, prostate issues, erectile dysfunction
 * Focus: Complete system (not just supplement)
 * Tone: Direct but tactful, validating, private
 *
 * Product: TESTOGRAPH Complete System
 * Price: 67 лв (from 214 лв)
 * CTA: https://shop.testograph.eu/testograph
 */

const PRODUCT_LINK = 'https://shop.testograph.eu/testograph';

export default function MaleVitalitySystem() {
  return (
    <main className="bg-white">
      {/* SECTION 1: HERO */}
      <section
        className="relative py-20 px-5 text-white"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        }}
      >
        <div className="container mx-auto max-w-[1000px] text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            987 МЪЖЕ ВЪРНАХА ЛИБИДОТО.<br />
            ПРОСТАТАТА. УВЕРЕНОСТТА.
          </h1>

          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200">
            Нямат еректилна дисфункция.<br />
            Не стават по 3 пъти на нощ.<br />
            Чувстват се мъже отново.
          </p>

          <p className="text-lg mb-10 text-gray-300">
            Ти можеш да си следващият.
          </p>

          <a
            href={PRODUCT_LINK}
            className="inline-block px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Виж как работи системата →
          </a>
        </div>
      </section>

      {/* SECTION 2: PROBLEM AGITATION */}
      <section className="py-16 px-5 bg-gray-50">
        <div className="container mx-auto max-w-[800px]">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Знаеш усещането
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Нямаш либидо. Изобщо.
            </p>

            <p>
              Когато тя намекне - fake-ваш интерес. Извиняваш се с "уморен съм".
              Тя вече не пита. Напрежението расте.
            </p>

            <p>
              Простатата те тормози. Ставаш по 3 пъти на нощ за тоалетна.
              Не можеш да спиш цяла нощ. Чувстваш дискомфорт.
            </p>

            <p>
              Еректилната функция не е като преди. Тревожиш се дали ще работи.
              Избягваш интимност защото не си сигурен. Чувстваш се счупен.
            </p>

            <p className="font-semibold text-neutral-900">
              Докторът каза "нормално за възрастта". Отказваш да приемеш това.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-bold text-neutral-900 mb-2">
                Не е твоя вина. Не е възрастта.
              </p>
              <p className="text-neutral-700">
                Системата е счупена. 987 мъже я оправиха. Ти можеш да си следващият.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRUTH REVEAL */}
      <section className="py-16 px-5">
        <div className="container mx-auto max-w-[800px]">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Истината която докторите не казват
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Тестостеронът ти не падна защото остаряваш.
            </p>

            <p>
              Падна защото живееш в индустриално общество което активно убива мъжките хормони.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                3-те врага на тестостерона:
              </h3>

              <div className="space-y-3">
                <p><span className="font-bold">Враг #1:</span> Индустриална храна (processed food, захар, seed oils)</p>
                <p><span className="font-bold">Враг #2:</span> Стрес 24/7 (cortisol убива testosterone)</p>
                <p><span className="font-bold">Враг #3:</span> Токсини във въздуха (plastic chemicals, xenoestrogens)</p>
              </div>
            </div>

            <p className="font-semibold">
              Системата е счупена. Не си ти.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: TOP 3 CAUSES */}
      <section className="py-16 px-5 bg-gray-50">
        <div className="container mx-auto max-w-[900px]">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            3-те причини които убиват либидото ти
          </h2>

          {/* Cause #1: Food */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Причина #1: Храната
            </h3>

            <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
              <p>
                Processed food убива тестостерона.
              </p>

              <p>
                Seed oils (слънчоглед, соя, рапица) → инфламация → crash на хормоните.
              </p>

              <p>
                Захарта spike-ва инсулин → инсулинът блокира testosterone production.
              </p>

              <p>
                Соята и plastic chemicals действат като estrogen → feminization на тялото.
              </p>

              <p className="font-semibold">
                Резултат: Либидото умира. Простатата се възпалява. Еректилната функция отслабва.
              </p>
            </div>
          </div>

          {/* Cause #2: Prostate */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Причина #2: Простатата
            </h3>

            <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
              <p>
                Инфламация в простатата → често уриниране, дискомфорт, либидо проблеми.
              </p>

              <p>
                DHT (dihydrotestosterone) се натрупва → простатата се уголемява → проблеми с уринирането.
              </p>

              <p>
                Нарушен кръвоток → проблеми с еректилната функция.
              </p>

              <p className="font-semibold">
                Резултат: Ставаш по 3 пъти на нощ. Либидото е нула. Еректилна дисфункция.
              </p>
            </div>
          </div>

          {/* Cause #3: Stress */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Причина #3: Стресът
            </h3>

            <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
              <p>
                Хроничен стрес → кортизол 24/7.
              </p>

              <p>
                Кортизол и тестостерон се бият за един hormone pathway. Когато кортизолът е висок → testosterone production crash-ва.
              </p>

              <p>
                Stress → сън проблеми → още по-нисък тестостерон (testosterone се произвежда през нощта).
              </p>

              <p className="font-semibold">
                Резултат: Нулево либидо. Нулева енергия. Депресия. Чувстваш се счупен.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="font-bold text-neutral-900">
              Виждаш ли проблема?
            </p>
            <p className="text-neutral-700 mt-2">
              Докторите ти дават само pill. Не оправят храната. Не оправят стреса. Не оправят простатата.
            </p>
            <p className="text-neutral-900 font-semibold mt-4">
              Трябва ти система. Не само добавка.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: SOLUTION INTRO */}
      <section className="py-16 px-5">
        <div className="container mx-auto max-w-[800px]">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Първата пълна система в България
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p className="text-center font-semibold text-xl text-neutral-900">
              Не само добавка. Пълен план с всичко което ти трябва:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-neutral-900 mb-2">Храна за хормони</h4>
                <p className="text-neutral-700">Точен план какво да ядеш за тестостерон</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-neutral-900 mb-2">Протокол за простатата</h4>
                <p className="text-neutral-700">Оправяш инфламацията и DHT баланса</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-neutral-900 mb-2">Стрес контрол</h4>
                <p className="text-neutral-700">Кортизол down, testosterone up</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-neutral-900 mb-2">Точна добавка</h4>
                <p className="text-neutral-700">TESTOGRAPH formula с всичко което липсва</p>
              </div>
            </div>

            <p className="text-center font-semibold text-neutral-900">
              Работи заедно като система.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-bold text-neutral-900 text-xl mb-2">
                987+ мъже вече го следват
              </p>
              <p className="text-neutral-700 text-lg">
                94% казват "работи"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: KEY BENEFITS */}
      <section className="py-16 px-5 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto max-w-[900px]">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Какво ще почувстваш
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit #1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                ✅ ЛИБИДО ОТНОВО
              </h3>
              <div className="space-y-2 text-neutral-700 leading-relaxed">
                <p>Желанието се връща.</p>
                <p>Не се налага да fake-ваш интерес.</p>
                <p className="font-semibold text-neutral-900">Искаш отново. Естествено.</p>
              </div>
            </div>

            {/* Benefit #2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                ✅ ЗДРАВА ПРОСТАТА
              </h3>
              <div className="space-y-2 text-neutral-700 leading-relaxed">
                <p>Спиш цяла нощ без да ставаш.</p>
                <p>Нулев дискомфорт.</p>
                <p className="font-semibold text-neutral-900">Нормално уриниране.</p>
              </div>
            </div>

            {/* Benefit #3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                ✅ УВЕРЕНОСТ
              </h3>
              <div className="space-y-2 text-neutral-700 leading-relaxed">
                <p>Знаеш че можеш.</p>
                <p>Не се съмняваш.</p>
                <p className="font-semibold text-neutral-900">Не избягваш моменти.</p>
              </div>
            </div>

            {/* Benefit #4 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                ✅ ЕНЕРГИЯ + DRIVE
              </h3>
              <div className="space-y-2 text-neutral-700 leading-relaxed">
                <p>Искаш да правиш неща.</p>
                <p>Имаш амбиция отново.</p>
                <p className="font-semibold text-neutral-900">Чувстваш се мъж.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: SOCIAL PROOF */}
      <section className="py-16 px-5">
        <div className="container mx-auto max-w-[800px]">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Какво казват мъжете
          </h2>

          {/* Testimonial */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-10">
            <div className="flex items-start gap-4 mb-6">
              {/* Placeholder for testimonial photo */}
              <div className="w-20 h-20 bg-neutral-200 rounded-full flex-shrink-0 flex items-center justify-center">
                <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-lg">Петър К.</h4>
                <p className="text-neutral-600">42 години, Пловдив</p>
                <div className="text-yellow-500 mt-1">⭐⭐⭐⭐⭐ 5/5</div>
              </div>
            </div>

            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                "Нямах либидо. Избягвах близост. Чувствах се счупен.
              </p>

              <p>
                Ставах по 3 пъти на нощ за тоалетна. Простатата ме тормозеше.
              </p>

              <p>
                Докторът каза 'нормално за възрастта'. Отказах да приема това.
              </p>

              <p className="font-semibold text-neutral-900">
                След 60 дни на TESTOGRAPH системата:
              </p>

              <p>
                Желанието се върна. Простатата не ме тормози. Спя цяла нощ.
              </p>

              <p>
                Имам увереност отново. Жена ми усети разликата.
              </p>

              <p className="font-bold text-neutral-900 text-lg">
                Чувствам се на 30, не на 42."
              </p>
            </div>
          </div>

          {/* Stats Box */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-black mb-2">987+</div>
                <div className="text-sm">МЪЖЕ СЛЕДВАТ СИСТЕМАТА</div>
              </div>

              <div>
                <div className="text-4xl font-black mb-2">94%</div>
                <div className="text-sm">ВИЖДАТ РЕЗУЛТАТИ ЗА 30-60 ДНИ</div>
              </div>

              <div>
                <div className="text-4xl font-black mb-2">+41%</div>
                <div className="text-sm">ПОДОБРЕНИЕ В ЛИБИДО (СРЕДНО)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA + OFFER */}
      <section className="py-16 px-5 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-[900px]">
          <div className="bg-white text-neutral-900 rounded-2xl shadow-2xl overflow-hidden">
            {/* Urgent Banner */}
            <div className="bg-red-600 text-white py-3 px-6 text-center font-bold">
              🔥 ОГРАНИЧЕНА ОФЕРТА 🔥
            </div>

            <div className="p-8 md:p-12">
              {/* Countdown Timer */}
              <div className="mb-8">
                <p className="text-center text-neutral-600 mb-4 font-semibold">
                  Офертата изтича след:
                </p>
                <div className="flex justify-center">
                  <CountdownTimer targetHours={24} variant="large" />
                </div>
              </div>

              {/* Product Image Placeholder */}
              <div className="mb-8">
                <div className="w-full max-w-[300px] h-[300px] mx-auto bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center border-2 border-dashed border-neutral-300">
                  <div className="text-center px-4">
                    <svg className="w-16 h-16 text-neutral-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <p className="text-sm text-neutral-600 font-semibold mb-1">TESTOGRAPH Product Image</p>
                    <p className="text-xs text-neutral-500">600x600px • Supplement bottle</p>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-4 mb-2">
                  <span className="text-5xl font-black text-green-600">67 лв</span>
                  <span className="text-2xl text-neutral-400 line-through">214 лв</span>
                </div>
                <p className="text-red-600 font-bold">Спестяваш 147 лв - само днес!</p>
              </div>

              {/* What's Included */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 text-center">
                  Получаваш пълната система:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span>TESTOGRAPH добавка (30 дни)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span>Пълен план за храна</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span>Протокол за простатата</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span>Протокол за стрес контрол</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span>Дневен tracking система</span>
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href={PRODUCT_LINK}
                className="block w-full py-5 bg-green-600 hover:bg-green-700 text-white text-center font-black text-2xl rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 mb-6"
              >
                Върни си мъжеството →
              </a>

              {/* Trust Badges */}
              <div className="space-y-3 text-center text-sm text-neutral-600">
                <p className="flex items-center justify-center gap-2">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  30 дни гаранция "пари назад"
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  Безплатна доставка
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <span className="font-bold">ДИСКРЕТНА опаковка</span>
                </p>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white text-neutral-900 px-8 py-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">
                🛡️ НАШАТА ГАРАНЦИЯ
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-2">
                30 дни. Без въпроси. Без условия.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-2">
                Ако не си доволен - връщаме всеки лев.
              </p>
              <p className="font-bold text-neutral-900">
                Поемаме риска. Не ти.
              </p>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-blue-900 px-8 py-4 rounded-lg">
              <p className="font-bold mb-2">🔒 100% ПОВЕРИТЕЛНО</p>
              <p className="text-sm text-blue-100 leading-relaxed">
                Дискретна опаковка • Нулева индикация на съдържанието<br />
                Сигурна поръчка (256-bit encryption)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL PUSH */}
      <section className="py-16 px-5">
        <div className="container mx-auto max-w-[800px]">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Имаш два избора
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Path #1 */}
            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-900 mb-4">
                Път #1: Продължаваш да избягваш
              </h3>
              <ul className="space-y-2 text-neutral-700">
                <li>→ Нулево либидо</li>
                <li>→ Проблеми с простатата</li>
                <li>→ Напрежение с партньора</li>
                <li>→ Чувстваш се счупен</li>
              </ul>
              <p className="mt-4 font-bold text-red-900">
                След 90 дни: Още по-лошо
              </p>
            </div>

            {/* Path #2 */}
            <div className="bg-green-50 border-2 border-green-500 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-900 mb-4">
                Път #2: Оправяш системата
              </h3>
              <ul className="space-y-2 text-neutral-700">
                <li>→ Първата пълна система в България</li>
                <li>→ 30 дни гаранция (нулев риск)</li>
                <li>→ 987 мъже вече го правят</li>
                <li>→ 94% виждат резултати</li>
              </ul>
              <p className="mt-4 font-bold text-green-900">
                След 60 дни: Мъжеството се връща
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-neutral-700 mb-6">
              987 мъже избраха Път #2.<br />
              94% казват "работи".
            </p>

            <p className="text-2xl font-bold text-neutral-900 mb-8">
              Твой ред.
            </p>

            <a
              href={PRODUCT_LINK}
              className="inline-block px-12 py-5 bg-green-600 hover:bg-green-700 text-white font-black text-xl rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Започвам системата сега →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER / DISCLAIMER */}
      <footer className="py-12 px-5 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto max-w-[900px]">
          <p className="text-sm text-neutral-600 text-center mb-6 leading-relaxed">
            *Резултатите са индивидуални. TESTOGRAPH е хранителна добавка, не лекарство.
            Консултирай се с лекар ако имаш медицински проблеми или приемаш медикаменти.
          </p>

          <div className="text-center text-sm text-neutral-500">
            <p>© 2025 TESTOGRAPH</p>
            <p className="mt-2">
              <a href="#" className="hover:text-neutral-700 underline">Terms of Service</a>
              {' | '}
              <a href="#" className="hover:text-neutral-700 underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
