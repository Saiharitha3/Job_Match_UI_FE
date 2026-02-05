import { Job } from '../data/jobs';

const STORAGE_KEYS = {
  LIKED_JOBS: 'jobnova_liked_jobs',
  APPLIED_JOBS: 'jobnova_applied_jobs',
};

export const getLikedJobs = (): string[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.LIKED_JOBS);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const getAppliedJobs = (): string[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.APPLIED_JOBS);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const toggleLikedJob = (jobId: string): boolean => {
  const liked = getLikedJobs();
  const index = liked.indexOf(jobId);
  
  if (index > -1) {
    liked.splice(index, 1);
  } else {
    liked.push(jobId);
  }
  
  localStorage.setItem(STORAGE_KEYS.LIKED_JOBS, JSON.stringify(liked));
  return !(index > -1);
};

export const applyToJob = (jobId: string): void => {
  const applied = getAppliedJobs();
  if (!applied.includes(jobId)) {
    applied.push(jobId);
    localStorage.setItem(STORAGE_KEYS.APPLIED_JOBS, JSON.stringify(applied));
  }
};

export const mergeJobStates = (jobs: Job[]): Job[] => {
  const liked = getLikedJobs();
  const applied = getAppliedJobs();
  
  return jobs.map(job => {
    // Keep status as 'matched' for all jobs, add boolean flags
    return {
      ...job,
      status: 'matched' as const,
      isLiked: liked.includes(job.id),
      isApplied: applied.includes(job.id),
    };
  });
};

