import { Metadata } from 'next';
import ArticleBody, { ArticleSection, PullQuote, HighlightBox } from '@/components/advertorial/ArticleBody';
import SoftCTA, { ProductMention } from '@/components/advertorial/SoftCTA';
import Disclaimer from '@/components/advertorial/Disclaimer';

/**
 * Performance Edge Advertorial Page
 *
 * Angle: Competitive advantage + Peak performance
 * Target: High-performers, entrepreneurs, athletes 30-45
 * Hook: "Unfair advantage" that's legal and natural
 */

// SEO Metadata
export const metadata: Metadata = {
  title: 'Как elite performers поддържат 10/10 energy levels naturally | Peak Performance BG',
  description: 'Стефан, 36, entrepreneur и endurance athlete разкрива естествения протокол за sustained peak performance без stimulants или synthetics.',
  keywords: [
    'peak performance',
    'testosterone optimization',
    'entrepreneur health',
    'athlete performance',
    'biohacking',
    'natural performance enhancement',
    'sustained energy'
  ],
  authors: [{ name: 'Peak Performance BG' }],
  openGraph: {
    title: 'Elite Performance Protocol: 10/10 Energy Naturally',
    description: 'How high-performers optimize hormones for competitive advantage',
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
const UTM_PARAMS = '?utm_source=advertorial&utm_medium=performance-edge&utm_campaign=cold-traffic-2025';

export default function PerformanceEdgePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Urgency Header */}
      <div className="w-full bg-[#242424] py-3 sm:py-4">
        <p className="text-white text-center text-sm sm:text-base font-semibold">
          🚀 Как elite performers поддържат 10/10 energy levels naturally
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
                Entrepreneur на 36: "От energy crash в 14:00 към sustained 10/10 performance"
              </h1>
              <h2 className="font-sans text-xl text-neutral-700 leading-[150%]">
                Стефан Димитров build-ва SaaS startup и тренира за Ironman. Ето естествения протокол който му дава unfair advantage
              </h2>
            </div>

            {/* Author & Meta */}
            <div className="mb-8 pb-6 border-b border-neutral-200">
              <p className="text-sm font-sans text-neutral-600">
                <span className="font-semibold">Автор:</span> Редакция Peak Performance BG
              </p>
              <p className="text-sm font-sans text-neutral-500 mt-1">
                17 януари 2025 • 10 мин четене
              </p>
            </div>

            {/* Article Content */}
            <ArticleBody>
              <ArticleSection>
                <p>
                  <strong>СОФИЯ</strong> — 06:00. Alarm. Стефан Димитров, 36, founder на SaaS startup, е вече буден.
                </p>

                <p>
                  07:00 - 09:00: Deep work session (product development)<br />
                  09:00 - 10:00: Team standup + strategic calls<br />
                  10:00 - 12:00: Client meetings<br />
                  12:00 - 13:30: Training session (cycling or running)<br />
                  14:00 - 18:00: More deep work<br />
                  18:00 - 19:30: Family time<br />
                  20:00 - 21:00: Strategic planning за следващия ден<br />
                  21:30: Sleep
                </p>

                <p>
                  "Хората ме питат как поддържам този график. Отговорът не е кафеин или сила на волята. Отговорът е хормони," казва Стефан.
                </p>

                <PullQuote
                  quote="Енергията не идва от мотивация или дисциплина. Енергията идва от оптимизация. Ако хормоните ти са разбалансирани, никакъв кафеин няма да те спаси."
                  attribution="Стефан Димитров, предприемач & атлет"
                />
              </ArticleSection>

              <ArticleSection>
                <h2>The Performance Plateau Problem</h2>

                <p>
                  Преди 2 години, Стефан беше в същия hustle mode. Но резултатите не идваха.
                </p>

                <p>
                  "Будех се уморен. В 14:00 енергията ми рухваше толкова силно, че нуждата от дрямка беше непоносима. Тренировките бяха принудени, не приятни. Качеството на решенията след обяд беше ужасно," споделя той.
                </p>

                <p>
                  Класическият entrepreneur burnout trajectory:
                </p>

                <ul>
                  <li>Caffeine dependency (4-5 coffees дневно)</li>
                  <li>Sleep quality: Poor (waking up 2-3 пъти нощно)</li>
                  <li>Recovery: Slow (2-3 дни за да се recover от hard training)</li>
                  <li>Libido: Nonexistent</li>
                  <li>Mental clarity: Brain fog след обяд</li>
                </ul>

                <p>
                  "Мислех че това е цената на success. Hustle culture, baby. Но после разбрах - това не е badge of honor. Това е hormonal disaster."
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>The Testosterone-Performance Connection</h2>

                <p>
                  Стефан направи blood test по препоръка на треньор. Резултатът:
                </p>

                <ul>
                  <li>Testosterone: 342 ng/dL (low for 34-годишен high-performer)</li>
                  <li>Cortisol: Elevated (chronic stress marker)</li>
                  <li>Free T3 (thyroid): Suboptimal</li>
                </ul>

                <p>
                  "Числата обясняваха всичко. Low testosterone = low energy, poor recovery, shit mental clarity, zero sex drive."
                </p>

                <HighlightBox
                  title="Testosterone's role in peak performance"
                  variant="info"
                >
                  <ul>
                    <li><strong>Energy production</strong> - Митохондриална efficiency</li>
                    <li><strong>Recovery</strong> - Muscle repair и adaptation</li>
                    <li><strong>Cognitive function</strong> - Focus, memory, decision-making</li>
                    <li><strong>Motivation & drive</strong> - Dopamine optimization</li>
                    <li><strong>Stress resilience</strong> - Кортизол management</li>
                    <li><strong>Sleep quality</strong> - REM и deep sleep cycles</li>
                  </ul>
                </HighlightBox>

                <p>
                  "Elite athletes знаят това. CEOs започват да го разбират. Testosterone не е 'just for sex'. Това е performance hormone," обяснява д-р Петров, който работи със Стефан.
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>The Elite Performer Protocol</h2>

                <p>
                  Стефан не искаше shortcuts. Не искаше testosterone replacement therapy (което би създало dependency и shut down собственото му production).
                </p>

                <p>
                  Искаше sustainable, natural optimization protocol.
                </p>

                <h3>1. Sleep Architecture Optimization</h3>

                <p>
                  "Преди бях на 6-6.5 часа сън. Мислех че 'sleep when you're dead'. Biggest mistake," казва Стефан.
                </p>

                <p>
                  <strong>New protocol:</strong>
                </p>

                <ul>
                  <li>Target: 7.5-8 часа (5 full sleep cycles)</li>
                  <li>Consistent schedule: 21:30-06:00 (дори в weekends)</li>
                  <li>Sleep environment: Blackout curtains, 18°C room temp, white noise</li>
                  <li>Pre-sleep routine: Magnesium glycinate 400mg, no screens 1h before bed</li>
                </ul>

                <p className="text-sm italic text-neutral-600">
                  "80% от производството на testosterone се случва по време на съня. Ако мамиш съня, мамиш представянето."
                </p>

                <h3>2. Strategic Supplementation (Not random pills)</h3>

                <p>
                  <strong>Foundation Stack:</strong>
                </p>

                <ul>
                  <li><strong>Zinc</strong> (30mg) + <strong>Magnesium</strong> (400mg) - Essential за testosterone synthesis</li>
                  <li><strong>Vitamin D3</strong> (5000 IU) - Hormone optimization + immune function</li>
                  <li><strong>Omega-3</strong> (2-3g EPA/DHA) - Inflammation reduction, brain health</li>
                </ul>

                <p>
                  <strong>Performance Stack:</strong>
                </p>

                <ul>
                  <li><strong>Ashwagandha</strong> (600mg KSM-66) - Cortisol management, stress resilience</li>
                  <li><strong>Rhodiola Rosea</strong> (500mg) - Mental performance, fatigue resistance</li>
                  <li><strong>Creatine</strong> (5g) - Cognitive + physical performance</li>
                </ul>

                <ProductMention
                  productName="Testograph Performance Protocol"
                  link={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=product-mention-1`}
                  description="За structured approach, Стефан използва"
                />

                <h3>3. Training Optimization (Not more, but smarter)</h3>

                <p>
                  Стефан тренираше 10-12 часа седмично. Но повече не винаги е по-добре.
                </p>

                <p>
                  <strong>New approach:</strong>
                </p>

                <ul>
                  <li>3x седмица: Strength training (heavy compounds, testosterone-boosting)</li>
                  <li>2-3x седмица: Endurance (Zone 2 cardio for mitochondrial efficiency)</li>
                  <li>1x седмица: HIIT (growth hormone boost)</li>
                  <li>1-2 rest days: Active recovery or complete rest</li>
                </ul>

                <p>
                  "Overtraining kills testosterone. Strategic training optimizes it."
                </p>

                <h3>4. Nutrition Timing (When = What)</h3>

                <p>
                  <strong>Intermittent Fasting:</strong> 16:8 protocol (eating window 12:00-20:00)
                </p>

                <p>
                  "Растежният хормон скача рязко в гладно състояние. Плюс инсулиновата чувствителност се подобрява драматично."
                </p>

                <p>
                  <strong>Pre-workout nutrition:</strong> Carbs + protein 1-2h преди training<br />
                  <strong>Post-workout:</strong> Protein + carbs within 30 min (anabolic window)
                </p>

                <h3>5. Stress Management (Non-negotiable)</h3>

                <p>
                  "Високопроизводителните хора мислят че стресът е знак за успех. Глупости. Хроничният стрес убива testosterone и представянето," казва Стефан.
                </p>

                <ul>
                  <li>10 минути breathing exercises сутрин (box breathing 4-4-4-4)</li>
                  <li>Cold exposure 2-3x седмично (cold shower 3 min or ice bath)</li>
                  <li>Sauna 2x седмично (heat shock proteins, detox, recovery)</li>
                </ul>
              </ArticleSection>

              <ArticleSection>
                <h2>The Results: Performance Metrics</h2>

                <p>
                  90 дни след започване на протокола, Стефан tracked резултатите:
                </p>

                <div className="my-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <h4 className="font-bold text-neutral-900 mb-4">Performance Transformation</h4>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-neutral-700">Blood Markers</p>
                      <p className="text-neutral-600">Testosterone: 342 → 478 ng/dL <span className="text-blue-700 font-bold">(+40%)</span></p>
                      <p className="text-neutral-600">Cortisol: Elevated → Normal range</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-700">Energy & Recovery</p>
                      <p className="text-neutral-600">Sleep quality: 6.5h poor → 7.5h deep (Whoop recovery 85%+)</p>
                      <p className="text-neutral-600">Energy crashes: Eliminated (sustained energy till 21:00)</p>
                      <p className="text-neutral-600">Recovery time: 2-3 days → Next day</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-700">Athletic Performance</p>
                      <p className="text-neutral-600">10K run time: 48:30 → 44:15</p>
                      <p className="text-neutral-600">Bench press: 85kg → 100kg</p>
                      <p className="text-neutral-600">Resting HR: 68 bpm → 58 bpm</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-700">Cognitive Performance</p>
                      <p className="text-neutral-600">Deep work blocks: 2-3h → 4-5h sustained focus</p>
                      <p className="text-neutral-600">Decision quality: Consistent throughout day</p>
                      <p className="text-neutral-600">Mental clarity: "Brain fog eliminated"</p>
                    </div>
                  </div>
                </div>

                <PullQuote
                  quote="Разликата е като да надградиш от dial-up на оптична връзка. Същият мозък, същото тяло - но оптимизиран хардуер."
                  attribution="Стефан Димитров"
                />
              </ArticleSection>

              <ArticleSection>
                <h2>The "Unfair Advantage" (That's Completely Legal)</h2>

                <p>
                  "Хората виждат представянето и мислят 'талант' или 'генетика'. Глупости. 80% е оптимизация," казва Стефан.
                </p>

                <p>
                  Елитните изпълнители знаят тайната:
                </p>

                <HighlightBox
                  title="The High-Performer Stack"
                  variant="success"
                >
                  <ul>
                    <li><strong>Sleep:</strong> Non-negotiable 7.5-8h (testosterone production)</li>
                    <li><strong>Nutrition:</strong> Strategic timing + quality (building blocks)</li>
                    <li><strong>Training:</strong> Smart, not more (stimulus, not destruction)</li>
                    <li><strong>Recovery:</strong> Active optimization (sauna, cold, massage)</li>
                    <li><strong>Stress management:</strong> Breathwork, meditation, adaptogens</li>
                    <li><strong>Supplementation:</strong> Evidence-based, not trendy</li>
                  </ul>
                </HighlightBox>

                <p>
                  "Това не е cheating. Това е optimization. Legal, natural, sustainable."
                </p>
              </ArticleSection>

              <ArticleSection>
                <h2>Стефан днес</h2>

                <p>
                  Startup-ът на Стефан hit $1M ARR през last quarter. Той завърши Ironman 70.3 с personal best time.
                </p>

                <p>
                  "Not because I'm more talented. Because I'm more optimized."
                </p>

                <p>
                  Testosterone levels: Stable на 460-480 ng/dL<br />
                  Sleep quality: 85%+ recovery score (tracked)<br />
                  Energy: Sustained 10/10 till вечерта<br />
                  Recovery: Next-day ready<br />
                  Mental clarity: Consistent throughout day
                </p>

                <PullQuote
                  quote="Върховото представяне не е лукс. Това е необходимост в конкурентния свят. Ако не оптимизираш хормоните, функционираш на 60-70% капацитет."
                  attribution="Стефан Димитров"
                />
              </ArticleSection>

              <ArticleSection>
                <h2>Заключение: Performance Is Optimization</h2>

                <p>
                  "Most people compete at suboptimal hormone levels и се чудят защо не могат да keep up," казва д-р Петров.
                </p>

                <p>
                  "Elite performers не са genetically superior. Те са hormonally optimized."
                </p>

                <HighlightBox
                  title="Следващата стъпка"
                  variant="success"
                >
                  <p>
                    Ако си предприемач, атлет или високопроизводителен човек и чувстваш че функционираш под потенциала си - проблемът може да е хормонален, не мотивационен.
                  </p>
                  <p className="mt-2">
                    Optimization beats hustle. Every time.
                  </p>
                </HighlightBox>
              </ArticleSection>

              {/* Final CTA */}
              <SoftCTA
                headline="Готов за performance optimization?"
                description="Протоколът използван от Стефан е designed за high-performers които искат sustainable competitive edge без compromising health."
                ctaText="Виж TESTOGRAPH Performance Protocol"
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
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <img
                    src="/funnel/testoup-bottle.webp"
                    alt="Testograph Performance Protocol"
                    className="w-48 h-auto mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    TESTOGRAPH Performance Edge
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Elite performer hormone optimization
                  </p>
                </div>

                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Sustained energy (no crashes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Rapid recovery optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Mental clarity & focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Stress resilience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Legal & natural competitive edge</span>
                  </li>
                </ul>

                <a
                  href={`${PERFIELD_SHOP_URL}${UTM_PARAMS}&utm_content=sidebar-cta-1`}
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Get performance edge →
                </a>

                <p className="text-xs text-neutral-500 text-center mt-4">
                  Used by entrepreneurs & athletes • Natural • Sustainable
                </p>
              </div>

              {/* Performance Metrics */}
              <div className="bg-white border-2 border-neutral-200 rounded-xl p-6">
                <div className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2">
                  📊 Performance Gains
                </div>
                <h4 className="font-bold text-neutral-900 mb-3">
                  Стефан's Transformation
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Testosterone:</span>
                    <span className="font-semibold text-blue-600">+40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recovery time:</span>
                    <span className="font-semibold text-blue-600">-66%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>10K time:</span>
                    <span className="font-semibold text-blue-600">-4:15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deep work:</span>
                    <span className="font-semibold text-blue-600">+2h/day</span>
                  </div>
                </div>
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
                  "Elite performers optimize hormones. Average performers rely on willpower. Guess who wins?"
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
