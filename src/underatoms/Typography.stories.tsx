import type { Meta, StoryObj } from "@storybook/react";

import { getKitchenSink } from "./_utils";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "underatoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: ["color", "variant", "size", "weight", "decoration", "cursor"],
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-background">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: (props) => {
    return <Typography {...props}>Text</Typography>;
  },
};
/** Showcasing the different variants of `Typography` component. */
export const Variants: Story = {
  render: (props) => {
    return (
      <div className="flex flex-col">
        <Typography {...props} variant="heading">
          Heading
        </Typography>
        <Typography {...props} variant="body">
          Body
        </Typography>
      </div>
    );
  },
};
/** Showcasing the different colors of `Typography` component. */
export const Colors: Story = {
  render: (props) => {
    return (
      <div className="flex flex-col">
        <Typography {...props} color="primary">
          Primary
        </Typography>
        <Typography {...props} color="secondary">
          Secondary
        </Typography>
        <Typography {...props} color="success">
          Success
        </Typography>
        <Typography {...props} color="warning">
          Warning
        </Typography>
        <Typography {...props} color="error">
          Error
        </Typography>
        <Typography {...props} color="white">
          White
        </Typography>
      </div>
    );
  },
};
/** Showcasing the different sizes of `Typography` component. */
export const Sizes: Story = {
  render: (props) => {
    return (
      <div className="flex flex-col">
        <Typography {...props} size="xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit (Xs)
        </Typography>
        <Typography {...props} size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit (Sm)
        </Typography>
        <Typography {...props} size="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit (Md)
        </Typography>
        <Typography {...props} size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit (Lg)
        </Typography>
        <Typography {...props} size="xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit (Xl)
        </Typography>
        <Typography {...props} size="2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit (2Xl)
        </Typography>
      </div>
    );
  },
};
/** Showcasing the different weights of `Typography` component. */
export const Weights: Story = {
  render: (props) => {
    return (
      <div className="flex flex-col">
        <Typography {...props} weight="regular">
          Regular
        </Typography>
        <Typography {...props} weight="medium">
          Medium
        </Typography>
        <Typography {...props} weight="semibold">
          Semibold
        </Typography>
        <Typography {...props} weight="bold">
          Bold
        </Typography>
      </div>
    );
  },
};
/** Showcasing the different decorations of `Typography` component. */
export const Decorations: Story = {
  render: (props) => {
    return (
      <div className="flex flex-col">
        <Typography {...props} decoration="underline">
          Underline
        </Typography>
        <Typography {...props} decoration="line-through">
          Line-through
        </Typography>
      </div>
    );
  },
};
/** Showcasing the different cursors of `Typography` component. */
export const Cursor: Story = {
  render: (props) => {
    return (
      <div className="flex flex-col">
        <Typography {...props} cursor="default">
          Default
        </Typography>
        <Typography {...props} cursor="pointer">
          Pointer
        </Typography>
        <Typography {...props} cursor="help">
          Help
        </Typography>
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
      {getKitchenSink([
        Default,
        Variants,
        Colors,
        Sizes,
        Weights,
        Decorations,
        Cursor,
      ])}
    </div>
  ),
};
