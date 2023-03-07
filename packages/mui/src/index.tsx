import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import {
  avatarSymbolId,
  boxSymbolId,
  buttonSymbolId,
  imageSymbolId,
  textSymbolId,
} from "./symbolIds";

export { React, ReactDOM };

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
    <Typography
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

export type ExportedComponent = {
  Component: React.FC<any>;
  source?: { package: string; name: string };
  dependencies?: Record<string, string>;
};

const dependencies = {
  "@mui/material": "*",
  "@emotion/react": "*",
  "@emotion/styled": "*",
};

export const Components: Record<string, ExportedComponent> = {
  [buttonSymbolId]: {
    Component: NoyaButton,
    source: { package: "@mui/material", name: "Button" },
    dependencies,
  },
  [avatarSymbolId]: {
    Component: NoyaAvatar,
    source: { package: "@mui/material", name: "Avatar" },
    dependencies,
  },
  [boxSymbolId]: {
    Component: NoyaBox,
    source: { package: "@mui/material", name: "Box" },
    dependencies,
  },
  [textSymbolId]: {
    Component: NoyaText,
    source: { package: "@mui/material", name: "Typography" },
    dependencies,
  },
  [imageSymbolId]: {
    Component: NoyaImage,
  },
};
