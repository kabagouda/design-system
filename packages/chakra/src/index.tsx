import * as ChakraIcons from "@chakra-ui/icons";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import * as ChakraComponents from "@chakra-ui/react";
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
  applyCommonProps,
  AvatarProps,
  ButtonProps,
  CheckboxProps,
  CommonProps,
  component,
  DesignSystemDefinition,
  ImageProps,
  InputProps,
  RadioProps,
  RenderableRoot,
  SelectProps,
  SwitchProps,
  TextProps,
  version,
} from "@noya-design-system/protocol";
import { createElement } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";

export const DesignSystem: DesignSystemDefinition = {
  version: require("../package.json").version,
  protocolVersion: version,
  dependencies: {
    react: "^18",
    "react-dom": "^18",
    "@chakra-ui/react": "^2",
    "@chakra-ui/system": "^2",
    "@emotion/react": "^11",
    "@emotion/styled": "^11",
    "framer-motion": "^10",
  },
  devDependencies: {
    "@types/react": "^18",
    "@types/react-dom": "^18",
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
    [component.id.link]: function NoyaLink(props: CommonProps) {
      return <Link href="#" {...applyCommonProps(props)} />;
    },
    [component.id.button]: function NoyaButton(props: ButtonProps) {
      return (
        <Button isDisabled={props.disabled} {...applyCommonProps(props)} />
      );
    },
    [component.id.avatar]: function NoyaAvatar(props: AvatarProps) {
      return (
        <Avatar
          style={props.style}
          className={props.className}
          children={props.name}
          src={props.src}
          {...props._passthrough}
        />
      );
    },
    [component.id.box]: function NoyaBox(props: CommonProps) {
      return <Box {...applyCommonProps(props)} />;
    },
    [component.id.text]: function NoyaText(props: TextProps) {
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

      return <Text fontSize={size} {...applyCommonProps(props)} />;
    },
    [component.id.checkbox]: function NoyaCheckbox(props: CheckboxProps) {
      return (
        <Checkbox
          isChecked={props.checked}
          isDisabled={props.disabled}
          children={props.label}
          {...applyCommonProps(props)}
        />
      );
    },
    [component.id.input]: function NoyaInput(props: InputProps) {
      return (
        <Input
          value={props.value}
          placeholder={props.placeholder}
          isDisabled={props.disabled}
          {...applyCommonProps(props)}
        />
      );
    },
    [component.id.textarea]: function NoyaTextarea(props: InputProps) {
      return (
        <Textarea
          value={props.value}
          placeholder={props.placeholder}
          isDisabled={props.disabled}
          {...applyCommonProps(props)}
        />
      );
    },
    [component.id.radio]: function NoyaRadio(props: RadioProps) {
      return (
        <Radio
          isChecked={props.checked}
          isDisabled={props.disabled}
          children={props.label}
          {...applyCommonProps(props)}
        />
      );
    },
    [component.id.switch]: function NoyaSwitch(props: SwitchProps) {
      return (
        <Switch
          isChecked={props.checked}
          isDisabled={props.disabled}
          {...applyCommonProps(props)}
        />
      );
    },
    [component.id.select]: function NoyaSelect(props: SelectProps) {
      return (
        <Select
          value={props.value}
          disabled={props.disabled}
          style={props.style}
          className={props.className}
          children={(props.options ?? []).map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
          {...props._passthrough}
        />
      );
    },
    [component.id.image]: function NoyaImage(props: ImageProps) {
      return <Image src={props.src} {...applyCommonProps(props)} />;
    },
    [component.id.table]: function NoyaTable(props: CommonProps) {
      return <Table {...applyCommonProps(props)} />;
    },
    [component.id.tableHead]: function NoyaTableHead(props: CommonProps) {
      return <Thead {...applyCommonProps(props)} />;
    },
    [component.id.tableBody]: function NoyaTableBody(props: CommonProps) {
      return <Tbody {...applyCommonProps(props)} />;
    },
    [component.id.tableRow]: function NoyaTableRow(props: CommonProps) {
      return <Tr {...applyCommonProps(props)} />;
    },
    [component.id.tableCell]: function NoyaTableCell(props: CommonProps) {
      return <Td {...applyCommonProps(props)} />;
    },
    [component.id.tableHeadCell]: function NoyaTableHeadCell(
      props: CommonProps
    ) {
      return <Th {...applyCommonProps(props)} />;
    },
    [component.id.iconArrowForward]: function NoyaIconArrowForward(
      props: CommonProps
    ) {
      return <ArrowForwardIcon {...applyCommonProps(props)} />;
    },
  },
  imports: [
    { source: "@chakra-ui/react", namespace: ChakraComponents },
    {
      source: "@chakra-ui/icons",
      namespace: ChakraIcons,
      dependencies: {
        "@chakra-ui/icons": "^2",
      },
    },
  ],
};
