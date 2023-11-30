import type { Meta, StoryObj } from "@storybook/react";
import { Airplane, Circle, Heart } from "phosphor-react";

import { getKitchenSink } from "../../underatoms/_utils";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "atoms/Button/IconButton",
  component: IconButton,
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

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: (props) => (
    <IconButton
      {...props}
      icon={(iconClass) => (
        <Heart className={iconClass} aria-label="Heart Icon Button" />
      )}
    />
  ),
};

/** You change the variant of the button using the `variant` prop. */
export const Variants: Story = {
  render: (props) => (
    <div className="flex flex-col gap-3">
      <IconButton
        {...props}
        variant="brand"
        icon={(iconClass) => (
          <Heart className={iconClass} aria-label="Heart Icon Button" />
        )}
      />
      <IconButton
        {...props}
        variant="secondary"
        icon={(iconClass) => (
          <Heart className={iconClass} aria-label="Heart Icon Button" />
        )}
      />
      <IconButton
        {...props}
        variant="danger"
        icon={(iconClass) => (
          <Heart className={iconClass} aria-label="Heart Icon Button" />
        )}
      />
      <IconButton
        {...props}
        variant="ghost"
        icon={(iconClass) => (
          <Heart className={iconClass} aria-label="Heart Icon Button" />
        )}
      />
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
    <IconButton
      {...props}
      isDisabled
      icon={(iconClass) => (
        <Heart className={iconClass} aria-label="Heart Icon Button" />
      )}
    />
  ),
};

/** You change the size of the button using the `size` prop. */
export const Sizes: Story = {
  render: (props) => (
    <div className="flex items-center justify-around">
      <IconButton
        {...props}
        size="sm"
        icon={(iconClass) => <Heart className={iconClass} />}
        aria-label="Heart Icon Button"
      />
      <IconButton
        {...props}
        size="md"
        icon={(iconClass) => <Heart className={iconClass} />}
        aria-label="Heart Icon Button"
      />
      <IconButton
        {...props}
        size="lg"
        icon={(iconClass) => <Heart className={iconClass} />}
        aria-label="Heart Icon Button"
      />
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
        <IconButton
          {...props}
          icon={(iconClass) => <Heart className={iconClass} />}
          attachment="left"
          aria-label="Heart Icon Button"
        />
        <IconButton
          {...props}
          icon={(iconClass) => <Airplane className={iconClass} />}
          attachment="left-right"
          aria-label="Heart Icon Button"
        />
        <IconButton
          {...props}
          icon={(iconClass) => <Circle className={iconClass} />}
          attachment="right"
          aria-label="Heart Icon Button"
        />
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
