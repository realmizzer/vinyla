import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import {LanguageCodes} from '~/shared/lib/i18next';
import {ScreenContainer} from '~/shared/ui/ScreenContainer';

export const SignIn = () => {
  const {t, i18n} = useTranslation();

  console.log(i18n.getResourceBundle(LanguageCodes.EN, 'translation'));

  return (
    <ScreenContainer>
      <Text>{t('test')}</Text>
    </ScreenContainer>
  );
};
