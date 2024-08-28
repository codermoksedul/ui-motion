"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider } from "next-themes";
import Navbar from "./nav/Navbar";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full overflow-x-hidden">
      <ThemeProvider defaultTheme="dark" enableSystem={true} attribute="class">
        <ProgressBar
          height="2px"
          color="#673EE6"
          options={{ showSpinner: false }}
        />
        <Navbar />
        {children}
      </ThemeProvider>
    </main>
  );
};

export default ClientProvider;
