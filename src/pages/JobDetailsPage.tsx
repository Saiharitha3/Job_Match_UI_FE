import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { mockJobs, Job } from '../data/jobs';
import { mergeJobStates } from '../utils/storage';
import JobDetailsHeader from '../components/details/JobDetailsHeader';
import Section from '../components/details/Section';
import QualificationTags from '../components/details/QualificationTags';
import FitAnalysis from '../components/details/FitAnalysis';
import InterviewPromo from '../components/details/InterviewPromo';
import LoadingSkeleton from '../components/ui/LoadingSkeleton';

export default function JobDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const allJobs = mergeJobStates(mockJobs);
      const foundJob = allJobs.find((j) => j.id === id);
      setJob(foundJob || null);
      setLoading(false);
    }, 400);
  }, [id]);

  const handleUpdate = () => {
    if (job) {
      const allJobs = mergeJobStates(mockJobs);
      const updatedJob = allJobs.find((j) => j.id === job.id);
      if (updatedJob) {
        setJob(updatedJob);
      }
    }
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LoadingSkeleton />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Job not found</h1>
          <p className="text-gray-500 mb-6">The job you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/jobs')}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,360px] gap-6">
        {/* Main Content - Left Column */}
        <div>
          <JobDetailsHeader job={job} onUpdate={handleUpdate} onBack={() => navigate('/jobs')} />

          {/* Green Interview Promo Block */}
          <InterviewPromo />

          {/* Qualifications */}
          {job.qualifications && job.qualifications.length > 0 && (
            <Section title="Qualification">
              <p className="text-gray-600 mb-4">
                Discover how you can align with the requirements of this position. Below is a breakdown of the
                essential skills needed for this role.
              </p>
              <QualificationTags qualifications={job.qualifications} />
            </Section>
          )}

          {/* Requirements */}
          <Section title="Required" collapsible={false}>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Preferred */}
          {job.preferred && job.preferred.length > 0 && (
            <Section title="Preferred" collapsible={false}>
              <ul className="space-y-2">
                {job.preferred.map((pref, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{pref}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Responsibilities */}
          <Section title="Responsibilities" collapsible={false}>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{resp}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Benefits */}
          <Section title="Benefits" collapsible={false}>
            <p className="text-gray-600 mb-4">
              We believe happy team members create amazing work. Here's what we offer to make you happen:
            </p>
            <div className="space-y-3">
              {job.benefits.map((benefit, index) => {
                // Map benefit titles to emoji icons and descriptions
                const benefitMap: Record<string, { icon: string; description: string }> = {
                  'Remote Flexibility': {
                    icon: '🏡',
                    description: 'Work from wherever you\'re most productive and happy.'
                  },
                  'Equity Options': {
                    icon: '📈',
                    description: 'Become a shareholder through our stock options plan after 6 months.'
                  },
                  'Meal Vouchers': {
                    icon: '🍱',
                    description: 'Enjoy an €8/day meal voucher to make your lunch break even better.'
                  },
                  'Lunch at the Office': {
                    icon: '🍽',
                    description: 'If you\'re in Bologna, we have lunch together at the office, and it is on us!'
                  },
                  'Health Coverage': {
                    icon: '🏥',
                    description: 'Comprehensive support through the Metasalute Health Assistance Fund.'
                  },
                  'Birthday Bliss': {
                    icon: '🎂',
                    description: 'Celebrate your day with an extra day off, just for you.'
                  },
                  'Mental Wellness': {
                    icon: '🧠',
                    description: 'Free access to iFeel, our psychological support platform.'
                  },
                  'International Environment': {
                    icon: '🌍',
                    description: 'Grow your language skills while working with a diverse and global team.'
                  },
                  'Paid Vacations': {
                    icon: '🏖️',
                    description: 'Enjoy paid time off to recharge and maintain work-life balance.'
                  },
                  'Beautiful Office': {
                    icon: '🏢',
                    description: 'Work in a modern, inspiring office space designed for collaboration.'
                  },
                  'Social Initiatives': {
                    icon: '🤝',
                    description: 'Participate in company-sponsored community and social impact programs.'
                  },
                  'Birthday Week': {
                    icon: '🎉',
                    description: 'Take a full week off to celebrate your special day.'
                  }
                };

                const benefitInfo = benefitMap[benefit] || { icon: '✨', description: benefit };
                
                return (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-lg leading-none mt-0.5">{benefitInfo.icon}</span>
                    <div className="flex-1">
                      <span className="text-gray-900">
                        <strong>{benefit}</strong>: {benefitInfo.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>

          {/* Company */}
          <Section title="Company" collapsible={false}>
            {/* Company Header Card */}
            <div className="flex items-start gap-4 mb-4">
              {/* Logo Placeholder */}
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
              {/* Company Info */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Company name</h3>
                {/* Horizontal Meta Row */}
                <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 mb-3">
                  {/* Founded */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Founded in {job.companyInfo.founded || '1979'}</span>
                  </div>
                  <span className="text-primary-600">•</span>
                  {/* Location */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{job.companyInfo.location || 'Carlsbad, California, US'}</span>
                  </div>
                  <span className="text-primary-600">•</span>
                  {/* Employees */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>{job.companyInfo.employees || '1001-5000 employees'}</span>
                  </div>
                  <span className="text-primary-600">•</span>
                  {/* Website */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    {job.companyInfo.website ? (
                      <a href={job.companyInfo.website} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                        Website
                      </a>
                    ) : (
                      <span>Website</span>
                    )}
                  </div>
                </div>
                {/* Social Icons Row */}
                <div className="flex items-center gap-2">
                  {/* X (Twitter) */}
                  <button className="w-8 h-8 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                  {/* LinkedIn */}
                  <button className="w-8 h-8 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Company Description */}
            {job.companyInfo.about && (
              <p className="text-gray-600 leading-relaxed">{job.companyInfo.about}</p>
            )}
          </Section>
        </div>

        {/* Right Sidebar - Fit Analysis */}
        <div>
          <FitAnalysis />
        </div>
      </div>
    </div>
  );
}

