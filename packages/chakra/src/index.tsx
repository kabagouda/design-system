import { Avatar, Box, Button, ChakraProvider, Text } from "@chakra-ui/react";
import {
  component,
  DesignSystemDefinition,
  RenderableRoot,
} from "@noya-design-system/protocol";
import React, { createElement } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";

type BaseProps = {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
};

function NoyaButton({ ...props }: BaseProps) {
  return (
    <Button
      style={props.style}
      className={props.className}
      children={props.children}
    />
  );
}

function NoyaBox({ ...props }: BaseProps) {
  return (
    <Box
      style={props.style}
      className={props.className}
      children={props.children}
    />
  );
}

function NoyaAvatar({
  ...props
}: BaseProps & {
  src?: string;
  name?: string;
}) {
  return (
    <Avatar
      style={props.style}
      className={props.className}
      children={props.name}
      src={props.src}
    />
  );
}

function NoyaText({ ...props }: BaseProps) {
  return (
    <Text
      style={props.style}
      className={props.className}
      children={props.children}
    />
  );
}

function NoyaImage({
  ...props
}: {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  src?: string;
}) {
  return (
    <img
      style={props.style}
      className={props.className}
      children={props.children}
      src={props.src}
    />
  );
}

const dependencies = {
  "@chakra-ui/icons": "^2.0.17",
  "@chakra-ui/react": "^2.5.1",
  "@chakra-ui/system": "^2.5.1",
  "@emotion/react": "^11.10.6",
  "@emotion/styled": "^11.10.6",
  "framer-motion": "^10.2.3",
};

export const DesignSystem: DesignSystemDefinition = {
  Provider: ChakraProvider,
  createElement,
  createRoot: (element: HTMLElement) => {
    const root = createRoot(element);

    const renderableRoot: RenderableRoot = {
      render: (node) => {
        flushSync(() => {
          root.render(node);
        });
      },
      unmount: () => {
        root.unmount();
      },
    };

    return renderableRoot;
  },
  components: {
    [component.id.button]: {
      Component: NoyaButton,
      source: { package: "@chakra-ui/react", name: "Button" },
      dependencies,
    },
    [component.id.avatar]: {
      Component: NoyaAvatar,
      source: { package: "@chakra-ui/react", name: "Avatar" },
      dependencies,
    },
    [component.id.box]: {
      Component: NoyaBox,
      source: { package: "@chakra-ui/react", name: "Box" },
      dependencies,
    },
    [component.id.text]: {
      Component: NoyaText,
      source: { package: "@chakra-ui/react", name: "Text" },
      dependencies,
    },
    [component.id.image]: {
      Component: NoyaImage,
    },
  },
};
