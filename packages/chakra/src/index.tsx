import { Avatar, Box, Button, Text } from "@chakra-ui/react";
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
  "@mui/material": "*",
  "@emotion/react": "*",
  "@emotion/styled": "*",
};

export const DesignSystem: DesignSystemDefinition = {
  createElement,
  createRoot,
  components: {
    [component.id.button]: {
      Component: NoyaButton,
      source: { package: "@mui/material", name: "Button" },
      dependencies,
    },
    [component.id.avatar]: {
      Component: NoyaAvatar,
      source: { package: "@mui/material", name: "Avatar" },
      dependencies,
    },
    [component.id.box]: {
      Component: NoyaBox,
      source: { package: "@mui/material", name: "Box" },
      dependencies,
    },
    [component.id.text]: {
      Component: NoyaText,
      source: { package: "@mui/material", name: "Typography" },
      dependencies,
    },
    [component.id.image]: {
      Component: NoyaImage,
    },
  },
};
