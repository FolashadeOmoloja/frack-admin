export type userObject = {
  _id: String;
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
