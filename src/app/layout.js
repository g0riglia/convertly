import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "@/images/logo.png";
import "./globals.css";
import CurrencyPriceProvider from "@/components/CurrencyPriceProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Convertly",
  description: "Convert currencies between EUR and PLN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CurrencyPriceProvider>
        <body className={inter.className}>
          <header>
            <Image
              src={logo}
              alt="The Convertly app logp, figuring an euro with an arrow to a PLN and viceversa."
            />
            <p>Convertly</p>
          </header>
          {children}
        </body>
      </CurrencyPriceProvider>
    </html>
  );
}
