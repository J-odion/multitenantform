import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "./libs/Provider";

// Font setup
const figtree = localFont({
  src: "./fonts/Figtree.ttf",
  variable: "--font-figtree",
  weight: "100 900", // Ensure weight matches your font's configuration
});

// Metadata
export const metadata = {
  title: "  Multitenantform",
  description:
    "Tailored to aid calculation and cost savings",
};

// Root Layout Component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        {/* Redux Provider wrapping the app */}
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
