import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LiveDocs",
  description: "your go to collabaration app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"  suppressHydrationWarning={true}>
      <body
        className={`antialiased dark2`} 
      >
        {children}
      </body>
    </html>
  );
}
