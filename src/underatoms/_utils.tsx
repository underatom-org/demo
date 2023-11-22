/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useContext } from "react";
import type { Decorator } from "@storybook/react";

export const getGenericContext = <T,>(displayName: string) => {
  const context = createContext<T | undefined>(undefined);

  const Provider = context.Provider;
  const useComponentContext = () => {
    const ctx = useContext(context);
    if (!ctx) {
      throw new Error(
        `This component must be used within a ${displayName} component.`,
      );
    }
    return ctx;
  };

  return { Provider, useComponentContext };
};

export const getKitchenSink = (
  stories: any[],
  customArgs: any = {},
  decorator?: Decorator,
) =>
  stories.map((story, index) => {
    const Comp = story.render;
    return (
      <div key={index}>
        {decorator ? (
          decorator(
            () => <Comp {...story.args} {...customArgs} />,
            undefined as never,
          )
        ) : (
          <Comp {...story.args} {...customArgs} />
        )}
      </div>
    );
  });

// Function to emulate pausing between interactions
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
