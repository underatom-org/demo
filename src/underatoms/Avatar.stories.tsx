import type { Meta, StoryObj } from "@storybook/react";

import orangeAvatar from "../../.storybook/static/orange-avatar.png";
import {
  Avatar,
  AvatarFallback,
  AvatarIcon,
  AvatarImage,
  AvatarText,
} from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "underatoms/Avatar",
  component: Avatar,
  parameters: {
    controls: {
      include: ["children", "size", "isPartOfGroup"],
    },
    atoms: {
      AvatarText: {
        atom: AvatarText,
        description: "The text of the avatar",
        include: ["children"],
      },
      AvatarIcon: {
        atom: AvatarIcon,
        description: "The icon of the avatar",
        include: ["children"],
      },
      AvatarImg: {
        atom: AvatarImage,
        description: "The image of the avatar",
        include: ["onLoadingStatusChange"],
      },
      AvatarFallback: {
        atom: AvatarFallback,
        description: "An element that renders when the image hasn't loaded.",
        include: ["delayMs", "children"],
      },
    },
    include: ["children"],
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (props) => {
    return (
      <div className="inline-flex items-center justify-center">
        <Avatar {...props}>
          <AvatarImage alt="Avatar Image" src={orangeAvatar} />
          <AvatarFallback>
            <div className="flex h-full w-full items-center justify-center">
              <AvatarText>RJ</AvatarText>
            </div>
          </AvatarFallback>
        </Avatar>
      </div>
    );
  },
  args: {
    size: "md",
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};
