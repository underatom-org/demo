import type { ReactNode } from "react";

import { getValueByProp } from "../../styles/_utils";
import type { ButtonAnchorProps } from "../../underatoms/Button";
import { ButtonAnchor, ButtonIcon, ButtonText } from "../../underatoms/Button";

export type AnchorButtonProps = ButtonAnchorProps & {
  /** The right icon render function */
  iconRight?: (className: string) => ReactNode;
  /** The left icon render function */
  iconLeft?: (className: string) => ReactNode;
  /** Text content */
  children: ReactNode;
};

export const AnchorButton = ({
  iconRight,
  iconLeft,
  children,
  size = "md",
  ...rest
}: AnchorButtonProps) => {
  return (
    <ButtonAnchor {...rest} size={size}>
      <div
        className={`
          flex h-full items-center justify-center
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
    </ButtonAnchor>
  );
};
