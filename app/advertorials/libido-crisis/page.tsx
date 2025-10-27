import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import CountdownTimer from '@/components/advertorial/CountdownTimer';
import SoftCTA from '@/components/advertorial/SoftCTA';

const PRODUCT_LINK = 'https://shop.testograph.eu/products/testoup';

export const metadata: Metadata = {
  title: 'Нямам либидо на 38. Това не е нормално. | TESTOGRAPH',
  description: 'Когато хормоните не работят правилно: нулево либидо, проблеми с ерекцията, проблеми с простатата. 987+ мъже вече върнаха желанието си.',
  openGraph: {
    title: 'Нямам либидо на 38. Това не е нормално.',
    description: 'Пълна система за възстановяване на либидото и мъжкото здраве. 94% виждат резултати за 30-60 дни.',
    images: ['/funnel/testograph-hero.jpg'],
  },
};

export default function LibidoCrisisAdvertorial() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">

      {/* Hero Section */}
      <section
        className="relative py-16 md:py-24 px-4"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('/funnel/libido-crisis-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Нямам либидо на 38.<br />
            Това не е нормално.
          </h1>

          <div className="flex items-center justify-center gap-3 text-neutral-300 text-sm mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Симеон С.</div>
              <div className="text-xs">Последна актуализация: 23 Окт 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">

        {/* Section 1: Problem Agitation */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Избягването
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Нямаш желание.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Тя инициира. Ти намираш извинение.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              "Уморен съм." "Стресиран съм." "Не съм в настроение."
            </p>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-10">
              Истината
            </h3>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Истината е че просто... го няма.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Drive-а. Желанието. НЕЩОТО което те караше да искаш.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Избягваш моменти които преди чакаше с нетърпение.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Намира извинения. Отлагаш. Надяваш се тя да не забележи.
            </p>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-10">
              Тя забелязва
            </h3>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Тя забелязва.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Не казва нищо, но усещаш напрежението.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Погледите. Мълчанието. Разстоянието което расте.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Чувстваш се счупен.
            </p>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-10">
              Или проблемът с простатата
            </h3>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Или ставаш по 3 пъти на нощ за тоалетна.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Всяка нощ. Простатата пак.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Дискомфорт. Често уриниране. Проблеми когато искаш да имаш секс.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Или двете.
            </p>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-10">
              Твърде млад да се чувстваш стар
            </h3>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Чувстваш се стар на 38.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Това не е нормално.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Но докторът казва "нормално за възрастта".
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Отказваш да приемеш това.
            </p>

          </div>
        </section>

        {/* Section 2: The Truth Reveal */}
        <section className="mb-16 bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            Истината не е възрастта
          </h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            Проблемът не е възрастта.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            На 38 не трябва да чувстваш че мъжеството ти изчезва.
          </p>

          <p className="text-lg text-neutral-800 leading-relaxed mb-6 font-semibold">
            Проблемът е че хормоните са провалени.
          </p>

          <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">
            Какво се случва
          </h3>

          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            Когато хормоните не работят правилно:
          </p>

          <ul className="space-y-2 mb-6">
            <li className="text-lg text-neutral-700">• Нулево либидо</li>
            <li className="text-lg text-neutral-700">• Проблеми с ерекцията</li>
            <li className="text-lg text-neutral-700">• Проблеми с простатата</li>
            <li className="text-lg text-neutral-700">• Нулева енергия</li>
            <li className="text-lg text-neutral-700">• Нулева увереност</li>
          </ul>

          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            Не можеш да fake-неш желание.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            Не можеш да се преструваш.
          </p>

          <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
            Трябва да оправиш СИСТЕМАТА.
          </p>
        </section>

        {/* Section 3: Top 3 Causes */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-10 text-center">
            3-те главни причини
          </h2>

          {/* Cause #1 */}
          <div className="mb-12 bg-white p-8 rounded-xl shadow-md border border-neutral-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  Тестостерон надолу = Либидо надолу
                </h3>
                <p className="text-sm text-neutral-600">Хормоналният дисбаланс</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Тестостерон = Либидо. Drive. Желание.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Когато тестостеронът пада:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="text-lg text-neutral-700">• Нямаш желание за секс</li>
                <li className="text-lg text-neutral-700">• Проблеми с ерекцията</li>
                <li className="text-lg text-neutral-700">• Нулева увереност</li>
              </ul>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Но това не е всичко.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Когато тестостеронът пада, естрогенът се качва.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Резултат:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="text-lg text-neutral-700">• Мазнини на корем</li>
                <li className="text-lg text-neutral-700">• Още по-ниско либидо</li>
                <li className="text-lg text-neutral-700">• Гърди при мъже (гинекомастия)</li>
              </ul>

              <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
                Порочен кръг.
              </p>

              <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
                Нисък тестостерон + висок естроген = Загуба на мъжественост.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed">
                Буквално.
              </p>
            </div>
          </div>

          {/* Cause #2 */}
          <div className="mb-12 bg-white p-8 rounded-xl shadow-md border border-neutral-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  Възпалена простата = Разрушено либидо
                </h3>
                <p className="text-sm text-neutral-600">Проблеми с простатата</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Хроничното възпаление на простатата разваля всичко.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Симптоми:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="text-lg text-neutral-700">• Често уриниране (особено нощем)</li>
                <li className="text-lg text-neutral-700">• Дискомфорт</li>
                <li className="text-lg text-neutral-700">• Болка при еякулация</li>
                <li className="text-lg text-neutral-700">• Отслабена струя</li>
              </ul>

              <p className="text-lg text-neutral-800 leading-relaxed mb-6 font-semibold">
                90% мъже над 35 имат някаква форма на проблем и не знаят.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Игнорираш симптомите. "Ще мине."
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Не минава. Влошава се.
              </p>

              <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
                Възпалената простата също намалява тестостерон производството.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed">
                Още един порочен кръг.
              </p>
            </div>
          </div>

          {/* Cause #3 */}
          <div className="mb-12 bg-white p-8 rounded-xl shadow-md border border-neutral-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  Висок стрес = Нулев тестостерон = Нулево либидо
                </h3>
                <p className="text-sm text-neutral-600">Стрес убива либидото</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Ето как работи:
              </p>

              <p className="text-lg text-neutral-800 leading-relaxed mb-6 font-semibold">
                Стрес → Кортизол нагоре → Тестостерон НАДОЛУ.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Кортизолът буквално спира производството на тестостерон.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Резултат:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="text-lg text-neutral-700">• Нулево либидо</li>
                <li className="text-lg text-neutral-700">• Нулева енергия</li>
                <li className="text-lg text-neutral-700">• Нулева увереност</li>
              </ul>

              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Не можеш да имаш секс когато тялото мисли че си в опасност.
              </p>

              <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
                Биология е. Не е "в главата".
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Solution Introduction */}
        <section className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-2xl border-2 border-green-200">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6 text-center">
            Решението
          </h2>

          <p className="text-xl text-neutral-700 leading-relaxed mb-8 text-center">
            Ето решението:
          </p>

          <p className="text-2xl text-neutral-900 leading-relaxed mb-10 text-center font-bold">
            Първата напълно функционална система за оптимизация на мъжкото здраве в България.
          </p>

          {/* Product Image Placeholder */}
          <div className="w-full max-w-[400px] h-[400px] mx-auto mb-8 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center border-2 border-dashed border-neutral-300">
            <p className="text-sm text-neutral-600 font-semibold">TESTOGRAPH Product Image</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              TESTOGRAPH система:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-lg text-neutral-800 font-semibold">По-добър секс</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-lg text-neutral-800 font-semibold">По-силно либидо</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-lg text-neutral-800 font-semibold">Здрава простата</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-lg text-neutral-800 font-semibold">Повече енергия</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-lg text-neutral-800 font-semibold">Повече сила</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-lg text-neutral-800 font-semibold">Увереност отново</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-10">
              Не само добавка
            </h3>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Не само добавка.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Пълен план с всичко което ти трябва:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-lg text-neutral-700">• Храна за хормони</li>
              <li className="text-lg text-neutral-700">• Протокол за простата</li>
              <li className="text-lg text-neutral-700">• Стрес контрол</li>
              <li className="text-lg text-neutral-700">• Точна добавка</li>
            </ul>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Работи заедно като система.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-3xl font-black text-green-600 mb-2">987+ мъже</p>
              <p className="text-lg text-neutral-700 mb-4">вече го следват</p>
              <p className="text-2xl font-bold text-blue-600">94% казват "работи"</p>
            </div>
          </div>
        </section>

        {/* Section 5: Key Benefits */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-10 text-center">
            Какво постигаш
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefit #1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                ЛИБИДО ОТНОВО
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-3">
                Желанието се връща.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-3">
                Не се налага да fake-ваш интерес.
              </p>
              <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
                Искаш отново. Естествено.
              </p>
            </div>

            {/* Benefit #2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                ЗДРАВА ПРОСТАТА
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-3">
                Спиш цяла нощ без да ставаш.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-3">
                Нулев дискомфорт.
              </p>
              <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
                Нормално уриниране.
              </p>
            </div>

            {/* Benefit #3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">
                УВЕРЕНОСТ
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-3">
                Знаеш че можеш.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-3">
                Не се съмняваш.
              </p>
              <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
                Не избягваш моменти.
              </p>
            </div>

            {/* Benefit #4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                ЕНЕРГИЯ + DRIVE
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-3">
                Искаш да правиш неща.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-3">
                Имаш амбиция отново.
              </p>
              <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
                Чувстваш се мъж.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Social Proof */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-10 text-center">
            Резултати от реални мъже
          </h2>

          {/* Testimonial */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 md:p-10 rounded-2xl shadow-lg border border-blue-200 mb-8">
            <div className="flex items-start gap-4 mb-6">
              {/* Avatar Placeholder */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center flex-shrink-0 border-2 border-white shadow-md">
                <span className="text-white font-bold text-2xl">ПК</span>
              </div>
              <div>
                <p className="text-xl font-bold text-neutral-900">Петър К.</p>
                <p className="text-sm text-neutral-600">42 години, Пловдив</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                "Нямах либидо. Избягвах близост. Чувствах се счупен.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Ставах по 3 пъти на нощ за тоалетна. Простатата ме тормозеше.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Докторът каза 'нормално за възрастта'. Отказах да приема това.
              </p>

              <p className="text-lg text-neutral-800 leading-relaxed mb-4 font-semibold">
                След 60 дни на TESTOGRAPH системата:
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Желанието се върна. Простатата не ме тормози. Спя цяла нощ.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Имам увереност отново. Жена ми усети разликата.
              </p>

              <p className="text-lg text-neutral-800 leading-relaxed font-semibold">
                Чувствам се на 30, не на 42."
              </p>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-yellow-500 text-2xl">★★★★★</span>
              <span className="text-neutral-700 font-semibold ml-2">5/5</span>
            </div>
          </div>

          {/* Stats Box */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-neutral-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-black text-green-600 mb-2">987+</p>
                <p className="text-sm text-neutral-600 uppercase tracking-wide">МЪЖЕ СЛЕДВАТ СИСТЕМАТА</p>
              </div>
              <div>
                <p className="text-4xl font-black text-blue-600 mb-2">94%</p>
                <p className="text-sm text-neutral-600 uppercase tracking-wide">ВИЖДАТ РЕЗУЛТАТИ ЗА 30-60 ДНИ</p>
              </div>
              <div>
                <p className="text-4xl font-black text-purple-600 mb-2">+41%</p>
                <p className="text-sm text-neutral-600 uppercase tracking-wide">ПОДОБРЕНИЕ В ЛИБИДО (СРЕДНО)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: CTA + Offer */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-600 to-blue-600 p-10 md:p-12 rounded-2xl shadow-2xl text-center">
            <div className="mb-8">
              <p className="text-red-100 text-sm uppercase tracking-widest mb-2 font-bold">ОГРАНИЧЕНА ОФЕРТА</p>
              <CountdownTimer targetHours={24} variant="large" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Върни си мъжеството
            </h2>

            {/* Product Visual Placeholder */}
            <div className="w-full max-w-[300px] h-[300px] mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-dashed border-white/40">
              <p className="text-sm text-white font-semibold">TESTOGRAPH Bottle</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl mb-8 border border-white/20">
              <div className="text-5xl font-black text-green-300 mb-4">67 лв</div>
              <p className="text-white/80 text-lg mb-6 line-through">Стойност 214 лв</p>

              <div className="space-y-3 text-left max-w-md mx-auto">
                <p className="text-white text-lg">• TESTOGRAPH добавка (30 дни)</p>
                <p className="text-white text-lg">• Пълен план за храна</p>
                <p className="text-white text-lg">• Протокол за простата</p>
                <p className="text-white text-lg">• Протокол за стрес контрол</p>
                <p className="text-white text-lg">• Дневен tracking</p>
              </div>
            </div>

            <SoftCTA
              link={PRODUCT_LINK}
              ctaText="Започвам системата сега →"
              variant="boxed"
              className="w-full max-w-2xl mx-auto text-center text-2xl py-6 mb-8 bg-white text-green-600 hover:bg-green-50 shadow-2xl"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-white">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🛡️</span>
                <p className="text-sm">30 дни гаранция</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">📦</span>
                <p className="text-sm">Безплатна доставка</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🔒</span>
                <p className="text-sm">ДИСКРЕТНА опаковка</p>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="bg-neutral-100 p-8 rounded-xl mt-8 border-2 border-neutral-300">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4 text-center">
              🛡️ НАШАТА ГАРАНЦИЯ
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed text-center mb-2">
              30 дни. Без въпроси. Без условия.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed text-center mb-2">
              Ако не си доволен - връщаме всеки лев.
            </p>
            <p className="text-lg text-neutral-800 leading-relaxed text-center font-semibold">
              Поемаме риска. Не ти.
            </p>
          </div>

          {/* Privacy Note */}
          <div className="bg-blue-50 p-6 rounded-xl mt-6 border border-blue-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
              🔒 100% ПОВЕРИТЕЛНО
            </h3>
            <div className="space-y-2 text-center">
              <p className="text-neutral-700">Дискретна опаковка.</p>
              <p className="text-neutral-700">Нулева индикация какво е съдържанието.</p>
              <p className="text-neutral-700">Сигурна поръчка (256-bit encryption).</p>
            </div>
          </div>
        </section>

        {/* Section 8: Final Push */}
        <section className="mb-16 bg-gradient-to-br from-neutral-900 to-neutral-800 p-10 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Имаш два избора
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Path #1 */}
            <div className="bg-red-900/30 p-6 rounded-xl border border-red-500/50">
              <h3 className="text-xl font-bold text-red-300 mb-4">Път #1: Продължаваш да избягваш</h3>
              <ul className="space-y-2 mb-4">
                <li className="text-neutral-300">→ Нулево либидо</li>
                <li className="text-neutral-300">→ Проблеми с простатата</li>
                <li className="text-neutral-300">→ Напрежение с партньора</li>
              </ul>
              <p className="text-red-200 font-semibold">След 90 дни: Още по-лошо</p>
            </div>

            {/* Path #2 */}
            <div className="bg-green-900/30 p-6 rounded-xl border border-green-500/50">
              <h3 className="text-xl font-bold text-green-300 mb-4">Път #2: Оправяш системата</h3>
              <ul className="space-y-2 mb-4">
                <li className="text-neutral-300">→ Първата пълна система в България</li>
                <li className="text-neutral-300">→ 30 дни гаранция (нулев риск)</li>
              </ul>
              <p className="text-green-200 font-semibold">След 60 дни: Мъжеството се връща</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-xl text-neutral-300 mb-2">
              987 мъже избраха Път #2.
            </p>
            <p className="text-xl text-neutral-300 mb-6">
              94% казват "работи".
            </p>
            <p className="text-2xl text-white font-bold">
              Твой ред.
            </p>
          </div>

          <SoftCTA
            link={PRODUCT_LINK}
            ctaText="Започвам системата сега →"
            variant="boxed"
            className="w-full max-w-2xl mx-auto text-center text-2xl py-6 bg-green-500 hover:bg-green-400 text-white shadow-2xl"
          />
        </section>

        {/* Footer / Disclaimer */}
        <footer className="mt-16 pt-8 border-t border-neutral-300 text-center">
          <p className="text-sm text-neutral-600 mb-4">
            *Резултатите са индивидуални. TESTOGRAPH е хранителна добавка, не лекарство.
            Консултирай се с лекар ако имаш медицински проблеми или приемаш медикаменти.
          </p>
          <p className="text-xs text-neutral-500">
            © 2025 TESTOGRAPH · Terms of Service | Privacy Policy
          </p>
        </footer>

      </article>
    </div>
  );
}
