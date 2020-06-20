export interface CustomTheme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
    darkerThirdColor: string;
    darkerPrimaryColor: string;
    lighterPrimaryColor: string;
    white: string;
  };
  fontProperties: {
    textFontSize: number;
    headerFontSize: number;
    fontFamily: string;
  };
  spacing: (value: number) => number;
}

const theme: CustomTheme = {
  colors: {
    primaryColor: '#353353',
    secondaryColor: '#FFD15C',
    thirdColor: '#FF4C60',
    darkerThirdColor: '	 #ff334b',
    darkerPrimaryColor: '#302f4e',
    lighterPrimaryColor: '#8B88B1',
    white: '#fff',
  },
  fontProperties: {
    textFontSize: 16,
    headerFontSize: 36,
    fontFamily: 'Roboto',
  },
  spacing: (value: number) => 8 * value,
};

export { theme };
