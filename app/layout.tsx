import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Price Tracker",
  description: "Tracking product prices and saving money online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl h-auto mx-auto bg-[#0B1120] font-spaceGrotesk overflow-x-hidden">
          <Navbar />
          <BackgroundGradientAnimation gradientBackgroundStart="#0B1120" gradientBackgroundEnd="#0B1120" firstColor="11, 17, 32"  pointerColor="255, 255, 255" children={children} />
        </main>
      </body>
    </html>
  );
}
 