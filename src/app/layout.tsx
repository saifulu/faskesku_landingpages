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
  title: {
    default: "FASKESKU - Rekam Medis Elektronik Gratis untuk Klinik & Puskesmas Indonesia",
    template: "%s | FASKESKU"
  },
  description: "Sistem Rekam Medis Elektronik (RME) gratis dan open source untuk FKTP, Puskesmas, Klinik, Dokter Praktek Mandiri. Terintegrasi BPJS Kesehatan & Satu Sehat Kemenkes. Download gratis sekarang!",
  keywords: [
    "rekam medis elektronik",
    "RME gratis",
    "sistem informasi kesehatan",
    "FASKESKU",
    "aplikasi klinik gratis",
    "software puskesmas",
    "rekam medis digital",
    "EMR Indonesia",
    "sistem informasi puskesmas",
    "SIMPUS",
    "aplikasi dokter",
    "praktek mandiri",
    "FKTP",
    "BPJS Kesehatan",
    "Satu Sehat",
    "P-Care",
    "open source healthcare",
    "gratis selamanya",
    "rekam medis pasien",
    "manajemen klinik"
  ],
  authors: [{ name: "Tim FASKESKU" }],
  creator: "FASKESKU Indonesia",
  publisher: "FASKESKU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://faskesku.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "FASKESKU - Rekam Medis Elektronik Gratis untuk Klinik & Puskesmas",
    description: "Sistem RME gratis & open source untuk FKTP. Terintegrasi BPJS & Satu Sehat. Download sekarang!",
    url: 'https://faskesku.id',
    siteName: 'FASKESKU',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FASKESKU - Rekam Medis Elektronik Gratis',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FASKESKU - Rekam Medis Elektronik Gratis",
    description: "Sistem RME gratis & open source untuk FKTP. Terintegrasi BPJS & Satu Sehat.",
    images: ['/og-image.jpg'],
    creator: '@faskesku',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
