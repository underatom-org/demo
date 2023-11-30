import { getValueByProp } from "./_utils";

export type CheckboxClasses = {
  rootClass: string;
  iconClass: string;
  labelClass: string;
  descriptionClass: string;
};

export type CheckboxSize = "sm" | "md" | "lg";

export type CheckboxStyleProps = {
  /** The size of the checkbox */
  size: CheckboxSize;
};

export const getCheckboxClasses = ({
  size,
}: CheckboxStyleProps): CheckboxClasses => {
  return {
    rootClass: `
      group all inline-flex items-center justify-center pointer box-border rounded
      outline-none outline-0 outline-offset-0 bg-base-800 border-1 border-solid border-base-600
      ${getValueByProp(size, {
        sm: "h-[16px] w-[16px]",
        md: "h-[20px] w-[20px]",
        lg: "h-[24px] w-[24px]",
      })}
      hover:outline-4
      hover:outline-base-700
      hover:border-base-400
      data-[state=checked]:bg-primary-800
      data-[state=checked]:border-primary-300
      data-[state=checked]:active:bg-primary-900
      data-[state=checked]:active:border-primary-500
      data-[state=checked]:active:outline-none
      data-[state=checked]:hover:outline-4
      data-[state=checked]:hover:outline-primary-700
      data-[state=indeterminate]:bg-primary-800
      data-[state=indeterminate]:border-primary-300
      data-[state=indeterminate]:active:bg-primary-900
      data-[state=indeterminate]:active:border-primary-500
      data-[state=indeterminate]:active:outline-none
      data-[state=indeterminate]:hover:outline-4
      data-[state=indeterminate]:hover:outline-primary-700
      data-[invalid=true]:bg-error-900
      data-[invalid=true]:border-error-400
      data-[invalid=true]:color-error-300
      data-[invalid=true]:active:bg-error-900
      data-[invalid=true]:active:outline-none
      data-[invalid=true]:hover:outline-error-700
      data-[invalid=true]:data-[state=checked]:bg-error-900
      data-[invalid=true]:data-[state=checked]:border-error-400
      data-[invalid=true]:data-[state=checked]:active:bg-error-900
      data-[invalid=true]:data-[state=checked]:active:outline-none
      data-[invalid=true]:data-[state=checked]:hover:outline-error-700
      data-[invalid=true]:data-[state=checked]:active:border-error-400
      data-[invalid=true]:data-[state=indeterminate]:bg-error-900
      data-[invalid=true]:data-[state=indeterminate]:border-error-400
      data-[invalid=true]:data-[state=indeterminate]:active:bg-error-900
      data-[invalid=true]:data-[state=indeterminate]:active:outline-none
      data-[invalid=true]:data-[state=indeterminate]:hover:outline-error-700
      data-[invalid=true]:data-[state=indeterminate]:active:border-error-400
      disabled:cursor-not-allowed
      disabled:bg-base-800
      disabled:border-base-700
      disabled:!outline-none
      disabled:data-[state=checked]:bg-primary-900
      disabled:data-[state=checked]:border-primary-800
      disabled:data-[state=indeterminate]:bg-primary-900
      disabled:data-[state=indeterminate]:border-primary-800
      data-[invalid=true]:disabled:cursor-not-allowed
      data-[invalid=true]:disabled:bg-base-800
      data-[invalid=true]:disabled:outline-none
      data-[invalid=true]:disabled:border-base-700
      data-[invalid=true]:disabled:data-[state=checked]:bg-primary-900
      data-[invalid=true]:disabled:data-[state=checked]:border-primary-800
      data-[invalid=true]:disabled:data-[state=indeterminate]:bg-primary-900
      data-[invalid=true]:disabled:data-[state=indeterminate]:border-primary-800
      data-[invalid=true]:disabled:hover:outline-none
    `,

    iconClass: `
      block
      ${getValueByProp(size, {
        sm: "h-[12px] w-[12px]",
        md: "h-[16px] w-[16px]",
        lg: "h-[18px] w-[18px]",
      })}
      text-primary-300
      group-data-[invalid=true]:text-error-300
      group-active:text-primary-500
      group-disabled:!text-primary-800
    `,

    labelClass: `
      font-semibold
      text-white
      ${getValueByProp(size, {
        sm: "text-b-sm",
        md: "text-b-md",
        lg: "text-b-lg",
      })}
      data-[disabled=true]:text-base-500
    `,
    descriptionClass: `
      font-regular
      text-base-200
      ${getValueByProp(size, {
        sm: "text-b-sm",
        md: "text-b-md",
        lg: "text-b-lg",
      })}
      data-[invalid=true]:text-error-300
      data-[disabled=true]:text-base-500
    `,
  };
};
