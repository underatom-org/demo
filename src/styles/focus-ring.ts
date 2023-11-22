export type FocusRingClasses = {
  rootClass: string;
};

export const getFocusRingClasses = (): FocusRingClasses => ({
  rootClass: "shadow-focus-ring z-50",
});
