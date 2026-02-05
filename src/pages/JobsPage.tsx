import { useState, useEffect, useMemo } from 'react';
import { mockJobs, Job } from '../data/jobs';
import { mergeJobStates } from '../utils/storage';
import { JobStatus, SortOption } from '../types';
import JobsTabs from '../components/jobs/JobsTabs';
import JobCard from '../components/jobs/JobCard';
import RightPromoPanel from '../components/jobs/RightPromoPanel';
import LoadingSkeleton from '../components/ui/LoadingSkeleton';
import Icon from '../components/icons/Icon';

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<JobStatus | 'all'>('matched');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('match');

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      const updatedJobs = mergeJobStates(mockJobs);
      setJobs(updatedJobs);
      setLoading(false);
    }, 600);
  }, []);

  const filteredAndSortedJobs = useMemo(() => {
    let filtered = jobs;

    // Filter by tab using boolean flags
    if (activeTab === 'liked') {
      filtered = filtered.filter((job) => job.isLiked === true);
    } else if (activeTab === 'applied') {
      filtered = filtered.filter((job) => job.isApplied === true);
    }
    // 'matched' or 'all' shows all jobs

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchLower) ||
          job.company.toLowerCase().includes(searchLower) ||
          job.location.toLowerCase().includes(searchLower)
      );
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sort) {
        case 'match':
          return b.matchPercent - a.matchPercent;
        case 'recent':
          // Simple parsing of "X hours ago" - in real app would use actual dates
          return 0;
        case 'salary':
          // Simple parsing - extract first number
          const aSalary = parseInt(a.salaryRange.replace(/[^0-9]/g, '')) || 0;
          const bSalary = parseInt(b.salaryRange.replace(/[^0-9]/g, '')) || 0;
          return bSalary - aSalary;
        default:
          return 0;
      }
    });

    return sorted;
  }, [jobs, activeTab, search, sort]);

  const counts = useMemo(() => {
    return {
      matched: jobs.length, // All jobs are in matched
      liked: jobs.filter((j) => j.isLiked === true).length,
      applied: jobs.filter((j) => j.isApplied === true).length,
    };
  }, [jobs]);

  const handleUpdate = () => {
    // Re-merge states from localStorage
    const updatedJobs = mergeJobStates(mockJobs);
    setJobs(updatedJobs);
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Header - Row 1: Tabs + Search/Sort */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <JobsTabs activeTab={activeTab} onTabChange={setActiveTab} counts={counts} />

            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              >
                <option value="match">Match (High to Low)</option>
                <option value="recent">Most Recent</option>
                <option value="salary">Salary (High to Low)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Change Job Reference + Top matched (below header, not sticky) */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            <button className="flex-1 max-w-md px-4 py-2.5 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Change Job Reference</span>
            </button>
            <button className="px-3 py-2 bg-white border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2 text-sm h-9">
              <Icon name="topMatched" className="w-4 h-4" />
              <span>Top matched</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - compact spacing after header rows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job List */}
          <div className="lg:col-span-2 space-y-4">
            {loading ? (
              <LoadingSkeleton />
            ) : filteredAndSortedJobs.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <p className="text-gray-500 text-lg">No jobs found</p>
                <p className="text-gray-400 text-sm mt-2">
                  Try adjusting your filters or search terms
                </p>
              </div>
            ) : (
              filteredAndSortedJobs.map((job) => (
                <JobCard key={job.id} job={job} onUpdate={handleUpdate} />
              ))
            )}
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-1">
            <div className="hidden lg:block">
              <RightPromoPanel />
            </div>
            {/* Mobile: Show promo panel at bottom */}
            <div className="lg:hidden mt-6">
              <RightPromoPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

