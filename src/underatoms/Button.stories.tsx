import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  ButtonCaret,
  ButtonCircularProgress,
  ButtonDot,
  ButtonIcon,
  ButtonText,
} from "./Button";

const meta: Meta<typeof Button> = {
  title: "underatoms/Button",
  component: Button,
  parameters: {
    atoms: {
      ButtonText: {
        atom: ButtonText,
        description: "The text content of the button.",
      },
      ButtonIcon: {
        atom: ButtonIcon,
        description:
          "An icon displayed within the button, providing visual context or representation.",
      },
      ButtonDot: {
        atom: ButtonDot,
        description:
          "A small dot symbol that can be used as a visual indicator or decoration within the button.",
      },
      ButtonCircularProgress: {
        atom: ButtonCircularProgress,
        description: "A circular progress indicator inside the button",
      },
      ButtonCaret: {
        atom: ButtonCaret,
        description:
          "A caret icon, indicating that clicking the button will reveal additional content.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// Stories

export const Default: Story = {
  render: (props) => (
    <Button {...props}>
      <div className="flex items-center justify-center px-[14px] py-0">
        <ButtonText> Button </ButtonText>
      </div>
    </Button>
  ),
};
