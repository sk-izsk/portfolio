import { theme } from '../../theme';

export interface SkillInformationTypes {
  name?: string;
  progress?: number;
  backgroundColor?: string;
}

const skillsInformation: SkillInformationTypes[] = [
  { name: 'React', progress: 80, backgroundColor: theme.colors.secondaryColor },
  { name: 'Typescript', progress: 75, backgroundColor: theme.colors.blue },
  { name: 'Redux', progress: 75, backgroundColor: theme.colors.thirdColor },
  { name: 'Photography', progress: 70, backgroundColor: theme.colors.lighterPrimaryColor },
];

export { skillsInformation };
