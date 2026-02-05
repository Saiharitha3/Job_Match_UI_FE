import { Job } from '../../data/jobs';
import MatchRing from '../jobs/MatchRing';
import { toggleLikedJob, applyToJob } from '../../utils/storage';
import { showToast } from '../../utils/toast';
import Icon from '../icons/Icon';

interface JobDetailsHeaderProps {
  job: Job;
  onUpdate?: () => void;
  onBack?: () => void;
}

export default function JobDetailsHeader({ job, onUpdate, onBack }: JobDetailsHeaderProps) {
  const isLiked = job.isLiked ?? false;
  const isApplied = job.isApplied ?? false;

  const handleLike = () => {
    toggleLikedJob(job.id);
    showToast(!isLiked ? 'Job added to liked' : 'Job removed from liked');
    onUpdate?.();
  };

  const handleApply = () => {
    if (!isApplied) {
      applyToJob(job.id);
      if (!isLiked) {
        toggleLikedJob(job.id);
      }
      showToast('Application submitted successfully!');
      onUpdate?.();
    }
  };

  const handleEdit = () => {
    // Edit functionality
  };

  return (
    <>
      {/* Top Header Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Go back"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium border border-primary-200">
            {job.applicantsCount} applicants
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleEdit}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Edit job"
          >
            <Icon name="pencil" className="w-4 h-4" />
          </button>
          <button
            onClick={handleLike}
            className={`p-2 rounded-lg transition-colors ${
              isLiked ? 'text-primary-600' : 'text-gray-400 hover:text-primary-600'
            }`}
            aria-label={isLiked ? 'Unlike job' : 'Like job'}
          >
            <Icon name="heart" className="w-4 h-4" filled={isLiked} />
          </button>
          <button
            onClick={handleApply}
            disabled={isApplied}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
              isApplied
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            <span>Apply Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Job Hero Card */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6">
        <div className="flex items-start gap-3 mb-3">
          {/* Company Logo - Smaller */}
          <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {job.companyLogo || job.company.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            {/* Time pill at top-left */}
            <div className="mb-1.5">
              <span className="px-2.5 py-0.5 bg-primary-50 text-primary-700 rounded-full text-xs font-medium border border-primary-200">
                2 hours ago
              </span>
            </div>
            {/* Title */}
            <h1 className="text-xl font-bold text-gray-900 mb-0.5">{job.title}</h1>
            {/* Company name - use mock text for Figma match */}
            <p className="text-sm text-gray-600 mb-1.5">Company name</p>
            {/* Location line - formatted like Figma */}
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <span>Ann Arbor, MI</span>
              <span className="text-gray-400">•</span>
              <span>3 days ago</span>
              <span className="text-gray-400">•</span>
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <span>Remote</span>
            </div>
          </div>
          {/* Match Ring - Far right, vertically centered */}
          <div className="flex-shrink-0 flex items-center">
            <MatchRing percentage={93} size={72} showMatchInside={true} />
          </div>
        </div>

        {/* Meta Info - 3-column grid with 2 rows */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-xs text-gray-600 mb-4">
          {/* Row 1 */}
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>United States</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Internship</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
            <span>Remote</span>
          </div>
          {/* Row 2 */}
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>5+ years exp</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>$90K/yr - $130K/yr</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Mid Level</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-4"></div>

        {/* Job Description */}
        <div className="text-sm text-gray-700 leading-relaxed">
          <p>{job.overview}</p>
        </div>
      </div>
    </>
  );
}
