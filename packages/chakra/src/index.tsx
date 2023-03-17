import * as Chakra from "@chakra-ui/react";
import {
  Avatar,
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Image,
  Input,
  Link,
  Radio,
  Select,
  Switch,
  Table,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  AvatarProps,
  ButtonProps,
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
  children: React.ReactNode;
};

export const DesignSystem: DesignSystemDefinition = {
  dependencies: {
    react: "^18",
    "@chakra-ui/icons": "^2.0.17",
    "@chakra-ui/react": "^2.5.1",
    "@chakra-ui/system": "^2.5.1",
    "@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "framer-motion": "^10.2.3",
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
    [component.id.provider]: ChakraProvider,
    [component.id.link]: function NoyaLink(props: BaseProps) {
      return (
        <Link
          href="#"
          style={props.style}
          className={props.className}
          children={props.children}
        />
      );
    },
    [component.id.button]: function NoyaButton(props: BaseProps & ButtonProps) {
      return (
        <Button
          style={props.style}
          className={props.className}
          children={props.children}
          isDisabled={props.disabled}
        />
      );
    },
    [component.id.avatar]: function NoyaAvatar(props: BaseProps & AvatarProps) {
      return (
        <Avatar
          style={props.style}
          className={props.className}
          children={props.name}
          src={props.src}
        />
      );
    },
    [component.id.box]: function NoyaBox(props: BaseProps) {
      return (
        <Box
          style={props.style}
          className={props.className}
          children={props.children}
        />
      );
    },
    [component.id.text]: function NoyaText(props: BaseProps & TextProps) {
      const size =
        props.variant === "h1"
          ? "8xl"
          : props.variant === "h2"
          ? "6xl"
          : props.variant === "h3"
          ? "5xl"
          : props.variant === "h4"
          ? "4xl"
          : props.variant === "h5"
          ? "2xl"
          : props.variant === "h6"
          ? "xl"
          : undefined;

      return (
        <Text
          style={props.style}
          className={props.className}
          children={props.children}
          fontSize={size}
        />
      );
    },
    [component.id.checkbox]: function NoyaCheckbox(
      props: BaseProps & CheckboxProps
    ) {
      return (
        <Checkbox
          isChecked={props.checked}
          isDisabled={props.disabled}
          style={props.style}
          className={props.className}
          children={props.children}
        />
      );
    },
    [component.id.input]: function NoyaInput(props: BaseProps & InputProps) {
      return (
        <Input
          style={props.style}
          className={props.className}
          children={props.children}
          value={props.value}
          placeholder={props.placeholder}
          isDisabled={props.disabled}
        />
      );
    },
    [component.id.textarea]: function NoyaTextarea(
      props: BaseProps & InputProps
    ) {
      return (
        <Textarea
          style={props.style}
          className={props.className}
          children={props.children}
          value={props.value}
          placeholder={props.placeholder}
          isDisabled={props.disabled}
        />
      );
    },
    [component.id.radio]: function NoyaRadio(props: BaseProps & RadioProps) {
      return (
        <Radio
          style={props.style}
          className={props.className}
          children={props.children}
          isChecked={props.checked}
          isDisabled={props.disabled}
        />
      );
    },
    [component.id.switch]: function NoyaSwitch(props: BaseProps & SwitchProps) {
      return (
        <Switch
          style={props.style}
          className={props.className}
          children={props.children}
          isChecked={props.checked}
          isDisabled={props.disabled}
        />
      );
    },
    [component.id.select]: function NoyaSelect(props: BaseProps & SelectProps) {
      return (
        <Select style={props.style} className={props.className}>
          {(props.options ?? []).map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Select>
      );
    },
    [component.id.image]: function NoyaImage(props: BaseProps & ImageProps) {
      return (
        <Image
          style={props.style}
          className={props.className}
          src={props.src}
        />
      );
    },
    [component.id.table]: function NoyaTable(props: BaseProps) {
      return (
        <Table
          style={props.style}
          className={props.className}
          children={props.children}
        />
      );
    },
    [component.id.tableHead]: function NoyaTableHead(props: BaseProps) {
      return (
        <Thead
          style={props.style}
          className={props.className}
          children={props.children}
        />
      );
    },
    [component.id.tableBody]: function NoyaTableBody(props: BaseProps) {
      return (
        <Tbody
          style={props.style}
          className={props.className}
          children={props.children}
        />
      );
    },
    [component.id.tableRow]: function NoyaTableRow(props: BaseProps) {
      return (
        <Tr
          style={props.style}
          className={props.className}
          children={props.children}
        />
      );
    },
    [component.id.tableCell]: function NoyaTableCell(props: BaseProps) {
      return (
        <Td
          style={props.style}
          className={props.className}
          children={props.children}
        />
      );
    },
    [component.id.tableHeadCell]: function NoyaTableHeadCell(props: BaseProps) {
      return (
        <Th
          style={props.style}
          className={props.className}
          children={props.children}
        />
      );
    },
  },
  imports: [{ source: "@chakra-ui/react", namespace: Chakra }],
};
