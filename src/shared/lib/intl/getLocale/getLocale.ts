import {getLocales} from 'react-native-localize';

export const getLocale = () => {
  const locale = getLocales();
  return locale[0].languageCode;
};
