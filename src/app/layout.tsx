import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import HeaderLayout from "@/components/layout/HeaderLayout.component";

export const metadata: Metadata = {
  title: "Asabina Development Center",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <Providers>
          <HeaderLayout />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
