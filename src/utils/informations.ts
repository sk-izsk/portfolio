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
}

export interface PhotoType {
  url: string;
}

export interface AvatarType {
  avatarOne: string;
  avatarTwo: string;
}

export interface Informations {
  avatar: AvatarType;
  educationInformations: Information[];
  experienceInformations: Information[];
  photos: PhotoType[];
  skillsInformation: SkillInformationTypes[];
}
