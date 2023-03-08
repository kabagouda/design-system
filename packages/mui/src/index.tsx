import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Link,
  Radio,
  Select,
  Switch,
  SwitchProps,
  TextField,
  Typography,
} from "@mui/material";
import {
  CheckboxProps,
  component,
  DesignSystemDefinition,
  InputProps,
  RadioProps,
  RenderableRoot,
  SelectProps,
  TextProps,
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

function NoyaLink({ ...props }: BaseProps) {
  return (
    <Link
      href="#"
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

function NoyaText({ ...props }: BaseProps & TextProps) {
  return (
    <Typography
      style={props.style}
      className={props.className}
      children={props.children}
      variant={props.variant}
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

function NoyaCheckbox({ ...props }: BaseProps & CheckboxProps) {
  return (
    <Checkbox
      style={props.style}
      className={props.className}
      checked={props.checked}
      disabled={props.disabled}
    />
  );
}

function NoyaRadio({ ...props }: BaseProps & RadioProps) {
  return (
    <Radio
      style={props.style}
      className={props.className}
      checked={props.checked}
      disabled={props.disabled}
    />
  );
}

function NoyaSwitch({ ...props }: BaseProps & SwitchProps) {
  return (
    <Switch
      style={props.style}
      className={props.className}
      checked={props.checked}
      disabled={props.disabled}
    />
  );
}

function NoyaInput({ ...props }: BaseProps & InputProps) {
  return (
    <TextField
      style={props.style}
      className={props.className}
      value={props.value}
      label={props.placeholder}
    />
  );
}

function NoyaTextarea({ ...props }: BaseProps & InputProps) {
  return (
    <TextField
      style={props.style}
      className={props.className}
      value={props.value}
      label={props.placeholder}
      multiline
    />
  );
}

function NoyaSelect({ ...props }: BaseProps & SelectProps) {
  return (
    <Select
      style={props.style}
      className={props.className}
      value={props.value}
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
    [component.id.link]: {
      Component: NoyaLink,
      source: { package: "@mui/material", name: "Link" },
      dependencies,
    },
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
    [component.id.checkbox]: {
      Component: NoyaCheckbox,
      source: { package: "@mui/material", name: "Checkbox" },
      dependencies,
    },
    [component.id.input]: {
      Component: NoyaInput,
      source: { package: "@mui/material", name: "TextField" },
      dependencies,
    },
    [component.id.textarea]: {
      Component: NoyaTextarea,
      source: { package: "@mui/material", name: "TextField" },
      dependencies,
    },
    [component.id.radio]: {
      Component: NoyaRadio,
      source: { package: "@mui/material", name: "Radio" },
      dependencies,
    },
    [component.id.switch]: {
      Component: NoyaSwitch,
      source: { package: "@mui/material", name: "Switch" },
      dependencies,
    },
    [component.id.select]: {
      Component: NoyaSelect,
      source: { package: "@mui/material", name: "Select" },
      dependencies,
    },
    [component.id.image]: {
      Component: NoyaImage,
    },
  },
};
