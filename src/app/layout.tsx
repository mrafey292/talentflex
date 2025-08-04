import type { Metadata } from "next";
import "./globals.css";
import NavigationWrapper from "@/components/providers/NavigationWrapper";

export const metadata: Metadata = {
  title: "TalentFlex - Dashboard",
  description: "Modern talent management dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavigationWrapper>
          {children}
        </NavigationWrapper>
      </body>
    </html>
  );
}
