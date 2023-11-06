import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Metadata } from "next";

export const metadata = {
  title: "Next Helpdesk",
  description: "Develop by Agus Pranyoto",
  icons: {
    icon: "./favicon.ico",
  },
};

// export const metadata: Metadata = {
//   icons: {
//     icon: "./favicon.ico",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
