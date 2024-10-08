import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "ALABAY",
  description: "Where the legendary Central Asian Shepherd Dog meets a new-age adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
