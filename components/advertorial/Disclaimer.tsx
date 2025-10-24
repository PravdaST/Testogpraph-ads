import React from 'react';

/**
 * Disclaimer Component
 *
 * Legal footer for advertorial content.
 * Provides required disclosures, advertorial notice, and legal disclaimers.
 *
 * Features:
 * - Advertorial disclosure (regulatory compliance)
 * - Medical disclaimer
 * - Results disclaimer
 * - Privacy policy link
 * - Terms of service link
 * - Professional, trust-building design
 *
 * Props:
 * @param showMedicalDisclaimer - Show medical advice disclaimer (default: true)
 * @param showResultsDisclaimer - Show results disclaimer (default: true)
 * @param privacyPolicyUrl - Privacy policy URL
 * @param termsUrl - Terms of service URL
 * @param className - Optional additional classes
 */

interface DisclaimerProps {
  showMedicalDisclaimer?: boolean;
  showResultsDisclaimer?: boolean;
  privacyPolicyUrl?: string;
  termsUrl?: string;
  className?: string;
}

export default function Disclaimer({
  showMedicalDisclaimer = true,
  showResultsDisclaimer = true,
  privacyPolicyUrl = 'https://shop.testograph.eu/pages/privacy-policy',
  termsUrl = 'https://shop.testograph.eu/pages/terms-of-service',
  className = ''
}: DisclaimerProps) {
  return (
    <footer className={`mt-16 pt-12 border-t-2 border-neutral-200 ${className}`}>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Advertorial Disclosure */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">
                Спонсорирано съдържание
              </h4>
              <p className="text-sm text-amber-800 leading-relaxed">
                Това е рекламен материал (advertorial). Съдържанието е платено от рекламодател
                и има рекламна цел. Представената информация отразява гледната точка на
                рекламодателя и не представлява независимо редакционно мнение.
              </p>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        {showMedicalDisclaimer && (
          <section className="text-sm text-neutral-600 leading-relaxed">
            <h4 className="font-semibold text-neutral-900 mb-2">
              Медицински disclaimer
            </h4>
            <p>
              Информацията в тази статия е с образователна цел и не представлява медицински съвет,
              диагноза или лечение. Винаги се консултирайте с квалифициран здравен специалист
              преди да започнете нова хранителна добавка, диета или програма за упражнения.
              Резултатите могат да варират в зависимост от индивидуалните особености.
            </p>
          </section>
        )}

        {/* Results Disclaimer */}
        {showResultsDisclaimer && (
          <section className="text-sm text-neutral-600 leading-relaxed">
            <h4 className="font-semibold text-neutral-900 mb-2">
              Очаквани резултати
            </h4>
            <p>
              Споменатите резултати са индивидуални и могат да не са типични. Вашите резултати
              могат да варират в зависимост от множество фактори, включително възраст, пол,
              генетика, начин на живот, диета, упражнения и други здравословни условия.
              Няма гаранция за конкретни резултати.
            </p>
          </section>
        )}

        {/* Affiliate/Partner Disclosure */}
        <section className="text-sm text-neutral-600 leading-relaxed">
          <h4 className="font-semibold text-neutral-900 mb-2">
            Партньорско разкритие
          </h4>
          <p>
            Този материал съдържа препратки към продукти. При покупка чрез тези препратки
            може да получим комисионна, без това да променя цената за вас. Препоръчваме
            само продукти, в които вярваме и които считаме за полезни за нашите читатели.
          </p>
        </section>

        {/* Legal Links */}
        <section className="flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-200">
          <a
            href={privacyPolicyUrl}
            className="text-sm text-neutral-600 hover:text-primary transition-colors underline decoration-1 underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Политика за поверителност
          </a>
          <span className="text-neutral-300">•</span>
          <a
            href={termsUrl}
            className="text-sm text-neutral-600 hover:text-primary transition-colors underline decoration-1 underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Общи условия
          </a>
          <span className="text-neutral-300">•</span>
          <a
            href="mailto:support@testograph.eu"
            className="text-sm text-neutral-600 hover:text-primary transition-colors underline decoration-1 underline-offset-2"
          >
            Контакт
          </a>
        </section>

        {/* Copyright */}
        <section className="text-xs text-neutral-500 text-center pt-6">
          <p>
            © 2025 Health Insights BG. Всички права запазени.
          </p>
        </section>
      </div>
    </footer>
  );
}

/**
 * SimpleDisclaimer Component
 *
 * Minimal disclaimer for less formal contexts.
 * Use when you need basic disclosure without extensive legal text.
 */

interface SimpleDisclaimerProps {
  text?: string;
  className?: string;
}

export function SimpleDisclaimer({
  text = 'Това е спонсорирано съдържание. Вижте пълните условия.',
  className = ''
}: SimpleDisclaimerProps) {
  return (
    <div className={`mt-12 p-4 bg-neutral-50 rounded-lg text-center ${className}`}>
      <p className="text-xs text-neutral-600">
        {text}
      </p>
    </div>
  );
}
