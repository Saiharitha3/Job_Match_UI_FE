export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  workMode: 'On-site' | 'Remote' | 'Hybrid';
  matchPercent: number;
  employmentType: string;
  experience: string;
  level: string;
  salaryRange: string;
  skillMatchCount: string;
  applicantsCount: number;
  postedAgo: string;
  status: 'matched' | 'liked' | 'applied'; // Keep for backward compatibility, but all jobs should be 'matched'
  isLiked?: boolean; // New: boolean flag for liked state
  isApplied?: boolean; // New: boolean flag for applied state
  overview: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  companyInfo: {
    founded?: string;
    location?: string;
    employees?: string;
    website?: string;
    about?: string;
  };
  qualifications?: string[];
  preferred?: string[];
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Web Application Developer',
    company: 'Backd Business Funding',
    companyLogo: 'B',
    location: 'Austin, Texas Metropolitan Area',
    workMode: 'On-site',
    matchPercent: 64,
    employmentType: 'Full time',
    experience: '3+ years exp',
    level: 'Mid Level',
    salaryRange: '$65/yr - $70/yr',
    skillMatchCount: '0 of 3 skills match',
    applicantsCount: 25,
    postedAgo: '1 hour ago',
    status: 'matched',
    overview: 'We are looking for a talented Web Application Developer to join our team. You will be responsible for developing and maintaining web applications using modern technologies.',
    requirements: [
      '3+ years of web development experience',
      'Proficiency in React, TypeScript, and Node.js',
      'Experience with RESTful APIs and database design',
      'Strong problem-solving skills'
    ],
    responsibilities: [
      'Develop and maintain web applications',
      'Collaborate with cross-functional teams',
      'Write clean, maintainable code',
      'Participate in code reviews'
    ],
    benefits: [
      'Remote Flexibility',
      'Equity Options',
      'Paid Vacations',
      'Health Coverage',
      'Beautiful Office',
      'Social Initiatives'
    ],
    companyInfo: {
      founded: '2018',
      location: 'Austin, TX',
      employees: '50-200',
      website: 'https://backd.com',
      about: 'Backd Business Funding provides innovative financial solutions for growing businesses.'
    }
  },
  {
    id: '2',
    title: 'Software Engineer, Network Infrastructure',
    company: 'Cursor AI',
    companyLogo: 'C',
    location: 'Sunnyvale, CA',
    workMode: 'On-site',
    matchPercent: 93,
    employmentType: 'Full time',
    experience: '5+ years exp',
    level: 'Mid Level',
    salaryRange: '$161K/yr - $239K/yr',
    skillMatchCount: '5 of 6 skills match',
    applicantsCount: 25,
    postedAgo: '2 hours ago',
    status: 'matched',
    overview: 'Join our network infrastructure team to build scalable, reliable systems that power our AI platform.',
    requirements: [
      '5+ years of software engineering experience',
      'Deep understanding of network protocols and distributed systems',
      'Experience with cloud infrastructure (AWS, GCP)',
      'Strong programming skills in Go, Python, or Java'
    ],
    responsibilities: [
      'Design and implement network infrastructure components',
      'Optimize system performance and reliability',
      'Collaborate with AI and platform teams',
      'Maintain and scale production systems'
    ],
    benefits: [
      'Remote Flexibility',
      'Equity Options',
      'Paid Vacations',
      'Health Coverage',
      'Beautiful Office',
      'Birthday Week',
      'Social Initiatives',
      'International Environment'
    ],
    companyInfo: {
      founded: '2020',
      location: 'Sunnyvale, CA',
      employees: '100-500',
      website: 'https://cursor.ai',
      about: 'Cursor AI is building the future of AI-powered development tools.'
    }
  },
  {
    id: '3',
    title: 'Full-Stack Software Engineer (Web Developer)',
    company: 'Simons Foundation',
    companyLogo: 'S',
    location: 'New York, NY',
    workMode: 'On-site',
    matchPercent: 82,
    employmentType: 'Full time',
    experience: '5+ years exp',
    level: 'Mid Level',
    salaryRange: '$125K/yr - $140K/yr',
    skillMatchCount: '4 of 5 skills match',
    applicantsCount: 18,
    postedAgo: '3 hours ago',
    status: 'matched',
    overview: 'We are seeking a Full-Stack Software Engineer to help build web applications that support scientific research and collaboration.',
    requirements: [
      '5+ years of full-stack development experience',
      'Proficiency in React, Node.js, and PostgreSQL',
      'Experience with scientific computing tools is a plus',
      'Strong communication and collaboration skills'
    ],
    responsibilities: [
      'Develop full-stack web applications',
      'Work with researchers to understand requirements',
      'Maintain and improve existing systems',
      'Participate in agile development processes'
    ],
    benefits: [
      'Remote Flexibility',
      'Equity Options',
      'Paid Vacations',
      'Health Coverage',
      'Beautiful Office',
      'Social Initiatives'
    ],
    companyInfo: {
      founded: '1994',
      location: 'New York, NY',
      employees: '200-1000',
      website: 'https://simonsfoundation.org',
      about: 'The Simons Foundation supports research in mathematics and the basic sciences.'
    }
  },
  {
    id: '4',
    title: 'UX Designer',
    company: 'Google',
    companyLogo: 'G',
    location: 'E. Amache, MI',
    workMode: 'Remote',
    matchPercent: 90,
    employmentType: 'Full time',
    experience: '1-3 years exp',
    level: 'Entry-level',
    salaryRange: '$95K/yr - $120K/yr',
    skillMatchCount: '6 of 8 skills match',
    applicantsCount: 42,
    postedAgo: '2 hours ago',
    status: 'matched',
    overview: 'We are looking for a talented UX Designer to join our design team. You will work on creating intuitive and beautiful user experiences for our products.',
    requirements: [
      '2+ years of design experience',
      'In-depth understanding of design principles, UX/UI design, or interaction design experience',
      'Basic and advanced wireframe skills',
      'Experience with prototyping tools (e.g., Figma, JavaScript, CSS, React, or Front Catalyst, or others)'
    ],
    preferred: [
      'In-depth experience with user-centric research and usability principles',
      'Experience working in a collaborative team and working directly with developers for implementation of designs'
    ],
    responsibilities: [
      'Design user interfaces and experiences for web and mobile applications',
      'Collaborate with product managers, engineers, and other designers',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and design specifications',
      'Maintain design systems and style guides'
    ],
    benefits: [
      'Remote Flexibility',
      'Equity Options',
      'Paid Vacations',
      'Beautiful Office',
      'Health Coverage',
      'Birthday Week',
      'Social Initiatives',
      'International Environment'
    ],
    qualifications: [
      'Generative Search and Conversational AI (SCAD)',
      'Amazon Web Services (AWS)',
      'Analysis Studio',
      'DevOps',
      'Apache Kafka (AK)',
      'Application Programming Interface (API)',
      'Git/GitHub',
      'Change Control'
    ],
    companyInfo: {
      founded: '2015',
      location: 'Curacao, California, US',
      employees: '100-1000',
      website: 'https://google.com',
      about: 'A leading technology company focused on innovation and user experience.'
    }
  },
  {
    id: '5',
    title: 'Senior Frontend Engineer',
    company: 'Meta',
    companyLogo: 'M',
    location: 'Menlo Park, CA',
    workMode: 'Hybrid',
    matchPercent: 88,
    employmentType: 'Full time',
    experience: '7+ years exp',
    level: 'Senior',
    salaryRange: '$180K/yr - $250K/yr',
    skillMatchCount: '7 of 8 skills match',
    applicantsCount: 35,
    postedAgo: '4 hours ago',
    status: 'matched',
    overview: 'Join our frontend team to build the next generation of social media experiences.',
    requirements: [
      '7+ years of frontend development experience',
      'Expert-level knowledge of React and TypeScript',
      'Experience with large-scale applications',
      'Strong leadership and mentoring skills'
    ],
    responsibilities: [
      'Lead frontend development initiatives',
      'Mentor junior engineers',
      'Architect scalable frontend solutions',
      'Collaborate with design and backend teams'
    ],
    benefits: [
      'Remote Flexibility',
      'Equity Options',
      'Paid Vacations',
      'Health Coverage',
      'Beautiful Office',
      'Social Initiatives',
      'International Environment'
    ],
    companyInfo: {
      founded: '2004',
      location: 'Menlo Park, CA',
      employees: '10000+',
      website: 'https://meta.com',
      about: 'Meta builds technologies that help people connect and share.'
    }
  },
  {
    id: '6',
    title: 'DevOps Engineer',
    company: 'Netflix',
    companyLogo: 'N',
    location: 'Los Gatos, CA',
    workMode: 'Remote',
    matchPercent: 75,
    employmentType: 'Full time',
    experience: '4+ years exp',
    level: 'Mid Level',
    salaryRange: '$140K/yr - $180K/yr',
    skillMatchCount: '3 of 5 skills match',
    applicantsCount: 28,
    postedAgo: '5 hours ago',
    status: 'matched',
    overview: 'Help us scale our infrastructure to serve millions of users worldwide.',
    requirements: [
      '4+ years of DevOps or SRE experience',
      'Experience with Kubernetes and container orchestration',
      'Strong knowledge of AWS or GCP',
      'Proficiency in infrastructure as code (Terraform, CloudFormation)'
    ],
    responsibilities: [
      'Design and maintain cloud infrastructure',
      'Implement CI/CD pipelines',
      'Monitor and optimize system performance',
      'Ensure high availability and reliability'
    ],
    benefits: [
      'Remote Flexibility',
      'Equity Options',
      'Paid Vacations',
      'Health Coverage',
      'Beautiful Office',
      'Social Initiatives'
    ],
    companyInfo: {
      founded: '1997',
      location: 'Los Gatos, CA',
      employees: '5000+',
      website: 'https://netflix.com',
      about: 'Netflix is the world\'s leading streaming entertainment service.'
    }
  },
  {
    id: '7',
    title: 'Backend Engineer',
    company: 'Stripe',
    companyLogo: 'S',
    location: 'San Francisco, CA',
    workMode: 'Hybrid',
    matchPercent: 85,
    employmentType: 'Full time',
    experience: '5+ years exp',
    level: 'Mid Level',
    salaryRange: '$150K/yr - $200K/yr',
    skillMatchCount: '5 of 6 skills match',
    applicantsCount: 31,
    postedAgo: '6 hours ago',
    status: 'matched',
    overview: 'Build the infrastructure that powers online payments for millions of businesses.',
    requirements: [
      '5+ years of backend development experience',
      'Expertise in distributed systems and microservices',
      'Experience with Ruby, Go, or Java',
      'Strong understanding of database design and optimization'
    ],
    responsibilities: [
      'Design and implement scalable backend services',
      'Optimize system performance and reliability',
      'Work on payment processing systems',
      'Collaborate with product and security teams'
    ],
    benefits: [
      'Remote Flexibility',
      'Equity Options',
      'Paid Vacations',
      'Health Coverage',
      'Beautiful Office',
      'Social Initiatives',
      'International Environment'
    ],
    companyInfo: {
      founded: '2010',
      location: 'San Francisco, CA',
      employees: '1000-5000',
      website: 'https://stripe.com',
      about: 'Stripe builds economic infrastructure for the internet.'
    }
  },
  {
    id: '8',
    title: 'Product Designer',
    company: 'Airbnb',
    companyLogo: 'A',
    location: 'San Francisco, CA',
    workMode: 'Hybrid',
    matchPercent: 79,
    employmentType: 'Full time',
    experience: '4+ years exp',
    level: 'Mid Level',
    salaryRange: '$130K/yr - $170K/yr',
    skillMatchCount: '4 of 6 skills match',
    applicantsCount: 22,
    postedAgo: '7 hours ago',
    status: 'matched',
    overview: 'Design experiences that help people belong anywhere.',
    requirements: [
      '4+ years of product design experience',
      'Strong portfolio demonstrating user-centered design',
      'Proficiency in Figma and design tools',
      'Experience with user research and testing'
    ],
    responsibilities: [
      'Design user experiences for web and mobile',
      'Conduct user research and usability studies',
      'Collaborate with engineers and product managers',
      'Create and maintain design systems'
    ],
    benefits: [
      'Remote Flexibility',
      'Equity Options',
      'Paid Vacations',
      'Health Coverage',
      'Beautiful Office',
      'Social Initiatives'
    ],
    companyInfo: {
      founded: '2008',
      location: 'San Francisco, CA',
      employees: '5000+',
      website: 'https://airbnb.com',
      about: 'Airbnb is a platform that connects travelers with unique places to stay.'
    }
  },
  {
    id: '9',
    title: 'Data Engineer',
    company: 'Databricks',
    companyLogo: 'D',
    location: 'San Francisco, CA',
    workMode: 'Remote',
    matchPercent: 71,
    employmentType: 'Full time',
    experience: '3+ years exp',
    level: 'Mid Level',
    salaryRange: '$135K/yr - $175K/yr',
    skillMatchCount: '3 of 5 skills match',
    applicantsCount: 19,
    postedAgo: '8 hours ago',
    status: 'matched',
    overview: 'Build data pipelines and infrastructure to enable data-driven decisions.',
    requirements: [
      '3+ years of data engineering experience',
      'Experience with Spark, Hadoop, or similar big data technologies',
      'Proficiency in Python or Scala',
      'Knowledge of data warehousing and ETL processes'
    ],
    responsibilities: [
      'Design and build data pipelines',
      'Optimize data processing performance',
      'Maintain data quality and reliability',
      'Collaborate with data scientists and analysts'
    ],
    benefits: [
      'Remote Flexibility',
      'Equity Options',
      'Paid Vacations',
      'Health Coverage',
      'Beautiful Office',
      'Social Initiatives'
    ],
    companyInfo: {
      founded: '2013',
      location: 'San Francisco, CA',
      employees: '1000-5000',
      website: 'https://databricks.com',
      about: 'Databricks provides a unified analytics platform for big data and AI.'
    }
  },
  {
    id: '10',
    title: 'Mobile Developer (iOS)',
    company: 'Apple',
    companyLogo: 'A',
    location: 'Cupertino, CA',
    workMode: 'On-site',
    matchPercent: 87,
    employmentType: 'Full time',
    experience: '5+ years exp',
    level: 'Mid Level',
    salaryRange: '$160K/yr - $220K/yr',
    skillMatchCount: '6 of 7 skills match',
    applicantsCount: 45,
    postedAgo: '9 hours ago',
    status: 'matched',
    overview: 'Create amazing mobile experiences for millions of users.',
    requirements: [
      '5+ years of iOS development experience',
      'Expert-level knowledge of Swift and Objective-C',
      'Experience with UIKit and SwiftUI',
      'Strong understanding of iOS design guidelines'
    ],
    responsibilities: [
      'Develop iOS applications',
      'Collaborate with design and backend teams',
      'Optimize app performance and user experience',
      'Maintain and improve existing apps'
    ],
    benefits: [
      'Remote Flexibility',
      'Equity Options',
      'Paid Vacations',
      'Health Coverage',
      'Beautiful Office',
      'Social Initiatives',
      'International Environment'
    ],
    companyInfo: {
      founded: '1976',
      location: 'Cupertino, CA',
      employees: '100000+',
      website: 'https://apple.com',
      about: 'Apple designs and creates innovative products and services.'
    }
  }
];

