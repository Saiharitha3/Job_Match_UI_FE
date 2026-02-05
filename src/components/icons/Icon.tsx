import React from 'react';

export type IconName =
  | 'pencil'
  | 'heart'
  | 'topMatched'
  | 'jobs'
  | 'aiMock'
  | 'resume'
  | 'profile'
  | 'setting'
  | 'subscription'
  | 'extraCredits';

interface IconProps {
  name: IconName;
  className?: string;
  filled?: boolean;
  color?: string;
}

const iconPaths: Record<IconName, string> = {
  pencil: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  heart: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  topMatched: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  jobs: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  aiMock: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zm4-6a1 1 0 11-2 0 1 1 0 012 0z',
  resume: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  profile: 'M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13',
  setting: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
  subscription: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z',
  extraCredits: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
};

export default function Icon({ name, className = 'w-5 h-5', filled = false, color }: IconProps) {
  const path = iconPaths[name];
  const fillColor = color || (filled ? 'currentColor' : 'none');
  const strokeColor = color || 'currentColor';

  // Special handling for topMatched icon (screen with magnifying glass overlay)
  if (name === 'topMatched') {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        {/* Screen/Monitor base */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        {/* Document icon overlay */}
        <rect x="14" y="6" width="4" height="5" rx="0.5" strokeWidth={1.5} />
        <path strokeLinecap="round" d="M15 7.5h2" />
        {/* Magnifying glass overlay on document */}
        <circle cx="16.5" cy="8.5" r="1.5" strokeWidth={1.5} />
        <path strokeLinecap="round" d="M17.5 9.5l1 1" />
      </svg>
    );
  }

  // Special handling for aiMock icon (monitor with upward arrow)
  if (name === 'aiMock') {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        {/* Upward arrow in top-left */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8l4-4m0 0l4 4m-4-4v12" />
      </svg>
    );
  }

  // Special handling for subscription icon (bookmark with star)
  if (name === 'subscription') {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.5l1.5 3 3 .5-2.5 2.5.5 3L12 15.5l-2.5 2 .5-3-2.5-2.5 3-.5L12 8.5z" fill="currentColor" />
      </svg>
    );
  }

  // Special handling for extraCredits icon (circle with plus and stars)
  if (name === 'extraCredits') {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <path d="M18 4l1 1M21 7l1-1M18 20l1-1M21 17l1 1" strokeWidth={1} />
      </svg>
    );
  }

  // Special handling for profile icon (paperclip)
  if (name === 'profile') {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
      </svg>
    );
  }

  // Special handling for heart - filled purple when liked
  if (name === 'heart') {
    return (
      <svg className={className} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
    );
  }

  return (
    <svg className={className} fill="none" stroke={strokeColor} viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

