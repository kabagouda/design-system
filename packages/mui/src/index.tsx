import { Avatar, Box, Button, Typography } from "@mui/material";
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
      variant="contained"
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

function NoyaText({ ...props }: BaseProps) {
  return (
    <Typography
      style={props.style}
      className={props.className}
      children={props.children}
    />
  );
}

function NoyaImage({
  ...props
}: BaseProps & {
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
