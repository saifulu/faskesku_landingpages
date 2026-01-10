import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://faskesku.id"),
  alternates: {
    canonical: "/",
  },
  title: "FASKESKU - Rekam Medis Elektronik (RME) Gratis & Open Source",
  description: "Aplikasi Rekam Medis Elektronik (RME) gratis untuk Klinik, Puskesmas, dan Dokter Praktek Mandiri. Terintegrasi Satu Sehat Kemenkes & BPJS Kesehatan. Digitalisasi Faskes Anda sekarang!",
  keywords: "rekam medis elektronik, RME gratis, rekam medis digital, faskes digital, SIMRS, SIMPUS, aplikasi klinik, software rumah sakit, rekam medis indonesia, satu sehat, bpjs kesehatan, p-care, open source emr, faskesku",
  authors: [{ name: "FASKESKU Team" }],
  creator: "FASKESKU",
  publisher: "FASKESKU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "FASKESKU - Rekam Medis Elektronik (RME) Gratis",
    description: "Digitalisasi Rekam Medis Faskes Anda dengan FASKESKU. Gratis, Open Source, dan Terintegrasi Satu Sehat.",
    url: "https://faskesku.id",
    siteName: "FASKESKU.id",
    images: [
      {
        url: "/logo.png", // Ensure this exists or use a representative image
        width: 1200,
        height: 630,
        alt: "FASKESKU - Digital Healthcare Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FASKESKU - Rekam Medis Elektronik (MRE) Gratis",
    description: "Solusi Digital Rekam Medis untuk Klinik & Dokter Indonesia.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
