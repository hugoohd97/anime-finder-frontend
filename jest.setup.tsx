import "@testing-library/jest-dom";

beforeEach(() => {
  localStorage.clear();
});

jest.mock("framer-motion", () => {
  const React = require("react");

  type MotionTagProps = Record<string, unknown> & {
    children?: React.ReactNode;
    whileHover?: unknown;
    whileTap?: unknown;
  };

  return {
    AnimatePresence: ({ children }: { children: React.ReactNode }) =>
      React.createElement(React.Fragment, null, children),

    motion: new Proxy(
      {},
      {
        get: (_: unknown, tag: string) => (props: MotionTagProps) => {
          const { whileHover, whileTap, ...rest } = props;
          return React.createElement(tag, rest, props.children);
        },
      }
    ),
  };
});
