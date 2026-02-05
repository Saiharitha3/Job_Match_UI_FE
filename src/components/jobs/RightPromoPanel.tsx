import { showToast } from '../../utils/toast';

export default function RightPromoPanel() {
  const handleMockInterview = () => {
    showToast('Starting AI Mock Interview session', 'info');
    // In a real app, this would navigate to the mock interview page
  };

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm sticky top-4">
      {/* Header with icon and title */}
      <div className="mb-3">
        <div className="flex items-start space-x-2 mb-2">
          <svg className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <h3 className="text-sm font-semibold text-gray-900 leading-tight">
            Ace Your Interviews with AI-Powered Mock Sessions!
          </h3>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          Struggling with interview nerves or unsure how to prepare? Let our cutting-edge AI mock interviews help you shine!
        </p>
      </div>

      {/* Divider line */}
      <div className="border-t border-gray-100 mb-3"></div>

      {/* Why Choose Section */}
      <div className="mb-3">
        <h4 className="text-xs font-semibold text-gray-900 mb-2 flex items-center">
          Why Choose Our AI Mock Interviews?
          <svg className="w-3 h-3 ml-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </h4>

        {/* Bullet groups */}
        <div className="space-y-2.5">
          <div>
            <h5 className="text-xs font-semibold text-gray-900 mb-1">Job-Specific Simulations:</h5>
            <p className="text-xs text-gray-600 leading-relaxed">
              • Practice with questions tailored to your target role, ensuring relevance and preparation.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-gray-900 mb-1">Actionable Feedback:</h5>
            <p className="text-xs text-gray-600 leading-relaxed">
              • Get detailed analysis of your responses and practical, step-by-step improvement suggestions.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-gray-900 mb-1">Boost Success Rates:</h5>
            <p className="text-xs text-gray-600 leading-relaxed">
              • Perfect your interview skills and increase your chances of landing the job you want.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleMockInterview}
        className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 h-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>Mock Interview</span>
      </button>
    </div>
  );
}

