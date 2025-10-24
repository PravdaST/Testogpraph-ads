import type { Metadata } from 'next';
import ArticleBody from '@/components/advertorial/ArticleBody';
import SoftCTA from '@/components/advertorial/SoftCTA';

// ============================================
// METADATA
// ============================================
export const metadata: Metadata = {
  title: '10 Знака за Нисък Тестостерон, Които Вероятно Игнорираш | Здравно Предупреждение 2025',
  description: 'Ендокринолог разкрива 10 скрити признака за нисък тестостерон които засягат хиляди мъже ежедневно. Откриј ги преди да е твърде късно.',
  keywords: 'нисък тестостерон, симптоми тестостерон, здравословни проблеми, мъжко здраве, хормонален дисбаланс',
  openGraph: {
    title: '10 Знака за Нисък Тестостерон | Здравно Предупреждение',
    description: 'Какво лекарите не ти казват за ниския тестостерон',
    images: ['/advertorials/testosterone-warning-signs/og-image.jpg'],
  },
};

// ============================================
// UTM TRACKING
// ============================================
const UTM_PARAMS = '?utm_source=advertorial&utm_medium=testosterone-warning-signs-topn&utm_campaign=cold-traffic-2025';
const PRODUCT_LINK = `https://testograph.com/shop/testosterone-optimizer${UTM_PARAMS}`;

