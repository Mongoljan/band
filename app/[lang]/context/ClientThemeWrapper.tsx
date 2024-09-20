"use client";
import { useTheme, ThemeProvider } from "next-themes";
export default function ClientThemeWrapper({ children }: any) {
  const { theme } = useTheme();
  return (
    <ThemeProvider>
      <div data-theme={theme}>{children}</div>
    </ThemeProvider>
  );
}
