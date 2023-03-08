import type React from "react";

export type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
};

export type TextProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type RadioProps = {
  checked?: boolean;
  disabled?: boolean;
};

export type SwitchProps = {
  checked?: boolean;
  disabled?: boolean;
};

export type InputProps = {
  value?: string;
  placeholder?: string;
};

export type SelectProps = {
  value?: string;
  options?: string[];
};

export const componentV1 = {
  id: {
    avatar: "fe7dd31d-b140-4e4c-ab7b-90fbe833936b",
    box: "9dc8f73e-64f2-43f2-8902-af334a7a17cd",
    button: "cdf2346b-cb21-4f23-8d93-7c4fb2e3a5a0",
    checkbox: "fa181f85-04c2-4524-ad4f-779240cb44b0",
    icon: "18682473-676a-46d3-8faf-68dc5b1c204f",
    image: "d91ba1e3-7e64-4966-9cc1-daa48f989178",
    input: "4db59e9d-9bc1-4146-af0a-ec8bf801485f",
    link: "5be80b87-7bd6-4090-8947-316d54064544",
    radio: "e2fbabf8-81f4-4d43-a56d-6067737df0ea",
    select: "7e913e19-97c6-442f-8cc4-58c4f2e71e77",
    spacer: "15907162-13f5-4366-81af-19ced2192245",
    switch: "30a8ac0b-18dd-4744-bee1-77852ec4d3d8",
    table: "c152b560-d8af-4b16-8202-55111647d17a",
    text: "a1f7266f-50cc-416f-9ed2-4af4bca30257",
    textarea: "7bcb8f7b-7645-429b-89f0-2298fef4ccb6",
  },
};

export const component = componentV1;

export type ComponentDefinition = {
  Component: React.FC<any>;
  source?: { package: string; name: string };
  dependencies?: Record<string, string>;
};

export type RenderableRoot = {
  render: (node: React.ReactNode) => void;
  unmount: () => void;
};

export type DesignSystemDefinition = {
  Provider?: React.FC<any>;
  components: Record<string, ComponentDefinition>;
  createElement: (...args: any[]) => JSX.Element;
  createRoot: (element: HTMLElement) => RenderableRoot;
};
