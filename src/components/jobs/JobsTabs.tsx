import { JobStatus } from '../../types';

interface JobsTabsProps {
  activeTab: JobStatus | 'all';
  onTabChange: (tab: JobStatus | 'all') => void;
  counts: {
    matched: number;
    liked: number;
    applied: number;
  };
}

export default function JobsTabs({ activeTab, onTabChange, counts }: JobsTabsProps) {
  const tabs: { key: JobStatus | 'all'; label: string; count: number }[] = [
    { key: 'matched', label: 'Matched', count: counts.matched },
    { key: 'liked', label: 'Liked', count: counts.liked },
    { key: 'applied', label: 'Applied', count: counts.applied },
  ];

  return (
    <div className="flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors relative ${
            activeTab === tab.key
              ? 'bg-primary-50 text-primary-700 border border-primary-200'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {tab.label}
          {/* Only show badge for Liked and Applied, never for Matched */}
          {tab.key !== 'matched' && tab.count > 0 && (
            <span
              className={`ml-1.5 inline-flex items-center justify-center min-w-[18px] h-4.5 px-1 rounded-full text-xs ${
                activeTab === tab.key ? 'bg-primary-100 text-primary-700' : 'bg-green-100 text-green-700'
              }`}
            >
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

