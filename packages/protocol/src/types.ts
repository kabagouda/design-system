export type Dependencies = Record<string, string>;

export type Components = Record<string, React.FC<any>>;

export type ImportDeclaration = {
  source: string;
  namespace: Record<string, any>;
  dependencies?: Dependencies;
  devDependencies?: Dependencies;
};

export type RenderableRoot = {
  render: (node: React.ReactNode) => void;
  unmount: () => void;
};

export type DesignSystemDefinition = {
  version: string;
  protocolVersion: string;
  Provider?: React.FC<any>;
  components: Components;
  createElement: (...args: any[]) => JSX.Element;
  createRoot: (element: HTMLElement) => RenderableRoot;
  dependencies?: Dependencies;
  devDependencies?: Dependencies;
  imports?: ImportDeclaration[];
};
