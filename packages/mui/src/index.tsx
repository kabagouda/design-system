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
  Paper,
  Radio,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  TextFieldProps,
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
import { createElement, CSSProperties } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

/**
 * Create a background color and initials from a name
 *
 * https://mui.com/material-ui/react-avatar/
 */
function stringAvatar(name: string) {
  const initials = name
    .split(" ")
    .filter((c) => c.length > 0)
    .map((c) => c[0])
    .join("")
    .toLocaleUpperCase();

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
}

function filterEmptyObjects(obj: Record<string, unknown>) {
  return Object.keys(obj).reduce((result, key) => {
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      const filtered = filterEmptyObjects(value as Record<string, unknown>);

      if (Object.keys(filtered).length > 0) {
        result[key] = filtered;
      }
    } else if (value !== undefined && value !== null) {
      result[key] = value;
    }

    return result;
  }, {} as Record<string, unknown>);
}

function mapTextFieldStyleToProps(
  style?: CSSProperties
): Partial<TextFieldProps> {
  if (!style) return {};

  const { color, borderColor, backgroundColor, ...rest } = style;

  return filterEmptyObjects({
    InputLabelProps: {
      style: { color },
    },
    sx: {
      input: {
        color,
      },
      fieldset: {
        borderColor,
        backgroundColor,
      },
    },
    style: rest,
  });
}

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
          {...(props.name && stringAvatar(props.name))}
          style={props.style}
          className={props.className}
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
      const { style, ...rest } = props;

      return (
        <TextField
          value={props.value}
          label={props.placeholder}
          disabled={props.disabled}
          {...applyCommonProps(rest)}
          {...mapTextFieldStyleToProps(style)}
        />
      );
    },
    [component.id.textarea]: function NoyaTextarea(props: InputProps) {
      const { style, ...rest } = props;

      return (
        <TextField
          value={props.value}
          label={props.placeholder}
          disabled={props.disabled}
          multiline
          {...applyCommonProps(rest)}
          {...mapTextFieldStyleToProps(style)}
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
    [component.id.tableContainer]: function NoyaTableContainer(
      props: CommonProps
    ) {
      return <TableContainer component={Paper} {...applyCommonProps(props)} />;
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
