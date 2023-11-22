import type { ComponentPropsWithoutRef } from "react";

import type { TypographyStyleProps } from "../styles/typography";
import { getTypographyClasses } from "../styles/typography";

export type TypographyProps = ComponentPropsWithoutRef<"span"> &
  Partial<TypographyStyleProps>;

export const Typography = ({
  color = "white",
  variant = "body",
  size = "md",
  weight = "medium",
  decoration = "none",
  cursor = "text",
  ...props
}: TypographyProps) => {
  const { rootClass } = getTypographyClasses({
    color,
    variant,
    size,
    weight,
    decoration,
    cursor,
  });
  return <span className={rootClass} {...props} />;
};
