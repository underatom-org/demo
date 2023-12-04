import type { Meta, StoryObj } from "@storybook/react";
import { User } from "phosphor-react";

import { getKitchenSink } from "../../underatoms/_utils";
import { AvatarWithIconFallback } from "./AvatarWithIconFallback";
import redAvatar from "../../../.storybook/static/red-avatar.png";

const imageOptions = {
  "no-image": undefined,
  image: {
    alt: "Avatar image",
    src: redAvatar,
  },
};

const meta: Meta<typeof AvatarWithIconFallback> = {
  title: "atoms/Avatar/AvatarWithIconFallback",
  component: AvatarWithIconFallback,
  parameters: {
    controls: {
      include: ["children", "size", "icon", "imageProps"],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    imageProps: {
      options: Object.keys(imageOptions),
      mapping: imageOptions,
      control: {
        type: "radio",
        labels: { "no-image": "No image", image: "Image" },
      },
    },
    icon: {
      control: false,
    },
  },
  args: {
    imageProps: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof AvatarWithIconFallback>;

export const Default: Story = {
  render: (props) => {
    return (
      <AvatarWithIconFallback
        {...props}
        icon={(iconClass) => <User className={iconClass} />}
      />
    );
  },
  args: {
    size: "md",
    imageProps: undefined,
  },
};

export const Sizes: Story = {
  render: (props) => {
    return (
      <div className="flex gap-2">
        <AvatarWithIconFallback
          {...props}
          icon={(iconClass) => <User className={iconClass} />}
          size="sm"
        />
        <AvatarWithIconFallback
          {...props}
          icon={(iconClass) => <User className={iconClass} />}
          size="md"
        />
        <AvatarWithIconFallback
          {...props}
          icon={(iconClass) => <User className={iconClass} />}
          size="lg"
        />
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
  render: () => (
    <div className="flex flex-col gap-5">
      {getKitchenSink([Default, Sizes])}
    </div>
  ),
  argTypes: {
    imageProps: {
      control: false,
    },
  },
};
