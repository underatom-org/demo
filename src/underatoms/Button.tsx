import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useRef } from "react";
import { CaretDown } from "phosphor-react";
import type { AriaButtonProps } from "react-aria";
import { mergeProps, useButton, useFocusRing } from "react-aria";

import type {
  ButtonClasses,
  ButtonDotColor,
  ButtonStyleProps,
} from "../styles/button";
import {
  circularProgressViewboxSize,
  getButtonClasses,
} from "../styles/button";
import { getFocusRingClasses } from "../styles/focus-ring";
import { getGenericContext } from "./_utils";

const {
  Provider: ButtonInternalProvider,
  useComponentContext: useButtonInternalContext,
} = getGenericContext<ButtonClasses>("Button");

export type ButtonProps = Partial<ButtonStyleProps> &
  AriaButtonProps<"button"> & {
    innerRef?: React.RefObject<HTMLButtonElement>;
  };
export const Button = ({
  variant = "brand",
  size = "md",
  fullWidth = false,
  attachment = "none",
  ...props
}: ButtonProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { buttonProps, isPressed } = useButton(props, refs);
  const buttonClasses = getButtonClasses({
    variant,
    size,
    fullWidth,
    attachment,
  });
  const focusRingClasses = getFocusRingClasses();
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      className={`${buttonClasses.rootClass} ${
        isFocusVisible ? focusRingClasses.rootClass : ""
      }`}
    >
      <ButtonInternalProvider value={buttonClasses}>
        {props.children}
      </ButtonInternalProvider>
    </button>
  );
};

export type ButtonAnchorProps = Partial<ButtonStyleProps> &
  ComponentPropsWithoutRef<"a"> & {
    innerRef?: React.RefObject<HTMLAnchorElement>;
  };
export const ButtonAnchor = ({
  variant = "brand",
  size = "md",
  fullWidth = false,
  attachment = "none",
  ...props
}: ButtonAnchorProps) => {
  const refs = useRef<HTMLAnchorElement>(null);
  const { innerRef = refs } = props;
  const buttonClasses = getButtonClasses({
    variant,
    size,
    fullWidth,
    attachment,
  });
  const focusRingClasses = getFocusRingClasses();
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <a
      {...mergeProps(props, focusProps)}
      ref={innerRef}
      data-ring={isFocusVisible}
      className={`${buttonClasses.rootClass} ${
        isFocusVisible ? focusRingClasses.rootClass : ""
      }`}
    >
      <ButtonInternalProvider value={buttonClasses}>
        {props.children}
      </ButtonInternalProvider>
    </a>
  );
};

export type ButtonTextProps = {
  /** Text content */
  children: ReactNode;
};
export const ButtonText = ({ children }: ButtonTextProps) => {
  const { textClass } = useButtonInternalContext();
  return <span className={textClass}>{children}</span>;
};

export type ButtonIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const ButtonIcon = ({ children }: ButtonIconProps) => {
  const { iconClass } = useButtonInternalContext();
  return <>{children(iconClass)}</>;
};

export type ButtonDotProps = {
  /** The color of the dot. May be overwritten by `Root` */
  color?: ButtonDotColor;
};
export const ButtonDot = ({ color = "brand" }: ButtonDotProps) => {
  const { getDotClass } = useButtonInternalContext();
  return <span className={getDotClass(color)} />;
};

export const ButtonCircularProgress = () => {
  const { loaderClasses } = useButtonInternalContext();

  return (
    <div className={loaderClasses.rootClass} data-indeterminate>
      <div className={loaderClasses.barContainerClass}>
        <svg
          className={loaderClasses.barSvgClass}
          viewBox={`0 0 ${circularProgressViewboxSize} ${circularProgressViewboxSize}`}
          fill="none"
        >
          <circle className={loaderClasses.barClass} />
          <circle className={loaderClasses.fillClass} />
        </svg>
      </div>
    </div>
  );
};

export const ButtonCaret = () => {
  const { caretClass } = useButtonInternalContext();
  return <CaretDown className={caretClass} />;
};
