import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twilight Dashboard",
  description: "Twilight Dashboard",
  authors: [{ name: "Ali Asadollahi", url: "https://github.com/aliasadolahi74" }],
};

const workSans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        className={`${workSans.className} antialiased h-full w-full`}
      >
        {children}
      </body>
    </html>
  );
}
