import type { Meta, StoryObj } from "@storybook/react";

import { getKitchenSink } from "../../underatoms/_utils";
import { ButtonWithDot } from "./ButtonWithDot";

const meta: Meta<typeof ButtonWithDot> = {
  title: "atoms/Button/ButtonWithDot",
  component: ButtonWithDot,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: [
        "children",
        "size",
        "variant",
        "dotColor",
        "fullWidth",
        "attachment",
        "isDisabled",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonWithDot>;

export const Default: Story = {
  render: (props) => <ButtonWithDot {...props}>Button</ButtonWithDot>,
};

/** You change the variant of the button using the `variant` prop. */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <ButtonWithDot variant="brand">Button</ButtonWithDot>
      <ButtonWithDot variant="secondary">Button</ButtonWithDot>
      <ButtonWithDot variant="danger">Button</ButtonWithDot>
      <ButtonWithDot variant="ghost">Button</ButtonWithDot>
    </div>
  ),
};

/** `Button` component in a disabled state. */
export const Disabled: Story = {
  render: (props) => (
    <ButtonWithDot {...props} isDisabled>
      Button
    </ButtonWithDot>
  ),
};

/** You change the size of the button using the `size` prop. */
export const Sizes: Story = {
  render: (props) => (
    <div className="flex items-center justify-around">
      <ButtonWithDot {...props} size="sm">
        Button sm
      </ButtonWithDot>
      <ButtonWithDot {...props} size="md">
        Button md
      </ButtonWithDot>
      <ButtonWithDot {...props} size="lg">
        Button lg
      </ButtonWithDot>
    </div>
  ),
};

/** You can group buttons using the `attachment` property. */
export const Group: Story = {
  render: (props) => (
    <div className="flex flex-col gap-3">
      <div className="flex">
        <ButtonWithDot {...props} attachment="left">
          Attached left
        </ButtonWithDot>
        <ButtonWithDot {...props} attachment="left-right">
          Attached left-right
        </ButtonWithDot>
        <ButtonWithDot {...props} attachment="right">
          Attached right
        </ButtonWithDot>
      </div>
    </div>
  ),
  args: {
    variant: "secondary",
  },
};

export const KitchenSink: Story = {
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  render: () => (
    <div className="flex flex-col gap-5">
      {getKitchenSink([Default, Variants, Disabled, Sizes, Group])}
    </div>
  ),
};
