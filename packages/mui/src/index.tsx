import * as MUI from "@mui/material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Link,
  MenuItem,
  Radio,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  AvatarProps,
  CheckboxProps,
  component,
  DesignSystemDefinition,
  ImageProps,
  InputProps,
  RadioProps,
  RenderableRoot,
  SelectProps,
  SwitchProps,
  TextProps,
} from "@noya-design-system/protocol";
import React, { createElement } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";

type BaseProps = {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

function wrap<Props extends BaseProps, NativeProps extends BaseProps>(
  Component: React.FC<Partial<NativeProps>>,
  { defaultProps }: { defaultProps?: Partial<NativeProps> } = {}
) {
  const Untyped = Component as any;

  const NoyaComponent: React.FC<Partial<Props>> = function NoyaComponent(
    props: Partial<Props>
  ) {
    return (
      <Untyped
        style={props.style}
        className={props.className}
        children={props.children}
        {...defaultProps}
      />
    );
  };

  return NoyaComponent;
}

const NoyaButton = wrap(Button, {
  defaultProps: { variant: "contained" },
});
const NoyaLink = wrap(Link, {
  defaultProps: { href: "#" },
});
const NoyaBox = wrap(Box);
const NoyaTable = wrap(Table);
const NoyaTableHead = wrap(TableHead);
const NoyaTableBody = wrap(TableBody);
const NoyaTableRow = wrap(TableRow);
const NoyaTableCell = wrap(TableCell);

function NoyaAvatar(props: BaseProps & AvatarProps) {
  return (
    <Avatar
      style={props.style}
      className={props.className}
      children={props.name}
      src={props.src}
    />
  );
}

function NoyaText(props: BaseProps & TextProps) {
  return (
    <Typography
      style={props.style}
      className={props.className}
      children={props.children}
      variant={props.variant}
    />
  );
}

function NoyaImage(props: BaseProps & ImageProps) {
  return (
    <img style={props.style} className={props.className} src={props.src} />
  );
}

function NoyaCheckbox(props: BaseProps & CheckboxProps) {
  return (
    <Checkbox
      style={props.style}
      className={props.className}
      checked={props.checked}
      disabled={props.disabled}
    />
  );
}

function NoyaRadio(props: BaseProps & RadioProps) {
  return (
    <Radio
      style={props.style}
      className={props.className}
      checked={props.checked}
      disabled={props.disabled}
    />
  );
}

function NoyaSwitch(props: BaseProps & SwitchProps) {
  return (
    <Switch
      style={props.style}
      className={props.className}
      checked={props.checked}
      disabled={props.disabled}
    />
  );
}

function NoyaInput(props: BaseProps & InputProps) {
  return (
    <TextField
      style={props.style}
      className={props.className}
      value={props.value}
      label={props.placeholder}
      disabled={props.disabled}
    />
  );
}

function NoyaTextarea(props: BaseProps & InputProps) {
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

function NoyaSelect(props: BaseProps & SelectProps) {
  return (
    <Select
      style={props.style}
      className={props.className}
      value={props.value}
      disabled={props.disabled}
    >
      {(props.options ?? []).map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
}

export const DesignSystem: DesignSystemDefinition = {
  dependencies: {
    "@mui/material": "*",
    "@emotion/react": "*",
    "@emotion/styled": "*",
  },
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
    [component.id.link]: NoyaLink,
    [component.id.button]: NoyaButton,
    [component.id.avatar]: NoyaAvatar,
    [component.id.box]: NoyaBox,
    [component.id.text]: NoyaText,
    [component.id.checkbox]: NoyaCheckbox,
    [component.id.input]: NoyaInput,
    [component.id.textarea]: NoyaTextarea,
    [component.id.radio]: NoyaRadio,
    [component.id.switch]: NoyaSwitch,
    [component.id.select]: NoyaSelect,
    [component.id.image]: NoyaImage,
    [component.id.table]: NoyaTable,
    [component.id.tableHead]: NoyaTableHead,
    [component.id.tableBody]: NoyaTableBody,
    [component.id.tableRow]: NoyaTableRow,
    [component.id.tableCell]: NoyaTableCell,
    [component.id.tableHeadCell]: NoyaTableCell,
  },
  imports: [{ source: "@mui/material", namespace: MUI }],
};
