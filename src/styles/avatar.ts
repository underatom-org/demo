import { getValueByProp } from "./_utils";

export type AvatarSize = "sm" | "md" | "lg";

export type AvatarStyleProps = {
  /** The size of the avatar */
  size: AvatarSize;
  /** Set this to true if the avatar is part of a group.  */
  isPartOfGroup: boolean;
};

export type AvatarClasses = {
  rootClass: string;
  fallbackClass: string;
  textClass: string;
  iconClass: string;
  imageClass: string;
};

export const getAvatarClasses = ({
  size,
  isPartOfGroup,
}: AvatarStyleProps): AvatarClasses => {
  return {
    rootClass: `
      inline rounded-full overflow-hidden bg-base-700
      ${getValueByProp(size, {
        sm: "h-[24px] w-[24px]",
        md: "h-[32px] w-[32px]",
        lg: "h-[48px] w-[48px]",
      })}
      ${isPartOfGroup ? `shadow-group-border` : ""}
    `,

    fallbackClass:
      "block w-full h-full box-border border-1 border-solid border-base-600 rounded-full",

    textClass: `
      text-white font-body font-medium
      ${getValueByProp(size, {
        sm: "text-b-xs",
        md: "text-b-sm",
        lg: "text-b-lg",
      })}
    `,

    iconClass: `
      text-white
      ${getValueByProp(size, {
        sm: "h-[16px] w-[16px]",
        md: "h-[16px] w-[16px]",
        lg: "h-[28px] w-[28px]",
      })}
    `,

    imageClass:
      "w-full h-full object-cover block align-middle overflow-clip [overflow-clip-margin=content-box]",
  };
};
