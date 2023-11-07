import { Rubik } from "next/font/google";
import "./globals.css";

// header component
import Header from "./components/header";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Next Helpdesk",
  description: "Develop by Agus Pranyoto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
