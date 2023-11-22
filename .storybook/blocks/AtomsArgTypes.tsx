import React, { ReactNode } from "react";
import { Description, Heading, PureArgsTable, useOf } from "@storybook/blocks";
import type { ArgTypesExtractor } from "@storybook/docs-tools";

export type AtomsParameter = Record<
  string,
  {
    atom: ReactNode;
    include?: string[];
    description?: string;
  }
>;

export const AtomsArgTypes = () => {
  const resolved = useOf("story");
  if (resolved.type !== "story") {
    console.warn("No story found");
    return null;
  }
  const {
    story: { parameters },
  } = resolved;
  const { extractArgTypes }: { extractArgTypes: ArgTypesExtractor } =
    parameters.docs || {};
  const { atoms }: { atoms: AtomsParameter } = (parameters as any) || {};

  if (!extractArgTypes || !atoms) {
    console.warn("No extractArgTypes or atoms found");
    return null;
  }
  const atomArgTypes = Object.entries(atoms).map(([name, component]) => ({
    name,
    argTypes: component.include
      ? pick(extractArgTypes(component.atom) ?? {}, component.include)
      : extractArgTypes(component.atom),
    description: component.description,
  }));

  return (
    <>
      <Heading>Underatoms</Heading>
      {atomArgTypes.map(
        ({ name, argTypes, description }) =>
          argTypes && (
            <div key={name}>
              <h3 className="sbdocs-subtitle">{name}</h3>
              <Description>{description}</Description>
              {Object.keys(argTypes).length > 0 && <PureArgsTable rows={argTypes} />}
            </div>
          )
      )}
    </>
  );
};

const pick = <T extends {}, K extends keyof T>(obj: T, keys: K[]) =>
  Object.fromEntries(
    keys.filter((key) => key in obj).map((key) => [key, obj[key]])
  ) as Pick<T, K>;
