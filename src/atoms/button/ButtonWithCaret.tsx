import type { ReactNode } from "react";

import { getValueByProp } from "../../styles/_utils";
import type { ButtonVariant } from "../../styles/button";
import type { ButtonProps } from "../../underatoms/Button";
import {
  Button,
  ButtonCaret,
  ButtonIcon,
  ButtonText,
} from "../../underatoms/Button";

export type ButtonWithCaretProps = ButtonProps & {
  icon?: (className: string) => ReactNode;
  variant?: Exclude<ButtonVariant, "link">;
  /** Text content. */
  children: ReactNode;
};

export const ButtonWithCaret = ({
  children,
  size = "md",
  icon,
  fullWidth,
  ...rest
}: ButtonWithCaretProps) => {
  return (
    <Button {...rest} size={size} fullWidth={fullWidth}>
      <div
        className={`
          flex items-center gap-4
          ${fullWidth ? "justify-between" : "justify-center"}
          ${getValueByProp(size, {
            sm: "px-[14px] py-0",
            md: "px-[18px] py-0",
            lg: "px-[28px] py-0",
          })}
        `}
      >
        <div className="flex items-center gap-2">
          {icon && <ButtonIcon>{icon}</ButtonIcon>}
          <ButtonText>{children}</ButtonText>
        </div>
        <ButtonCaret />
      </div>
    </Button>
  );
};
