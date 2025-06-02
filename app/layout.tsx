import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LiveDocs",
  description: "your go to collabaration app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={'dark'} suppressHydrationWarning={true}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
