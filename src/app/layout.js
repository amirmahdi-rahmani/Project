import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import getLayoutData from "@/functions/getLayoutData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "amir mahdi rahmani",
  description: "azarbaijan sharghi",
};

const RootLayout = async ({ children }) => {
  const menu = await getLayoutData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header menu={menu} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
