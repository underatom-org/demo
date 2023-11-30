import type { Meta, StoryObj } from "@storybook/react";
import { Atom, Circle } from "phosphor-react";

import { getKitchenSink } from "../../underatoms/_utils";
import { TextIconButton } from "./TextIconButton";

const meta: Meta<typeof TextIconButton> = {
  title: "atoms/Button/TextIconButton",
  component: TextIconButton,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: [
        "children",
        "size",
        "variant",
        "iconLeft",
        "iconRight",
        "fullWidth",
        "attachment",
        "isDisabled",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextIconButton>;

export const Default: Story = {
  render: (props) => (
    <TextIconButton
      {...props}
      iconRight={(iconClass) => <Atom className={iconClass} />}
    >
      Button
    </TextIconButton>
  ),
};

/** You can place the icon on the left side. */
export const IconLeft: Story = {
  render: (props) => (
    <TextIconButton
      {...props}
      iconLeft={(iconClass) => <Atom className={iconClass} />}
    >
      Button
    </TextIconButton>
  ),
};

/** You can have a right icon and a left icon simulatensouly */
export const IconLeftAndIconRight: Story = {
  render: (props) => (
    <TextIconButton
      {...props}
      iconRight={(iconClass) => <Atom className={iconClass} />}
      iconLeft={(iconClass) => <Circle className={iconClass} />}
    >
      Button
    </TextIconButton>
  ),
};

/** You change the variant of the button using the `variant` prop. */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <TextIconButton
        variant="brand"
        iconRight={(iconClass) => <Atom className={iconClass} />}
      >
        Button
      </TextIconButton>
      <TextIconButton
        variant="secondary"
        iconRight={(iconClass) => <Atom className={iconClass} />}
      >
        Button
      </TextIconButton>
      <TextIconButton
        variant="danger"
        iconRight={(iconClass) => <Atom className={iconClass} />}
      >
        Button
      </TextIconButton>
      <TextIconButton
        variant="ghost"
        iconRight={(iconClass) => <Atom className={iconClass} />}
      >
        Button
      </TextIconButton>
    </div>
  ),
};

/** `Button` component in a disabled state. */
export const Disabled: Story = {
  render: (props) => (
    <TextIconButton
      {...props}
      isDisabled
      iconRight={(iconClass) => <Atom className={iconClass} />}
    >
      Button
    </TextIconButton>
  ),
};
/** You change the size of the button using the `size` prop. */

export const Sizes: Story = {
  render: (props) => (
    <div className="flex items-center justify-around">
      <TextIconButton
        {...props}
        iconRight={(iconClass) => <Atom className={iconClass} />}
        size="sm"
      >
        Button sm
      </TextIconButton>
      <TextIconButton
        {...props}
        iconRight={(iconClass) => <Atom className={iconClass} />}
        size="md"
      >
        Button md
      </TextIconButton>
      <TextIconButton
        {...props}
        iconRight={(iconClass) => <Atom className={iconClass} />}
        size="lg"
      >
        Button lg
      </TextIconButton>
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
        <TextIconButton
          {...props}
          iconRight={(iconClass) => <Atom className={iconClass} />}
          attachment="left"
        >
          Attached left
        </TextIconButton>
        <TextIconButton
          {...props}
          iconRight={(iconClass) => <Atom className={iconClass} />}
          attachment="left-right"
        >
          Attached left-right
        </TextIconButton>
        <TextIconButton
          {...props}
          iconRight={(iconClass) => <Atom className={iconClass} />}
          attachment="right"
        >
          Attached right
        </TextIconButton>
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
      {getKitchenSink([
        Default,
        IconLeft,
        IconLeftAndIconRight,
        Variants,
        Disabled,
        Sizes,
        Group,
      ])}
    </div>
  ),
};
