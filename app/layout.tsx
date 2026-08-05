import Navbar from "@/components/Navbar";
import "./globals.css";
import { TradingProvider }
from "@/context/TradingContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   <body className="bg-black text-white">
  <TradingProvider>
    <Navbar />
    {children}
  </TradingProvider>
</body>
    </html>
  );
}