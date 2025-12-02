import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | TastyTales",
  description:
    "Explore the complete menu of TastyTales — delicious dishes crafted with love and prepared fresh for you.",

  openGraph: {
    title: "Menu | TastyTales",
    description:
      "Discover all food items available at TastyTales. Fresh, tasty, and prepared with love.",
    url: "https://tasty-tales-kappa.vercel.app/menu",
    siteName: "TastyTales",
    type: "website",
  },

  alternates: {
    canonical: "https://tasty-tales-kappa.vercel.app/menu",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
