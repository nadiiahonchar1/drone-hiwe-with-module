export interface Theme {
  bgColor: string;
  primaryColor: string;
  secondaryColor: string;
  // Додай інші кольори тут...
}

export const lightTheme: Theme = {
  bgColor: '#fff',
  primaryColor: '#ffffff',
  secondaryColor: '#f0f0f0',
  // Додай інші кольори тут...
};

export const darkTheme: Theme = {
  bgColor: '#0e0f11',
  primaryColor: '#000000',
  secondaryColor: '#333333',
  // Додай інші кольори тут...
};
