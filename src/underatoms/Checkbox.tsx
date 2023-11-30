import { useId } from "react";
import type { ReactNode } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { mergeProps, useFocusRing } from "react-aria";

import type { CheckboxClasses, CheckboxStyleProps } from "../styles/checkbox";
import { getCheckboxClasses } from "../styles/checkbox";
import { getFocusRingClasses } from "../styles/focus-ring";
import { getGenericContext } from "./_utils";

const {
  Provider: CheckboxInternalProvider,
  useComponentContext: useCheckboxInternalContext,
} = getGenericContext<{
  classes: CheckboxClasses;
  radixProps: Omit<RadixCheckbox.CheckboxProps, "asChild">;
  isInvalid?: boolean;
  focusRingClass: string;
  id?: string;
}>("Checkbox");

export type CheckboxFieldProps = Omit<RadixCheckbox.CheckboxProps, "asChild"> &
  Partial<CheckboxStyleProps> & {
    isInvalid?: boolean;
  };
export const CheckboxField = ({
  size = "md",
  isInvalid = false,
  ...props
}: CheckboxFieldProps) => {
  const focusRingClasses = getFocusRingClasses();
  const checkboxClasses = getCheckboxClasses({ size });
  const generatedId = useId();
  const id = props.id ?? generatedId;

  return (
    <CheckboxInternalProvider
      value={{
        classes: checkboxClasses,
        radixProps: props,
        isInvalid,
        focusRingClass: focusRingClasses.rootClass,
        id,
      }}
    >
      {props.children}
    </CheckboxInternalProvider>
  );
};

export type CheckboxFieldLabelProps = {
  /** The content of the checkbox label. */
  children: ReactNode;
};
export const CheckboxFieldLabel = ({ children }: CheckboxFieldLabelProps) => {
  const {
    classes: { labelClass },
    id,
    radixProps,
  } = useCheckboxInternalContext();

  return (
    <label
      data-disabled={radixProps.disabled}
      className={labelClass}
      htmlFor={id}
    >
      {children}
    </label>
  );
};

export type CheckboxFieldDescriptionProps = {
  /** The content of the checkbox description. */
  children: ReactNode;
};
export const CheckboxFieldDescription = ({
  children,
}: CheckboxFieldDescriptionProps) => {
  const {
    classes: { descriptionClass },
    isInvalid,
    radixProps,
  } = useCheckboxInternalContext();

  return (
    <div
      data-invalid={isInvalid}
      data-disabled={radixProps.disabled}
      className={descriptionClass}
    >
      {children}
    </div>
  );
};

export type CheckboxProps = {
  /** The content of the checkbox. */
  children: ReactNode;
};
export const Checkbox = ({ children }: CheckboxProps) => {
  const {
    classes: { rootClass },
    radixProps,
    isInvalid,
    focusRingClass,
    id,
  } = useCheckboxInternalContext();
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <RadixCheckbox.Root
      {...mergeProps(radixProps, focusProps)}
      id={id}
      className={`${rootClass} ${isFocusVisible ? focusRingClass : ""}`}
      data-invalid={isInvalid}
    >
      {children}
    </RadixCheckbox.Root>
  );
};

export type CheckboxIndicatorProps = Omit<
  RadixCheckbox.CheckboxIndicatorProps,
  "children"
> & {
  /** Icon render function */
  children: (iconClass: string) => ReactNode;
};
export const CheckboxIndicator = (props: CheckboxIndicatorProps) => {
  const {
    classes: { iconClass },
  } = useCheckboxInternalContext();
  return (
    <RadixCheckbox.Indicator {...props}>
      {props.children(iconClass)}
    </RadixCheckbox.Indicator>
  );
};
