import type { ReactNode } from "react";

import { getValueByProp } from "../../styles/_utils";
import type { AvatarSize } from "../../styles/avatar";
import { Avatar, AvatarFallback, AvatarText } from "../../underatoms/Avatar";

export type AvatarGroupProps = {
  /** Should contain avatar components. */
  children: ReactNode;
  /** Number of avatars that are not shown. */
  remainingAvatars?: number;
  /** Ensure that the size of the `AvatarGroup` corresponds to the size of the individual avatars it contains. */
  size?: AvatarSize;
};

export const AvatarGroup = ({
  children,
  remainingAvatars,
  size = "md",
}: AvatarGroupProps) => {
  return (
    <div
      className={`
        inline-flex items-center
        ${getValueByProp(size, {
          sm: "mx-[-6px]",
          md: "mx-[-6px]",
          lg: "mx-[-10px]",
        })}
    `}
    >
      {children}
      {remainingAvatars !== undefined && (
        <Avatar size={size} isPartOfGroup>
          <AvatarFallback>
            <div className="flex h-full w-full items-center justify-center">
              <AvatarText>+{remainingAvatars}</AvatarText>
            </div>
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
