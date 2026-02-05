export default function InterviewPromo() {
  return (
    <div className="bg-green-100 rounded-xl p-5 mb-6">
      <div className="flex items-start gap-3 mb-4">
        {/* Robot Icon */}
        <div className="flex-shrink-0">
          <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h2 className="text-base font-semibold text-gray-900 mb-1">Maximize your interview success</h2>
          <p className="text-sm text-gray-700">
            Our platform simulates real interview scenarios, helping you refine your responses and boost your confidence.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-200 mb-4"></div>

      {/* Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Job-Specific Simulations:</h3>
          <p className="text-xs text-gray-700 leading-relaxed">
            Practice with questions tailored to your target role, ensuring relevance and preparation.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Actionable Feedback:</h3>
          <p className="text-xs text-gray-700 leading-relaxed">
            Get detailed analysis of your responses and practical, step-by-step improvement suggestions.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Boost Success Rates:</h3>
          <p className="text-xs text-gray-700 leading-relaxed">
            Perfect your interview skills and increase your chances of landing the job you want.
          </p>
        </div>
      </div>

      {/* CTA Button - Bottom Right */}
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
          Start Interview
        </button>
      </div>
    </div>
  );
}

