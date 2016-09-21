const type = {
  base: 'HelveticaNeue',
  bold: 'HelveticaNeue-Bold',
  emphasis: 'HelveticaNeue-Italic'
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
};

export const h1 = {
  fontFamily: type.base,
  fontSize: size.h1
};

export const h2 = {
  fontWeight: 'bold',
  fontSize: size.h2
};

export const h3 = {
  fontFamily: type.emphasis,
  fontSize: size.h3
};

export const h4 = {
  fontFamily: type.base,
  fontSize: size.h4
};

export const h5 = {
  fontFamily: type.base,
  fontSize: size.h5
};

export const h6 = {
  fontFamily: type.emphasis,
  fontSize: size.h6
};

export const normal = {
  fontFamily: type.base,
  fontSize: size.regular
};

export const description = {
  fontFamily: type.base,
  fontSize: size.medium
};
