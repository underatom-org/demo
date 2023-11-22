import type { Meta, StoryObj } from "@storybook/react";

import { getKitchenSink } from "../../underatoms/_utils";
import { AvatarWithTextFallback } from "./AvatarWithTextFallback";
import redAvatar from "../../../.storybook/static/red-avatar.png";

const imageOptions = {
  "no-image": undefined,
  image: {
    alt: "Avatar image",
    src: redAvatar,
  },
};

const meta: Meta<typeof AvatarWithTextFallback> = {
  title: "atoms/Avatar/AvatarWithTextFallback",
  component: AvatarWithTextFallback,
  parameters: {
    controls: {
      include: ["size", "text", "imageProps"],
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
  },
  args: {
    imageProps: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof AvatarWithTextFallback>;

export const Default: Story = {
  render: (props) => {
    return <AvatarWithTextFallback {...props} />;
  },
  args: {
    size: "md",
    imageProps: undefined,
    text: "RJ",
  },
};

export const Sizes: Story = {
  render: (props) => {
    return (
      <div className="flex gap-2">
        <AvatarWithTextFallback
          imageProps={props.imageProps}
          text="RJ"
          size="sm"
        />
        <AvatarWithTextFallback
          imageProps={props.imageProps}
          text="RJ"
          size="md"
        />
        <AvatarWithTextFallback
          imageProps={props.imageProps}
          text="RJ"
          size="lg"
        />
      </div>
    );
  },
  argTypes: {
    size: {
      control: false,
    },
    text: {
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
};
