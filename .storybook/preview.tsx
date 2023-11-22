import React from "react";
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/blocks";
import type { Preview } from "@storybook/react";
import isChromatic from "chromatic/isChromatic";

import { AtomsArgTypes } from "./blocks/AtomsArgTypes";

import "./main.css";

import underatomTheme from "./underatom-theme";

const preview: Preview = {
  globalTypes: {
    colorMode: {
      name: "Color Mode",
      description: "Global color mode for components",
      defaultValue: "dark",
      toolbar: {
        icon: "circlehollow",
        items: [
          // { value: "light", icon: "circlehollow", title: "light" },
          { value: "dark", icon: "circle", title: "dark" },
          // { value: "both", title: "both" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    chromatic: { disableSnapshot: true, pauseAnimationAtEnd: true },
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            selector: "*:not([data-social] *)",
          },
        ],
      },
      backgrounds: {
        default: "dark",
        values: [
          {
            name: "dark",
            value: "#131316",
          },
        ],
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
          <AtomsArgTypes />
        </>
      ),
    },
    theme: underatomTheme,
  },
  decorators: [withUnderatomProvider],
};

export default preview;

function withUnderatomProvider(Story, context) {
  let { colorMode } = context.globals;

  if (isChromatic()) colorMode = "both";

  return (
    <>
      {/* {(colorMode === "both" || colorMode === "light") && (
        <Provider Story={Story} colorMode="light" />
      )} */}
      {(colorMode === "both" || colorMode === "dark") && (
        <Provider Story={Story} colorMode="dark" />
      )}
    </>
  );
}

function Provider({
  Story,
  colorMode,
}: {
  Story: any;
  colorMode: "dark" | "light";
}) {
  return (
    <div className="box-border h-full w-full bg-background">
      <Story />
    </div>
  );
}
