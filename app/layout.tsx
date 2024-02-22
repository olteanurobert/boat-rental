// Metadata
import type { Metadata } from "next";

// Fonts
import { Inter } from "next/font/google";

// Global styles
import "./globals.css";

// Components
import Header from "./components/clientComponents/header";
import Footer from "./components/serverComponents/footer";
import ThemeSwitch from "@/app/components/clientComponents/theme-switch";

// Context
import ActiveSectionContextProvider from "@/app/context/active-section-context";
import ThemeContextProvider from "./context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boat Rental",
  description: "You can rent a boat to explore the beautiful Danube Delta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />

            {children}

            <Footer />

            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
