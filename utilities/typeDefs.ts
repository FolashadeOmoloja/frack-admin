export type userObject = {
  _id: string;
  firstName: string;
  lastName: string;
  profileImage: string | null; // Use '|' for union types
  phoneNumber: string;
  countryCode: string;
  industry: string;
  emailAddress: string;
  password: string;
  profession: string;
  experienceYears: string;
  experienceLevel: string;
  filename: string;
  resume: string;
  resumeOriginalName: string;
  preference: string;
  country: string;
  accountStatus: string;
  hex: string;
  location: string;
  linkedInUrl: string;
  skills: [string];
};

export type userCompanyObject = {
  _id: string;
  companyName: string;
  firstName: string;
  lastName: string;
  profileImage: string | null; // Use '|' for union types
  phoneNumber: string;
  countryCode: string;
  industry: string[];
  emailAddress: string;
  password: string;
  companyRole: string;
  preference: string;
  country: string;
  accountStatus: string;
  hex: string;
  location: string;
  linkedInUrl: string;
};

export interface JobPosted {
  _id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  jobProximity: string;
  jobHours: string;
  experience: string;
  salaryRange1: string;
  salaryRange2: string;
  status: string;
  country: string;
  role: string;
  company: userCompanyObject;
  applicants?: userObject[];
  description: string;
  createdAt: string;
  updatedAt: string;
  skills: string[];
}

export interface Applicants {
  _id: string;
  job: string;
  status: string;
  createdAt: string;
  talent: userObject;
}

export interface SuccessApplications {
  _id: string;
  job: JobPosted;
  status: string;
  createdAt: string;
  talent: userObject;
}
