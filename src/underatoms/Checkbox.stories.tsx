import type { Meta, StoryObj } from "@storybook/react";
import { Check } from "phosphor-react";

import {
  Checkbox,
  CheckboxField,
  CheckboxFieldDescription,
  CheckboxFieldLabel,
  CheckboxIndicator,
} from "./Checkbox";
import { getValueByProp } from "../styles/_utils";

const checkedOptions = {
  checked: true,
  unchecked: false,
};

const meta: Meta<typeof CheckboxField> = {
  title: "underatoms/Checkbox",
  component: CheckboxField,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: [
        "children",
        "size",
        "checked",
        "defaultChecked",
        "onCheckedChange",
        "disabled",
        "required",
        "name",
        "value",
        "isInvalid",
      ],
    },
    atoms: {
      Checkbox: {
        atom: Checkbox,
        include: ["children"],
        description: "The actual input element of the checkbox.",
      },
      CheckboxIndicator: {
        atom: CheckboxIndicator,
        include: ["children", "forceMount"],
        description: "CheckboxIndicator is a wrapper for the checkbox icon.",
      },
      CheckboxFieldLabel: {
        atom: CheckboxFieldLabel,
        include: ["children"],
        description: "Underatom for the label of the checkbox.",
      },
      CheckboxFieldDescription: {
        atom: CheckboxFieldDescription,
        include: ["children"],
        description: "Underatom for the description of the checkbox.",
      },
    },
  },
  argTypes: {
    checked: {
      options: Object.keys(checkedOptions),
      mapping: checkedOptions,
      control: {
        type: "radio",
        labels: {
          checked: "Checked",
          unchecked: "Unchecked",
        },
      },
    },
    defaultChecked: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxField>;

export const BasicCheckbox: Story = {
  render: (props) => {
    const { size = "md" } = props;
    return (
      <CheckboxField {...props} aria-label="checkbox">
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
                {(iconClass) => (
                  <Check
                    data-testid="check-icon"
                    className={iconClass}
                    weight="bold"
                  />
                )}
              </CheckboxIndicator>
            </Checkbox>
            <CheckboxFieldLabel>Label</CheckboxFieldLabel>
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
            <CheckboxFieldDescription>Description</CheckboxFieldDescription>
          </div>
        </div>
      </CheckboxField>
    );
  },
};
