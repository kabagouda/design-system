import * as MUIIcons from "@mui/icons-material";
import { ArrowForward } from "@mui/icons-material";
import * as MUIComponents from "@mui/material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
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
    "@mui/material": "^5",
    "@emotion/react": "^11",
    "@emotion/styled": "^11",
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
    [component.id.link]: function NoyaLink(props: CommonProps) {
      return <Link href="#" {...applyCommonProps(props)} />;
    },
    [component.id.button]: function NoyaButton(props: ButtonProps) {
      return (
        <Button
          disabled={props.disabled}
          variant="contained"
          {...applyCommonProps(props)}
        />
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
      return (
        <Typography variant={props.variant} {...applyCommonProps(props)} />
      );
    },
    [component.id.checkbox]: function NoyaCheckbox(props: CheckboxProps) {
      const inner = (
        <Checkbox
          checked={props.checked}
          disabled={props.disabled}
          {...applyCommonProps(props)}
        />
      );

      return props.label ? (
        <FormControlLabel control={inner} label={props.label} />
      ) : (
        inner
      );
    },
    [component.id.input]: function NoyaInput(props: InputProps) {
      return (
        <TextField
          value={props.value}
          label={props.placeholder}
          disabled={props.disabled}
          {...applyCommonProps(props)}
        />
      );
    },
    [component.id.textarea]: function NoyaTextarea(props: InputProps) {
      return (
        <TextField
          value={props.value}
          label={props.placeholder}
          disabled={props.disabled}
          multiline
          {...applyCommonProps(props)}
        />
      );
    },
    [component.id.radio]: function NoyaRadio(props: RadioProps) {
      const inner = (
        <Radio
          checked={props.checked}
          disabled={props.disabled}
          {...applyCommonProps(props)}
        />
      );

      return props.label ? (
        <FormControlLabel control={inner} label={props.label} />
      ) : (
        inner
      );
    },
    [component.id.switch]: function NoyaSwitch(props: SwitchProps) {
      return (
        <Switch
          checked={props.checked}
          disabled={props.disabled}
          {...applyCommonProps(props)}
        />
      );
    },
    [component.id.select]: function NoyaSelect(props: SelectProps) {
      return (
        <Select
          style={props.style}
          className={props.className}
          value={props.value}
          disabled={props.disabled}
          children={(props.options ?? []).map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
          {...props._passthrough}
        />
      );
    },
    [component.id.image]: function NoyaImage(props: ImageProps) {
      return <img src={props.src} {...applyCommonProps(props)} />;
    },
    [component.id.table]: function NoyaTable(props: CommonProps) {
      return <Table {...applyCommonProps(props)} />;
    },
    [component.id.tableHead]: function NoyaTableHead(props: CommonProps) {
      return <TableHead {...applyCommonProps(props)} />;
    },
    [component.id.tableBody]: function NoyaTableBody(props: CommonProps) {
      return <TableBody {...applyCommonProps(props)} />;
    },
    [component.id.tableRow]: function NoyaTableRow(props: CommonProps) {
      return <TableRow {...applyCommonProps(props)} />;
    },
    [component.id.tableCell]: function NoyaTableCell(props: CommonProps) {
      return <TableCell {...applyCommonProps(props)} />;
    },
    [component.id.tableHeadCell]: function NoyaTableHeadCell(
      props: CommonProps
    ) {
      return <TableCell {...applyCommonProps(props)} />;
    },
    [component.id.iconArrowForward]: function NoyaIconArrowForward(
      props: CommonProps
    ) {
      return <ArrowForward {...applyCommonProps(props)} />;
    },
  },
  imports: [
    { source: "@mui/material", namespace: MUIComponents },
    {
      source: "@mui/icons-material",
      namespace: MUIIcons,
      dependencies: { "@mui/icons-material": "^5" },
    },
  ],
};
