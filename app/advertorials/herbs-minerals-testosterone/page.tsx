import type { Metadata } from 'next';
import Image from 'next/image';
import ArticleBody from '@/components/advertorial/ArticleBody';
import SoftCTA from '@/components/advertorial/SoftCTA';

// ============================================
// METADATA
// ============================================
export const metadata: Metadata = {
  title: 'Кои Билки и Минерали Вдигат Тестостерона Естествено | Доказан Протокол 2025',
  description: 'Открий как естествени билки и минерали могат да повишат тестостерона без странични ефекти. Реални отзиви от мъже над 35 години.',
  keywords: 'тестостерон, билки за тестостерон, минерали, естествено повишаване, мъжко здраве, хормонален баланс',
  openGraph: {
    title: 'Кои Билки и Минерали Вдигат Тестостерона Естествено',
    description: 'Научно доказан протокол за естествено повишаване на тестостерона',
    images: ['/advertorials/herbs-minerals-testosterone/og-image.jpg'],
  },
};

// ============================================
// UTM TRACKING
// ============================================
const UTM_PARAMS = '?utm_source=advertorial&utm_medium=herbs-minerals-testosterone&utm_campaign=cold-traffic-2025';
const PRODUCT_LINK = `https://testograph.com/shop/testosterone-optimizer${UTM_PARAMS}`;

