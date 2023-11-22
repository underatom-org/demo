import { getValueByProp } from "./_utils";

export type ButtonVariant = "brand" | "secondary" | "danger" | "ghost" | "link";

export type ButtonAttachment = "left" | "right" | "left-right" | "none";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonDotColor = "brand" | "red" | "white" | "green";

export type ButtonClasses = {
  rootClass: string;
  textClass: string;
  caretClass: string;
  iconClass: string;
  getDotClass: (color: ButtonDotColor) => string;
  loaderClasses: {
    rootClass: string;
    barContainerClass: string;
    barSvgClass: string;
    barClass: string;
    fillClass: string;
  };
};

export type ButtonStyleProps = {
  /** The variant style of the button. */
  variant: ButtonVariant;
  /** The size of the button. */
  size: ButtonSize;
  /** Whether the button should take up the full width of its container. */
  fullWidth: boolean;
  /** Dedetermines how should the button be attached to another element.
   *  Useful for button groups.
   */
  attachment: ButtonAttachment;
};

export const circularProgressViewboxSize = 32;

export const getButtonClasses = ({
  attachment,
  fullWidth,
  size,
  variant,
}: ButtonStyleProps): ButtonClasses => {
  const variants: Record<typeof variant, string> = {
    brand: `
      bg-primary-200 text-black
      ${
        attachment === "left" || attachment === "left-right"
          ? "border-r-1 border-solid border-primary-500"
          : ""
      }
      hover:bg-primary-300
      active:transition-none
      active:bg-primary-400
      active:z-1
      data-[active=true]:transition-none
      data-[active=true]:bg-primary-500
      data-[active=true]:z-1
      disabled:bg-base-800
      disabled:shadow-none
      disabled:cursor-not-allowed
      disabled:text-base-600
      disabled:border-base-700
      disabled:border-1
      disabled:border-solid
    `,

    secondary: `
      bg-base-800 border-base-700 border-1 border-solid text-white
      ${
        attachment === "right" || attachment === "left-right"
          ? "border-l-0"
          : ""
      }
      ${
        attachment === "right" || attachment === "left-right"
          ? "data-[ring=true]:border-l-0"
          : ""
      }
      hover:bg-base-700
      hover:border-base-600
      active:bg-base-800
      active:border-base-700
      data-[active=true]:bg-base-800
      data-[active=true]:border-base-700
      disabled:bg-base-700
      disabled:shadow-none
      disabled:cursor-not-allowed
      disabled:text-base-500
      disabled:border-base-600
      disabled:border-1
      disabled:border-solid
      data-[ring=true]:bg-base-800
      data-[ring=true]:border-1
      data-[ring=true]:border-solid
      data-[ring=true]:border-base-700
      data-[ring=true]:rounded
      data-[ring=true]:rounded-r
      data-[toggled=true]:bg-primary-900
      data-[toggled=true]:border-primary-400
      data-[toggled=true]:border-1
      data-[toggled=true]:border-solid
      data-[toggled=true]:shadow-none
      data-[toggled=true]:text-white
      data-[toggled=true]:hover:bg-primary-700
      data-[toggled=true]:active:bg-primary-900
      data-[toggled=true]:active:border-1
      data-[toggled=true]:active:border-solid
      data-[toggled=true]:active:border-primary-400
      data-[toggled=true]:data-[active=true]:bg-primary-900
      data-[toggled=true]:data-[active=true]:border-1
      data-[toggled=true]:data-[active=true]:border-solid
      data-[toggled=true]:data-[active=true]:border-primary-400
      data-[toggled=true]:disabled:bg-transparent
      data-[toggled=true]:disabled:border-base-600
      data-[toggled=true]:disabled:shadow-none
      data-[toggled=true]:disabled:cursor-not-allowed
      data-[toggled=true]:disabled:text-base-600
      data-[toggled=true]:data-[ring=true]:border-1
      data-[toggled=true]:data-[ring=true]:border-solid
      data-[toggled=true]:data-[ring=true]:border-primary-400
      data-[toggled=true]:data-[ring=true]:rounded
      data-[toggled=true]:data-[ring=true]:rounded-r
    `,

    danger: `
      bg-error-300 text-black
      ${
        attachment === "left" || attachment === "left-right"
          ? "border-r-1 border-solid border-base-900"
          : ""
      }
      hover:bg-error-400
      !active:bg-error-500
      data-[active=true]:!bg-error-500
      disabled:bg-base-800
      disabled:shadow-none
      disabled:cursor-not-allowed
      disabled:text-base-600
      disabled:border-base-700
      disabled:border-1
      disabled:border-solid
      data-[ring=true]:border-none
      data-[ring=true]:rounded
      data-[ring=true]:bg-error-400
    `,

    ghost: `
      bg-transparent text-white
      ${getValueByProp(attachment, {
        left: "border-1 border-solid border-base-800",
        right: "border-l-0 border-1 border-solid border-base-800",
        "left-right": "border-l-0 border-1 border-solid border-base-800",
        none: "",
      })}
      hover:bg-base-800
      active:bg-base-900
      data-[active=true]:bg-base-900
      disabled:bg-transparent
      disabled:shadow-none
      disabled:cursor-not-allowed
      disabled:text-base-600
      disabled:border-none
    `,

    link: `
      bg-transparent text-primary-300
      ${getValueByProp(attachment, {
        left: "border-1 border-solid border-primary-900",
        right: "border-l-0",
        "left-right": "border-l-0 border-1 border-solid border-primary-900",
        none: "",
      })}
      hover:text-primary-100
      active:text-primary-500
      data-[active=true]:text-primary-500
      disabled:bg-transparent
      disabled:shadow-none
      disabled:cursor-not-allowed
      disabled:text-base-600
      disabled:border-none
    `,
  };

  return {
    rootClass: `
      group box-border border-0 rounded m-0 cursor-pointer outline-none
      inline whitespace-nowrap relative transition-colors
      ${getValueByProp(attachment, {
        left: "rounded-r-none",
        right: "rounded-l-none",
        "left-right": "rounded-none",
        none: "",
      })}
      ${fullWidth ? "w-full" : "w-fit"}
      ${getValueByProp(size, {
        sm: "h-[32px]",
        md: "h-[40px]",
        lg: "h-[48px]",
      })}
      data-[ring=true]:rounded
      data-[ring=true]:border-transparent
      ${variants[variant]}
    `,

    textClass: `
      font-body text-current transition-colors
      ${variant === "link" ? "font-medium" : "font-semibold"}
      ${getValueByProp(size, {
        sm: "text-b-sm",
        md: "text-b-md",
        lg: "text-b-lg",
      })}
      ${variant === "link" ? "underline" : "no-underline"}
    `,

    caretClass: `
      group-disabled:text-base-600
      ${getValueByProp(size, {
        sm: "h-[16px] w-[16px]",
        md: "h-[20px] w-[20px]",
        lg: "h-[24px] w-[24px]",
      })}
      ${getValueByProp(variant, {
        brand: "text-black",
        secondary: "text-white",
        danger: "text-black",
        ghost: "text-white",
        link: "text-white",
      })}
    `,

    iconClass: `
      text-current transition-colors group-disabled:text-base-600
      ${getValueByProp(size, {
        sm: "h-[16px] w-[16px]",
        md: "h-[20px] w-[20px]",
        lg: "h-[24px] w-[24px]",
      })}
    `,

    getDotClass: (color) => {
      const dotColorByKey = getValueByProp(color, {
        brand: "bg-primary-300",
        green: "bg-success-400",
        red: "bg-error-300",
        white: "bg-white",
      });
      return `
        inline-block rounded-full h-2 w-2 group-disabled:bg-base-600
        ${getValueByProp(variant, {
          brand: "bg-black",
          secondary: dotColorByKey,
          danger: "bg-black",
          ghost: dotColorByKey,
          link: dotColorByKey,
        })}
      `;
    },

    loaderClasses: {
      rootClass: `
        group-disabled:text-base-600
        ${getValueByProp(size, {
          sm: "h-[16px]",
          md: "h-[20px]",
          lg: "h-[28px]",
        })}
      `,
      barContainerClass: ``,
      barSvgClass: `
        ${getValueByProp(size, {
          sm: "w-[16px] h-[16px]",
          md: "w-[20px] h-[20px]",
          lg: "w-[28px] h-[28px]",
        })}
      `,
      barClass: `stroke-transparent`,
      fillClass: `stroke-current`,
    },
  };
};
