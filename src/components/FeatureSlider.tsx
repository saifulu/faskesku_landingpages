"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Shield, MessageCircle } from 'lucide-react';

const features = [
    {
        id: 'puskesmas',
        label: 'Puskesmas',
        title: 'Sistem Informasi Manajemen Puskesmas (SIMPUS)',
        description: 'Sistem Informasi Manajemen Puskesmas (SIMPUS) modern. Terintegrasi penuh dengan P-Care BPJS Kesehatan dan Satu Sehat Kemenkes untuk efisiensi layanan faskes.',
        image: '/puskesmas-hero.jpg'
    },
    {
        id: 'klinik',
        label: 'Klinik Pratama',
        title: 'Aplikasi Klinik & Rekam Medis Digital',
        description: 'Kelola pendaftaran pasien, rekam medis elektronik (RME), dan stok obat dalam satu aplikasi klinik yang terintegrasi. Sesuai standar akreditasi klinik.',
        image: '/klinik-hero.jpg'
    },
    {
        id: 'praktek',
        label: 'Praktek Dokter',
        title: 'Software Rekamedis Praktek Dokter Mandiri',
        description: 'Solusi Rekamedis digital / RME sederhana dan efisien untuk dokter praktek perorangan. Fokus pada pelayanan pasien tanpa ribet administrasi.',
        image: '/dokter-hero.png'
    },
    {
        id: 'apotek',
        label: 'Apotek',
        title: 'Sistem Manajemen Apotek Digital',
        description: 'Kontrol stok obat real-time, notifikasi kadaluarsa, dan integrasi langsung dengan resep elektronik dari sistem rekam medis dokter.',
        image: '/apotek-hero.jpg'
    }
];

export default function FeatureSlider() {
    const [activeTab, setActiveTab] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const raf = requestAnimationFrame(() => setIsMounted(true));
        const timer = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % features.length);
        }, 5000);
        return () => {
            cancelAnimationFrame(raf);
            clearInterval(timer);
        };
    }, []);

    const activeFeature = features[activeTab];

    return (
        <div className="relative h-[520px] sm:h-[560px] lg:h-[600px] w-full">
            {/* Main Background Shape */}
            <div className="absolute inset-0 rounded-tl-[100px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
                <Image
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    fill
                    className={`object-cover transition-all duration-700 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'}`}
                    priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"></div>

                {/* Decorative Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <Shield className="w-32 h-32 text-white" />
                </div>
            </div>

            {/* Floating Card Overlay */}
            <div className="absolute bottom-2 left-2 right-2 md:bottom-6 md:left-6 md:right-6">
                <div className={`bg-white/90 dark:bg-gray-800/90 rounded-2xl p-3 sm:p-4 shadow-lg backdrop-blur-md border border-gray-100 dark:border-gray-700 relative transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    {/* Tabs/Pills */}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {features.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(index)}
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${index === activeTab
                                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="mt-2 transition-all duration-300">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5">
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-blue-400 dark:via-indigo-400 dark:to-sky-400 bg-clip-text text-transparent">
                                {activeFeature.title}
                            </span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-2.5">
                            {activeFeature.description}
                        </p>

                        {/* CTA in Card */}
                        <a
                            href="https://wa.me/6285229572326"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm group"
                        >
                            <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="border-b border-transparent group-hover:border-blue-600 transition-colors">
                                Hubungi Kami Online 24 Jam
                            </span>
                        </a>

                        {/* Red Arrow */}
                        <div className="absolute -left-16 bottom-4 hidden md:block pointer-events-none opacity-80">
                            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-12">
                                <path d="M10 90C30 80 50 60 90 20" stroke="#EF4444" strokeWidth="1" strokeLinecap="round" />
                                <path d="M70 20L90 20L85 45" stroke="#EF4444" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
