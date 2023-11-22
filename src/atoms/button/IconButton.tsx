import type { ReactNode } from "react";

import { getValueByProp } from "../../styles/_utils";
import type { ButtonVariant } from "../../styles/button";
import type { ButtonProps } from "../../underatoms/Button";
import { Button, ButtonIcon } from "../../underatoms/Button";

export type IconButtonProps = Omit<ButtonProps, "fullWidth"> & {
  variant?: Exclude<ButtonVariant, "link">;
  /** Icon render function */
  icon: (className: string) => ReactNode;
};

export const IconButton = ({ icon, size = "md", ...rest }: IconButtonProps) => {
  return (
    <Button {...rest} size={size}>
      <div
        className={`
          flex items-center justify-center
          ${getValueByProp(size, {
            sm: "px-[8px] py-0",
            md: "px-[10px] py-0",
            lg: "px-[12px] py-0",
          })}
        `}
      >
        <ButtonIcon>{icon}</ButtonIcon>
      </div>
    </Button>
  );
};
