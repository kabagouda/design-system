import { ReactNode } from "react";

export type CommonProps = {
  style?: React.CSSProperties;
  className?: string;
  _passthrough?: Record<string, any>;
};

export type CheckboxProps = CommonProps & {
  checked?: boolean;
  disabled?: boolean;
  label?: ReactNode;
};

export type AvatarProps = CommonProps & {
  src?: string;
  name?: string;
};

export type ImageProps = CommonProps & {
  src?: string;
};

export type RadioProps = CommonProps & {
  checked?: boolean;
  disabled?: boolean;
  label?: ReactNode;
};

export type SwitchProps = CommonProps & {
  checked?: boolean;
  disabled?: boolean;
};

export type InputProps = CommonProps & {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
};

export type SelectProps = CommonProps & {
  value?: string;
  options?: string[];
  disabled?: boolean;
};

export type CommonPropsWithChildren = CommonProps & {
  children?: React.ReactNode;
};

export type ButtonProps = CommonPropsWithChildren & {
  children?: React.ReactNode;
  disabled?: boolean;
};

export type TextProps = CommonPropsWithChildren & {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export function applyCommonProps(props: CommonPropsWithChildren) {
  const output: Pick<
    CommonPropsWithChildren,
    "style" | "className" | "children"
  > &
    CommonPropsWithChildren["_passthrough"] = {};

  if ("style" in props) {
    output.style = props.style;
  }

  if ("className" in props) {
    output.className = props.className;
  }

  if ("children" in props) {
    output.children = props.children;
  }

  if ("_passthrough" in props) {
    Object.assign(output, props._passthrough);
  }

  return output;
}
