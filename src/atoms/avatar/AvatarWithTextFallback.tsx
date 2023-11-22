import type { AvatarImageProps, AvatarProps } from "../../underatoms/Avatar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarText,
} from "../../underatoms/Avatar";

export type AvatarWithTextFallbackProps = Omit<AvatarProps, "children"> & {
  /** The props for the avatar image. */
  imageProps?: AvatarImageProps;
  /** Text to show when the image is not available */
  text: string;
};

export const AvatarWithTextFallback = ({
  imageProps,
  text,
  ...rest
}: AvatarWithTextFallbackProps) => {
  return (
    <div className="items-center inline-flex justify-center">
      <Avatar {...rest}>
        <AvatarImage {...imageProps} />
        <AvatarFallback>
          <div className="items-center flex h-full w-full justify-center">
            <AvatarText>{text}</AvatarText>
          </div>
        </AvatarFallback>
      </Avatar>
    </div>
  );
};
