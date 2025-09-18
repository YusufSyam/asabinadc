import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import HeaderLayout from "@/components/layout/HeaderLayout.component";
import FooterLayout from "@/components/layout/FooterLayout.component";

export const metadata: Metadata = {
  title: "Asabina Development Center",
  description: "",
  icons: {
    icon: '/assets/images/logo1.png',
    
  },
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
          <FooterLayout />
        </Providers>
      </body>
    </html>
  );
}
