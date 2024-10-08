'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { DataProvider } from './GlobalState';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <DataProvider>
        {children}
      </DataProvider>
      </body>
    </html>
  );
}
