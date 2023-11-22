import type { ReactNode } from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";

import type { AvatarClasses, AvatarStyleProps } from "../styles/avatar";
import { getAvatarClasses } from "../styles/avatar";
import { getGenericContext } from "./_utils";

const {
  Provider: AvatarInternalProvider,
  useComponentContext: useAvatarInternalContext,
} = getGenericContext<AvatarClasses>("Avatar");

export type AvatarProps = Partial<AvatarStyleProps> &
  RadixAvatar.AvatarProps & {
    /** Avatar content */
    children: RadixAvatar.AvatarProps["children"];
  };

export const Avatar = ({
  size = "md",
  isPartOfGroup = false,
  ...props
}: AvatarProps) => {
  const avatarClasses = getAvatarClasses({ size, isPartOfGroup });

  return (
    <RadixAvatar.Root {...props} className={avatarClasses.rootClass}>
      <AvatarInternalProvider value={avatarClasses}>
        {props.children}
      </AvatarInternalProvider>
    </RadixAvatar.Root>
  );
};

export type AvatarFallbackProps = RadixAvatar.AvatarFallbackProps;
export const AvatarFallback = (props: AvatarFallbackProps) => {
  const { fallbackClass } = useAvatarInternalContext();
  return <RadixAvatar.Fallback className={fallbackClass} {...props} />;
};

export type AvatarTextProps = {
  /** Text content */
  children: ReactNode;
};
export const AvatarText = ({ children }: AvatarTextProps) => {
  const { textClass } = useAvatarInternalContext();
  return <span className={textClass}>{children}</span>;
};

export type AvatarIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const AvatarIcon = ({ children }: AvatarIconProps) => {
  const { iconClass } = useAvatarInternalContext();
  return <>{children(iconClass)}</>;
};

export type AvatarImageProps = RadixAvatar.AvatarImageProps;
export const AvatarImage = (props: AvatarImageProps) => {
  const { imageClass } = useAvatarInternalContext();
  return <RadixAvatar.Image className={imageClass} {...props} />;
};
