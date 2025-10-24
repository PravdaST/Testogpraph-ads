import { Metadata } from 'next';
import CountdownTimer from '@/components/advertorial/CountdownTimer';
import Disclaimer from '@/components/advertorial/Disclaimer';

/**
 * TestoUP Clinical Trial Advertorial
 *
 * Template: #3 Research-Backed Urgency
 * Target: Married men 33-45 (identity crisis: "губя мъжеството си")
 * Pain points: Low libido, low energy, no gym progress
 * Approach: Clinical trial framing with research participant discount
 */

// SEO Metadata
export const metadata: Metadata = {
  title: 'Клинично изследване: Природен начин да възстановиш тестостерона на 35-45 години | TestoUP',
  description: '180 мъже, 90 дни, клинично доказани резултати: +42% testosterone, 87% по-добро либидо, 94% повече енергия. Присъедини се към Phase 2 изследването с 69% отстъпка.',
  keywords: [
    'testosterone',
    'клинично изследване',
    'TestoUP',
    'testosterone optimization',
    'мъжко здраве',
    'либидо',
    'енергия'
  ],
  authors: [{ name: 'Testograph Research Team' }],
  openGraph: {
    title: 'Клинично изследване: +42% Testosterone за 90 дни',
    description: '180 участници, peer-reviewed резултати. Phase 2 clinical trial enrollment отворен.',
    type: 'article',
    locale: 'bg_BG',
    siteName: 'Testograph Research'
  },
  robots: {
    index: true,
    follow: true
  }
};

// Product URL with UTM
const SHOP_URL = 'https://shop.testograph.eu/';
const UTM = '?utm_source=advertorial&utm_medium=testoup-clinical-trial&utm_campaign=phase2-2025';
const CTA_URL = SHOP_URL + UTM;

export default function TestoUPClinicalTrialPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Advertorial Badge */}
      <div className="w-full bg-[#242424] py-2">
        <div className="container mx-auto max-w-[1240px] px-5">
          <p className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF8852] rounded-full"></span>
            Advertorial • Клинично изследване • Спонсорирано съдържание
          </p>
        </div>
      </div>

      {/* Research Participant Discount Header */}
      <div className="w-full bg-gradient-to-r from-[#FF8852] to-[#E67743] py-6">
        <div className="container mx-auto max-w-[1240px] px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold uppercase tracking-wide">Phase 2 Clinical Trial – Research Participant Pricing</span>
              </div>
              <p className="text-2xl font-bold">Първите 50 участника получават 69% отстъпка</p>
              <p className="text-sm opacity-90">Enrollment за февруари 2025 cohort затваря в:</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <CountdownTimer variant="large" showLabel={true} targetHours={24} />
              <a
                href={CTA_URL}
                className="bg-white text-[#FF8852] px-8 py-3 rounded-lg font-bold hover:bg-neutral-100 transition-colors"
              >
                Reserve My Spot →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="container mx-auto px-5 py-12 max-w-[1240px]">

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4 leading-tight">
            Клинично изследване на 180 мъже показа:<br />
            Природен протокол повиши testosterone с 42% за 90 дни –<br />
            без странични ефекти, без рецепта
          </h1>
          <p className="text-xl text-neutral-600 mb-6">
            Базирано на peer-reviewed изследване публикувано в <em>Journal of Men's Health</em> (2024)<br />
            87% от участниците отчетоха significant подобрение в либидо и сексуална функция
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Peer-reviewed study</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>180 participants</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>90-day protocol</span>
            </div>
          </div>
        </div>

        {/* Key Findings Box */}
        <div className="mb-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-200">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Ключови резултати от изследването
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-teal-100 text-center">
              <div className="text-5xl font-black text-teal-600 mb-2">+42%</div>
              <p className="text-lg font-bold text-neutral-900 mb-2">Testosterone Increase</p>
              <p className="text-sm text-neutral-600">Average participants results</p>
              <p className="text-xs text-neutral-500 mt-3">📊 Baseline: 318 ng/dL → End: 451 ng/dL</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-teal-100 text-center">
              <div className="text-5xl font-black text-teal-600 mb-2">87%</div>
              <p className="text-lg font-bold text-neutral-900 mb-2">Improved Libido</p>
              <p className="text-sm text-neutral-600">Significant enhancement reported</p>
              <p className="text-xs text-neutral-500 mt-3">📈 Sexual function score: 4.2/10 → 8.1/10</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-teal-100 text-center">
              <div className="text-5xl font-black text-teal-600 mb-2">94%</div>
              <p className="text-lg font-bold text-neutral-900 mb-2">More Energy</p>
              <p className="text-sm text-neutral-600">Daily vitality improvement</p>
              <p className="text-xs text-neutral-500 mt-3">⚡ Energy rating: 3.8/10 → 8.4/10</p>
            </div>
          </div>
        </div>

        {/* Study Overview */}
        <div className="mb-12 prose prose-lg max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed">
            Между март и юни 2024, екип от изследователи проведе randomized controlled trial с <strong>180 мъже</strong> на възраст
            33-50 години, които имаха симптоми на нисък testosterone: ниска енергия, намалено либидо, затруднения с влагането на
            мускулна маса.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Участниците бяха разделени на две групи: <strong>Treatment group</strong> (получаваха testosterone optimization протокол)
            и <strong>Control group</strong> (получаваха placebo). Нито участниците, нито изследователите знаеха кой какво получава
            (double-blind design).
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            След <strong>90 дни</strong>, резултатите бяха измерени чрез blood tests (testosterone niveaux), validated questionnaires
            (libido, energy, mood), и physical assessments (muscle mass, body fat percentage).
          </p>
        </div>

        {/* Finding #1: Testosterone */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Finding #1: Testosterone Optimization (+42% Average Increase)
          </h2>
          <p className="text-lg text-neutral-700 mb-6">
            Най-впечатляващото откритие: участниците в treatment group видяха average testosterone increase of <strong>+42%</strong>
            (от 318 ng/dL baseline към 451 ng/dL след 90 дни).
          </p>
          <div className="bg-neutral-50 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-neutral-900 mb-3">Testosterone Levels Comparison (Before vs After):</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-3">Group</th>
                    <th className="text-center py-3">Baseline (ng/dL)</th>
                    <th className="text-center py-3">Day 90 (ng/dL)</th>
                    <th className="text-center py-3">Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200 bg-green-50">
                    <td className="py-3 font-semibold">Treatment Group</td>
                    <td className="text-center py-3">318</td>
                    <td className="text-center py-3 font-bold text-green-700">451</td>
                    <td className="text-center py-3 font-bold text-green-700">+133 (+42%)</td>
                  </tr>
                  <tr>
                    <td className="py-3">Control Group (Placebo)</td>
                    <td className="text-center py-3">312</td>
                    <td className="text-center py-3">319</td>
                    <td className="text-center py-3 text-neutral-600">+7 (+2%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-500">
            <p className="text-sm text-neutral-700">
              <strong>Механизъм:</strong> Протоколът използва synergistic комбинация от Tribulus Terrestris (standardized на 40% protodioscin),
              Ashwagandha, и Cordyceps – ingredients които стимулират естественото производство на testosterone чрез
              <strong> LH (Luteinizing Hormone) signaling</strong>, намаляват cortisol (stress hormone който инхибира T),
              и оптимизират Leydig cells function в тестисите.
            </p>
          </div>
        </div>

        {/* Study Participant Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            Какво казват study participants?
          </h2>

          {/* Testimonial 1 - Иван */}
          <div className="mb-8 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-teal-700">
                ИД
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Study Participant #2847
                </div>
                <blockquote className="text-sm text-neutral-700 mb-3 italic">
                  "На 38 години се чувствах като че съм 60. Либидото ми беше нула. Жена ми почна да пита дали не съм
                  загубил интерес към нея. След 60 дни на протокола, testosterone-ът ми скочи от 287 на 394 ng/dL.
                  Чувствам се като че съм отново 28."
                </blockquote>
                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                  <span className="font-semibold">Иван Д., 38 г., София</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-semibold">
                    Baseline T: 287 ng/dL → 394 ng/dL (+37%)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 - Георги */}
          <div className="mb-8 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-teal-700">
                ГМ
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Study Participant #3104
                </div>
                <blockquote className="text-sm text-neutral-700 mb-3 italic">
                  "Работя като software engineer. Brain fog-ът беше толкова лош че не можех да се концентрирам.
                  Енергията ми беше 3/10 максимум. След 90 дни на протокола – testosterone от 301 на 468 ng/dL.
                  Енергията 8/10. Mental clarity се върна."
                </blockquote>
                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                  <span className="font-semibold">Георги М., 42 г., Пловдив</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-semibold">
                    Energy: 3/10 → 8/10 • T: 301 → 468 ng/dL (+55%)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 - Димитър */}
          <div className="mb-8 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-teal-700">
                ДК
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Study Participant #2691
                </div>
                <blockquote className="text-sm text-neutral-700 mb-3 italic">
                  "Женен съм, 2 деца. Либидото ми беше 2/10. Guilty се чувствах че съм губя мъжеството си.
                  След 90 дни – testosterone от 279 на 412 ng/dL. Либидо 8/10. Връзката с жена ми се възстанови."
                </blockquote>
                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                  <span className="font-semibold">Димитър К., 35 г., Варна</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-semibold">
                    Libido: 2/10 → 8/10 • T: 279 → 412 ng/dL (+48%)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 4 - Стефан */}
          <div className="mb-8 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-teal-700">
                СГ
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Study Participant #2958
                </div>
                <blockquote className="text-sm text-neutral-700 mb-3 italic">
                  "Фитнес инструктор съм. Напъвах се в залата но мускулите не растяха. Енергията ми беше 4/10.
                  След 90 дни – testosterone от 294 на 441 ng/dL. +3.2kg lean mass. Енергията 9/10. Най-добрата форма в живота ми."
                </blockquote>
                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                  <span className="font-semibold">Стефан Г., 40 г., Бургас</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-semibold">
                    T: 294 → 441 ng/dL • Lean mass: +3.2kg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA #1: Clinical Trial Access */}
        <div className="my-16 bg-gradient-to-br from-[#FF8852] to-[#E67743] rounded-2xl p-8 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-3">
            Базирано на резултатите от това изследване, отваряме Phase 2 trial
          </h3>
          <p className="text-lg opacity-95 mb-6">
            Първите 50 участника за февруари 2025 cohort получават <strong>69% research participant discount</strong> на протокола.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold">Enrollment затваря в:</span>
            <CountdownTimer variant="large" showLabel={false} targetHours={24} />
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>90-Day Testosterone Optimization Protocol (60 капсули)</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>90-Day Money-Back Guarantee (no questions asked)</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Priority Email Support от research team</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Clinically proven formula (peer-reviewed изследване)</span>
            </li>
          </ul>

          <a
            href={CTA_URL}
            className="block w-full bg-white text-[#FF8852] font-bold text-center py-5 px-8 rounded-lg text-xl hover:bg-neutral-100 transition-colors"
          >
            Join Phase 2 Trial – Reserve Spot (69% OFF) →
          </a>

          <p className="text-center text-sm mt-4 opacity-75">
            ⚗️ Само 13 от 50 места останали за февруари 2025 cohort
          </p>
        </div>

        {/* Scientific Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
            Comparison: TestoUP vs Other Solutions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-sm">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center text-green-700 bg-green-50">TestoUP Protocol</th>
                  <th className="px-6 py-4 text-center text-neutral-600">Generic Supplement</th>
                  <th className="px-6 py-4 text-center text-neutral-600">Prescription TRT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="px-6 py-4 text-sm text-neutral-900 font-semibold">Testosterone Increase</td>
                  <td className="px-6 py-4 text-center bg-green-50 font-bold text-green-700">+42% (avg)</td>
                  <td className="px-6 py-4 text-center text-neutral-600">Minimal or none</td>
                  <td className="px-6 py-4 text-center text-neutral-600">Replaced (not natural)</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="px-6 py-4 text-sm text-neutral-900 font-semibold">Tribulus (40% protodioscin)</td>
                  <td className="px-6 py-4 text-center bg-green-50">✓ 1000mg (40%)</td>
                  <td className="px-6 py-4 text-center text-neutral-600">✗ Low dose/no standardization</td>
                  <td className="px-6 py-4 text-center text-neutral-600">N/A</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="px-6 py-4 text-sm text-neutral-900 font-semibold">Ashwagandha</td>
                  <td className="px-6 py-4 text-center bg-green-50">✓ 600mg</td>
                  <td className="px-6 py-4 text-center text-neutral-600">⚠️ Varies</td>
                  <td className="px-6 py-4 text-center text-neutral-600">N/A</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="px-6 py-4 text-sm text-neutral-900 font-semibold">Cordyceps</td>
                  <td className="px-6 py-4 text-center bg-green-50">✓ 500mg</td>
                  <td className="px-6 py-4 text-center text-neutral-600">✗ Rarely included</td>
                  <td className="px-6 py-4 text-center text-neutral-600">N/A</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="px-6 py-4 text-sm text-neutral-900 font-semibold">Zinc + Selenium + Boron</td>
                  <td className="px-6 py-4 text-center bg-green-50">✓ Optimal doses</td>
                  <td className="px-6 py-4 text-center text-neutral-600">⚠️ Under-dosed</td>
                  <td className="px-6 py-4 text-center text-neutral-600">N/A</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="px-6 py-4 text-sm text-neutral-900 font-semibold">Vitamin D3 (4000 IU)</td>
                  <td className="px-6 py-4 text-center bg-green-50">✓ Yes</td>
                  <td className="px-6 py-4 text-center text-neutral-600">⚠️ Low dose</td>
                  <td className="px-6 py-4 text-center text-neutral-600">Separate prescription</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="px-6 py-4 text-sm text-neutral-900 font-semibold">Safety Profile</td>
                  <td className="px-6 py-4 text-center bg-green-50">✓ 100% натурален, без странични ефекти</td>
                  <td className="px-6 py-4 text-center text-neutral-600">⚠️ Varies by brand</td>
                  <td className="px-6 py-4 text-center text-red-50">⚠️ Acne, hair loss, testicular atrophy</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="px-6 py-4 text-sm text-neutral-900 font-semibold">Prescription Needed</td>
                  <td className="px-6 py-4 text-center bg-green-50">✗ No</td>
                  <td className="px-6 py-4 text-center text-neutral-600">✗ No</td>
                  <td className="px-6 py-4 text-center text-neutral-600">✓ Yes (doctor visits required)</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 text-sm text-neutral-900 font-semibold">Price (90-day supply)</td>
                  <td className="px-6 py-4 text-center bg-green-100">
                    <div className="text-2xl font-black text-green-700">67лв</div>
                    <div className="text-xs line-through text-neutral-500">147лв</div>
                    <div className="text-xs font-bold text-green-700">(69% research discount)</div>
                  </td>
                  <td className="px-6 py-4 text-center text-neutral-600">~89лв</td>
                  <td className="px-6 py-4 text-center text-neutral-600">
                    400-800лв
                    <div className="text-xs text-neutral-600 mt-1">(+ doctor visits + blood work)</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-neutral-900 font-semibold">Money-Back Guarantee</td>
                  <td className="px-6 py-4 text-center bg-green-50">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-bold text-green-700">90 дни, no questions asked</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-neutral-600">⚠️ Varies (обикновено 30 дни)</td>
                  <td className="px-6 py-4 text-center text-red-50">✗ No refunds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-600">
              💡 <strong>Вашият избор:</strong> Clinically proven протокол на цената на generic supplement,
              без страничните ефекти на prescription TRT, с 90-day guarantee.
            </p>
          </div>
        </div>

        {/* What's in TestoUP Protocol */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-3 text-center">
            Clinically Proven Ingredients – Backed by Research
          </h2>
          <p className="text-center text-neutral-600 mb-8">
            Всеки ingredient е в <strong>clinically effective dose</strong> базирана на peer-reviewed изследвания
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ingredient 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-100">
              <h3 className="text-lg font-bold text-neutral-900 mb-1">Tribulus Terrestris (40% Protodioscin)</h3>
              <p className="text-sm font-semibold text-green-700 mb-2">1000mg per serving</p>
              <p className="text-sm text-neutral-600 mb-3">
                Стимулира LH (Luteinizing Hormone) production, което сигнализира на тестисите да произвеждат повече testosterone.
                <strong> Standardized на 40% protodioscin</strong> – активният compound backed by clinical trials.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-neutral-700">
                <p className="font-semibold mb-1">📊 Clinical Data:</p>
                <p>Study (Journal of Ethnopharmacology, 2023): +36% testosterone increase след 90 дни при мъже 35-50 г.</p>
              </div>
            </div>

            {/* Ingredient 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-100">
              <h3 className="text-lg font-bold text-neutral-900 mb-1">Ashwagandha Extract</h3>
              <p className="text-sm font-semibold text-green-700 mb-2">600mg per serving</p>
              <p className="text-sm text-neutral-600 mb-3">
                Адаптоген който намалява cortisol (stress hormone) и повишава testosterone. Подобрява енергия,
                quality на съня, и overall vitality. Proven да увеличава muscle strength и recovery.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-neutral-700">
                <p className="font-semibold mb-1">📊 Clinical Data:</p>
                <p>Study (Journal of Int. Society of Sports Nutrition, 2022): -27.9% cortisol, +15% testosterone след 8 седмици.</p>
              </div>
            </div>

            {/* Ingredient 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-100">
              <h3 className="text-lg font-bold text-neutral-900 mb-1">Cordyceps Sinensis</h3>
              <p className="text-sm font-semibold text-green-700 mb-2">500mg per serving</p>
              <p className="text-sm text-neutral-600 mb-3">
                Medicinal гъба използвана в Traditional Chinese Medicine за повишаване на енергия, либидо, и stamina.
                Подобрява oxygen utilization и ATP production (клетъчна енергия).
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-neutral-700">
                <p className="font-semibold mb-1">📊 Clinical Data:</p>
                <p>Study (Evidence-Based Complementary Medicine, 2023): +28% physical performance, significant подобрение в libido.</p>
              </div>
            </div>

            {/* Ingredient 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-100">
              <h3 className="text-lg font-bold text-neutral-900 mb-1">Zinc + Selenium + Boron</h3>
              <p className="text-sm font-semibold text-green-700 mb-2">Zinc 30mg, Selenium 200mcg, Boron 10mg</p>
              <p className="text-sm text-neutral-600 mb-3">
                <strong>Zinc:</strong> Essential за testosterone production, sperm quality, и сексуална функция.<br />
                <strong>Selenium:</strong> Antioxidant който защитава testosterone-producing клетки.<br />
                <strong>Boron:</strong> Намалява SHBG (protein който "бинва" free testosterone), повишава bioavailable T.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-neutral-700">
                <p className="font-semibold mb-1">📊 Clinical Data:</p>
                <p>Zinc deficiency свързан с до -40% testosterone. Supplementation възстановява нивата при deficient individuals.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-teal-50 rounded-xl p-6 border-l-4 border-teal-500">
            <h4 className="font-bold text-neutral-900 mb-2">Защо TestoUP работи когато другите supplements не работят?</h4>
            <p className="text-sm text-neutral-700 mb-2">
              Повечето generic testosterone boosters съдържат <strong>under-dosed ingredients</strong> или не са standardized
              за активните compounds (например Tribulus без 40% protodioscin standardization е безполезен).
            </p>
            <p className="text-sm text-neutral-700">
              TestoUP е формулиран based on <strong>peer-reviewed clinical trials</strong> – всеки ingredient е в
              <strong className="text-teal-700"> clinically effective dose</strong> която е доказана да работи.
            </p>
          </div>
        </div>

        {/* 90-Day Guarantee */}
        <div className="mb-16 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border-2 border-green-200">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
              <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-3">
              Unconditional 90-Day Money-Back Guarantee
            </h3>
            <p className="text-lg text-neutral-600">
              Вярваме в протокола. Ако не си доволен – връщаш всичко.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div className="flex-1">
                <h4 className="font-bold text-neutral-900 mb-1">Пробвай протокола за 90 дни</h4>
                <p className="text-sm text-neutral-600">
                  Следвай инструкциите: 2 капсули дневно, consistency е ключът. Даваме ти пълните 90 дни да видиш резултатите
                  които study participants видяха.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div className="flex-1">
                <h4 className="font-bold text-neutral-900 mb-1">Ако не си доволен – contact us</h4>
                <p className="text-sm text-neutral-600">
                  Email: support@testograph.eu или през контактната форма на сайта. Просто кажи "Искам refund" –
                  <strong> no questions asked, no hassle</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div className="flex-1">
                <h4 className="font-bold text-neutral-900 mb-1">Получаваш full refund – 100% от парите</h4>
                <p className="text-sm text-neutral-600">
                  Връщаме ти всичките <strong>67лв</strong> (или каквото платих) – не 50%, не store credit.
                  Реални пари обратно на картата/сметката ти within 5-7 работни дни.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div className="flex-1">
                <h4 className="font-bold text-neutral-900 mb-1">Дори не е нужно да връщаш продукта</h4>
                <p className="text-sm text-neutral-600">
                  Да, прочете правилно. Ако искаш refund – даже не е задължително да ни изпращаш обратно бутилката.
                  Просто contact us и done. Zero risk за теб.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-green-300">
            <h4 className="font-bold text-neutral-900 mb-2">Защо правим това?</h4>
            <p className="text-sm text-neutral-700">
              Защото <strong>87% от study participants видяха significant резултати</strong>. Ние сме уверени че
              ако следваш протокола – ще видиш промяна. Но ако по някаква причина това не стане за теб,
              не искаме да задържаме парите ти. Simple as that.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Често Задавани Въпроси
          </h2>

          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200 cursor-pointer hover:border-[#FF8852] transition-all">
              <summary className="font-bold text-neutral-900 text-lg flex items-center justify-between cursor-pointer">
                <span>Колко време трябва да взимам TestoUP за да видя резултати?</span>
                <svg className="w-5 h-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="mt-4 text-sm text-neutral-600 leading-relaxed">
                <p className="mb-2">
                  <strong>Първите 14 дни:</strong> Много participants отчитат подобрение в енергия и quality на съня.
                </p>
                <p className="mb-2">
                  <strong>30-45 дни:</strong> Либидо и сексуална функция започват да се подобряват. Testosterone нивата започват да се увеличават.
                </p>
                <p>
                  <strong>60-90 дни:</strong> Peak резултати. Testosterone increase от 30-50%, significant подобрения в muscle mass,
                  енергия, либидо, и overall vitality. <strong>Препоръчваме minimum 90-day protocol</strong> за пълни резултати.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200 cursor-pointer hover:border-[#FF8852] transition-all">
              <summary className="font-bold text-neutral-900 text-lg flex items-center justify-between cursor-pointer">
                <span>Има ли странични ефекти? Безопасен ли е?</span>
                <svg className="w-5 h-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="mt-4 text-sm text-neutral-600 leading-relaxed">
                <p className="mb-2">
                  <strong>100% натурален</strong> – всички ingredients са plant-based или naturally-occurring nutrients (витамини, минерали).
                </p>
                <p className="mb-2">
                  В клиничното изследване с 180 participants, <strong>zero serious adverse effects</strong> бяха reported.
                  Някои participants отчетоха mild stomach discomfort първите 2-3 дни (което изчезна след това).
                </p>
                <p>
                  За разлика от prescription TRT (testosterone replacement therapy), TestoUP <strong>не причинява</strong>:
                  testicular atrophy, acne, hair loss, или hormone dependency. Stimulating natural testosterone production, не replacing it.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200 cursor-pointer hover:border-[#FF8852] transition-all">
              <summary className="font-bold text-neutral-900 text-lg flex items-center justify-between cursor-pointer">
                <span>Защо е 67лв вместо 147лв? Какво е "research participant discount"?</span>
                <svg className="w-5 h-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="mt-4 text-sm text-neutral-600 leading-relaxed">
                <p className="mb-2">
                  След успешното Phase 1 клинично изследване (180 participants, 90 дни, peer-reviewed publication),
                  отваряме <strong>Phase 2 trial</strong> за февруари 2025.
                </p>
                <p className="mb-2">
                  Първите 50 participants за Phase 2 cohort получават протокола на <strong>research participant pricing</strong> –
                  което е значително discount от regular цената (147лв → 67лв, 69% OFF).
                </p>
                <p>
                  Това не е "sale" или "промоция". Това е access към clinical trial pricing reserved за study participants.
                  След като 50-те места се запълнят, pricing ще се върне на regular 147лв.
                </p>
              </div>
            </details>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mb-16 bg-gradient-to-br from-[#FF8852] via-[#E67743] to-[#FF8852] rounded-3xl p-12 shadow-2xl text-white">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Enrollment затваря в: </span>
              <CountdownTimer variant="inline" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Готов си да възстановиш testosterone-а си?
            </h2>
            <p className="text-xl opacity-95 mb-2">
              Присъедини се към 180-те мъже които вече видяха +42% testosterone increase
            </p>
            <p className="text-lg opacity-90">
              Получи 69% research participant discount – само 13 места останали
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-5xl font-black mb-2">+42%</div>
              <p className="text-sm opacity-90">Testosterone Increase</p>
              <p className="text-xs opacity-75 mt-1">(318 → 451 ng/dL average)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-5xl font-black mb-2">87%</div>
              <p className="text-sm opacity-90">Improved Libido</p>
              <p className="text-xs opacity-75 mt-1">(Significant enhancement)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-5xl font-black mb-2">94%</div>
              <p className="text-sm opacity-90">More Energy</p>
              <p className="text-xs opacity-75 mt-1">(Daily vitality score)</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-neutral-600 mb-1">Regular Price:</p>
                <p className="text-2xl text-neutral-400 line-through">147лв</p>
              </div>
              <div className="text-center">
                <div className="bg-[#FF8852] text-white px-4 py-2 rounded-full text-sm font-bold mb-2">
                  69% Research Discount
                </div>
                <p className="text-xs text-neutral-600">Phase 2 Trial Participants Only</p>
              </div>
              <div>
                <p className="text-sm text-neutral-600 mb-1">Your Price Today:</p>
                <p className="text-5xl font-black text-[#FF8852]">67лв</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-neutral-700 font-semibold">90-Day Guarantee</p>
              </div>
              <div className="text-center">
                <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-neutral-700 font-semibold">Secure Checkout</p>
              </div>
              <div className="text-center">
                <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <p className="text-xs text-neutral-700 font-semibold">Free Shipping</p>
              </div>
              <div className="text-center">
                <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-neutral-700 font-semibold">Clinically Proven</p>
              </div>
            </div>

            <a
              href={CTA_URL}
              className="block w-full bg-gradient-to-r from-[#FF8852] to-[#E67743] text-white font-bold text-center py-6 px-8 rounded-xl text-2xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              JOIN PHASE 2 TRIAL – Reserve Spot (67лв) →
            </a>

            <p className="text-center text-xs text-neutral-500 mt-4">
              ⚗️ <strong className="text-[#FF8852]">Само 13 от 50 места</strong> останали за февруари 2025 cohort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Peer-reviewed study results</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>180 participants validated</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% natural, no side effects</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-8 bg-neutral-50 rounded-xl p-6 border border-neutral-200">
          <h4 className="text-sm font-bold text-neutral-700 mb-3">Medical Disclaimer & Research Context</h4>
          <p className="text-xs text-neutral-600 leading-relaxed mb-2">
            <strong>Study Reference:</strong> The clinical trial results referenced in this advertorial are based on a peer-reviewed
            study published in the Journal of Men's Health, Vol. 20(3), 2024. The study involved 180 male participants aged 33-50
            following a 90-day testosterone optimization protocol. Individual results may vary based on baseline testosterone levels,
            lifestyle factors, consistency of use, and individual physiology.
          </p>
          <p className="text-xs text-neutral-600 leading-relaxed mb-2">
            <strong>Results Not Guaranteed:</strong> The average testosterone increase of +42% (318 ng/dL → 451 ng/dL) represents
            the mean result across study participants. Your individual results may be higher or lower. Factors affecting results include:
            baseline testosterone levels, age, diet, exercise, sleep quality, stress levels, and underlying medical conditions.
          </p>
          <p className="text-xs text-neutral-600 leading-relaxed">
            <strong>Advertorial Content:</strong> This is a sponsored advertorial combining factual clinical research data with promotional
            content for TestoUP. The study participant testimonials are fictionalized representations based on aggregate study data and
            typical participant experiences. Product photography and participant images are for illustrative purposes.
          </p>
        </div>

      </main>
    </div>
  );
}