// ============================================
// PAGE COMPONENT
// ============================================
export default function TestosteroneWarningSigns() {
  return (
    <ArticleBody>
      {/* ============================================ */}
      {/* URGENCY BANNER - Limited Time Offer */}
      {/* ============================================ */}
      <div className="w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-5 max-w-[80%] py-3">
          <div className="flex items-center justify-center gap-3 text-white">
            <p className="text-sm sm:text-base font-bold text-center">
              СПЕЦИАЛНА ОФЕРТА: <span className="bg-white text-red-600 px-2 py-0.5 rounded">-36%</span> само за днес
            </p>
            <span className="hidden sm:inline text-sm">•</span>
            <p className="hidden sm:block text-sm font-semibold">
              Ограничени количества
            </p>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* HERO SECTION - Image with Quote Overlay */}
      {/* ============================================ */}
      <div className="w-full relative h-[400px] lg:h-[500px] mb-12">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/funnel/testosterone-hero-dark.jpg')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Quote Overlay */}
        <div className="relative h-full flex items-center justify-center px-5">
          <div className="max-w-[800px] text-center">
            <p className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
              "Повечето мъже пропускат тези знаци, докато не е твърде късно..."
            </p>
            <p className="text-sm lg:text-base text-white/90">
              — Д-р Иван Петров, Ендокринолог с 18+ години опит
            </p>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* MAIN CONTAINER - Grid Layout */}
      {/* ============================================ */}
      <div className="container mx-auto px-5 max-w-[80%]">
        <div className="grid grid-cols-1 lg:grid-cols-[9fr_3fr] gap-8 lg:gap-12">

          {/* ============================================ */}
          {/* LEFT COLUMN - Main Content (9fr) */}
          {/* ============================================ */}
          <main>
            {/* Main Headline */}
            <section className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-4">
                10 Знака за Нисък Тестостерон, Които Вероятно Игнорираш
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Нови изследвания разкриват шокиращи истини за ниския тестостерон, които засягат
                <strong> 4 от 10 мъже над 35 години</strong>. Не ги пропускай.
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
            </section>

            {/* Opening Hook */}
            <section className="mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Ако си като повечето мъже над 35, вероятно мислиш че умората, намаленото либидо
                и натрупването на килограми са просто "част от стареенето".
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong>Но ето истината:</strong> Това НЕ е нормално. И определено не е неизбежно.
              </p>
              <p className="text-lg leading-relaxed">
                След 18 години работа с над 8,000 пациенти, открих че <strong className="text-red-600">90% от мъжете
                пропускат критични знаци</strong> за нисък тестостерон, докато е още ранно да действат.
              </p>
            </section>

            {/* ============================================ */}
            {/* NUMBERED SECTIONS - 10 Warning Signs */}
            {/* ============================================ */}

            {/* SIGN #1 - Image RIGHT */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Text Content - LEFT */}
                <div>
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 text-white text-2xl font-bold mb-4">
                    1
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    Необяснима Умора (Дори След 8+ Часа Сън)
                  </h3>

                  {/* Body Text */}
                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Събуждаш се "изтощен" въпреки че си спал достатъчно? Това не е просто "лош сън".
                    Тестостеронът играе ключова роля в енергийните нива и митохондриалната функция.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    <strong>Проблемът:</strong> Когато тестостеронът падне под оптималното ниво
                    (400-500 ng/dL за повечето мъже), клетките ти буквално не могат да произвеждат
                    достатъчно енергия.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700">
                    Повечето лекари ще ти кажат да "пиеш повече кафе" или "намалиш стреса".
                    Но без да оптимизираш тестостерона, кафето само маскира проблема.
                  </p>

                  {/* Warning Badge */}
                  <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="text-sm font-semibold text-yellow-900">
                      ВНИМАНИЕ: 78% от мъжете с нисък тестостерон отчитат хронична умора
                    </p>
                  </div>
                </div>

                {/* Image - RIGHT */}
                <div>
                  <img
                    src="/funnel/tired-man.jpg"
                    alt="Изтощен мъж"
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-[432/280]"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>

            {/* SIGN #2 - Image LEFT */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Image - LEFT */}
                <div className="md:order-1">
                  <img
                    src="/funnel/belly-fat.jpg"
                    alt="Коремна мазнина"
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-[432/280]"
                    loading="lazy"
                  />
                </div>

                {/* Text Content - RIGHT */}
                <div className="md:order-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-600 text-white text-2xl font-bold mb-4">
                    2
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    Натрупване на Коремна Мазнина (Въпреки Диета)
                  </h3>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Тренираш, следиш диета, но коремът продължава да расте? Виновник е ниският тестостерон.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    <strong>Порочен кръг:</strong> Ниският тестостерон води до натрупване на коремна мазнина.
                    Коремната мазнина произвежда ензима ароматаза, който превръща тестостерона в естроген.
                    По-ниският тестостерон = още повече мазнини.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700">
                    Затова мъжете с "бира коремчета" често имат трудности да отслабнат - хормоните
                    им работят срещу тях.
                  </p>

                  <div className="mt-6 bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                    <p className="text-sm font-semibold text-orange-900">
                      ОПАСНОСТ: Коремната мазнина увеличава риска от диабет тип 2 с 400%
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SIGN #3 - Image RIGHT */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold mb-4">
                    3
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    Намалено Либидо или Еректилна Дисфункция
                  </h3>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Това е най-очевидният знак, но повечето мъже го игнорират докато не стане "сериозен проблем".
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Тестостеронът е <strong>критичен</strong> за либидото, еректилната функция и сексуалното
                    представяне. Когато падне под 400 ng/dL, 60% от мъжете отчитат проблеми.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700">
                    <strong>Важно:</strong> Виагра и подобни лекарства НЕ решават проблема - те само
                    подпомагат ерекцията механично, без да адресират хормоналния дисбаланс.
                  </p>

                  <div className="mt-6 bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                    <p className="text-sm font-semibold text-orange-900">
                      ВНИМАНИЕ: Еректилната дисфункция може да сигнализира сърдечни проблеми
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src="/funnel/couple-distant.jpg"
                    alt="Интимни проблеми"
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-[432/280]"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>

            {/* SIGN #4 - Image LEFT */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="md:order-1">
                  <img
                    src="/funnel/muscle-loss.jpg"
                    alt="Загуба на мускули"
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-[432/280]"
                    loading="lazy"
                  />
                </div>

                <div className="md:order-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 text-white text-2xl font-bold mb-4">
                    4
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    Загуба на Мускулна Маса и Сила
                  </h3>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Някога лесно вдигаш тежести, сега се затрудняваш? Тестостеронът е анаболен хормон -
                    той изгражда и поддържа мускулите.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    <strong>Какво се случва:</strong> Без достатъчно тестостерон, тялото влиза в
                    катаболно състояние - разрушава мускули за енергия вместо да ги изгражда.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700">
                    Мъжете над 40 губят <strong>3-5% мускулна маса на десетилетие</strong> ако не оптимизират
                    тестостерона. Това води до саркопения (мускулна атрофия) и крехкост на възраст.
                  </p>

                  <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="text-sm font-semibold text-red-900">
                      КРИТИЧНО: Загубата на мускули намалява метаболизма и ускорява стареенето
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SIGN #5 - Image RIGHT */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500 text-white text-2xl font-bold mb-4">
                    5
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    Депресия, Тревожност или "Мозъчна Мъгла"
                  </h3>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Тестостеронът влияе директно върху мозъчната химия - допамин, серотонин, когнитивни функции.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    <strong>Симптоми:</strong> Трудна концентрация, забравяне на прости неща, липса на мотивация,
                    чувство на безнадеждност. Звучи познато?
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Много мъже получават рецепта за антидепресанти без лекарят дори да проверил тестостерона.
                    Антидепресантите НЕ решават хормонален проблем.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700">
                    Изследвания показват че <strong className="text-red-600">56% от мъжете с депресия
                    имат нисък тестостерон</strong>. Но повечето лекари не тестват за това.
                  </p>

                  <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-4 rounded">
                    <p className="text-sm font-semibold text-red-900">
                      ОПАСНОСТ: Депресията от нисък тестостерон често е неправилно диагностицирана
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src="/funnel/depression-man.jpg"
                    alt="Депресия"
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-[432/280]"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>

            {/* SIGN #6 - Image LEFT */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="md:order-1">
                  <img
                    src="/funnel/gynecomastia.jpg"
                    alt="Гинекомастия"
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-[432/280]"
                    loading="lazy"
                  />
                </div>

                <div className="md:order-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white text-2xl font-bold mb-4">
                    6
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    Увеличени Гърди (Гинекомастия)
                  </h3>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Един от най-притеснителните и смущаващи знаци. Появяват се "мъжки гърди" или
                    тъканта около зърната става чувствителна.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    <strong>Причина:</strong> Когато тестостеронът пада, естрогенът расте (от ароматизация).
                    Високият естроген стимулира растежа на гръдна тъкан при мъжете.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700">
                    Това не е "просто наднормено тегло" - това е хормонален дисбаланс който изисква
                    незабавна намеса. Оставен без лечение, може да изисква хирургична корекция.
                  </p>

                  <div className="mt-6 bg-red-50 border-l-4 border-red-700 p-4 rounded">
                    <p className="text-sm font-semibold text-red-900">
                      СЕРИОЗНО: Гинекомастията може да стане постоянна ако не се третира навреме
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SIGN #7 - Image RIGHT */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-700 text-white text-2xl font-bold mb-4">
                    7
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    Намалена Плътност на Костите
                  </h3>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Повечето мъже мислят че остеопорозата е "женски проблем". <strong>Грешка.</strong>
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Тестостеронът играе критична роля в поддържането на костна плътност. Ниските нива
                    водят до остеопороза, повишен риск от фрактури и загуба на височина.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    <strong>Тихата опасност:</strong> Костната загуба е безсимптомна докато не си счупиш нещо.
                    След 40-годишна възраст мъжете с нисък тестостерон губят <strong>1-2% костна маса годишно</strong>.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700">
                    До 60-годишна възраст това може да означава 20-40% загуба на костна плътност - достатъчно
                    за значителен риск от фрактури при падане.
                  </p>

                  <div className="mt-6 bg-red-50 border-l-4 border-red-700 p-4 rounded">
                    <p className="text-sm font-semibold text-red-900">
                      ПРЕДУПРЕЖДЕНИЕ: 1 от 4 мъже над 50 ще има остеопоротична фрактура
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src="/funnel/bone-health.jpg"
                    alt="Здраве на костите"
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-[432/280]"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>

            {/* SIGN #8 - Image LEFT */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="md:order-1">
                  <img
                    src="/funnel/sleep-problems.jpg"
                    alt="Проблеми със съня"
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-[432/280]"
                    loading="lazy"
                  />
                </div>

                <div className="md:order-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-800 text-white text-2xl font-bold mb-4">
                    8
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    Нарушен Сън или Безсъние
                  </h3>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Проблеми да заспиш? Събуждаш се средно през нощта? Качеството на съня директно
                    зависи от тестостерона.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    <strong>Порочен кръг #2:</strong> Нисък тестостерон води до лош сън.
                    Лошият сън намалява производството на тестостерон (който се синтезира главно нощем).
                    По-нисък тестостерон = още по-лош сън.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700">
                    Изследвания показват че мъжете които спят &lt;5 часа имат <strong>15% по-нисък
                    тестостерон</strong> от тези които спят 8 часа. Но ниският тестостерон прави
                    невъзможно да спиш 8 часа.
                  </p>

                  <div className="mt-6 bg-red-50 border-l-4 border-red-800 p-4 rounded">
                    <p className="text-sm font-semibold text-red-900">
                      ОПАСНОСТ: Хроничното безсъние повишава риска от сърдечносъдови заболявания
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SIGN #9 - Image RIGHT */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-900 text-white text-2xl font-bold mb-4">
                    9
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    Раздразнителност и "Кратък Фитил"
                  </h3>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Забелязваш ли че избухваш по-лесно? Малките неща те изнервят? Чувстваш се
                    "на ръба" през цялото време?
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Тестостеронът стабилизира настроението. Ниските нива водят до емоционална нестабилност,
                    раздразнителност и липса на търпение.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    <strong>Влиянието:</strong> Това разрушава отношения, вреди на кариерата и влошава
                    качеството на живот. Партньорите често казват "не си същият човек".
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700">
                    И имат право - хормоналният дисбаланс буквално променя личността и поведението ти.
                  </p>

                  <div className="mt-6 bg-red-50 border-l-4 border-red-900 p-4 rounded">
                    <p className="text-sm font-semibold text-red-900">
                      КРИТИЧНО: Раздразнителността може да разруши брак и професионални отношения
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src="/funnel/angry-man.jpg"
                    alt="Раздразнителност"
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-[432/280]"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>

            {/* SIGN #10 - Image LEFT - MOST SHOCKING */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="md:order-1">
                  <img
                    src="/funnel/heart-risk.jpg"
                    alt="Сърдечен риск"
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-[432/280]"
                    loading="lazy"
                  />
                </div>

                <div className="md:order-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-2xl font-bold mb-4">
                    10
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    Повишен Риск от Сърдечносъдови Заболявания
                  </h3>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    <strong>Ето най-шокиращата част:</strong> Нисък тестостерон не е просто "качество на живот"
                    проблем. Може да ти скъси живота.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    Множество проучвания показват че мъжете с нисък тестостерон имат значително
                    <strong className="text-red-600"> повишен риск от инфаркт, инсулт и сърдечна недостатъчност</strong>.
                  </p>

                  <p className="text-base leading-relaxed text-neutral-700 mb-4">
                    <strong>Данните:</strong>
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4">
                    <li>33% по-висок риск от смърт от всякаква причина</li>
                    <li>24% по-висок риск от сърдечен инфаркт</li>
                    <li>Удвоен риск от метаболитен синдром</li>
                    <li>Утроен риск от диабет тип 2</li>
                  </ul>

                  <p className="text-base leading-relaxed text-neutral-700 mb-6">
                    <strong>Това е знакът който НЕ МОЖЕШ да игнорираш.</strong> Ниският тестостерон
                    не е просто "усещане" - това е измерим медицински риск.
                  </p>

                  <div className="mt-6 bg-black text-white border-4 border-red-700 p-6 rounded-lg">
                    <p className="text-lg font-bold mb-3">
                      НАЙ-ОПАСНО: Това може да ти струва живота
                    </p>
                    <p className="text-sm">
                      Мъжете с нисък тестостерон умират средно <strong>10-15 години по-рано</strong> от
                      тези с оптимални нива. Това не е преувеличение - това са данни от клинични проучвания.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ============================================ */}
            {/* SOLUTION BOX - Transition to Product */}
            {/* ============================================ */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 shadow-lg">
                <div>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                      Какво Да Направиш Сега?
                    </h2>
                    <p className="text-lg leading-relaxed text-neutral-700 mb-4">
                      Ако разпознаваш <strong>3 или повече</strong> от тези знаци в себе си,
                      има висока вероятност тестостеронът ти да е под оптималното ниво.
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-700 mb-4">
                      <strong>Добрата новина?</strong> Не трябва да приемаш това като "нормално стареене".
                      Не трябва да прибягваш до скъпи и рискови хормонални терапии.
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                      След години изследвания разработих <strong>естествен протокол</strong> който е помогнал
                      на над 8,000 мъже да оптимизират тестостерона си и да възстановят енергията,
                      либидото, мускулите и умствената острота.
                    </p>

                    {/* Key Benefits List */}
                    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                      <h3 className="text-xl font-bold text-neutral-900 mb-4">
                        Този Протокол Включва:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                          <span className="text-base text-neutral-700">
                            <strong>Естествено повишаване на тестостерона</strong> с до 47% за 8-12 седмици
                            (клинично тествано)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                          <span className="text-base text-neutral-700">
                            <strong>Научно обосновани съставки</strong> - 12 активни вещества подкрепени от
                            54 клинични проучвания
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                          <span className="text-base text-neutral-700">
                            <strong>Без рецепта, без странични ефекти</strong> - 100% натурални съставки,
                            безопасни за дългосрочна употреба
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                          <span className="text-base text-neutral-700">
                            <strong>Работи на всички 10 признака</strong> - адресира основната причина,
                            не само симптомите
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                          <span className="text-base text-neutral-700">
                            <strong>Резултати за 4-6 седмици</strong> - първите подобрения се усещат
                            след 2-3 седмици
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Trust Indicators */}
                    <div className="bg-blue-50 rounded-xl p-5 mb-6 border border-blue-200">
                      <p className="text-sm text-blue-900 mb-3">
                        <strong>Клинично тестван протокол</strong>
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-blue-600">8,247</p>
                          <p className="text-xs text-blue-800">Доволни мъже</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-blue-600">96%</p>
                          <p className="text-xs text-blue-800">Процент успех</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-blue-600">4.9/5</p>
                          <p className="text-xs text-blue-800">Средна оценка</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <SoftCTA
                      href={PRODUCT_LINK}
                      text="Виж Пълния Протокол →"
                      variant="primary"
                    />

                    <p className="text-sm text-neutral-600 mt-4 text-center">
                      Сигурна поръчка • Безплатна доставка • 60 дни гаранция
                    </p>
                </div>
              </div>
            </section>

            {/* Closing Thoughts */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Заключителна Мисъл
              </h2>
              <p className="text-base leading-relaxed text-neutral-700 mb-4">
                Ако прочете това до тук и разпознаваш себе си в тези 10 знака, моля те -
                <strong> не ги игнорирай</strong>.
              </p>
              <p className="text-base leading-relaxed text-neutral-700 mb-4">
                Повечето мъже изчакват докато симптомите станат "непоносими" преди да действат.
                Но колкото по-дълго чакаш, толкова по-трудно е да обърнеш процеса.
              </p>
              <p className="text-base leading-relaxed text-neutral-700 mb-6">
                Хормоналната оптимизация не е "ванити проект" или "луксозен избор". Това е
                <strong className="text-red-600"> инвестиция в здравето, дълголетието и качеството на живот</strong>.
              </p>
              <p className="text-base leading-relaxed text-neutral-700">
                Не чакай да е късно. Започни днес.
              </p>
            </section>

          </main>

          {/* ============================================ */}
          {/* RIGHT COLUMN - Sidebar (3fr, Sticky) */}
          {/* ============================================ */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 space-y-6">

              {/* Product Card */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-neutral-200 overflow-hidden">
                {/* Product Image */}
                <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-6">
                  <img
                    src="/funnel/product-image.png"
                    alt="TestoOptimal Natural Booster"
                    className="w-full h-auto mx-auto"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    TestoOptimal™ Natural Booster
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-red-600">89.00 лв</span>
                      <span className="text-lg text-neutral-500 line-through">139.00 лв</span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold mt-1">
                      Спести 36% - Ограничено време
                    </p>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-green-600 flex-shrink-0">✓</span>
                      <span>Повишава тестостерона естествено</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-green-600 flex-shrink-0">✓</span>
                      <span>Работи върху всички 10 знака</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-green-600 flex-shrink-0">✓</span>
                      <span>Резултати за 4-6 седмици</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-green-600 flex-shrink-0">✓</span>
                      <span>8,247+ доволни клиенти</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-green-600 flex-shrink-0">✓</span>
                      <span>Клинично тестван протокол</span>
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <SoftCTA
                    href={PRODUCT_LINK}
                    text="Поръчай Сега →"
                    variant="primary"
                    className="w-full"
                  />

                  {/* Trust Badges */}
                  <div className="mt-4 pt-4 border-t border-neutral-200 space-y-2">
                    <p className="text-xs text-neutral-600">
                      • Сигурно плащане
                    </p>
                    <p className="text-xs text-neutral-600">
                      • Безплатна доставка
                    </p>
                    <p className="text-xs text-neutral-600">
                      • 60 дни гаранция
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
                  <h4 className="font-bold text-neutral-900">Д-р Иван Петров, MD</h4>
                  <p className="text-sm text-neutral-600">Ендокринолог</p>
                  <p className="text-xs text-neutral-500 mt-1">18+ години опит</p>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed italic">
                  "След работа с над 8,000 пациенти разработих този протокол да помага на мъжете
                  да възстановят оптималните си тестостеронови нива естествено."
                </p>
              </div>

              {/* Stats Box */}
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-4 text-center">
                  Доверени от Хиляди
                </h4>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">8,247+</p>
                    <p className="text-xs text-neutral-600">Доволни клиенти</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">96%</p>
                    <p className="text-xs text-neutral-600">Процент успех</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-600">4.9/5</p>
                    <p className="text-xs text-neutral-600">Средна оценка</p>
                  </div>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* ============================================ */}
      {/* MOBILE SIDEBAR - Shows on mobile only */}
      {/* ============================================ */}
      <div className="lg:hidden container mx-auto px-5 max-w-[80%] mt-12">
        {/* Product Card - Mobile */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-neutral-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-6">
            <img
              src="/funnel/product-image.png"
              alt="TestoOptimal Natural Booster"
              className="w-full h-auto max-w-[300px] mx-auto"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              TestoOptimal™ Natural Booster
            </h3>
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-red-600">89.00 лв</span>
                <span className="text-lg text-neutral-500 line-through">139.00 лв</span>
              </div>
              <p className="text-sm text-green-600 font-semibold mt-1">
                Спести 36% - Ограничено време
              </p>
            </div>
            <SoftCTA
              href={PRODUCT_LINK}
              text="Поръчай Сега →"
              variant="primary"
              className="w-full"
            />
          </div>
        </div>
      </div>

    </ArticleBody>
  );
}
