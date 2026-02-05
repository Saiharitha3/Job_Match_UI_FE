export default function FitAnalysis() {
  const ScoreCard = ({ percentage, label }: { percentage: number; label: string }) => {
    const size = 48;
    const strokeWidth = 4;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    const getColor = (percent: number) => {
      if (percent >= 85) return '#10b981'; // green
      if (percent >= 70) return '#84cc16'; // lime
      if (percent >= 50) return '#eab308'; // yellow
      return '#f97316'; // orange
    };

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
        <div className="relative inline-flex items-center justify-center mb-2">
          <svg width={size} height={size} className="transform -rotate-90">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#e5e7eb"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={getColor(percentage)}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold" style={{ color: getColor(percentage) }}>
              {percentage}%
            </span>
          </div>
        </div>
        <div className="text-xs text-gray-600">{label}</div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h2 className="text-base font-semibold text-gray-900 mb-4">Why is this job a good fit for me?</h2>
      
      {/* 2x2 Score Grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <ScoreCard percentage={93} label="Education" />
        <ScoreCard percentage={80} label="Work Exp" />
        <ScoreCard percentage={93} label="Skills" />
        <ScoreCard percentage={44} label="Exp. Level" />
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {/* Relevant Experience */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-sm font-semibold text-gray-900">Relevant Experience</h3>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            • You have substantial experience as a UI/UX Designer, Interaction Designer, and User Research Specialist. Your role at Sohu aligns with designing interaction elements relevant to user experience design for digital products.
          </p>
        </div>

        {/* Seniority */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-sm font-semibold text-gray-900">Seniority</h3>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            • You have amassed over eight years of relevant experience, meeting the mid-level seniority requirement for the role.
          </p>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <h3 className="text-sm font-semibold text-gray-900">Education</h3>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            • While you hold a Master's degree from Politecnico di Milano in Digital and Interaction Design, it doesn't strictly align with the specified fields of Computer Science, Computer Engineering, or Information Science and Technology required by the job.
          </p>
        </div>
      </div>
    </div>
  );
}
