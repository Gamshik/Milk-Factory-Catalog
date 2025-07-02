'use client';

import { TranslatedTextProps } from '@/types/translated-text-props.type';
import { useTranslations } from 'next-intl';

export const TranslatedText = ({
  namespace,
  tKey,
  values,
}: TranslatedTextProps) => {
  const t = useTranslations(namespace);

  return <>{t(tKey, values)}</>;
};
