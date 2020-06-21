import { theme } from '../theme';

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

const skillsInformation: SkillInformationTypes[] = [
  { name: 'React', progress: 80, backgroundColor: theme.colors.secondaryColor },
  { name: 'Typescript', progress: 75, backgroundColor: theme.colors.blue },
  { name: 'Redux', progress: 75, backgroundColor: theme.colors.thirdColor },
  { name: 'Photography', progress: 70, backgroundColor: theme.colors.lighterPrimaryColor },
];

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

const experienceInformations: Information[] = [
  {
    nameOfOrganization: 'Guiker Inc, Montreal  — Junior Software Developer',
    startYear: 'July, 2019',
    endYear: 'Present',
    details:
      'My job is to provide assistance to my team where we work on Mobile applications for iOS and android(https://play.google.com/store/apps/details?id=com.guiker.mobile&hl=en). Also rebuilding the existing product(www.guiker.com) and its functionality The tools we are using Expo, Typescript, Jest, React Native, React, Material UI, JSS, Axios Etc.',
  },
  {
    nameOfOrganization: 'This Portfolio — Personal',
    startYear: '2020',
    endYear: '2020',
    details:
      'I made this portfolio by using React, React Hooks, Typescript, Jest for testing and some animation tools. I use JSS with fully controlled style. I try to make it with proper optimization by using React features',
  },

  {
    nameOfOrganization: 'CoronaVirus-tracker — Personal',
    startYear: '2020',
    endYear: '2020',
    details:
      'An application where we can track the activity of Covid-19 based on country, continent, province with several factors and graphs. Built on React native,Typescript,React-native Element, Axios, Redux-toolkit. For source code kindly check my github. Here is demo link for it : youtu.be/e_fFipPN9Ic .',
  },
  {
    nameOfOrganization: 'Meal Delivery App, Montreal — Co-member(DecodeMtl)',
    startYear: 'April, 2019',
    endYear: 'May, 2019',
    details:
      'Marketplace where customers can order food and sellers can manage their items. Built in 10 days with a team of 4, this is a full stack application built with React, Redux, Express & MongoDB, where I tackled most of the front-end, including all the major views, animations, and state management. For source code kindly check my github. Here is demo link for it : youtu.be/CKuMCXpg-3Q . ',
  },
  {
    nameOfOrganization: 'Fusion BPO Services, Montreal  — Technical support representative',
    startYear: 'June, 2018',
    endYear: 'June, 2019',
    details:
      'My job was providing technical support for general computer or gadget troubleshooting. I help people remove malware, install new programs, or learn how to use Windows and Macintosh operating systems or any electronic gadget which requires internet.',
  },
  {
    nameOfOrganization: 'IEEE Publication, India — Main Author',
    startYear: 'Jan, 2016',
    endYear: 'Jan, 2016',
    details:
      'Authored a paper on an embedded hardware project, "Controlling an Embedded Robot through Image Processing based Object Tracking using MATLAB”. The publication is about a robot where users can instruct it to do commands by specific color object. The robot automatically tracks the specific object. Link of our paper: ieeexplore.ieee.org/document/7726922',
  },
  {
    nameOfOrganization: 'ESL, Kolkata, India  — Trainee',
    startYear: 'May, 2015',
    endYear: 'July, 2015',
    details:
      'Led a team of 5 to create a Matlab-controlled Arduino robot. By uploading an image, users could instruct the robot to do commands, such as it follows the specific color. A paper on this project was published through IEEE, a major science publisher.',
  },

  {
    nameOfOrganization: 'STQC Directorate run by Government of India, Kolkata, India — Trainee',
    startYear: 'June, 2014',
    endYear: 'July, 2014',
    details:
      'STQC provides quality assurance services in the area of Electronics and IT through a country wide network of laboratories and centres.Completed two projects based on PLC(Programmable Logic Controller). Sequential Control of three motors Automatic Traffic Control.',
  },
  {
    nameOfOrganization: 'For Other Projects — Personal',
    startYear: 'April, 2019',
    endYear: 'Present',
    details: 'For other projects kindly checkout my github link. http://github.com/sk-izsk ',
  },
];

export { educationInformations, skillsInformation, experienceInformations };
