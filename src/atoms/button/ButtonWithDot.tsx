import type { ReactNode } from "react";

import { getValueByProp } from "../../styles/_utils";
import type { ButtonDotColor, ButtonVariant } from "../../styles/button";
import type { ButtonProps } from "../../underatoms/Button";
import { Button, ButtonDot, ButtonText } from "../../underatoms/Button";

export type ButtonWithDotProps = ButtonProps & {
  variant?: Exclude<ButtonVariant, "link">;
  /** Text content */
  children: ReactNode;
  dotColor?: ButtonDotColor;
};

export const ButtonWithDot = ({
  children,
  size = "md",
  dotColor,
  ...rest
}: ButtonWithDotProps) => {
  return (
    <Button {...rest} size={size}>
      <div
        className={`
          flex items-center justify-center gap-3
          ${getValueByProp(size, {
            sm: "px-[14px] py-0",
            md: "px-[18px] py-0",
            lg: "px-[28px] py-0",
          })}
        `}
      >
        <ButtonDot color={dotColor} />
        <ButtonText>{children}</ButtonText>
      </div>
    </Button>
  );
};
