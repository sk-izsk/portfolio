import React from "react";
import { ThemeProvider } from "react-jss";
import { theme } from "./theme";

const TestContextProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { TestContextProvider };
