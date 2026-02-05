export type JobStatus = 'matched' | 'liked' | 'applied';
export type SortOption = 'match' | 'recent' | 'salary';

export interface JobFilters {
  search: string;
  sort: SortOption;
  status: JobStatus | 'all';
}

