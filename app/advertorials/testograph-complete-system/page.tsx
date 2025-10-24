import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TESTOGRAPH: Пълна система за мъжко здраве - Протоколи + Добавка + Проследяване',
  description: 'Първата в България система за пълна оптимизация на testosterone. 100% формула: тренировки, храна, сън + добавка. 127 мъже, 94% виждат резултати. От 67 лв.',
  openGraph: {
    title: 'TESTOGRAPH: Пълна система за мъжко здраве',
    description: '100% формула за testosterone оптимизация. Протоколи + Добавка + Проследяване. 94% успеваемост.',
    images: ['/images/testograph-og.jpg'],
  },
};

const SHOP_URL = 'https://shop.testograph.eu';

export default function TestographCompleteSystemPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Personal Story */}
      <section className="py-12 px-5 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container mx-auto max-w-[1240px]">

          {/* Credibility Markers - NO ADVERTORIAL BADGE */}
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>127 потребители</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>94% успеваемост</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>БАБХ регистрация</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 leading-tight">
            Преди 8 години направих грешка.<br />
            Взимах стероиди без да знам какво правя.<br />
            Разбих си хормоните.
          </h1>

          <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed mb-8">
            <p className="text-xl mb-4">
              След това с жена ми започнахме да се опитваме да имаме дете.
            </p>
            <p className="text-xl mb-4">
              Нищо.
            </p>
            <p className="text-xl mb-4">
              Отидохме при лекари. Направихме всички изследвания. Опитахме всичко което ни казаха.
            </p>
            <p className="text-xl mb-4">
              Пак нищо.
            </p>
            <p className="text-xl mb-6">
              Никой нямаше решение.
            </p>

            <div className="bg-white border-l-4 border-teal-500 rounded-lg p-6 my-8">
              <p className="text-xl font-semibold text-neutral-900 mb-4">
                Реших сам да намеря отговор.
              </p>
              <p className="text-lg mb-4">
                Месеци research. Четох всичко - научни статии, протоколи, хормонални панели. Разбрах КАК да оправя хормоните естествено.
              </p>
              <p className="text-lg mb-4">
                Създадох си собствен протокол. Комбинирах точните добавки в точните дози. Следвах точен план за тренировки, храна, сън.
              </p>
            </div>

            <p className="text-xl font-bold text-teal-700 mb-4">
              Година по-късно:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-lg">Хормоните ми се върнаха в норма.</li>
              <li className="text-lg">Енергията ми беше като на 20-годишен.</li>
              <li className="text-lg">Живота ми се промени напълно.</li>
            </ul>

            <p className="text-xl font-bold text-neutral-900 mb-4">
              Днес имам 2 деца и успешен бизнес.
            </p>
            <p className="text-xl mb-4">
              Всичко това заради една система.
            </p>
          </div>

          {/* Hero Image Placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-neutral-300 mb-8">
            <div className="text-center px-4">
              <svg className="w-16 h-16 text-neutral-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-lg text-neutral-700 font-semibold mb-2">
                Hero Image Placeholder
              </p>
              <p className="text-sm text-neutral-500 max-w-md">
                Продукт + телефон с dashboard + преди/след снимки
              </p>
              <p className="text-xs text-neutral-400 mt-2">
                Препоръчително: 1200x600px
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
            <p className="text-lg font-bold text-neutral-900 mb-3">
              Ето какво научих:
            </p>
            <p className="text-lg text-neutral-700 mb-3">
              Добавките сами не работят. Защото са само 20% от формулата за успех.
            </p>
            <p className="text-lg text-neutral-700 mb-3">
              Другите 80%? Сам трябва да ги намериш.
            </p>
            <p className="text-xl font-bold text-blue-700">
              Аз направих системата за ЦЯЛАТА формула - 100%.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 px-5 bg-white">
        <div className="container mx-auto max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Проблемът
          </h2>

          <div className="prose prose-lg max-w-none text-neutral-700 mb-8">
            <p className="text-xl mb-4">
              Тренираш редовно. Ядеш добре. Но резултатите липсват.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-lg flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Силата не мърда</span>
              </li>
              <li className="text-lg flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Енергията пада</span>
              </li>
              <li className="text-lg flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Възстановяването е бавно</span>
              </li>
              <li className="text-lg flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Либидото не е като преди</span>
              </li>
            </ul>
            <p className="text-lg mb-4">
              Опитвал си креатин, протеин, "тесто бустери". Резултат: нищо.
            </p>
            <p className="text-lg font-semibold text-neutral-900 mb-4">
              Не е виновно усилието ти.
            </p>
            <p className="text-xl font-bold text-red-700 mb-4">
              Проблемът е че имаш само 20% от формулата.
            </p>
            <p className="text-xl font-bold text-neutral-900">
              А без 100% - няма как да успееш.
            </p>
          </div>
        </div>
      </section>

      {/* 100% Formula Section */}
      <section className="py-12 px-5 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8 text-center">
            100% Формула за Успех
          </h2>

          <div className="bg-white rounded-2xl p-8 border-2 border-teal-200 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              Защо добавките сами не работят
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-5xl font-black text-teal-600 mb-2">35%</div>
                <p className="font-bold text-neutral-900 mb-2">Как тренираш</p>
                <p className="text-sm text-neutral-600">програма, честота, интензитет</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-teal-600 mb-2">30%</div>
                <p className="font-bold text-neutral-900 mb-2">Какво ядеш</p>
                <p className="text-sm text-neutral-600">макроси, timing, качество</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-teal-600 mb-2">15%</div>
                <p className="font-bold text-neutral-900 mb-2">Сън и стрес</p>
                <p className="text-sm text-neutral-600">възстановяване, cortisol</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-teal-600 mb-2">20%</div>
                <p className="font-bold text-neutral-900 mb-2">Добавката</p>
                <p className="text-sm text-neutral-600">съставки, дози, timing</p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-4">
              <p className="text-lg font-bold text-neutral-900">
                Ако нямаш първите 80%, последните 20% са безполезни.
              </p>
            </div>
          </div>

          {/* Infographic Placeholder */}
          <div className="w-full h-64 bg-gradient-to-br from-white to-neutral-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-teal-300 mb-8">
            <div className="text-center px-4">
              <svg className="w-12 h-12 text-teal-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-sm text-teal-700 font-semibold">Инфографика</p>
              <p className="text-xs text-teal-600 mt-1">100% формула визуализация</p>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Others */}
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Другите марки:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                  <span className="text-neutral-700">Продават ти бурканче с хапчета</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                  <span className="text-neutral-700">Казват ти "вземай 2 капсули дневно"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                  <span className="text-neutral-700">Останалите 80%? "Виж в интернет"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                  <span className="text-neutral-700">Не работи? "Не си тренирал добре"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                  <span className="text-neutral-700">Протокол? Плати още 200-300 лв</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                  <span className="text-neutral-700">Тренировъчен план? Още 150 лв</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                  <span className="text-neutral-700">План за храна? Още 100 лв</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t-2 border-red-300">
                <p className="text-lg font-bold text-red-800">
                  Общо: 500+ лв и все още без резултати гарантирани.
                </p>
              </div>
            </div>

            {/* Testograph */}
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-300">
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Testograph:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-xl">✓</span>
                  <span className="text-neutral-700">Даваме ти ЦЯЛАТА формула (100%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-xl">✓</span>
                  <span className="text-neutral-700">Точни протоколи за тренировки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-xl">✓</span>
                  <span className="text-neutral-700">Точен план за хранене</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-xl">✓</span>
                  <span className="text-neutral-700">Протокол за сън и възстановяване</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-xl">✓</span>
                  <span className="text-neutral-700">Добавката с точни дози и timing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-xl">✓</span>
                  <span className="text-neutral-700">Ежедневно проследяване на напредък</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-xl">✓</span>
                  <span className="text-neutral-700">Общност за подкрепа</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t-2 border-teal-300">
                <p className="text-lg font-bold text-teal-800 mb-2">
                  Всичко на цената на добавката.
                </p>
                <p className="text-sm text-neutral-700">
                  Не искаме допълнителни пари. Искаме ДА УСПЕЕШ.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-teal-300 text-center">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              TESTOGRAPH = ПЪЛНА СИСТЕМА ЗА 100% ОПТИМИЗАЦИЯ
            </h3>
            <p className="text-lg text-neutral-600">
              Първата в България система за пълна оптимизация на мъжкото здраве.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-12 px-5 bg-white">
        <div className="container mx-auto max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8 text-center">
            Какво получаваш
          </h2>

          {/* App Screenshots Placeholder */}
          <div className="w-full h-80 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-neutral-300 mb-12">
            <div className="text-center px-4">
              <svg className="w-16 h-16 text-neutral-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <p className="text-lg text-neutral-700 font-semibold mb-2">
                App Screenshots Placeholder
              </p>
              <p className="text-sm text-neutral-500 max-w-md">
                Снимки на приложението с интерфейс и функции
              </p>
              <p className="text-xs text-neutral-400 mt-2">
                Препоръчително: 1920x800px
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              TESTOGRAPH СИСТЕМА
            </h3>
            <p className="text-neutral-600 mb-6">(Стойност 147 лв)</p>

            {/* Protocol 1 */}
            <div className="bg-white rounded-xl p-6 mb-6 border border-blue-100">
              <h4 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Тренировъчен Протокол
              </h4>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Точна програма за 4 седмици</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Кои упражнения, колко сетове/повторения</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Как да прогресираш всяка седмица</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Оптимизирана за testosterone и растеж</span>
                </li>
              </ul>
            </div>

            {/* Protocol 2 */}
            <div className="bg-white rounded-xl p-6 mb-6 border border-blue-100">
              <h4 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Хранителен Протокол
              </h4>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Какво да ядеш за най-добри хормони</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Списъци с най-добрите храни</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Примерни менюта за цял ден</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Макрос калкулатор според теглото ти</span>
                </li>
              </ul>
            </div>

            {/* Protocol 3 */}
            <div className="bg-white rounded-xl p-6 mb-6 border border-blue-100">
              <h4 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Протокол за Сън и Стрес
              </h4>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Как да спиш дълбоко и качествено</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Техники за управление на стрес</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Ритуали преди лягане</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Оптимизация на cortisol</span>
                </li>
              </ul>
            </div>

            {/* Protocol 4 */}
            <div className="bg-white rounded-xl p-6 mb-6 border border-blue-100">
              <h4 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Протокол за Добавки
              </h4>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Точно КОГА да вземаш добавката</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>С какво да я комбинираш</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Какво да избягваш</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Най-добра ефективност</span>
                </li>
              </ul>
            </div>

            {/* Daily Check-in */}
            <div className="bg-white rounded-xl p-6 mb-6 border border-blue-100">
              <h4 className="text-xl font-bold text-neutral-900 mb-4">
                Ежедневен Чек-ин
              </h4>
              <p className="text-neutral-700 mb-4">
                Всеки ден (2 минути) - 5 въпроса (1-10 скала):
              </p>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Общо усещане за деня</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Енергийно ниво</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Колко следваш плана</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Сутрешна ерекция (качество)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Качество на съня</span>
                </li>
              </ul>
              <div className="mt-4 bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-neutral-700">
                  Приложението записва автоматично. Виждаш тенденциите във времето. Знаеш точно какво работи за теб.
                </p>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="bg-white rounded-xl p-6 mb-6 border border-blue-100">
              <h4 className="text-xl font-bold text-neutral-900 mb-4">
                Проследяване на Напредък
              </h4>
              <p className="text-neutral-700 mb-4 font-semibold">
                Виждаш в реално време:
              </p>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>На кой ден си (например Ден 18/30)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Колко % завършен (например 64%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Графики как се променят отговорите ти</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Твоите най-добри и най-лошите дни</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Какво да подобриш</span>
                </li>
              </ul>
              <div className="mt-4 bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-neutral-700">
                  Мотивира те да продължаваш. Резултати базирани на данни.
                </p>
              </div>
            </div>

            {/* Telegram Community */}
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h4 className="text-xl font-bold text-neutral-900 mb-4">
                Telegram Общност
              </h4>
              <p className="text-neutral-700 mb-4 font-semibold">
                Достъп до private Telegram група:
              </p>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Други мъже които следват системата</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Споделяте напредък и мотивация</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Питате въпроси, получавате отговори</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Accountability partners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Празнувате успехите заедно</span>
                </li>
              </ul>
              <div className="mt-4 bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-neutral-700 font-semibold">
                  Не си сам в пътуването.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200 text-center">
            <p className="text-xl font-bold text-neutral-900">
              СТОЙНОСТ НА СИСТЕМАТА: 147 лв
            </p>
          </div>
        </div>
      </section>

      {/* Supplement Section - TESTOUP */}
      <section className="py-12 px-5 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container mx-auto max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
            Добавката
          </h2>

          <div className="bg-neutral-800/50 rounded-2xl p-8 border-2 border-neutral-700 mb-8">
            <h3 className="text-2xl font-bold mb-2">TESTOUP</h3>
            <p className="text-neutral-300 mb-4">(Стойност 67 лв)</p>
            <p className="text-lg mb-2">60 капсули (30 дози)</p>
            <p className="text-lg">Дозировка: 2 капсули дневно</p>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-center">12 АКТИВНИ СЪСТАВКИ</h3>

          {/* Ingredient Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Tribulus */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold text-teal-400 mb-3">
                TRIBULUS TERRESTRIS EXTRACT (600 mg)
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Естествено стимулира производството на testosterone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подобрява либидо и сексуална функция</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Увеличава сила и мускулна издръжливост</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Най-висока дозировка на българския пазар</span>
                </li>
              </ul>
            </div>

            {/* Ashwagandha */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold text-teal-400 mb-3">
                ASHWAGANDHA EXTRACT (400 mg)
              </h4>
              <p className="text-sm text-neutral-400 mb-3">(Withania somnifera)</p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Намалява cortisol (стрес хормон) с до 28%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Повишава testosterone при стресирани мъже</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подобрява качество на сперма и фертилитет</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Увеличава мускулна маса и сила</span>
                </li>
              </ul>
            </div>

            {/* Vitamin D3 */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold text-teal-400 mb-3">
                ВИТАМИН D3 (2400 IU / 35 mcg) - 700% РДП*
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Действа като хормон в тялото</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Критичен за производство на testosterone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подобрява настроение и имунитет</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>90% българи имат дефицит</span>
                </li>
              </ul>
            </div>

            {/* Zinc */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold text-teal-400 mb-3">
                ЦИНК CITRATE (50 mg / 15 mg елементарен) - 150% РДП
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Най-важният минерал за testosterone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Блокира ензима ароматаза (estrogen)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подобрява качество на сперма</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Ускорява възстановяване след тренировка</span>
                </li>
              </ul>
            </div>

            {/* Magnesium */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold text-teal-400 mb-3">
                МАГНЕЗИЙ BISGLYCINATE (400 mg / 44 mg елементарен)
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Най-добре усвоимата форма на магнезий</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Повишава свободен testosterone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подобрява качество на съня</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Намалява мускулни крампи и умора</span>
                </li>
              </ul>
            </div>

            {/* Vitamin K2 */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold text-teal-400 mb-3">
                ВИТАМИН K2 (MK7) (100 mcg)
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Работи съвместно с витамин D3</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Насочва калция към костите (не в артериите)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подобрява здравето на костите</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подкрепя сърдечно-съдовото здраве</span>
                </li>
              </ul>
            </div>

            {/* Vitamin B6 */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold text-teal-400 mb-3">
                ВИТАМИН B6 (10 mg) - 714% РДП
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Намалява prolactin (блокира testosterone)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подобрява настроение и енергия</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подпомага протеинов метаболизъм</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Критичен за невротрансмитери</span>
                </li>
              </ul>
            </div>

            {/* Vitamin B12 */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold text-teal-400 mb-3">
                ВИТАМИН B12 (600 mcg) - 24000% РДП
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Експлозивна енергия през целия ден</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подобрява концентрация и фокус</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Критичен за производство на червени кръвни клетки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Мега доза за максимален ефект</span>
                </li>
              </ul>
            </div>

            {/* Vitamin B9 */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold text-teal-400 mb-3">
                ВИТАМИН B9 / FOLATE (5-MTHF) (400 mcg) - 200% РДП
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Най-активната форма (не фолиева киселина)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подобрява производство на сперма</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подкрепя ДНК синтез и клетъчно делене</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Важен за сърдечно-съдово здраве</span>
                </li>
              </ul>
            </div>

            {/* Vitamin E */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold text-teal-400 mb-3">
                ВИТАМИН E (270 mg) - 2250% РДП
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Силен антиоксидант</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Защитава клетъчните мембрани</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подобрява фертилитет и либидо</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подкрепя имунната система</span>
                </li>
              </ul>
            </div>

            {/* Vitamin C */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold text-teal-400 mb-3">
                ВИТАМИН C (200 mg) - 250% РДП
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Намалява cortisol след тренировка</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подобрява усвояването на желязо</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Силна антиоксидантна защита</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подкрепа за имунната система</span>
                </li>
              </ul>
            </div>

            {/* Selenium */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold text-teal-400 mb-3">
                СЕЛЕН (L-Selenomethionine) (200 mcg) - 364% РДП
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Критичен за производство на testosterone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подобрява подвижност на сперматозоиди</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Силен антиоксидант</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">→</span>
                  <span>Подкрепа за щитовидната жлеза</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quality Badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <div className="bg-neutral-800/50 rounded-lg p-4 border border-teal-500 text-center">
              <p className="text-teal-400 font-bold text-sm">ЕС ПРОИЗВОДСТВО</p>
              <p className="text-xs text-neutral-400 mt-1">(България)</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4 border border-teal-500 text-center">
              <p className="text-teal-400 font-bold text-sm">БАБХ</p>
              <p className="text-xs text-neutral-400 mt-1">РЕГИСТРАЦИЯ</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4 border border-teal-500 text-center">
              <p className="text-teal-400 font-bold text-sm">GMP</p>
              <p className="text-xs text-neutral-400 mt-1">СЕРТИФИЦИРАН</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4 border border-teal-500 text-center">
              <p className="text-teal-400 font-bold text-sm">100%</p>
              <p className="text-xs text-neutral-400 mt-1">НАТУРАЛНО</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4 border border-teal-500 text-center">
              <p className="text-teal-400 font-bold text-sm">БЕЗ</p>
              <p className="text-xs text-neutral-400 mt-1">ИЗКУСТВЕНИ ДОБАВКИ</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4 border border-teal-500 text-center">
              <p className="text-teal-400 font-bold text-sm">НЕ Е</p>
              <p className="text-xs text-neutral-400 mt-1">СТЕРОИД</p>
            </div>
          </div>

          <p className="text-sm text-neutral-400 text-center">
            *РДП = Препоръчителна дневна порция
          </p>
        </div>
      </section>

      {/* Value Breakdown */}
      <section className="py-12 px-5 bg-white">
        <div className="container mx-auto max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8 text-center">
            Обща Стойност
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-neutral-700">Приложение с 4 протокола + чек-ин + проследяване</span>
                  <span className="text-lg font-bold text-neutral-900">147 лв</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-neutral-700">TESTOUP добавка (30 дози)</span>
                  <span className="text-lg font-bold text-neutral-900">67 лв</span>
                </div>
                <div className="border-t-2 border-blue-300 pt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-neutral-900">ОБЩА СТОЙНОСТ:</span>
                  <span className="text-2xl font-black text-neutral-900">214 лв</span>
                </div>
              </div>

              <div className="bg-teal-500 rounded-xl p-6 text-white text-center mb-6">
                <p className="text-3xl font-black mb-2">ТВОЯ ЦЕНА: 67 лв за 30 дни</p>
                <p className="text-xl">То са 2.23 лв на ден</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-blue-200 text-center">
                <p className="text-lg text-neutral-700 mb-2">
                  По-евтино от кафе.
                </p>
                <p className="text-xl font-bold text-teal-700">
                  Получаваш протоколите на стойност 147 лв БЕЗПЛАТНО.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-12 px-5 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8 text-center">
            Работи ли?
          </h2>

          <div className="bg-white rounded-2xl p-8 border-2 border-teal-200 mb-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-6xl font-black text-teal-600 mb-2">127</div>
                <p className="text-xl font-bold text-neutral-900">потребители следват системата</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-teal-600 mb-2">94%</div>
                <p className="text-xl font-bold text-neutral-900">казват "работи" (119 от 127)</p>
              </div>
            </div>

            <div className="border-t-2 border-teal-100 pt-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                След 90 дни:
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-teal-600 mb-2">+18%</div>
                  <p className="text-neutral-700">сила</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-teal-600 mb-2">+2.4-3.8кг</div>
                  <p className="text-neutral-700">чиста мускулна маса</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-teal-600 mb-2">+32%</div>
                  <p className="text-neutral-700">енергия</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-teal-600 mb-2">+41%</div>
                  <p className="text-neutral-700">по-добър сън</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - 7 Reviews */}
      <section className="py-12 px-5 bg-white">
        <div className="container mx-auto max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8 text-center">
            Какво казват потребителите
          </h2>

          <div className="space-y-8">
            {/* Testimonial 1 - Georgi */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-teal-700">
                  Г
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Потребител на системата
                  </div>
                  <blockquote className="text-neutral-700 mb-3 leading-relaxed">
                    "Плато 4 месеца. Лежанка не минаваше 100кг. Всеки тренировъчен ден се питах дали си губя времето. След 6 седмици с TESTOGRAPH: 112кг лежанка. Протоколите ми показаха точно какво правя грешно с тренировките и храната."
                  </blockquote>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                    <span className="font-semibold">— Георги, 27 год., София</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Martin */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-teal-700">
                  М
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Потребител на системата
                  </div>
                  <blockquote className="text-neutral-700 mb-3 leading-relaxed">
                    "38 години. Чувствах се на 50. Всяка сутрин ставах уморен. Имах енергия за 4 часа работа, после - мъртъв. След 2 месеца с Testograph: Спя като на 25. Енергия ЦЯЛИЙ ден. Жена ми забеляза разликата... в спалнята. Не е само testosterone. Цялата система работи."
                  </blockquote>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                    <span className="font-semibold">— Мартин, 38 год., Пловдив</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Ivan */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-teal-700">
                  И
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Потребител на системата
                  </div>
                  <blockquote className="text-neutral-700 mb-3 leading-relaxed">
                    "Мислех че съм 'hard gainer'. Опитвах се 2 години да качвам маса. Хапчето само не ми помогна. Testograph ми даде цялата картина: Ядох много малко, тренировах без план, спях 5-6 часа. За 3 месеца: +3.2кг мускулна маса. Първи път виждам ABS."
                  </blockquote>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                    <span className="font-semibold">— Иван, 24 год., Варна</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 - Nikolay */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-teal-700">
                  Н
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Потребител на системата
                  </div>
                  <blockquote className="text-neutral-700 mb-3 leading-relaxed">
                    "Купувах 'тесто бустери' от iHerb. Харчех 150 лв на месец. Нищо не се промени. С Testograph разбрах ЗАЩО: Вземах ги грешно (timing). Тренировъчната ми програма беше глупост. Ядох твърде малко протеин. Сега имам система. Всичко е на място. Резултатите са ясни."
                  </blockquote>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                    <span className="font-semibold">— Николай, 31 год., София</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 - Stoyan */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-teal-700">
                  С
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Потребител на системата
                  </div>
                  <blockquote className="text-neutral-700 mb-3 leading-relaxed">
                    "След 35 мъжките хормони падат. Аз съм на 42. Лекарят каза 'нормално е за възрастта'. Bullshit. Системата ми показа как да оптимизирам всичко - храна, сън, стрес, тренировки. 3 месеца: Либидо като на 25. Качвам тежести като преди 10 години. Съм по-добър баща защото имам енергия."
                  </blockquote>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                    <span className="font-semibold">— Стоян, 42 год., Бургас</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 6 - Kristian */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-teal-700">
                  К
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Потребител на системата
                  </div>
                  <blockquote className="text-neutral-700 mb-3 leading-relaxed">
                    "Студент съм. Нямам пари за фитнес треньор (200 лв) + нутриционист (150 лв) + добавки (100 лв). Това е всичко в едно за 67 лв. Първи път имам ПЛАН. Знам какво правя. Не гадая. Чек-инът ми показва дали напредвам. 2 месеца: +8кг клек, +15% енергия, по-добър сън от 6/10 на 9/10."
                  </blockquote>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                    <span className="font-semibold">— Кристиан, 22 год., София</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 7 - Dimitar */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-teal-700">
                  Д
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Потребител на системата
                  </div>
                  <blockquote className="text-neutral-700 mb-3 leading-relaxed">
                    "Работя нощни смени. Хормоните ми бяха в пода. Не можех да спя добре. Нямах либидо. На 29 се чувствах като на 50. Протоколът за сън ми помогна най-много. Добавката също, но СИСТЕМАТА промени играта. Сега: Спя 7-8 часа качествено. Сутрешна ерекция всеки ден. Енергия за зала след смяна."
                  </blockquote>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                    <span className="font-semibold">— Димитър, 29 год., Пловдив</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Mid-page */}
      <section className="py-12 px-5 bg-blue-50">
        <div className="container mx-auto max-w-[1240px]">
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-300 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Искаш да видиш същите резултати?
            </h3>
            <p className="text-lg text-neutral-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              127 мъже избраха системата. 94% видяха резултати. Защото имаха СИСТЕМА, не само хапчета.
            </p>
            <a
              href={SHOP_URL}
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Виж как работи системата
            </a>
          </div>
        </div>
      </section>

      {/* 3-Tiered Pricing Section */}
      <section className="py-12 px-5 bg-white">
        <div className="container mx-auto max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8 text-center">
            Избери своя пакет
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Starter Package */}
            <div className="bg-white rounded-2xl p-8 border-2 border-neutral-200 hover:border-blue-300 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">STARTER</h3>
                <p className="text-neutral-600">"Започни правилно"</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">1x TESTOUP добавка (30 дози)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Достъп до TESTOGRAPH система</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">4 готови протокола</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Ежедневен чек-ин</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Проследяване на напредък</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Telegram общност</span>
                </li>
              </ul>

              <div className="border-t border-neutral-200 pt-6 mb-6">
                <p className="text-sm text-neutral-600 mb-2">Стойност: 214 лв</p>
                <p className="text-3xl font-black text-neutral-900 mb-1">67 лв</p>
                <p className="text-sm text-neutral-600">(2.23 лв/ден - по-евтино от кафе)</p>
              </div>

              <a
                href={SHOP_URL + '?package=starter'}
                className="block w-full bg-neutral-100 text-neutral-900 text-center px-6 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
              >
                Започни със STARTER
              </a>
            </div>

            {/* Performance Package - POPULAR */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                ПОПУЛЯРЕН
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">PERFORMANCE</h3>
                <p className="text-neutral-600">"Ускори резултатите"</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">2x TESTOUP добавка (60 дози = 2 месеца)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Пълна TESTOGRAPH система</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 font-bold">БОНУС: Nutrition Tracker App</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 font-bold">БОНУС: Training Tracker App</span>
                </li>
              </ul>

              <div className="border-t border-blue-200 pt-6 mb-6">
                <p className="text-sm text-neutral-600 mb-2">Стойност: 526 лв</p>
                <p className="text-3xl font-black text-blue-700 mb-1">127 лв</p>
                <p className="text-sm text-neutral-600 mb-2">(2.12 лв/ден за 60 дни)</p>
                <p className="text-sm font-bold text-teal-700">Спестяваш: 399 лв (76%)</p>
              </div>

              <a
                href={SHOP_URL + '?package=performance'}
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Избирам PERFORMANCE
              </a>
            </div>

            {/* Complete System Package - MAX VALUE */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                НАЙ-ДОБРА СТОЙНОСТ
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">COMPLETE SYSTEM</h3>
                <p className="text-neutral-600">"Пълна трансформация"</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">3x TESTOUP добавка (90 дози = 3 месеца)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Пълна TESTOGRAPH система</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 font-bold">ВСИЧКИ 5 PREMIUM APPS:</span>
                </li>
                <li className="pl-7 text-sm text-neutral-600">• Nutrition Tracker</li>
                <li className="pl-7 text-sm text-neutral-600">• Training Tracker</li>
                <li className="pl-7 text-sm text-neutral-600">• Sleep Optimizer</li>
                <li className="pl-7 text-sm text-neutral-600">• Body Metrics</li>
                <li className="pl-7 text-sm text-neutral-600">• Supplement Scheduler</li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 font-bold">БЕЗПЛАТНА доставка</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 font-bold">Приоритетна поддръжка</span>
                </li>
              </ul>

              <div className="border-t border-teal-200 pt-6 mb-6">
                <p className="text-sm text-neutral-600 mb-2">Стойност: 887 лв</p>
                <p className="text-3xl font-black text-teal-700 mb-1">179 лв</p>
                <p className="text-sm text-neutral-600 mb-2">(1.99 лв/ден за 90 дни)</p>
                <p className="text-sm font-bold text-teal-700">Спестяваш: 708 лв (80%)</p>
              </div>

              <a
                href={SHOP_URL + '?package=complete'}
                className="block w-full bg-teal-600 text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors"
              >
                Избирам COMPLETE
              </a>
            </div>
          </div>

          {/* Package Selection Help */}
          <div className="bg-neutral-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-4 text-center">
              Кой пакет е за теб?
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-bold text-neutral-900 mb-2">STARTER (67 лв)</p>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>→ Искаш да тестваш системата</li>
                  <li>→ Имаш вече опит с тренировки</li>
                  <li>→ Искаш минимална инвестиция</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="font-bold text-neutral-900 mb-2">PERFORMANCE (127 лв) - ПРЕПОРЪЧАН</p>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>→ Сериозен си за резултатите</li>
                  <li>→ Искаш да проследяваш всичко точно</li>
                  <li>→ 2 месеца = време за видими резултати</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-neutral-900 mb-2">COMPLETE (179 лв) - НАЙ-ДОБРА СТОЙНОСТ</p>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>→ Искаш ПЪЛНА трансформация</li>
                  <li>→ Сериозен си за дългосрочни резултати</li>
                  <li>→ 3 месеца = постоянна промяна</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 px-5 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8 text-center">
            Нашата гаранция за резултати
          </h2>

          <div className="bg-white rounded-2xl p-8 border-2 border-teal-200 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <svg className="w-20 h-20 text-teal-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-xl font-bold text-neutral-900">Ето как работи:</p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Поръчваш системата днес (67 лв)</p>
                  <p className="text-neutral-700">Получаваш достъп до всички протоколи и приложението</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Даваш 100% от себе си за 30 дни</p>
                  <p className="text-neutral-700 mb-2">Какво означава "100%":</p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>✓ Попълваш ежедневния чек-ин (5 въпроса, 2 минути)</li>
                    <li>✓ Следваш тренировъчния протокол (3-4x седмично)</li>
                    <li>✓ Следваш хранителния протокол</li>
                    <li>✓ Вземаш добавката според инструкциите</li>
                    <li>✓ Прилагаш протокола за сън и стрес</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Оценяваш резултатите</p>
                  <p className="text-neutral-700 mb-2">Ако СИ ДАЛ 100% и системата не работи за теб:</p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>→ Пишеш ни на support@testograph.eu</li>
                    <li>→ Показваш ни check-in записите (автоматични от app)</li>
                    <li>→ Връщаме 100% от парите без въпроси</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-500">
              <p className="font-bold text-neutral-900 mb-2">Защо тази гаранция?</p>
              <p className="text-neutral-700 mb-3">
                Системата работи. Това е факт от 127 потребители. Но работи САМО ако я следваш.
              </p>
              <p className="text-neutral-700 mb-3">
                Ние гарантираме резултати ако ТИ гарантираш усилие.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-neutral-700">
                  <strong>Справедлив обмен:</strong><br />
                  ТИ → Даваш 100% усилие<br />
                  НИЕ → Гарантираме резултати или пари назад
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-lg font-bold text-teal-700">
                127 потребители. 94% виждат резултати.
              </p>
              <p className="text-neutral-600">
                Защо? Защото СЛЕДВАТ системата.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why So Cheap Section */}
      <section className="py-12 px-5 bg-white">
        <div className="container mx-auto max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8 text-center">
            Защо толкова евтино?
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <p className="text-lg text-neutral-700 mb-4">
                Валиден въпрос.
              </p>
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <p className="font-bold text-neutral-900 mb-2">Други марки:</p>
                <ul className="space-y-1 text-neutral-700">
                  <li>• Добавка: 70-90 лв</li>
                  <li>• Треньор: 200 лв/месец</li>
                  <li>• Нутриционист: 150 лв</li>
                  <li>• План за тренировки: 100 лв</li>
                </ul>
                <p className="font-bold text-red-800 mt-3 pt-3 border-t border-red-200">
                  ОБЩО: 500+ лв
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4">
                <p className="font-bold text-neutral-900 mb-2">Testograph:</p>
                <p className="text-2xl font-black text-teal-700">ВСИЧКО за 67 лв.</p>
              </div>
            </div>

            <p className="text-lg text-neutral-700 mb-6">
              Звучи нереално. Ето истината:
            </p>

            <div className="space-y-6 mb-8">
              {/* Reason 1 */}
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">ПРИЧИНА #1: Искаме да успееш</h3>
                <p className="text-neutral-700 mb-3">
                  Опитали сме другия подход:<br />
                  Скъпи продукти → хората купуват веднъж → разочароват се → никога повече.
                </p>
                <p className="text-neutral-700 mb-3">
                  Новия подход:<br />
                  Евтин старт → виждаш резултати → ставаш клиент завинаги.
                </p>
                <p className="font-semibold text-blue-700">
                  За нас е по-изгодно ДА УСПЕЕШ.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">ПРИЧИНА #2: Искаме добра репутация</h3>
                <p className="text-neutral-700 mb-3">
                  Българският пазар е пълен с измами. "Чудо хапчета" за 150 лв. Нула резултати.
                </p>
                <p className="text-neutral-700 mb-3">
                  Хората са изгубили доверие.
                </p>
                <p className="text-neutral-700 mb-3">
                  НИЕ искаме да сме различни:
                </p>
                <ul className="space-y-1 text-neutral-700 mb-3">
                  <li>✓ Даваме ти ВСИЧКО (не само хапчета)</li>
                  <li>✓ На честна цена (не те дерем)</li>
                  <li>✓ Гарантираме резултати (не само обещания)</li>
                </ul>
                <p className="font-semibold text-teal-700">
                  Когато видиш че работи → разказваш на приятели. Това е най-добрата реклама.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">ПРИЧИНА #3: Не сме алчни</h3>
                <p className="text-neutral-700 mb-3">
                  Можехме да направим:
                </p>
                <ul className="space-y-1 text-neutral-700 mb-3">
                  <li>• Добавка: 89 лв</li>
                  <li>• Приложение: 19 лв/месец абонамент</li>
                  <li>• Протоколи: 49 лв еднократно</li>
                  <li className="font-bold pt-2 border-t border-purple-200">= 157 лв първия месец</li>
                </ul>
                <p className="text-neutral-700 mb-3">
                  Но НЕ. Защото искаме да има колкото се може повече мъже които ще имат достъп до правилната информация и инструменти.
                </p>
                <p className="font-semibold text-purple-700">
                  67 лв = цената на добавката. Всичко друго е ПОДАРЪК.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 text-center border-2 border-teal-200">
              <p className="text-lg text-neutral-700 mb-3">
                Не сме като останалите които само искат парите ти.
              </p>
              <p className="text-xl font-bold text-neutral-900 mb-2">
                Искаме да УСПЕЕШ. Искаме да видиш РЕЗУЛТАТИ. Искаме да ни ВЯРВАШ.
              </p>
              <p className="text-lg text-teal-700 font-semibold">
                Затова ти даваме 100% системата на цената на 20% (добавката).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-5 bg-neutral-50">
        <div className="container mx-auto max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8 text-center">
            Често задавани въпроси
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Само добавката, без приложението?
              </h3>
              <p className="text-neutral-700 mb-2">
                НЕ.
              </p>
              <p className="text-neutral-700 mb-2">
                Добавката е 20% от формулата. Протоколите са 80%.
              </p>
              <p className="text-neutral-700 mb-2">
                Без 80%, 20% са безполезни.
              </p>
              <p className="text-neutral-700">
                Ако искаш само хапчета - купи OstroVit от магазина. Ако искаш РЕЗУЛТАТИ - вземи системата.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Колко бързо ще видя резултати?
              </h3>
              <ul className="space-y-2 text-neutral-700">
                <li><strong>14 дни:</strong> Енергия, сън, либидо (+15-20%)</li>
                <li><strong>30 дни:</strong> Сила, работоспособност, настроение</li>
                <li><strong>90 дни:</strong> Пълна трансформация (тяло, хормони, живот)</li>
              </ul>
              <p className="text-neutral-700 mt-3">
                Но само ако следваш системата.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Безопасна ли е добавката?
              </h3>
              <p className="text-neutral-700 mb-2">
                ДА. 100%.
              </p>
              <ul className="space-y-1 text-neutral-700">
                <li>✓ 100% натурални съставки</li>
                <li>✓ ЕС производство (България)</li>
                <li>✓ БАБХ регистрация</li>
                <li>✓ GMP сертифициран обект</li>
                <li>✓ НЕ е стероид</li>
                <li>✓ Без странични ефекти</li>
              </ul>
              <p className="text-neutral-700 mt-3">
                Можеш да вземаш дългосрочно без проблеми.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Работи ли за мъже над 40?
              </h3>
              <p className="text-neutral-700 mb-2">
                ДА. Работи още по-добре.
              </p>
              <p className="text-neutral-700 mb-2">
                След 35-40 testosterone-ът пада естествено. Системата е проектирана да го оптимизира.
              </p>
              <p className="text-neutral-700 mb-2">
                Имаме потребители от 22 до 52 години. Всички виждат резултати.
              </p>
              <p className="text-neutral-700">
                Колкото по-възрастен си, толкова по-важно е да имаш правилната система.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Трябва ли да тренирам във фитнес?
              </h3>
              <p className="text-neutral-700 mb-2">
                НЕ задължително.
              </p>
              <p className="text-neutral-700 mb-2">
                Можеш да тренираш:
              </p>
              <ul className="space-y-1 text-neutral-700">
                <li>• Във фитнес</li>
                <li>• У дома (с гири/дъмбели)</li>
                <li>• На външен фитнес</li>
              </ul>
              <p className="text-neutral-700 mt-3">
                Протоколът е адаптивен. Работи навсякъде. Важното е да ТРЕНИРАШ. Не къде.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Има ли абонамент или скрити такси?
              </h3>
              <p className="text-neutral-700 mb-2">
                НЕ.
              </p>
              <p className="text-neutral-700 mb-2">
                Плащаш само цената на пакета. Никакви абонаменти. Никакви скрити такси. Пълен достъп завинаги.
              </p>
              <p className="text-neutral-700 font-semibold">
                Купуваш веднъж → имаш го завинаги.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-5 bg-gradient-to-br from-teal-700 to-cyan-800 text-white">
        <div className="container mx-auto max-w-[1240px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-8">
              Два избора
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Choice 1 */}
              <div className="bg-red-900/30 rounded-xl p-6 border-2 border-red-500/50">
                <h3 className="text-xl font-bold mb-4">ИЗБОР 1: Продължаваш както досега</h3>
                <p className="text-neutral-200 mb-2">Купуваш добавка от iHerb за 80 лв.</p>
                <p className="text-neutral-200 mb-2">Гадаеш как да я вземаш.</p>
                <p className="text-neutral-200 mb-2">Тренираш без план.</p>
                <p className="text-neutral-200 mb-4">Ядеш "на око".</p>
                <p className="text-red-300 font-bold">След 30 дни: на същото място.</p>
                <p className="text-neutral-300">Още 80 лв по-беден. Още по-фрустриран.</p>
              </div>

              {/* Choice 2 */}
              <div className="bg-teal-900/30 rounded-xl p-6 border-2 border-teal-300">
                <h3 className="text-xl font-bold mb-4">ИЗБОР 2: Опитваш TESTOGRAPH система</h3>
                <p className="text-neutral-200 mb-2">Получаваш пълна система (100%).</p>
                <p className="text-neutral-200 mb-2">Протоколи + Добавка + Проследяване.</p>
                <p className="text-neutral-200 mb-4">Следваш 30 дни.</p>
                <p className="text-teal-300 font-bold">Виждаш резултати или пари назад.</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold mb-3">
                127 мъже избраха Избор 2. 94% видяха резултати.
              </p>
              <p className="text-xl">
                Защо? Защото имаха СИСТЕМА, не само хапчета.
              </p>
            </div>

            <a
              href={SHOP_URL}
              className="inline-block bg-white text-teal-700 px-12 py-4 rounded-lg text-2xl font-black hover:bg-neutral-100 transition-colors mb-6"
            >
              ЗАПОЧВАМ ТРАНСФОРМАЦИЯТА
            </a>

            <div className="text-sm text-neutral-200 space-y-1">
              <p>✓ 30 дни гаранция (ако следваш системата)</p>
              <p>✓ Сигурно плащане</p>
              <p>✓ БАБХ регистрация</p>
              <p>✓ Доставка 1-3 дни</p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-xl font-bold text-amber-300 mb-3">
                НЕ Е ЗА ВСЕКИ
              </p>
              <p className="text-neutral-200 mb-4">
                Търсиш магия без усилие? Не е за теб.
              </p>
              <p className="text-neutral-200 mb-2">
                Системата изисква:
              </p>
              <ul className="text-neutral-200 space-y-1 mb-4">
                <li>• Тренировки 3-4 пъти седмично</li>
                <li>• Следване на протоколите</li>
                <li>• Ежедневен чек-ин (2 минути)</li>
                <li>• Дисциплина и consistency</li>
              </ul>
              <p className="text-neutral-300 mb-4">
                Ако не си готов - не купувай.
              </p>
              <div className="bg-teal-600 rounded-lg p-4">
                <p className="text-lg font-bold mb-2">Ако СИ готов:</p>
                <p>Даваш 100% → виждаш резултати</p>
                <p>Не виждаш резултати → пари назад</p>
                <p className="text-teal-200 mt-2">Справедливо.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Disclaimer */}
      <footer className="py-8 px-5 bg-neutral-900 text-neutral-400 text-sm">
        <div className="container mx-auto max-w-[1240px] text-center">
          <p className="mb-2">
            TESTOGRAPH е хранителна добавка регистрирана в БАБХ. Не е лекарство. Не заменя балансирано хранене и здравословен начин на живот.
          </p>
          <p className="mb-4">
            Преди употреба се консултирайте с лекар при здравословни проблеми или прием на медикаменти.
          </p>
          <p className="text-neutral-500">
            © 2025 Testograph. Всички права запазени.
          </p>
        </div>
      </footer>
    </div>
  );
}
