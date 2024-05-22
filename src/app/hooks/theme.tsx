export interface Theme {
  bgColor: string;
  primaryColor: string;
  accentText: string;
  gradientDark: string;
  gradientLight: string;
  colorProduct: string;
  productList: string;
  accentTextInvert: string;
}

export const lightTheme: Theme = {
  bgColor: '#f1f0ee',
  primaryColor: '#0e0f11',
  accentText: '#0047ff',
  accentTextInvert: '#f6e760',
  gradientDark: '#4bbbf4',
  gradientLight: '#ecae37',
  colorProduct: '#000000b2',
  productList: '#e7e6e2',
};

export const darkTheme: Theme = {
  bgColor: '#0e0f11',
  primaryColor: '#ffffff',
  accentText: '#f6e760',
  accentTextInvert: '#0047ff',
  gradientDark: '#4bbbf4',
  gradientLight: '#ecae37',
  colorProduct: '#ffffffb2',
  productList: '#18191d',
};
