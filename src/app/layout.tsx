import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Header from "~/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Blog Youtube",
  description: "Acesse meu blog",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} bg-[#f2ecec]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
