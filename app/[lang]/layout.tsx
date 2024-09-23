import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getDictionary } from "./dictionaries";
import MainLayout from "./components/main-layout";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return [{ lang: "mn" }, { lang: "en" }];
}

type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<Props>) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className="h-full">
      
      <body className={`${inter.className} h-full `}>
        <ThemeProvider defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MainLayout dict={dict} lang={lang}>
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}  