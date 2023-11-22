import type { ReactNode } from "react";

import { getValueByProp } from "../../styles/_utils";
import type { ButtonVariant } from "../../styles/button";
import type { ButtonAnchorProps } from "../../underatoms/Button";
import { ButtonAnchor, ButtonIcon } from "../../underatoms/Button";

export type IconAnchorButtonProps = Omit<
  ButtonAnchorProps,
  "fullWidth" | "children"
> & {
  variant?: Exclude<ButtonVariant, "link">;
  /** Icon render function */
  children: (className: string) => ReactNode;
};

export const IconAnchorButton = ({
  children,
  size = "md",
  ...rest
}: IconAnchorButtonProps) => {
  return (
    <ButtonAnchor {...rest} size={size}>
      <div
        className={`
          flex h-full items-center justify-center
          ${getValueByProp(size, {
            sm: "px-[8px] py-0",
            md: "px-[10px] py-0",
            lg: "px-[12px] py-0",
          })}
        `}
      >
        <ButtonIcon>{children}</ButtonIcon>
      </div>
    </ButtonAnchor>
  );
};
