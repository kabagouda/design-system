import { Avatar, Box, Button, ChakraProvider, Text } from "@chakra-ui/react";
import {
  component,
  DesignSystemDefinition,
} from "@noya-design-system/protocol";
import React, { createElement } from "react";
import { createRoot } from "react-dom/client";

function NoyaButton({
  ...props
}: {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      style={props.style}
      className={props.className}
      children={props.children}
    />
  );
}

function NoyaBox({
  ...props
}: {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}) {
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
}: {
  style?: React.CSSProperties;
  className?: string;
  name?: string;
  src?: string;
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

function NoyaText({
  ...props
}: {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}) {
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
  createRoot,
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
