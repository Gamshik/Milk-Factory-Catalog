type RichTextElement = string | number | Date;

export type TranslatedTextProps = {
  namespace: string;
  tKey: string;
  values?: Record<string, RichTextElement>;
};
