import type { Meta, StoryObj } from "@storybook/react";
import { Atom } from "phosphor-react";

import { getKitchenSink } from "../../underatoms/_utils";
import { ButtonWithCaret } from "./ButtonWithCaret";

const meta: Meta<typeof ButtonWithCaret> = {
  title: "atoms/Button/ButtonWithCaret",
  component: ButtonWithCaret,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: [
        "children",
        "size",
        "variant",
        "icon",
        "fullWidth",
        "attachment",
        "isDisabled",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonWithCaret>;

export const Default: Story = {
  render: (props) => (
    <ButtonWithCaret
      icon={(iconClass) => <Atom className={iconClass} />}
      {...props}
    >
      Button
    </ButtonWithCaret>
  ),
};

/** You change the variant of the button using the `variant` prop. */
export const Variants: Story = {
  render: (props) => (
    <div className="flex flex-col gap-3">
      <ButtonWithCaret
        icon={(iconClass) => <Atom className={iconClass} />}
        {...props}
        variant="brand"
      >
        Button
      </ButtonWithCaret>
      <ButtonWithCaret
        icon={(iconClass) => <Atom className={iconClass} />}
        {...props}
        variant="secondary"
      >
        Button
      </ButtonWithCaret>
      <ButtonWithCaret
        icon={(iconClass) => <Atom className={iconClass} />}
        {...props}
        variant="danger"
      >
        Button
      </ButtonWithCaret>
      <ButtonWithCaret
        icon={(iconClass) => <Atom className={iconClass} />}
        {...props}
        variant="ghost"
      >
        Button
      </ButtonWithCaret>
    </div>
  ),
  argTypes: {
    variant: {
      control: false,
    },
  },
};

/** `Button` component in a disabled state. */
export const Disabled: Story = {
  render: (props) => (
    <ButtonWithCaret
      icon={(iconClass) => <Atom className={iconClass} />}
      {...props}
      isDisabled
    >
      Button
    </ButtonWithCaret>
  ),
};

/** You change the size of the button using the `size` prop. */
export const Sizes: Story = {
  render: (props) => (
    <div className="flex items-center justify-around">
      <ButtonWithCaret
        icon={(iconClass) => <Atom className={iconClass} />}
        {...props}
        size="sm"
      >
        Button sm
      </ButtonWithCaret>
      <ButtonWithCaret
        icon={(iconClass) => <Atom className={iconClass} />}
        {...props}
        size="md"
      >
        Button md
      </ButtonWithCaret>
      <ButtonWithCaret
        icon={(iconClass) => <Atom className={iconClass} />}
        {...props}
        size="lg"
      >
        Button lg
      </ButtonWithCaret>
    </div>
  ),
  argTypes: {
    size: {
      control: false,
    },
  },
};

/** You can group buttons using the `attachment` property. */
export const Group: Story = {
  render: (props) => (
    <div className="flex flex-col gap-3">
      <div className="flex">
        <ButtonWithCaret
          icon={(iconClass) => <Atom className={iconClass} />}
          {...props}
          attachment="left"
        >
          Attached left
        </ButtonWithCaret>
        <ButtonWithCaret
          icon={(iconClass) => <Atom className={iconClass} />}
          {...props}
          attachment="left-right"
        >
          Attached left-right
        </ButtonWithCaret>
        <ButtonWithCaret
          icon={(iconClass) => <Atom className={iconClass} />}
          {...props}
          attachment="right"
        >
          Attached right
        </ButtonWithCaret>
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
