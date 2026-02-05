import { Link } from 'react-router-dom';
import { Job } from '../../data/jobs';
import MatchRing from './MatchRing';
import TagPill from './TagPill';
import { toggleLikedJob, applyToJob } from '../../utils/storage';
import { showToast } from '../../utils/toast';
import Icon from '../icons/Icon';

interface JobCardProps {
  job: Job;
  onUpdate?: () => void;
}

export default function JobCard({ job, onUpdate }: JobCardProps) {
  // Use boolean flags from job, fallback to false if undefined
  const isLiked = job.isLiked ?? false;
  const isApplied = job.isApplied ?? false;

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLikedJob(job.id);
    showToast(!isLiked ? 'Job added to liked' : 'Job removed from liked');
    onUpdate?.();
  };

  const handleApply = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isApplied) {
      applyToJob(job.id);
      // Also like the job when applying
      if (!isLiked) {
        toggleLikedJob(job.id);
      }
      showToast('Application submitted successfully!');
      onUpdate?.();
    }
  };

  const handleMockInterview = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // This would open a modal - for now just show a toast
    showToast(`Starting mock interview for ${job.title}`, 'info');
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Edit functionality - could navigate to edit page or open modal
  };

  return (
    <Link to={`/jobs/${job.id}`} className="block">
      <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
        <div className="flex items-start gap-4">
          {/* Match Ring - LEFT */}
          <div className="flex-shrink-0 pt-1">
            <MatchRing percentage={job.matchPercent} size={72} />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Top Row: Title + Icons */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-gray-900 truncate flex-1">{job.title}</h3>
                  {/* Edit and Like Icons - Top Right */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={handleEdit}
                      className="p-1.5 rounded text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Edit job"
                    >
                      <Icon name="pencil" className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleLike}
                      className={`p-1.5 rounded transition-colors ${
                        isLiked ? 'text-primary-600' : 'text-gray-400 hover:text-primary-600'
                      }`}
                      aria-label={isLiked ? 'Unlike job' : 'Like job'}
                    >
                      <Icon name="heart" className="w-4 h-4" filled={isLiked} />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">{job.company}</p>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span className="flex items-center">
                    {job.workMode === 'Remote' ? '🏠' : job.workMode === 'Hybrid' ? '🔄' : '🏢'}
                    <span className="ml-1">{job.workMode}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              <TagPill>{job.employmentType}</TagPill>
              <TagPill variant={job.skillMatchCount.includes('0') ? 'warning' : 'success'}>
                {job.skillMatchCount}
              </TagPill>
              <TagPill>{job.level}</TagPill>
              <TagPill variant="info">{job.salaryRange}</TagPill>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-100 mb-3"></div>

            {/* Bottom Row: Time + Applicants (left) | Buttons (right) */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              {/* Left: Time pill + Applicants */}
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium border border-primary-100">
                  {job.postedAgo}
                </span>
                <span className="text-xs text-gray-500">{job.applicantsCount} applicants</span>
              </div>

              {/* Right: Action Buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={handleApply}
                  disabled={isApplied}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap h-9 ${
                    isApplied
                      ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {isApplied ? 'Applied' : 'Apply'}
                </button>
                <button
                  onClick={handleMockInterview}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-green-500 text-white hover:bg-green-600 transition-colors whitespace-nowrap h-9"
                >
                  Mock Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

