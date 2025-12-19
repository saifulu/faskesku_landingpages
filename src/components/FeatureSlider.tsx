"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Shield, MessageCircle } from 'lucide-react';

const features = [
    {
        id: 'puskesmas',
        label: 'Puskesmas',
        title: 'Puskesmas Digital',
        description: 'Sistem Informasi Manajemen Puskesmas (SIMPUS) modern. Terintegrasi penuh dengan P-Care BPJS Kesehatan dan Satu Sehat Kemenkes.',
        image: '/puskesmas-hero.jpg'
    },
    {
        id: 'klinik',
        label: 'Klinik Pratama',
        title: 'Klinik & Praktek Mandiri',
        description: 'Kelola pendaftaran pasien, rekam medis, dan stok obat dalam satu aplikasi yang terintegrasi. Mudah digunakan dan sesuai standar Satu Sehat.',
        image: '/klinik-hero.jpg'
    },
    {
        id: 'praktek',
        label: 'Praktek Dokter',
        title: 'Praktek Dokter Mandiri',
        description: 'Solusi RME sederhana dan efisien untuk dokter praktek perorangan. Fokus pada pelayanan pasien tanpa ribet administrasi.',
        image: '/dokter-hero.png'
    },
    {
        id: 'apotek',
        label: 'Apotek',
        title: 'Manajemen Apotek',
        description: 'Kontrol stok obat real-time, notifikasi kadaluarsa, dan integrasi langsung dengan resep elektronik dokter.',
        image: '/apotek-hero.jpg'
    }
];

export default function FeatureSlider() {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % features.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const activeFeature = features[activeTab];

    return (
        <div className="relative h-[600px] w-full">
            {/* Main Background Shape */}
            <div className="absolute inset-0 rounded-tl-[100px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
                <Image
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    fill
                    className="object-cover transition-opacity duration-500"
                    priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Decorative Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <Shield className="w-32 h-32 text-white" />
                </div>
            </div>

            {/* Floating Card Overlay */}
            <div className="absolute bottom-2 left-6 right-6">
                <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-4 shadow-lg backdrop-blur-md border border-gray-100 dark:border-gray-700 relative">
                    {/* Tabs/Pills */}
                    <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
                        {features.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(index)}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${index === activeTab
                                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="mt-2 transition-all duration-300">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                                {activeFeature.title}
                            </span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                            {activeFeature.description}
                        </p>

                        {/* CTA in Card */}
                        <a
                            href="https://wa.me/6285229572326"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors text-sm group"
                        >
                            <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                            </div>
                            <span className="border-b border-transparent group-hover:border-teal-600 transition-colors">
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