// ============================================
// PAGE COMPONENT
// ============================================
export default function HerbsMineralsTestosteronePage() {
  return (
    <ArticleBody>
      {/* ============================================ */}
      {/* HERO SECTION - Product In-Use Lifestyle Shot */}
      {/* ============================================ */}
      <section className="relative w-full h-[500px] lg:h-[600px] mb-12">
        <Image
          src="/funnel/testosterone-hero-energy.jpg"
          fill
          className="object-cover"
          alt="Мъж с висока енергия и тестостерон"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-6 max-w-6xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Как Открих Естествения Начин<br />
              Да Вдигна Тестостерона
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
              Без хормони, без странични ефекти, само природни билки и минерали
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MAIN CONTENT CONTAINER */}
      {/* ============================================ */}
      <div className="container mx-auto px-6 max-w-6xl">

        {/* ============================================ */}
        {/* HOOK + PERSONAL STORY SECTION */}
        {/* ============================================ */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            "Колко струва да имаш тестостерон като на 25-годишен?"
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Открий защо хиляди мъже избират естествения път вместо скъпите и рискови хормонални терапии
          </p>

          <div className="prose prose-lg max-w-none space-y-6">
            <p>
              Ето нещо, което рядко споделям публично... На 38 години почувствах, че губя себе си.
              Умората беше постоянна. Мускулите започнаха да изчезват въпреки редовните тренировки.
              Либидото беше спомен от миналото.
            </p>

            <p>
              Когато споменах пред лекаря си, той ми каза: <strong>"Това е нормално за възрастта ти.
              Можем да започнем хормонална терапия, но има странични ефекти."</strong>
            </p>

            <p>
              Хормонална терапия на 38? Това звучеше като капитулация. А страничните ефекти - безплодие,
              проблеми със сърцето, зависимост - бяха твърде сериозни.
            </p>

            <p>
              Но сега, 6 месеца по-късно, чувствам се като на 25. Енергията се върна. Мускулите растат.
              Либидото е като на колежанско време. И това <strong>без нито една инжекция или таблетка с рецепта</strong>.
            </p>

            <p className="text-lg font-semibold text-green-700">
              Отговорът беше в естествени билки и минерали, които човечеството използва от хилядолетия.
            </p>
          </div>
        </section>

        {/* ============================================ */}
        {/* PRODUCT INTRODUCTION SECTION */}
        {/* ============================================ */}
        <section className="mb-16 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              TestoOptimal Natural Booster
            </h2>
            <p className="text-2xl text-neutral-600">
              12 научно доказани билки и минерала за оптимален тестостерон
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <Image
              src="/funnel/product-image.png"
              width={600}
              height={600}
              className="w-full rounded-lg shadow-2xl"
              alt="TestoOptimal Natural Booster"
            />
          </div>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <h3 className="text-xl font-bold mb-2 text-neutral-900">100% Натурални</h3>
              <p className="text-neutral-600">
                Само билки и минерали, без синтетични хормони или химикали
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <h3 className="text-xl font-bold mb-2 text-neutral-900">Научно Доказани</h3>
              <p className="text-neutral-600">
                Всяка съставка е подкрепена от клинични изследвания
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <h3 className="text-xl font-bold mb-2 text-neutral-900">Бързи Резултати</h3>
              <p className="text-neutral-600">
                Първите подобрения след 2-3 седмици, пълен ефект за 8-12 седмици
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CUSTOMER REVIEWS GRID SECTION */}
        {/* ============================================ */}
        <section className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-neutral-900 mb-12">
            Какво Споделят Други Мъже
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review Card #1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-neutral-200">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-green-500 text-xl">★</span>
                  ))}
                </div>
                <span className="text-lg font-semibold text-neutral-900">5/5</span>
              </div>

              {/* Product In-Use Image */}
              <div className="mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/funnel/review-gym-1.jpg"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover aspect-[4/3]"
                  alt="Клиент в зала след подобрение"
                />
              </div>

              {/* Review Text */}
              <p className="text-neutral-700 mb-4 leading-relaxed">
                "След 4 седмици започнах да усещам разликата. Енергията в залата се върна,
                теглата растат, а възстановяването е по-бързо. На 42 години чувствам се
                по-силен от времето на 30."
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                <Image
                  src="/funnel/georgi-avatar.jpg"
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="Георги Димитров"
                />
                <div>
                  <p className="font-semibold text-neutral-900">Георги Д.</p>
                  <p className="text-sm text-neutral-600">София, 42 години</p>
                </div>
              </div>
            </div>

            {/* Review Card #2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-neutral-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-green-500 text-xl">★</span>
                  ))}
                </div>
                <span className="text-lg font-semibold text-neutral-900">5/5</span>
              </div>

              <div className="mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/funnel/review-office-2.jpg"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover aspect-[4/3]"
                  alt="Клиент на работа с висока енергия"
                />
              </div>

              <p className="text-neutral-700 mb-4 leading-relaxed">
                "Най-голямата промяна беше в умствената острота и енергията през деня.
                Няма повече следобедни срутвания. Концентрацията на работа се подобри драстично.
                Партньорката ми също забеляза разликата в либидото."
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                <Image
                  src="/funnel/georgi-avatar.jpg"
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="Петър Стоянов"
                />
                <div>
                  <p className="font-semibold text-neutral-900">Петър С.</p>
                  <p className="text-sm text-neutral-600">Пловдив, 38 години</p>
                </div>
              </div>
            </div>

            {/* Review Card #3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-neutral-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-green-500 text-xl">★</span>
                  ))}
                </div>
                <span className="text-lg font-semibold text-neutral-900">5/5</span>
              </div>

              <div className="mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/funnel/review-active-3.jpg"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover aspect-[4/3]"
                  alt="Клиент активен навън"
                />
              </div>

              <p className="text-neutral-700 mb-4 leading-relaxed">
                "Скептичен бях към натуралните добавки, но решението да тествам беше най-доброто
                което съм вземал. След 6 седмици кръвните ми показатели показаха повишение на
                свободния тестостерон с 38%. Без странични ефекти."
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                <Image
                  src="/funnel/georgi-avatar.jpg"
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="Иван Николов"
                />
                <div>
                  <p className="font-semibold text-neutral-900">Иван Н.</p>
                  <p className="text-sm text-neutral-600">Варна, 45 години</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FEATURES SHOWCASE - Key Herbs & Minerals */}
        {/* ============================================ */}
        <section className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-neutral-900 mb-12">
            Ключовите Билки и Минерали
          </h2>

          {/* Feature #1 - Ashwagandha - Image RIGHT */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                1. Ашваганда (Withania Somnifera)
              </h3>
              <p className="text-lg text-neutral-700 mb-4">
                Древна адаптогенна билка, използвана в аюрведската медицина от над 3000 години.
              </p>
              <p className="text-base text-neutral-700 mb-6">
                <strong>Как работи:</strong> Намалява кортизола (стресовия хормон), който инхибира
                производството на тестостерон. Клинични изследвания показват <strong>до 17% повишение
                на тестостерона</strong> след 8 седмици употреба.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-neutral-700">Намалява стрес и тревожност</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-neutral-700">Подобрява качеството на съня</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-neutral-700">Повишава мускулна маса и сила</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/funnel/ashwagandha-plant.jpg"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                alt="Ашваганда растение"
              />
            </div>
          </div>

          {/* Feature #2 - Zinc - Image LEFT */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="md:order-1">
              <Image
                src="/funnel/zinc-foods.jpg"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                alt="Храни богати на цинк"
              />
            </div>
            <div className="md:order-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                2. Цинк (Zinc)
              </h3>
              <p className="text-lg text-neutral-700 mb-4">
                Есенциален минерал, критичен за производството на тестостерон. Дефицитът на цинк
                е свързан директно с нисък тестостерон.
              </p>
              <p className="text-base text-neutral-700 mb-6">
                <strong>Как работи:</strong> Цинкът е необходим за функционирането на ензимите,
                които синтезират тестостерон в тестисите. Също така блокира ароматазата - ензима
                който превръща тестостерон в естроген.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-neutral-700">Повишава свободния тестостерон</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-neutral-700">Подобрява сперматозоидното качество</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-neutral-700">Укрепва имунната система</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature #3 - Fenugreek - Image RIGHT */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                3. Сминдух (Fenugreek)
              </h3>
              <p className="text-lg text-neutral-700 mb-4">
                Билка, използвана традиционно за повишаване на либидото и мъжката сила.
              </p>
              <p className="text-base text-neutral-700 mb-6">
                <strong>Как работи:</strong> Съдържа съединения наречени фурастанолови сапонини,
                които подпомагат освобождаването на свободен тестостерон от протеините в кръвта.
                Изследване показа <strong>46% увеличение на свободния тестостерон</strong> за 12 седмици.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-neutral-700">Увеличава либидото и сексуалната функция</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-neutral-700">Подобрява мускулната сила</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-neutral-700">Регулира кръвната захар</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/funnel/fenugreek-seeds.jpg"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                alt="Семена от сминдух"
              />
            </div>
          </div>

          {/* Feature #4 - Vitamin D3 - Image LEFT */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-1">
              <Image
                src="/funnel/vitamin-d-sun.jpg"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                alt="Слънце и витамин D"
              />
            </div>
            <div className="md:order-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                4. Витамин D3 + Магнезий
              </h3>
              <p className="text-lg text-neutral-700 mb-4">
                Критична комбинация за хормонално здраве. Над 70% от мъжете имат дефицит на витамин D.
              </p>
              <p className="text-base text-neutral-700 mb-6">
                <strong>Как работи:</strong> Витамин D3 функционира като стероиден хормон и директно
                стимулира производството на тестостерон. Магнезият активира витамин D и повишава
                свободния тестостерон. Изследвания показват <strong>до 25% увеличение</strong> при дефицитни мъже.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-neutral-700">Подобрява костната плътност</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-neutral-700">Повишава настроението и енергията</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-neutral-700">Подпомага мускулната функция</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SOCIAL PROOF SECTION */}
        {/* ============================================ */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 border-2 border-blue-200">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-neutral-900 mb-6">
              Присъедини Се Към Хиляди Мъже
            </h2>

            <p className="text-lg text-neutral-700 text-center max-w-3xl mx-auto mb-12">
              TestoOptimal е избран от над 8,000 мъже в България, които търсят естествен и безопасен
              начин да оптимизират тестостерона си без рискови хормонални терапии.
            </p>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <p className="text-5xl font-bold text-blue-600 mb-2">8,247+</p>
                <p className="text-neutral-600">Доволни клиенти</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <p className="text-5xl font-bold text-purple-600 mb-2">96%</p>
                <p className="text-neutral-600">Процент успех</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <p className="text-5xl font-bold text-green-600 mb-2">4.9/5</p>
                <p className="text-neutral-600">Средна оценка</p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
              <p className="text-lg italic text-neutral-700 mb-3">
                "Най-доброто решение което съм взел за здравето си. Усещам разликата всеки ден -
                в залата, на работа, в спалнята. На 43 години съм в най-добрата си форма."
              </p>
              <p className="font-semibold text-neutral-900">- Христо М., Бургас</p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PRICE POSITIONING SECTION */}
        {/* ============================================ */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12 border-2 border-orange-300">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-neutral-900 mb-6">
              Естествена Алтернатива На Хормонална Терапия
            </h2>

            <p className="text-lg text-neutral-700 text-center max-w-3xl mx-auto mb-8">
              Хормоналните терапии (TRT) струват хиляди левове годишно и идват със сериозни странични ефекти.
              TestoOptimal предлага естествена, безопасна и <strong>значително по-достъпна</strong> алтернатива.
            </p>

            {/* Price Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 border-2 border-neutral-300 relative">
                <p className="text-sm uppercase text-neutral-500 mb-2 font-semibold">Хормонална Терапия (TRT)</p>
                <p className="text-4xl font-bold text-neutral-400 line-through mb-2">3,600 лв/год</p>
                <p className="text-sm text-neutral-600 mb-4">Инжекции, рецепти, лекарски прегледи</p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Странични ефекти (безплодие, сърдечни проблеми)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Необходима рецепта и медицински контрол</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Риск от зависимост (тялото спира собствено производство)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-green-500 relative shadow-lg">
                <span className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  СПЕЦИАЛНА ОФЕРТА
                </span>
                <p className="text-sm uppercase text-green-600 mb-2 font-semibold">TestoOptimal Natural</p>
                <p className="text-5xl font-bold text-green-600 mb-2">89 лв</p>
                <p className="text-sm text-neutral-600 mb-4">Месечна доза (3 месеца за 267 лв)</p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span>Без странични ефекти</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span>Без рецепта или лекарски контрол</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span>Стимулира собственото производство на тестостерон</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-neutral-600">
              <strong>Спестяваш над 3,300 лв годишно</strong> в сравнение с TRT терапия, като получаваш
              безопасен и ефективен резултат без риска от странични ефекти.
            </p>
          </div>
        </section>

        {/* ============================================ */}
        {/* FINAL CTA SECTION */}
        {/* ============================================ */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 border-2 border-green-300 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div>
                <Image
                  src="/funnel/product-image.png"
                  width={500}
                  height={500}
                  className="w-full rounded-lg shadow-xl"
                  alt="TestoOptimal Natural Booster"
                />
              </div>

              {/* CTA Content */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                  TestoOptimal Natural Booster
                </h2>
                <p className="text-lg text-neutral-700 mb-6">
                  Естественият път към оптимален тестостерон
                </p>

                {/* Key Promises */}
                <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                      <span className="text-neutral-700">
                        <strong>12 научно доказани билки и минерала</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                      <span className="text-neutral-700">
                        Резултати за <strong>2-3 седмици</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                      <span className="text-neutral-700">
                        <strong>Без странични ефекти</strong> или рецепта
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                      <span className="text-neutral-700">
                        Използван от <strong>8,247+ мъже</strong>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl font-bold text-green-600">89 лв</span>
                    <span className="text-2xl text-neutral-500 line-through">139 лв</span>
                  </div>
                  <p className="text-sm text-red-600 font-semibold mb-4">
                    Спестяваш 50 лв - Ограничена оферта!
                  </p>
                </div>

                {/* Order Button */}
                <SoftCTA
                  link={PRODUCT_LINK}
                  ctaText="Поръчай Сега →"
                  variant="boxed"
                  className="w-full text-center text-xl py-4 mb-6"
                />

                {/* Trust Badges */}
                <div className="pt-6 border-t border-green-200 space-y-2">
                  <p className="text-sm text-neutral-600 flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span> Безплатна доставка до врата
                  </p>
                  <p className="text-sm text-neutral-600 flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span> 60 дни гаранция за връщане на пари
                  </p>
                  <p className="text-sm text-neutral-600 flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span> Сигурно онлайн плащане
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CLOSING SECTION */}
        {/* ============================================ */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Не Приемай Ниския Тестостерон Като "Нормално"
          </h2>
          <p className="text-base leading-relaxed text-neutral-700 mb-4">
            Твоето тяло е създадено да произвежда оптимални нива на тестостерон дори след 40, 50 или 60 години.
            Проблемът не е възрастта - проблемът е дефицитът на ключови хранителни вещества, хроничният стрес
            и токсините в околната среда.
          </p>
          <p className="text-base leading-relaxed text-neutral-700 mb-4">
            TestoOptimal Natural Booster не прави нищо магическо. Той просто <strong>дава на тялото ти
            необходимите билки и минерали</strong> за да възстанови естественото производство на тестостерон.
          </p>
          <p className="text-base leading-relaxed text-neutral-700 mb-6">
            Ако си готов да възстановиш енергията, силата и либидото без риска от хормонални терапии,
            това е твоят момент.
          </p>
          <p className="text-lg font-semibold text-green-700">
            Присъедини се към хиляди мъже, които избраха естествения път.
          </p>
        </section>

      </div>
    </ArticleBody>
  );
}
