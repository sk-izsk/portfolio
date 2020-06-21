import { theme } from '../theme';

export interface Information {
  startYear?: string;
  endYear?: string;
  nameOfOrganization?: string;
  details?: string;
}

const educationInformations: Information[] = [
  {
    nameOfOrganization: 'DecodeMtl(Concordia Bootcamp)',
    startYear: 'April, 2019',
    endYear: 'May, 2019',
    details:
      'I attend DecodeMtl coding bootcamp. Intensive full stack web development bootcamp where I gathered knowledge about React, Redux, Node, Express. For project, I worked in a team of four member including me. Together we build a meal delivery website, for more information kindly look in to may github or linkedIn',
  },
  {
    nameOfOrganization: 'Concordia University',
    startYear: '2016',
    endYear: '2018',
    details:
      "I have completed my Master's of Engineering from Concordia University in Electrical and Computer Engineering. Where I gathered information about how computer hardware work in cpu level, model driven architecture, signal processing, digital communication and so on.",
  },

  {
    nameOfOrganization: 'Narula Institute of Technology(India)',
    startYear: '2011',
    endYear: '2015',
    details:
      "I have completed my Bachelor's of Technology in Electronics and Communication Engineering, learned about analogue signal,digital signal, basics of solid states, wireless communication, digital communication and so on.",
  },
];

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

export { educationInformations, skillsInformation };
