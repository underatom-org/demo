import { Check, Minus } from "phosphor-react";

import { getValueByProp } from "../../styles/_utils";
import type { CheckboxFieldProps } from "../../underatoms/Checkbox";
import {
  Checkbox,
  CheckboxField,
  CheckboxFieldDescription,
  CheckboxFieldLabel,
  CheckboxIndicator,
} from "../../underatoms/Checkbox";

export type CheckboxAtomProps = CheckboxFieldProps & {
  /** The label of the checkbox. */
  label?: string;
  /** The description of the checkbox. */
  description?: string;
};
export function CheckboxAtom({
  label,
  description,
  size = "md",
  checked,
  ...rest
}: CheckboxAtomProps) {
  return (
    <CheckboxField {...rest} checked={checked} size={size}>
      <div className="flex flex-col">
        <div
          className={`
          flex items-center
          ${getValueByProp(size, {
            sm: "gap-2",
            md: "gap-3",
            lg: "gap-4",
          })}
        `}
        >
          <Checkbox>
            <CheckboxIndicator>
              {(iconClass) =>
                checked === "indeterminate" ? (
                  <Minus
                    data-testid="indeterminate-icon"
                    className={iconClass}
                    weight="bold"
                  />
                ) : (
                  <Check
                    data-testid="check-icon"
                    className={iconClass}
                    weight="bold"
                  />
                )
              }
            </CheckboxIndicator>
          </Checkbox>
          {label && <CheckboxFieldLabel>{label}</CheckboxFieldLabel>}
        </div>
        <div
          className={`
            p-0
            ${getValueByProp(size, {
              sm: "pl-[24px]",
              md: "pl-[32px]",
              lg: "pl-[40px]",
            })}
          `}
        >
          {description && (
            <CheckboxFieldDescription>{description}</CheckboxFieldDescription>
          )}
        </div>
      </div>
    </CheckboxField>
  );
}
