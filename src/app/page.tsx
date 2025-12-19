import Image from "next/image";
import { Download, Shield, Users, Clock, CheckCircle, Star, Menu, Moon, Sun, Code, Heart, Globe, Github, FileText, Activity, Calendar, Stethoscope, Monitor, Database, MessageCircle } from "lucide-react";
import FeatureSlider from "../components/FeatureSlider";
import Script from "next/script";

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://faskesku.id/#organization",
        "name": "FASKESKU",
        "url": "https://faskesku.id",
        "logo": {
          "@type": "ImageObject",
          "url": "https://faskesku.id/logo.png"
        },
        "description": "Penyedia sistem rekam medis elektronik gratis dan open source untuk fasilitas kesehatan di Indonesia",
        "sameAs": [
          "https://github.com/AbahWeb/faskesku.id",
          "https://twitter.com/faskesku"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://faskesku.id/#website",
        "url": "https://faskesku.id",
        "name": "FASKESKU - Rekam Medis Elektronik Gratis",
        "description": "Sistem Rekam Medis Elektronik gratis dan open source untuk FKTP, Puskesmas, Klinik, dan Dokter Praktek Mandiri",
        "publisher": {
          "@id": "https://faskesku.id/#organization"
        },
        "inLanguage": "id-ID"
      },
      {
        "@type": "SoftwareApplication",
        "name": "FASKESKU",
        "applicationCategory": "HealthApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "IDR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1000"
        },
        "description": "Sistem Rekam Medis Elektronik gratis dan open source untuk fasilitas kesehatan tingkat pertama di Indonesia. Terintegrasi dengan BPJS Kesehatan dan Satu Sehat Kemenkes."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-br from-teal-200/40 to-emerald-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-cyan-200/40 rounded-full blur-3xl"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(20 184 166) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">faskesku.id</span>
            </div>
            <div className="flex-1"></div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors relative group">
                Tentang
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#features" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors relative group">
                Fitur
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#download" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors relative group">
                Download
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors relative group">
                Kontak
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <button className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 backdrop-blur-sm">
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              <a href="#numpang-server" className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 text-sm">
                ✨ Numpang Server
              </a>
            </div>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/SoftwareApplication">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm">
                  FASKESKU
                </span>
                <br />
                <span className="text-gray-800 dark:text-gray-100">Rekam Medis</span>
                <br />
                <span className="text-gray-800 dark:text-gray-100">Digital</span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Solusi rekam medis elektronik <strong className="text-teal-600 dark:text-teal-400">gratis dan open source</strong> untuk FKTP (Puskesmas, Klinik, Dokter, dan Praktek Mandiri).
                <br /><br />
                Kelola data pasien, jadwal konsultasi, dan riwayat medis dengan mudah dan aman.
                Sistem yang dapat disesuaikan dengan kebutuhan praktek Anda untuk meningkatkan efisiensi pelayanan kesehatan.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/download"
                  className="group bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/40 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Download className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Download Gratis</span>
                </a>
                <a
                  href="https://github.com/AbahWeb/faskesku.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Github className="w-6 h-6 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
                  <span className="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Lihat Source Code</span>
                </a>
              </div>

              {/* Integration Partners */}
              <div className="mt-10">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 text-center lg:text-left uppercase tracking-wider">Terintegrasi dengan:</p>
                <div className="flex items-center justify-center lg:justify-start gap-6">
                  {/* BPJS Kesehatan Logo */}
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                    <Image
                      src="/bpjs-logo.png"
                      alt="BPJS Kesehatan Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">BPJS Kesehatan</span>
                  </div>

                  {/* Satu Sehat Logo */}
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                    <Image
                      src="/satu-sehat-logo.png"
                      alt="Satu Sehat Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Satu Sehat</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  100% Gratis
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Open Source
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Data Aman
                </div>
              </div>
            </div>

            {/* Hero Image / Feature Highlight */}
            <FeatureSlider />
          </div>
        </div>
      </section>

      {/* About Section - Apa itu FASKESKU */}
      <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900" itemScope itemType="https://schema.org/AboutPage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Apa itu FASKESKU?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              FASKESKU adalah solusi rekam medis elektronik yang revolusioner untuk dunia kesehatan Indonesia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Misi Kami: Demokratisasi Teknologi Kesehatan
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  FASKESKU hadir dengan misi untuk memberikan akses teknologi rekam medis elektronik yang berkualitas tinggi
                  kepada seluruh tenaga kesehatan di Indonesia, tanpa memandang ukuran klinik atau kemampuan finansial.
                </p>
                <p className="text-lg leading-relaxed">
                  Kami percaya bahwa setiap dokter, klinik, dan puskesmas berhak mendapatkan sistem informasi kesehatan
                  yang modern, aman, dan mudah digunakan untuk memberikan pelayanan terbaik kepada pasien.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Gratis Selamanya</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">1000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Klinik Pengguna</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Dukungan Komunitas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">MIT</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Lisensi Open Source</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Open Source</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Kode sumber terbuka dengan lisensi MIT. Transparan, dapat diaudit, dan dikembangkan bersama komunitas.
              </p>
              <a href="https://github.com/AbahWeb/faskesku.id" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                <Github className="w-4 h-4" />
                Lihat di GitHub
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Dibuat dengan ❤️</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Dikembangkan oleh tim developer Indonesia yang peduli dengan kemajuan sistem kesehatan nasional.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Made in Indonesia 🇮🇩
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Komunitas Global</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Bergabung dengan komunitas developer dan tenaga kesehatan dari seluruh dunia yang berkontribusi.
              </p>
              <a href="https://faskesku.com/community" className="text-purple-600 dark:text-purple-400 hover:underline">
                Gabung Komunitas
              </a>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mengapa Memilih FASKESKU?
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-white">
              <div>
                <div className="text-3xl font-bold mb-2">🆓</div>
                <div className="font-semibold">Gratis Selamanya</div>
                <div className="text-sm opacity-90">Tidak ada biaya tersembunyi</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">🔓</div>
                <div className="font-semibold">Open Source</div>
                <div className="text-sm opacity-90">Kode terbuka & transparan</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">🇮🇩</div>
                <div className="font-semibold">Buatan Indonesia</div>
                <div className="text-sm opacity-90">Sesuai regulasi lokal</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">🤝</div>
                <div className="font-semibold">Dukungan Komunitas</div>
                <div className="text-sm opacity-90">Forum & dokumentasi lengkap</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white dark:bg-gray-800" aria-label="Fitur Unggulan FASKESKU">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Fitur Unggulan FASKESKU
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dilengkapi dengan fitur-fitur canggih untuk memudahkan pengelolaan rekam medis di klinik Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Manajemen Pasien</h3>
              <p className="text-gray-600 dark:text-gray-300">Kelola data pasien dengan mudah, lengkap dengan riwayat medis dan informasi kontak.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Keamanan Data</h3>
              <p className="text-gray-600 dark:text-gray-300">Data pasien tersimpan aman dengan enkripsi tingkat tinggi dan backup otomatis.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Jadwal Praktik</h3>
              <p className="text-gray-600 dark:text-gray-300">Atur jadwal praktik dan appointment pasien dengan sistem kalender terintegrasi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Numpang Server Section */}
      <section id="numpang-server" className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Numpang Server
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tidak mau ribet kelola server sendiri? Kami sediakan layanan hosting dengan infrastruktur enterprise,
              monitoring 24/7, dan support teknis profesional.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-purple-100 dark:border-purple-800">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Keamanan Terjamin</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Server dengan keamanan tingkat enterprise, SSL certificate, firewall, dan backup otomatis setiap hari.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-purple-100 dark:border-purple-800">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Monitoring 24/7</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pemantauan server dan aplikasi secara real-time dengan notifikasi otomatis jika ada masalah.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-purple-100 dark:border-purple-800">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Support Profesional</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tim support teknis siap membantu via WhatsApp, email, atau telepon kapan saja dibutuhkan.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Text */}
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Siap Mulai Tanpa Ribet?
                </h3>
                <p className="text-xl text-purple-100">
                  Fokus pada pasien Anda, biarkan kami yang urus infrastruktur teknologi.
                  Server enterprise-grade dengan <span className="font-bold text-yellow-300">uptime 99.9%</span>,
                  backup otomatis, dan support 24/7. Tanpa ribet setup!
                </p>
              </div>

              {/* Right: Buttons */}
              <div className="flex flex-col gap-4">
                <a
                  href="https://my.abahweb.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Daftar Sekarang
                </a>
                <a
                  href="https://wa.me/6285229572326?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Numpang%20Server%20FASKESKU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500/30 backdrop-blur text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500/50 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Konsultasi Gratis
                </a>
                <p className="text-purple-100 text-sm text-center mt-2">
                  💬 Tim kami akan menghubungi Anda dalam 1x24 jam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Siap Memulai dengan FASKESKU?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Download aplikasi gratis sekarang dan rasakan kemudahan mengelola rekam medis digital untuk klinik Anda.
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>4.8/5 Rating</span>
            </div>
            <div>•</div>
            <div>1000+ Klinik Terdaftar</div>
            <div>•</div>
            <div>100% Gratis & Open Source</div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* WhatsApp Contact Options - Expandable */}
        <div className="group relative">
          {/* Contact Options (Hidden by default, shown on hover) */}
          <div className="absolute bottom-full right-0 mb-3 flex flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            {/* Contact 1 */}
            <a
              href="https://wa.me/6282138143546?text=Halo%20Tim%20FASKESKU%2C%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20sistem%20rekam%20medis%20FASKESKU.%20Bisakah%20Anda%20membantu%20saya%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105 min-w-[240px]"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Admin 1</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">+62 821-3814-3546</div>
              </div>
            </a>

            {/* Contact 2 */}
            <a
              href="https://wa.me/6282241896669?text=Halo%20Tim%20FASKESKU%2C%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20sistem%20rekam%20medis%20FASKESKU.%20Bisakah%20Anda%20membantu%20saya%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105 min-w-[240px]"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Admin 2</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">+62 822-4189-6669</div>
              </div>
            </a>
          </div>

          {/* Main WhatsApp Button */}
          <button className="relative bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group-hover:rounded-2xl">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>

            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></span>

            {/* Tooltip */}
            <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Hubungi Kami
            </span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">FASKESKU</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Aplikasi rekam medis elektronik <strong>gratis dan open source</strong> yang membantu klinik dokter dan praktek mandiri
                mengelola data pasien dengan mudah dan aman.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <a href="https://github.com/AbahWeb/faskesku.id" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://faskesku.com" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
              <div className="text-sm text-gray-500">
                © 2024 FASKESKU. Open Source Project under MIT License.
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produk</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">Tentang</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="https://docs.faskesku.com" className="hover:text-white transition-colors">Dokumentasi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Komunitas</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://github.com/AbahWeb/faskesku.id" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://faskesku.com/community" className="hover:text-white transition-colors">Forum</a></li>
                <li><a href="https://faskesku.com/contribute" className="hover:text-white transition-colors">Kontribusi</a></li>
                <li><a href="https://faskesku.com/support" className="hover:text-white transition-colors">Dukungan</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
