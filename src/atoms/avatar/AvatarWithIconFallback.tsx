import type { ReactNode } from "react";

import type { AvatarImageProps, AvatarProps } from "../../underatoms/Avatar";
import {
  Avatar,
  AvatarFallback,
  AvatarIcon,
  AvatarImage,
} from "../../underatoms/Avatar";

export type AvatarWithIconFallbackProps = Omit<AvatarProps, "children"> & {
  /** The props for the avatar image. */
  imageProps?: AvatarImageProps;
  /** Icon to show when image is not available. (Icon render function) */
  icon: (className: string) => ReactNode;
};

export const AvatarWithIconFallback = ({
  imageProps,
  icon,
  ...rest
}: AvatarWithIconFallbackProps) => {
  return (
    <div className="inline-flex items-center justify-center">
      <Avatar {...rest}>
        <AvatarImage {...imageProps} />
        <AvatarFallback>
          <div className="flex h-full w-full items-center justify-center">
            <AvatarIcon>{icon}</AvatarIcon>
          </div>
        </AvatarFallback>
      </Avatar>
    </div>
  );
};
