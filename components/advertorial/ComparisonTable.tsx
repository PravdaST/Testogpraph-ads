import React from 'react';

interface ComparisonItem {
  feature: string;
  hasProduct: boolean;
  hasCompetitor: boolean;
}

interface ComparisonTableProps {
  productName: string;
  competitorName?: string;
  items: ComparisonItem[];
  className?: string;
}

export default function ComparisonTable({
  productName,
  competitorName = 'Стандартни решения',
  items,
  className = ''
}: ComparisonTableProps) {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-green-50 to-blue-50">
            <th className="p-4 text-left font-bold text-neutral-800 border-b-2 border-neutral-200">
              Характеристика
            </th>
            <th className="p-4 text-center font-bold text-green-700 border-b-2 border-neutral-200">
              {productName}
            </th>
            <th className="p-4 text-center font-bold text-neutral-600 border-b-2 border-neutral-200">
              {competitorName}
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
              } hover:bg-blue-50/30 transition-colors duration-150`}
            >
              <td className="p-4 text-neutral-700 border-b border-neutral-200">
                {item.feature}
              </td>
              <td className="p-4 text-center border-b border-neutral-200">
                {item.hasProduct ? (
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </td>
              <td className="p-4 text-center border-b border-neutral-200">
                {item.hasCompetitor ? (
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
