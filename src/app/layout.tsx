import type { Metadata } from "next";
import { Exo} from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import CustomProvider from "@/redux/CartProvider";
import store from "@/redux/store"
import AuthProvider from '@/components/authProvider'

const inter = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abryks - Muhammad Abdullah",
  description: "Abryks by Muhammad Abdullah",
  icons:{
    icon:"/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
       <CustomProvider><AuthProvider> <Navbar></Navbar>{children}</AuthProvider></CustomProvider><Footer></Footer></body>
    </html>
  );
}
