"use client";
import { useTheme, ThemeProvider } from "next-themes";
import React from "react";

type Props = {
  children: React.ReactNode; // Specify the type for children
};

export default function ClientThemeWrapper({ children }: Props) {
  const { theme } = useTheme();
  return (
    <ThemeProvider>
      <div data-theme={theme}>{children}</div>
    </ThemeProvider>
  );
}
