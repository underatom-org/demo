import { useState } from "react";
import type { CheckedState } from "@radix-ui/react-checkbox";
import type { Meta, StoryObj } from "@storybook/react";

import { getKitchenSink } from "../../underatoms/_utils";
import { CheckboxAtom } from "./CheckboxAtom";
import { TextIconButton } from "../button/TextIconButton";

const checkedOptions = {
  checked: true,
  unchecked: false,
  indeterminate: "indeterminate",
};

const meta: Meta<typeof CheckboxAtom> = {
  title: "atoms/Checkbox/CheckboxAtom",
  component: CheckboxAtom,
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
        "label",
        "description",
      ],
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
          indeterminate: "Indeterminate",
        },
      },
    },
    defaultChecked: {
      control: false,
    },
  },
  args: {
    label: "Label",
    description: "Description",
    "aria-label": "checkbox",
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxAtom>;

export const Default: Story = {
  render: (props) => {
    return <CheckboxAtom {...props} />;
  },
};

/**  You can make the checkbox to have an initial state of checked using the `defaultChecked` prop. In this example, `defaultChecked` is set to `false`. */
export const DefaultChecked: Story = {
  render: (props) => {
    return <CheckboxAtom {...props} />;
  },
  args: {
    defaultChecked: true,
  },
};

/** You can make the checkbox invalid using the `isInvalid` prop.*/
export const Invalid: Story = {
  render: (props) => {
    return <CheckboxAtom {...props} />;
  },
  args: {
    isInvalid: true,
    defaultChecked: true,
  },
};

/** `Checkbox` component in a disabled state*/
export const Disabled: Story = {
  render: (props) => {
    return <CheckboxAtom {...props} />;
  },
  args: {
    defaultChecked: true,
    disabled: true,
  },
};

export const Indeterminate: Story = {
  render: (props) => {
    const [checked, setChecked] = useState<CheckedState>(true);
    return (
      <div className="flex flex-col gap-2">
        <CheckboxAtom
          {...props}
          checked={checked}
          onCheckedChange={setChecked}
        />
        <TextIconButton
          variant="secondary"
          onPress={() => {
            setChecked("indeterminate");
          }}
        >
          Set indeterminate
        </TextIconButton>
      </div>
    );
  },
  argTypes: {
    checked: {
      control: false,
    },
    defaultChecked: {
      control: false,
    },
  },
};

/** You can change the size of the checkbox using the `size` prop. */
export const Sizes: Story = {
  render: (props) => {
    return (
      <div>
        <CheckboxAtom {...props} size="sm" />
        <CheckboxAtom {...props} size="md" />
        <CheckboxAtom {...props} size="lg" />
      </div>
    );
  },
  argTypes: {
    size: {
      control: false,
    },
  },
};

export const KitchenSink: Story = {
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  render: (props) => (
    <div className="flex flex-col gap-5">
      {getKitchenSink(
        [Default, DefaultChecked, Invalid, Disabled, Indeterminate, Sizes],
        props
      )}
    </div>
  ),
};
