
export const metadata = {
  title: "Panduan Instalasi | faskesku.id",
  description: "Panduan lengkap instalasi dan deployment FASKESKU untuk Localhost dan Server/VPS.",
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <section className="space-y-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Panduan Instalasi & Deployment</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Pilih metode yang sesuai dengan kebutuhan Anda. Kami menyediakan panduan untuk mencoba di komputer sendiri (Localhost) maupun untuk mengonlinekan website (Server/VPS).
            </p>
          </div>

          <div className="space-y-16">
            {/* Bagian 1: Localhost */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-full hidden md:block"></div>
              <div className="md:pl-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold md:hidden">1</span>
                  Cara Install di Laptop/PC (Localhost)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Gunakan metode ini jika Anda hanya ingin melihat-lihat tampilan aplikasi atau melakukan pengembangan (coding) di Windows atau Mac.
                </p>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Langkah 1: Siapkan Aplikasi Pendukung</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Download dan install aplikasi berikut:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm ml-2 space-y-1">
                      <li><strong>Node.js (LTS Version)</strong>: Download di <a href="https://nodejs.org" target="_blank" className="text-blue-600 hover:underline">nodejs.org</a>.</li>
                      <li><strong>Git</strong>: Download di <a href="https://git-scm.com" target="_blank" className="text-blue-600 hover:underline">git-scm.com</a>.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Langkah 2: Download & Jalankan</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Buka aplikasi <strong>Terminal</strong> (Mac/Linux) atau <strong>PowerShell</strong> (Windows), lalu copy-paste perintah ini satu per satu:</p>
                    <pre className="mt-3 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 rounded-lg overflow-x-auto text-sm border border-gray-200 dark:border-gray-700 font-mono leading-relaxed">
{`# 1. Download kode dari GitHub
git clone https://github.com/jebeng83/faskesku.id.git

# 2. Masuk ke folder aplikasi
cd faskesku.id

# 3. Install semua kebutuhan aplikasi
npm ci

# 4. Jalankan aplikasi
npm run dev`}
                    </pre>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Berhasil!</strong> Sekarang buka browser dan kunjungi <span className="font-mono font-bold">http://localhost:3000</span> untuk melihat hasilnya.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian 2: Server Static */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-full hidden md:block"></div>
              <div className="md:pl-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 text-sm font-bold md:hidden">2</span>
                  Cara Mengonlinekan (Frontend Saja)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Gunakan metode ini jika Anda ingin meng-upload ke hosting biasa (cPanel) atau penyedia static hosting. Cara ini paling mudah dan murah.
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Langkah 1: Buat File Siap Upload</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Di terminal/PowerShell komputer Anda, jalankan:</p>
                    <pre className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-3 rounded-lg overflow-x-auto text-sm border border-gray-200 dark:border-gray-700 font-mono">
{`npm run build:static`}
                    </pre>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Langkah 2: Upload</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm ml-2 space-y-1">
                      <li>Akan muncul folder baru bernama <span className="font-mono font-bold">out</span> di komputer Anda.</li>
                      <li>Upload <strong>seluruh isi folder out</strong> tersebut ke public_html (cPanel) atau server Anda.</li>
                      <li>Selesai! Website sudah online.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian 3: VPS / aaPanel */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-full hidden md:block"></div>
              <div className="md:pl-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 text-sm font-bold md:hidden">3</span>
                  Cara Setup VPS Sendiri (aaPanel)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Panduan lengkap untuk pengguna tingkat lanjut yang menggunakan VPS (Virtual Private Server) dan ingin mengontrol penuh server (Frontend + Backend Laravel).
                </p>

                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 p-6 space-y-8">
                  
                  {/* Step 3.1 */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">Langkah 1</span>
                      Install Panel Kontrol (aaPanel)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Login ke VPS Anda via SSH (sebagai root), lalu jalankan perintah instalasi aaPanel (untuk Ubuntu/Debian):
                    </p>
                    <pre className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-3 rounded-lg overflow-x-auto text-xs border border-gray-200 dark:border-gray-700 font-mono">
{`URL=https://www.aapanel.com/script/install_6.0_en.sh && if [ -f /usr/bin/curl ];then curl -ksSO "$URL" ;else wget --no-check-certificate -O install_6.0_en.sh "$URL";fi;bash install_6.0_en.sh aapanel`}
                    </pre>
                    <p className="text-xs text-gray-500 mt-2">
                      *Setelah selesai, simpan URL login, username, dan password yang muncul. Login ke panel dan install paket <strong>LNMP</strong> (Recommended).
                    </p>
                  </div>

                  {/* Step 3.2 */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">Langkah 2</span>
                      Siapkan Website & Download Kode
                    </h4>
                    <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-1">
                      <li>Di menu aaPanel, klik <strong>Website</strong> &rarr; <strong>Add Site</strong>. Masukkan domain Anda.</li>
                      <li>Buka menu <strong>Files</strong>, masuk ke folder website Anda (biasanya di <code>/www/wwwroot/domainanda.com</code>).</li>
                      <li>Klik tombol <strong>Terminal</strong> di aaPanel, lalu jalankan perintah ini untuk mengambil kode terbaru:</li>
                    </ol>
                    <pre className="mt-3 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-3 rounded-lg overflow-x-auto text-sm border border-gray-200 dark:border-gray-700 font-mono">
{`# Hapus file bawaan aaPanel
rm -rf index.html .htaccess 404.html

# Download kode dari GitHub
git clone https://github.com/jebeng83/faskesku.id.git .`}
                    </pre>
                  </div>

                  {/* Step 3.3 */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">Langkah 3</span>
                      Konfigurasi Backend (Laravel)
                    </h4>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                      <p className="text-xs text-yellow-800 dark:text-yellow-200">
                        <strong>Penting:</strong> Langkah ini hanya jika repositori Anda berisi backend Laravel. Jika hanya frontend Next.js, lewati bagian Composer/Artisan.
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Jika ini adalah aplikasi Full Stack Laravel, jalankan perintah berikut di terminal folder website:
                    </p>
                    <pre className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-3 rounded-lg overflow-x-auto text-sm border border-gray-200 dark:border-gray-700 font-mono">
{`# 1. Install Library PHP
composer install --optimize-autoloader --no-dev

# 2. Setup Database & Environment
cp .env.example .env
# (Edit file .env dan sesuaikan DB_DATABASE, DB_USERNAME, DB_PASSWORD)

# 3. Finalisasi Setup
php artisan key:generate
php artisan storage:link
php artisan migrate --seed

# 4. Atur Izin File
chown -R www:www storage bootstrap/cache`}
                    </pre>
                  </div>

                  {/* Step 3.4 */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">Langkah 4</span>
                      Setting Web Server (Nginx)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Agar aplikasi bisa diakses publik dengan benar:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-2">
                      <li>Buka pengaturan website di aaPanel.</li>
                      <li>Pilih menu <strong>Site Directory</strong>, ubah &quot;Running Directory&quot; menjadi <code>/public</code> (untuk Laravel) atau root (untuk Next.js export).</li>
                      <li>Pilih menu <strong>URL Rewrite</strong>, pilih template <strong>Laravel</strong> lalu Simpan.</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}