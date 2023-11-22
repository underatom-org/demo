import type { ReactNode } from "react";

import { getValueByProp } from "../../styles/_utils";
import type { ButtonProps } from "../../underatoms/Button";
import { Button, ButtonIcon, ButtonText } from "../../underatoms/Button";

export type TextIconButtonProps = ButtonProps & {
  /** The right icon render function */
  iconRight?: (className: string) => ReactNode;
  /** The left icon render function */
  iconLeft?: (className: string) => ReactNode;
  /** Text content */
  children: ReactNode;
};

export const TextIconButton = ({
  iconRight,
  iconLeft,
  children,
  size = "md",
  ...rest
}: TextIconButtonProps) => {
  return (
    <Button {...rest} size={size}>
      <div
        className={`
          flex items-center justify-center
          ${getValueByProp(size, {
            sm: "px-[14px] py-0",
            md: "px-[18px] py-0",
            lg: "px-[28px] py-0",
          })}
          ${getValueByProp(size, {
            sm: "gap-1",
            md: "gap-2",
            lg: "gap-2",
          })}
        `}
      >
        {iconLeft && <ButtonIcon>{iconLeft}</ButtonIcon>}
        <ButtonText>{children}</ButtonText>
        {iconRight && <ButtonIcon>{iconRight}</ButtonIcon>}
      </div>
    </Button>
  );
};
