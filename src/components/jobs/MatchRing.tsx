interface MatchRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  showMatchInside?: boolean; // New prop to show "Match" inside ring
}

export default function MatchRing({ percentage, size = 60, strokeWidth = 6, showMatchInside = false }: MatchRingProps) {
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
    <div className="relative inline-flex items-center justify-center">
      {/* Light background circle */}
      <div className="absolute bg-gray-100 rounded-full" style={{ width: size, height: size }}></div>
      <svg width={size} height={size} className="transform -rotate-90 relative z-10">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
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
          className="transition-all duration-500"
        />
      </svg>
      {/* Percentage text */}
      <div className={`absolute inset-0 flex items-center justify-center z-10 ${showMatchInside ? 'flex-col' : ''}`}>
        <span className={`font-semibold ${showMatchInside ? 'text-base' : 'text-sm'}`} style={{ color: getColor(percentage) }}>
          {percentage}%
        </span>
        {showMatchInside && (
          <span className="text-xs text-gray-600 mt-0.5">Match</span>
        )}
      </div>
      {/* Match label - only show if not inside */}
      {!showMatchInside && (
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-gray-600 z-10">
          Match
        </div>
      )}
    </div>
  );
}

