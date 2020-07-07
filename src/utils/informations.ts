export interface Information {
  startYear?: string;
  endYear?: string;
  nameOfOrganization?: string;
  details?: string;
}

export interface SkillInformationTypes {
  name?: string;
  progress?: number;
  backgroundColor?: string;
  technology?: 'BACKEND' | 'FRONTEND' | 'MISC';
}

export interface PhotoType {
  url: string;
}

export interface AvatarType {
  avatarOne: string;
  avatarTwo: string;
}
export interface Offerings {
  name: string;
  offerings: string[];
}

export interface MyOffersType {
  frontEnd: Offerings;
  backEnd: Offerings;
}

export interface Informations {
  avatar: AvatarType;
  educationInformations: Information[];
  experienceInformations: Information[];
  photos: PhotoType[];
  skillsInformation: SkillInformationTypes[];
  myOffers: MyOffersType;
}
