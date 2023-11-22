import { getValueByProp } from "./_utils";

export type TypographyColorKey =
  | "white"
  | "base"
  | "base-secondary"
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "error";

export type TypographyVariant = "heading" | "body";
export type TypographySize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type TypographyWeight = "regular" | "medium" | "semibold" | "bold";
export type TypographyDecoration = "none" | "underline" | "line-through";
export type TypographyCursor = "pointer" | "default" | "help" | "text";
export type TypographyStyleProps = {
  /** The color of the typography. */
  color: TypographyColorKey;
  /** The variant of the typography.*/
  variant: TypographyVariant;
  /** The size of the typography. */
  size: TypographySize;
  /** The weight of the typography.*/
  weight: TypographyWeight;
  /** The decoration of the typography.*/
  decoration: TypographyDecoration;
  /** Defines the cursor behavior when hovering over the typography.*/
  cursor: TypographyCursor;
};

export type TypographyClasses = {
  rootClass: string;
};

export const getTypographyClasses = ({
  color,
  variant,
  size,
  weight,
  decoration,
  cursor,
}: TypographyStyleProps): TypographyClasses => {
  return {
    rootClass: `
      inline
      ${getValueByProp(decoration, {
        underline: "decoration-dotted underline",
        "line-through": "line-through",
        none: "",
      })}
      ${getValueByProp(cursor, {
        pointer: "cursor-pointer",
        default: "cursor-default",
        help: "cursor-help",
        text: "cursor-text",
      })}
      ${getValueByProp(variant, {
        body: `font-body ${getValueByProp(size, {
          xs: "text-b-xs",
          sm: "text-b-sm",
          md: "text-b-md",
          lg: "text-b-lg",
          xl: "text-b-xl",
          "2xl": "text-b-xl",
        })}`,
        heading: `font-heading ${getValueByProp(size, {
          xs: "text-h-xs",
          sm: "text-h-sm",
          md: "text-h-md",
          lg: "text-h-lg",
          xl: "text-h-xl",
          "2xl": "text-h-2xl",
        })}`,
      })}
      ${getValueByProp(weight, {
        regular: "font-regular",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      })}
      ${getValueByProp(color, {
        white: "text-white",
        base: "text-base-200",
        "base-secondary": "text-base-300",
        primary: "text-primary-200",
        secondary: "text-secondary-200",
        tertiary: "text-tertiary-300",
        error: "text-error-400",
        success: "text-success-400",
        warning: "text-warning-200",
      })}
    `,
  };
};
