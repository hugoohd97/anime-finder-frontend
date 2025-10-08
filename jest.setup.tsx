import "@testing-library/jest-dom";

beforeEach(() => {
  localStorage.clear();
});

jest.mock("framer-motion", () => {
  const React = require("react");
  return {
    AnimatePresence: ({ children }: { children: React.ReactNode }) =>
      React.createElement(React.Fragment, null, children),
    motion: new Proxy(
      {},
      {
        get: (_, tag: string) => (props: any) => {
          const { whileHover, whileTap, ...rest } = props;
          return React.createElement(tag, rest, props.children);
        },
      }
    ),
  };
});
