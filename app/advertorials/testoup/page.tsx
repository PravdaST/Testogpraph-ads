import type { Metadata } from 'next';
import ArticleBody from '@/components/advertorial/ArticleBody';
import ArticleSection from '@/components/advertorial/ArticleSection';
import SoftCTA from '@/components/advertorial/SoftCTA';
import Disclaimer from '@/components/advertorial/Disclaimer';

// ============================================
// METADATA
// ============================================
export const metadata: Metadata = {
  title: 'Клинично изследване: TestoUP резултати',
  description: 'Научно доказани резултати с TestoUP. Вижте клиничните изследвания.',
  keywords: 'testosterone, мъжко здраве, либидо',
  openGraph: {
    title: 'Клинично изследване: TestoUP',
    description: 'Научно доказани резултати с TestoUP',
    images: ['/funnel/testoup-bottle.webp'],
  },
};

// ============================================
// UTM TRACKING
// ============================================
const UTM_PARAMS = '?utm_source=advertorial&utm_medium=testoup&utm_campaign=2025';
const PRODUCT_LINK = `${shopUrl}${UTM_PARAMS}`;

// ============================================
// PAGE COMPONENT
// ============================================
export default function TestoUPAdvertorial() {
  return (
    <ArticleBody>
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <div className="w-full relative h-[400px] lg:h-[500px] mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/funnel/testoup-bottle.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative h-full flex items-center justify-center px-5">
          <div className="max-w-[800px] text-center">
            <p className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
              "Клинично изследване: TestoUP резултати"
            </p>
            <p className="text-sm lg:text-base text-white/80">
              — Д-р Иван Петров, Ендокринолог
            </p>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* MAIN CONTAINER */}
      {/* ============================================ */}
      <div className="container mx-auto px-5 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-[9fr_3fr] gap-8 lg:gap-12">

          {/* ============================================ */}
          {/* LEFT COLUMN - Main Content */}
          {/* ============================================ */}
          <main>
            {/* Main Headline */}
            <ArticleSection>
              <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-4">
                Клинично изследване: TestoUP резултати
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Научно доказани резултати с TestoUP. Вижте клиничните изследвания.
              </p>

              {/* Author/Date Info */}
              <div className="flex items-center gap-4 pb-8 border-b border-neutral-200">
                <img
                  src="/funnel/georgi-avatar.jpg"
                  alt="Д-р Иван Петров"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-neutral-900">Д-р Иван Петров, MD</p>
                  <p className="text-sm text-neutral-600">Обновено: януари 2025</p>
                </div>
              </div>
            </ArticleSection>

            {/* Content Sections */}
            
            {/* Hero Section */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4"><strong>Headline:</strong> Нямам либидо на 38. Това не е нормално.
<strong>Subheadline:</strong> Първата пълна система за оптимизация на мъжкото здраве в България</p>
            </ArticleSection>
            {/* Key Benefits */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4"><ul class="space-y-2 mb-4"><li>Възстановено либидо и сексуално желание</li>
<li>Здрава простата без дискомфорт</li>
<li>Повишена енергия и увереност</li>
<li>Естествено решение без странични ефекти</li></ul></p>
            </ArticleSection>
            {/* Проблемът: Избягваш близостта */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4">Нямаш желание.
Тя инициира. Ти намираш извинение.
"Уморен съм." "Стресиран съм." "Не съм в настроение."
Истината е че просто... го няма.
Drive-а. Желанието. НЕЩОТО което те караше да искаш.
Избягваш моменти които преди чакаше с нетърпение.
Намираш извинения. Отлагаш. Надяваш се тя да не забележи.
Тя забелязва.
Не казва нищо, но усещаш напрежението.
Погледите. Мълчанието. Разстоянието което расте.
Чувстваш се счупен.
Или ставаш по 3 пъти на нощ за тоалетна.
Всяка нощ. Простатата пак.
Дискомфорт. Често уриниране. Проблеми когато искаш да имаш секс.
Или двете.
Чувстваш се стар на 38.
Това не е нормално.
Но докторът казва "нормално за възрастта".
Отказваш да приемеш това.</p>
            </ArticleSection>
            {/* Истината: Не е възрастта */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4"><ul class="space-y-2 mb-4">Проблемът не е възрастта.
На 38 не трябва да чувстваш че мъжеството ти изчезва.
Проблемът е че хормоните са провалени.
Когато хормоните не работят правилно:
<li>Нулево либидо</li>
<li>Проблеми с ерекцията</li>
<li>Проблеми с простатата</li>
<li>Нулева енергия</li>
<li>Нулева увереност</li>
Не можеш да fake-неш желание.
Не можеш да се преструваш.
Трябва да оправиш СИСТЕМАТА.</ul></p>
              <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <p className="text-sm font-semibold text-red-900 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>ВАЖНО: Консултирайте се с лекар преди започване на каквато и да е програма</span>
                </p>
              </div>
            </ArticleSection>
            {/* 1. Тестостерон надолу = Либидо надолу */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4"><ul class="space-y-2 mb-4">Тестостерон = Либидо. Drive. Желание.
Когато тестостеронът пада:
<li>Нямаш желание за секс</li>
<li>Проблеми с ерекцията</li>
<li>Нулева увереност</li>
Но това не е всичко.
Когато тестостеронът пада, естрогенът се качва.
Резултат:
<li>Мазнини на корем</li>
<li>Още по-ниско либидо</li>
<li>Гърди при мъже (гинекомастия)</li>
Порочен кръг.
Нисък тестостерон + висок естроген = Загуба на мъжественост.
Буквално.</ul></p>
              <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <p className="text-sm font-semibold text-red-900 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>ВАЖНО: Консултирайте се с лекар преди започване на каквато и да е програма</span>
                </p>
              </div>
            </ArticleSection>
            {/* 2. Възпалена простата = Разрушено либидо */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4"><ul class="space-y-2 mb-4">Хроничното възпаление на простатата разваля всичко.
Симптоми:
<li>Често уриниране (особено нощем)</li>
<li>Дискомфорт</li>
<li>Болка при еякулация</li>
<li>Отслабена струя</li>
90% мъже над 35 имат някаква форма на проблем и не знаят.
Игнорираш симптомите. "Ще мине."
Не минава. Влошава се.
Възпалената простата също намалява тестостерон производството.
Още един порочен кръг.</ul></p>
              <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <p className="text-sm font-semibold text-red-900 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>ВАЖНО: Консултирайте се с лекар преди започване на каквато и да е програма</span>
                </p>
              </div>
            </ArticleSection>
            {/* 3. Висок стрес = Нулев тестостерон = Нулево либидо */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4"><ul class="space-y-2 mb-4">Ето как работи:
Стрес → Кортизол нагоре → Тестостерон НАДОЛУ.
Кортизолът буквално спира производството на тестостерон.
Резултат:
<li>Нулево либидо</li>
<li>Нулева енергия</li>
<li>Нулева увереност</li>
Не можеш да имаш секс когато тялото мисли че си в опасност.
Биология е. Не е "в главата".</ul></p>
              <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <p className="text-sm font-semibold text-red-900 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>ВАЖНО: Консултирайте се с лекар преди започване на каквато и да е програма</span>
                </p>
              </div>
            </ArticleSection>
            {/* Решението: TESTOGRAPH система */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4"><ul class="space-y-2 mb-4">Ето решението:
Първата напълно функционална система за оптимизация на мъжкото здраве в България.
TESTOGRAPH система:
<li>По-добър секс</li>
<li>По-силно либидо</li>
<li>Здрава простата</li>
<li>Повече енергия</li>
<li>Повече сила</li>
<li>Увереност отново</li>
Не само добавка.
Пълен план с всичко което ти трябва:
<li>Храна за хормони</li>
<li>Протокол за простата</li>
<li>Стрес контрол</li>
<li>Точна добавка</li>
Работи заедно като система.
987+ мъже вече го следват.
94% казват "работи".</ul></p>
              <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <p className="text-sm font-semibold text-red-900 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>ВАЖНО: Консултирайте се с лекар преди започване на каквато и да е програма</span>
                </p>
              </div>
            </ArticleSection>
            {/* ЛИБИДО ОТНОВО */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4">Желанието се връща.
Не се налага да fake-ваш интерес.
Искаш отново. Естествено.</p>
            </ArticleSection>
            {/* ЗДРАВА ПРОСТАТА */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4">Спиш цяла нощ без да ставаш.
Нулев дискомфорт.
Нормално уриниране.</p>
            </ArticleSection>
            {/* УВЕРЕНОСТ */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4">Знаеш че можеш.
Не се съмняваш.
Не избягваш моменти.</p>
            </ArticleSection>
            {/* ЕНЕРГИЯ + DRIVE */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4">Искаш да правиш неща.
Имаш амбиция отново.
Чувстваш се мъж.</p>
            </ArticleSection>
            {/* Testimonials */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4"><ul class="space-y-2 mb-4"><strong>Петър К., 42 години, Пловдив</strong>
"Нямах либидо. Избягвах близост. Чувствах се счупен.
Ставах по 3 пъти на нощ за тоалетна. Простатата ме тормозеше.
Докторът каза 'нормално за възрастта'. Отказах да приема това.
След 60 дни на TESTOGRAPH системата:
Желанието се върна. Простатата не ме тормози. Спя цяла нощ.
Имам увереност отново. Жена ми усети разликата.
Чувствам се на 30, не на 42."
<strong>Stats:</strong>
<li>987+ МЪЖЕ СЛЕДВАТ СИСТЕМАТА</li>
<li>94% ВИЖДАТ РЕЗУЛТАТИ ЗА 30-60 ДНИ</li>
<li>+41% ПОДОБРЕНИЕ В ЛИБИДО (СРЕДНО)</li></ul></p>
            </ArticleSection>
            {/* CTAs */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4"><ul class="space-y-2 mb-4"><li>Върни си мъжеството →</li>
<li>Започвам системата сега →</li>
<li>Вижте пълните детайли →</li></ul></p>
            </ArticleSection>
            {/* Guarantee */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4">30 дни. Без въпроси. Без условия.
Ако не си доволен - връщаме всеки лев.</p>
            </ArticleSection>
            {/* Privacy */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4">100% ПОВЕРИТЕЛНО
Дискретна опаковка.
Нулева индикация какво е съдържанието.
Сигурна поръчка (256-bit encryption).</p>
            </ArticleSection>
            {/* Финално решение */}
            <ArticleSection>
              <p class="text-base leading-relaxed text-neutral-700 mb-4">Имаш два избора:
Път #1: Продължаваш да избягваш
→ Нулево либидо
→ Проблеми с простатата
→ Напрежение с партньора
→ След 90 дни: Още по-лошо
Път #2: Оправяш системата
→ Първата пълна система в България
→ 30 дни гаранция (нулев риск)
→ След 60 дни: Мъжеството се връща
987 мъже избраха Път #2.
94% казват "работи".
Твой ред.
Започвам системата сега →</p>
            </ArticleSection>

            {/* Solution Box */}
            <ArticleSection>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 shadow-lg">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Какво да направите сега?
                  </h2>
                  <p className="text-lg leading-relaxed text-neutral-700 mb-4">
                    Ако разпознавате тези признаци в себе си, има висока вероятност
                    TestoUP да ви помогне да оптимизирате здравето си.
                  </p>
                  <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                    Специална цена за първите клиенти: <strong>67лв</strong> вместо 214лв
                  </p>

                  <SoftCTA
                    href={PRODUCT_LINK}
                    text="Вижте пълните детайли →"
                    variant="primary"
                  />

                  <p className="text-sm text-neutral-600 mt-4 text-center">
                    90-дневна гаранция • Безплатна доставка • Сигурно плащане
                  </p>
                </div>
              </div>
            </ArticleSection>

          </main>

          {/* ============================================ */}
          {/* RIGHT COLUMN - Sidebar */}
          {/* ============================================ */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 space-y-6">

              {/* Product Card */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-neutral-200 overflow-hidden">
                <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-6">
                  <img
                    src="/funnel/testoup-bottle.webp"
                    alt="TestoUP"
                    className="w-full h-auto mx-auto"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    TestoUP
                  </h3>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-red-600">67лв</span>
                      <span className="text-lg text-neutral-500 line-through">214лв</span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold mt-1">
                      Спестявате 69%
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-green-600">✓</span>
                      <span>Клинично тестван протокол</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-green-600">✓</span>
                      <span>Резултати за 4-6 седмици</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-green-600">✓</span>
                      <span>100% натурални съставки</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-green-600">✓</span>
                      <span>12,000+ доволни клиенти</span>
                    </li>
                  </ul>

                  <SoftCTA
                    href={PRODUCT_LINK}
                    text="Поръчайте сега →"
                    variant="primary"
                    className="w-full"
                  />

                  <div className="mt-4 pt-4 border-t border-neutral-200 space-y-2">
                    <p className="text-xs text-neutral-600 flex items-center gap-2">
                      <span>🔒</span> Сигурно плащане
                    </p>
                    <p className="text-xs text-neutral-600 flex items-center gap-2">
                      <span>🚚</span> Безплатна доставка
                    </p>
                    <p className="text-xs text-neutral-600 flex items-center gap-2">
                      <span>↩️</span> 90-дневна гаранция
                    </p>
                  </div>
                </div>
              </div>

              {/* Expert Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="text-center mb-4">
                  <img
                    src="/funnel/georgi-avatar.jpg"
                    alt="Д-р Иван Петров"
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-4 border-white shadow-md"
                  />
                  <h4 className="font-bold text-neutral-900">Д-р Иван Петров</h4>
                  <p className="text-sm text-neutral-600">Ендокринолог</p>
                  <p className="text-xs text-neutral-500 mt-1">18+ години опит</p>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed italic">
                  "След години изследвания разработих този протокол да помага на мъжете
                  да възстановят оптималните си нива естествено."
                </p>
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* Mobile Product Card */}
      <div className="lg:hidden container mx-auto px-5 max-w-[1240px] mt-12">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-neutral-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-6">
            <img
              src="/funnel/testoup-bottle.webp"
              alt="TestoUP"
              className="w-full h-auto max-w-[300px] mx-auto"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              TestoUP
            </h3>
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-red-600">67лв</span>
                <span className="text-lg text-neutral-500 line-through">214лв</span>
              </div>
              <p className="text-sm text-green-600 font-semibold mt-1">
                Спестявате 69%
              </p>
            </div>
            <SoftCTA
              href={PRODUCT_LINK}
              text="Поръчайте сега →"
              variant="primary"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <Disclaimer />
    </ArticleBody>
  );
}