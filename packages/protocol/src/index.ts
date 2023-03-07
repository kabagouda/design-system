import type React from "react";

export const component = {
  id: {
    button: "cdf2346b-cb21-4f23-8d93-7c4fb2e3a5a0",
    avatar: "fe7dd31d-b140-4e4c-ab7b-90fbe833936b",
    box: "9dc8f73e-64f2-43f2-8902-af334a7a17cd",
    checkbox: "fa181f85-04c2-4524-ad4f-779240cb44b0",
    input: "4db59e9d-9bc1-4146-af0a-ec8bf801485f",
    switch: "30a8ac0b-18dd-4744-bee1-77852ec4d3d8",
    text: "a1f7266f-50cc-416f-9ed2-4af4bca30257",
    image: "d91ba1e3-7e64-4966-9cc1-daa48f989178",
    heading1: "955f4cb1-7879-4331-a359-a21a031147cb",
    heading2: "b3884865-3fbe-4ed0-b577-c3f5864c4a21",
    heading3: "ab7fb087-28b6-4c9a-a925-22311efb6a19",
    heading4: "b8441949-12ba-42be-8f87-5cf222af70d0",
    heading5: "a6f2653e-1595-4dcc-b979-4e0b1340fda3",
    heading6: "467ed35a-0351-4997-ab1e-44b2c6779111",
    icon: "18682473-676a-46d3-8faf-68dc5b1c204f",
    table: "c152b560-d8af-4b16-8202-55111647d17a",
    select: "7e913e19-97c6-442f-8cc4-58c4f2e71e77",
    radio: "e2fbabf8-81f4-4d43-a56d-6067737df0ea",
    textarea: "7bcb8f7b-7645-429b-89f0-2298fef4ccb6",
    spacer: "15907162-13f5-4366-81af-19ced2192245",
  },
};

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
  provider?: React.FC<any>;
  components: Record<string, ComponentDefinition>;
  createElement: (...args: any[]) => JSX.Element;
  createRoot: (element: HTMLElement) => RenderableRoot;
};
