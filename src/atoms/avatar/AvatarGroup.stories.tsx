import type { Meta, StoryObj } from "@storybook/react";

import greyAvatar from "../../../.storybook/static/grey-avatar.png";
import orangeAvatar from "../../../.storybook/static/orange-avatar.png";
import redAvatar from "../../../.storybook/static/red-avatar.png";
import { getKitchenSink } from "../../underatoms/_utils";
import { AvatarGroup } from "./AvatarGroup";
import { AvatarWithTextFallback } from "./AvatarWithTextFallback";

const meta: Meta<typeof AvatarGroup> = {
  title: "atoms/Avatar/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  render: (props) => {
    return (
      <AvatarGroup {...props}>
        <AvatarWithTextFallback
          imageProps={{
            alt: "Avatar image",
            src: orangeAvatar,
          }}
          isPartOfGroup
          size={props.size}
          text="EM"
        />
        <AvatarWithTextFallback
          imageProps={{
            alt: "Avatar image",
            src: redAvatar,
          }}
          isPartOfGroup
          size={props.size}
          text="EM"
        />
        <AvatarWithTextFallback
          imageProps={{
            alt: "Avatar image",
            src: greyAvatar,
          }}
          isPartOfGroup
          size={props.size}
          text="EM"
        />
      </AvatarGroup>
    );
  },
  args: {
    remainingAvatars: 5,
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-7">
        <AvatarGroup remainingAvatars={5} size="sm">
          <AvatarWithTextFallback
            imageProps={{
              alt: "Avatar image",
              src: orangeAvatar,
            }}
            size="sm"
            isPartOfGroup
            text="EM"
          />
          <AvatarWithTextFallback
            imageProps={{
              alt: "Avatar image",
              src: redAvatar,
            }}
            size="sm"
            isPartOfGroup
            text="EM"
          />
          <AvatarWithTextFallback
            imageProps={{
              alt: "Avatar image",
              src: greyAvatar,
            }}
            size="sm"
            isPartOfGroup
            text="EM"
          />
        </AvatarGroup>
        <AvatarGroup remainingAvatars={5} size="md">
          <AvatarWithTextFallback
            imageProps={{
              alt: "Avatar image",
              src: orangeAvatar,
            }}
            size="md"
            isPartOfGroup
            text="EM"
          />
          <AvatarWithTextFallback
            imageProps={{
              alt: "Avatar image",
              src: redAvatar,
            }}
            size="md"
            isPartOfGroup
            text="EM"
          />
          <AvatarWithTextFallback
            imageProps={{
              alt: "Avatar image",
              src: greyAvatar,
            }}
            size="md"
            isPartOfGroup
            text="EM"
          />
        </AvatarGroup>
        <AvatarGroup remainingAvatars={5} size="lg">
          <AvatarWithTextFallback
            imageProps={{
              alt: "Avatar image",
              src: orangeAvatar,
            }}
            size="lg"
            isPartOfGroup
            text="EM"
          />
          <AvatarWithTextFallback
            imageProps={{
              alt: "Avatar image",
              src: redAvatar,
            }}
            size="lg"
            isPartOfGroup
            text="EM"
          />
          <AvatarWithTextFallback
            imageProps={{
              alt: "Avatar image",
              src: greyAvatar,
            }}
            size="lg"
            isPartOfGroup
            text="EM"
          />
        </AvatarGroup>
      </div>
    );
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
