import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Providers/Index";
import Navbar from "./Compoent/Navbar/Navbar";
import Footer from "./Compoent/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodeTalk",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="black">
      <body className={inter.className}>
        <Provider>
          
          <Navbar/>
          <div>
             {children}
          </div>
          <Footer></Footer>
        </Provider>
       
        </body>
    </html>
  );
}
