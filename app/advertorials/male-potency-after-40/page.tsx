import type { Metadata } from 'next';
import Image from 'next/image';
import ArticleBody from '@/components/advertorial/ArticleBody';
import SoftCTA from '@/components/advertorial/SoftCTA';

export const metadata: Metadata = {
  title: 'Как да Запазиш Мъжката Си Потентност След 40 | Експертно Ръководство 2025',
  description: 'Д-р Георги Станев обяснява научно доказани методи за запазване на мъжката потентност след 40-годишна възраст.',
  keywords: 'мъжка потентност, потентност след 40, либидо, тестостерон, мъжко здраве',
  openGraph: {
    title: 'Как да Запазиш Мъжката Си Потентност След 40',
    description: 'Експертни съвети и научно доказани методи за мъжка потентност',
    images: ['/advertorials/male-potency-after-40/og-image.jpg'],
  },
};

const UTM_PARAMS = '?utm_source=advertorial&utm_medium=editorial-blog&utm_campaign=male-potency-2025';
const PRODUCT_LINK = `https://testograph.com/shop/testosterone-optimizer${UTM_PARAMS}`;

export default function MalePotencyAfter40Page() {
  return (
    <ArticleBody>
      {/* ============================================ */}
      {/* AUTHOR + DATE BYLINE */}
      {/* ============================================ */}
      <section className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {/* Author */}
          <div className="flex items-center gap-2">
            <span className="text-neutral-500">Автор:</span>
            <span className="font-semibold text-neutral-900">Д-р Георги Станев, MD</span>
          </div>

          {/* Separator */}
          <span className="text-neutral-300">|</span>

          {/* Date */}
          <div className="flex items-center gap-2">
            <span className="text-neutral-500">Публикувано:</span>
            <span className="text-neutral-900">15 януари 2025</span>
          </div>

          {/* Reading Time */}
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-500">7 минути четене</span>
        </div>
      </section>

      {/* ============================================ */}
      {/* HERO HEADING */}
      {/* ============================================ */}
      <section className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          Как да Запазиш Мъжката Си Потентност След 40: Експертно Ръководство
        </h1>
        <p className="text-xl text-neutral-600">
          Научно доказани стратегии за поддържане на сексуално здраве, либидо и тестостеронови нива
          през четвъртото десетилетие и след това
        </p>
      </section>

      {/* ============================================ */}
      {/* HERO IMAGE */}
      {/* ============================================ */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/funnel/male-health-40plus.jpg"
            fill
            className="object-cover"
            alt="Мъж на 40+ години в добра физическа форма"
            priority
          />
        </div>
        <p className="text-sm text-neutral-500 mt-2 text-center italic">
          Илюстрация: Здравословен начин на живот за мъжка потентност след 40
        </p>
      </section>

      {/* ============================================ */}
      {/* OPENING PARAGRAPH */}
      {/* ============================================ */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-neutral-700">
            След 40-годишна възраст мъжете преживяват постепенно намаление на тестостероновите нива
            с приблизително 1-2% годишно. Това биологично естествено явление води до редица промени
            в сексуалното здраве - намалено либидо, трудности с ерекцията и понижена сексуална увереност.
            Според изследване публикувано в Journal of Sexual Medicine (2024), над 52% от мъжете между
            40 и 70 години съобщават за някаква форма на еректилна дисфункция.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700">
            Добрата новина е, че спадът в потентността не е неизбежен. Чрез комбинация от правилна
            исхрана, специфични хранителни добавки и промени в начина на живот, мъжете могат да
            запазят и дори подобрят сексуалното си здраве значително след 40-годишна възраст.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION: WHY IT HAPPENS */}
      {/* ============================================ */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">
          Защо Потентността Намалява След 40?
        </h2>

        <div className="prose prose-lg max-w-none space-y-4">
          <p className="text-neutral-700 leading-relaxed">
            Спадът в мъжката потентност след 40 е резултат от комплексно взаимодействие между
            хормонални, васкуларни и психологични фактори. Централна роля играе намалението на
            свободния тестостерон - хормонът отговорен за либидото, ерекцията и сексуалната
            производителност.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Според проучване на Харвардската медицинска школа (2023), нивата на тестостерон започват
            да спадат с около 1% годишно след 30-годишна възраст. До 40-те години много мъже вече
            изпитват симптоми на нисък тестостерон - намалена енергия, загуба на мускулна маса и
            понижено либидо.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Освен хормоналните промени, кръвоносните съдове губят еластичност с възрастта, което
            затруднява притока на кръв към гениталиите. Стресът, лошото хранене и заседналият начин
            на живот допълнително влошават ситуацията.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* 2-COLUMN LAYOUT: PROBLEMS + SIDEBAR */}
      {/* ============================================ */}
      <section className="mb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            4 Ключови Признака Че Потентността Ти Се Нуждае от Внимание
          </h2>

          <div className="grid md:grid-cols-12 gap-12">
            {/* LEFT COLUMN - 8fr */}
            <div className="md:col-span-8 space-y-6">

              {/* Problem 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    1. Намалено Сексуално Желание
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Ако желанието за секс вече не е толкова силно както преди, това е ранен признак
                    за хормонален дисбаланс. Нисък тестостерон директно потиска либидото. Мъжете
                    често заменят липсата на интерес със "умора от работа", но истинската причина е
                    биохимична. Според ендокринологични проучвания, либидото е един от първите
                    индикатори за спадащ тестостерон.
                  </p>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    2. Трудности с Ерекцията
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Когато ерекцията става по-слаба, по-трудна за постигане или не се задържа достатъчно
                    дълго, това сигнализира за проблем с кръвообращението или ниски нива на азотен оксид -
                    молекулата отговорна за разширяване на кръвоносните съдове. Това не е "просто възраст" -
                    това е коригируем физиологичен процес. Изследвания показват, че 70% от случаите на еректилна
                    дисфункция са свързани с васкуларни проблеми.
                  </p>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    3. Ранна Еякулация
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Ако забелязваш че оргазмът настъпва по-бързо отколкото преди, това може да е свързано
                    с хормонален дисбаланс и повишени нива на стресови хормони (кортизол). Тестостеронът
                    играе роля в контрола на еякулацията чрез влияние върху серотониновите рецептори.
                    Ниският тестостерон и високият стрес създават идеални условия за ранна еякулация.
                  </p>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    4. Намалена Увереност в Леглото
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Психологическият аспект често е подценяван. Когато мъжът почувства, че не "работи"
                    както преди, започва да избягва сексуални ситуации. Тревожността по изпълнение създава
                    порочен кръг - стресът повишава кортизола, който допълнително потиска тестостерона.
                    Този психологически компонент трябва да се адресира заедно с физическите причини.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN - 4fr SIDEBAR */}
            <div className="md:col-span-4">
              <div className="sticky top-8">
                <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                  <Image
                    src="/funnel/product-sidebar.png"
                    width={300}
                    height={400}
                    className="w-full rounded-lg mb-4"
                    alt="Natural testosterone support supplement"
                  />
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Естествена Подкрепа за Потентността
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Научно формулиран комплекс от билки и минерали за здрав тестостерон и либидо
                  </p>
                  <SoftCTA
                    link={PRODUCT_LINK}
                    ctaText="Научете повече →"
                    variant="minimal"
                    className="w-full text-center"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HIGHLIGHTED CALLOUT BOX */}
      {/* ============================================ */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="bg-amber-50 border-2 border-dashed border-amber-400 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                Важна Забележка от Д-р Станев
              </h3>
              <p className="text-amber-800 leading-relaxed">
                В моята практика виждам стотици мъже над 40, които игнорират ранните признаци на
                понижен тестостерон. Колкото по-рано започнете превантивни мерки, толкова по-лесно
                е да запазите оптимални нива. Комбинацията от правилно хранене, физическа активност
                и специфични хранителни добавки (като цинк, магнезий и растителни екстракти) може да
                постигне до 30-40% подобрение на тестостероновите нива за 8-12 седмици.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION: NATURAL SOLUTIONS */}
      {/* ============================================ */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">
          Естествени Методи за Поддържане на Потентността
        </h2>

        <div className="space-y-8">
          {/* Method 1 */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">
              1. Ключови Хранителни Вещества
            </h3>
            <p className="text-neutral-700 leading-relaxed mb-3">
              Определени минерали и витамини са критични за производството на тестостерон и
              сексуалното здраве:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-neutral-700">
                <strong>Цинк:</strong> Директно участва в синтеза на тестостерон. Дефицитът на цинк
                е широко разпространен при мъже над 40 и води до спад на тестостерона с до 25%.
              </li>
              <li className="text-neutral-700">
                <strong>Магнезий:</strong> Повишава свободния тестостерон като го освобождава от
                протеин свързване. Изследвания показват 26% увеличение при дневен прием.
              </li>
              <li className="text-neutral-700">
                <strong>Витамин D3:</strong> Действа като стероиден хормон и директно стимулира
                тестостероновите рецептори. Над 70% от мъжете имат дефицит.
              </li>
              <li className="text-neutral-700">
                <strong>L-аргинин и L-цитрулин:</strong> Аминокиселини които се превръщат в азотен
                оксид - молекулата отговорна за ерекцията.
              </li>
            </ul>
          </div>

          {/* Method 2 */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">
              2. Билки с Доказан Ефект
            </h3>
            <p className="text-neutral-700 leading-relaxed mb-3">
              Определени растителни екстракти имат силно научно обосновано действие:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-neutral-700">
                <strong>Трибулус Терестрис:</strong> Повишава лутеинизиращия хормон, който стимулира
                тестисите да произвеждат тестостерон. Клинични проучвания показват до 16% увеличение.
              </li>
              <li className="text-neutral-700">
                <strong>Ашваганда (Withania Somnifera):</strong> Адаптоген който намалява кортизола
                (стресовия хормон) и повишава тестостерона с 15-17%. Също подобрява качеството на спермата.
              </li>
              <li className="text-neutral-700">
                <strong>Мака (Lepidium Meyenii):</strong> Перуански корен с дългогодишна употреба за либидо.
                Мета-анализ от 2010 г. потвърждава ефекта върху сексуалното желание.
              </li>
              <li className="text-neutral-700">
                <strong>Женшен (Panax Ginseng):</strong> Подобрява еректилната функция чрез стимулиране
                на азотен оксид. Наричан "природна виагра" в корейската медицина.
              </li>
            </ul>
          </div>

          {/* Method 3 */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">
              3. Промени в Начина на Живот
            </h3>
            <p className="text-neutral-700 leading-relaxed mb-3">
              Без правилния начин на живот, дори най-добрите добавки няма да дадат пълен ефект:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-neutral-700">
                <strong>Силови тренировки:</strong> Вдигането на тежести е доказано най-ефективният
                начин за повишаване на тестостерон естествено. 3-4 тренировки седмично с големи мускулни
                групи (клекове, мъртва тяга) повишават тестостерона до 48 часа след тренировката.
              </li>
              <li className="text-neutral-700">
                <strong>Сън 7-8 часа:</strong> Тестостеронът се произвежда предимно по време на дълбокия
                сън. Мъжете които спят под 6 часа имат 15% по-нисък тестостерон.
              </li>
              <li className="text-neutral-700">
                <strong>Управление на стреса:</strong> Хроничният стрес повишава кортизола, който директно
                инхибира производството на тестостерон. Медитация, дишане и адаптогени помагат значително.
              </li>
              <li className="text-neutral-700">
                <strong>Ограничаване на алкохола:</strong> Алкохолът увеличава ензима ароматаза, който
                превръща тестостерон в естроген. Дори умереното пиене може да намали тестостерона с 6-8%.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BEFORE / AFTER COMPARISON */}
      {/* ============================================ */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
          Какво Може Да Очакваш
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* BEFORE */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-900 mb-4 text-center">
              Без Подкрепа
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0">✗</span>
                <span className="text-red-800">Постепенно намаляващо либидо</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0">✗</span>
                <span className="text-red-800">Трудности с ерекцията</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0">✗</span>
                <span className="text-red-800">Загуба на мускулна маса</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0">✗</span>
                <span className="text-red-800">Увеличена умора и липса на енергия</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0">✗</span>
                <span className="text-red-800">Психологическа несигурност</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0">✗</span>
                <span className="text-red-800">Скъпи медицински процедури в бъдещето</span>
              </li>
            </ul>
          </div>

          {/* AFTER */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-900 mb-4 text-center">
              С Естествена Подкрепа
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span className="text-green-800">Възстановено сексуално желание</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span className="text-green-800">По-силна и устойчива ерекция</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span className="text-green-800">Подобрена мускулна тонус</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span className="text-green-800">Висока енергия през целия ден</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span className="text-green-800">Увереност и самочувствие</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span className="text-green-800">Превантивна грижа за дългосрочно здраве</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 lg:p-12 border border-blue-200">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 text-center">
            Поеми Контрол Над Мъжкото Си Здраве
          </h2>
          <p className="text-lg text-neutral-700 text-center mb-8 max-w-2xl mx-auto">
            Научно формулиран комплекс от 12 билки и минерала за оптимално либидо, потентност
            и тестостеронови нива
          </p>

          <div className="flex justify-center">
            <SoftCTA
              link={PRODUCT_LINK}
              ctaText="Открийте Естественото Решение →"
              variant="boxed"
              className="text-lg px-8 py-4"
            />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-neutral-600">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Безплатна доставка
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              60 дни гаранция
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Научно доказани съставки
            </span>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CLOSING SECTION */}
      {/* ============================================ */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          Заключение
        </h2>
        <p className="text-base leading-relaxed text-neutral-700 mb-4">
          Мъжката потентност след 40 не трябва да бъде приемана като неизбежна жертва на възрастта.
          Чрез комбинация от правилни хранителни вещества, растителни екстракти и здравословен начин
          на живот, мъжете могат да запазят и дори подобрят сексуалното си здраве през четвъртото
          и петото десетилетие.
        </p>
        <p className="text-base leading-relaxed text-neutral-700 mb-4">
          Ключът е да започнеш превантивно - колкото по-рано адресираш хормоналните промени, толкова
          по-лесно е да поддържаш оптимални нива. Естествените подходи не само подобряват потентността,
          но и цялостното здраве - енергия, мускулна маса, настроение и когнитивна функция.
        </p>
        <p className="text-lg font-semibold text-blue-700">
          Инвестирай в здравето си днес, за да се наслаждаваш на пълноценен живот утре.
        </p>
      </section>

    </ArticleBody>
  );
}
