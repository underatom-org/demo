export type FieldClasses = {
  labelClass: string;
  starClass: string;
  descriptionClass: string;
  errorClass: string;
};

export const getFieldClasses = (): FieldClasses => {
  return {
    labelClass: `text-base-200 font-body text-b-sm font-medium cursor:default`,
    starClass: ``,
    descriptionClass: `text-base-400 font-body text-b-sm font-regular`,
    errorClass: `text-error-400 font-body text-b-sm font-regular`,
  };
};
