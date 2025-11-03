import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.1),transparent_70%)]" />

      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 animate-float">
              <Image
                src="/1024.png"
                alt="Noah Logo"
                width={180}
                height={180}
                priority
                className="drop-shadow-2xl"
              />
            </div>

            <h1 className="mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent md:text-7xl">
              Noah
            </h1>

            <p className="mb-6 text-xl text-blue-200 md:text-2xl">
              Your Gateway to Bitcoin's Ark Protocol
            </p>

            <div className="mb-12 max-w-2xl space-y-4 text-lg leading-relaxed text-slate-300">
              <p>
                Noah is a Lightning wallet built on{" "}
                <span className="font-semibold text-blue-300">Ark</span>, a
                second-layer protocol for Bitcoin that enables instant,
                low-cost, and private transactions.
              </p>
              <p>
                Ark provides a trustless mixing service with unilateral exit
                capabilities, allowing users to send and receive bitcoin
                instantly without the complexity of managing Lightning channels.
                Experience the future of Bitcoin scaling with self-custodial
                simplicity.
              </p>
            </div>

            <div className="mb-12 w-full max-w-3xl">
              <h2 className="mb-6 text-2xl font-semibold text-blue-100">
                Download Noah
              </h2>

              <div className="grid gap-4 md:grid-cols-3">
                <a
                  href="#"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:from-blue-500/30 hover:to-blue-600/30 border border-blue-400/20 hover:border-blue-400/40"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/20">
                      <svg
                        className="h-10 w-10 text-blue-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">TestFlight</p>
                      <p className="text-sm text-slate-400">iOS Beta</p>
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:from-green-500/30 hover:to-green-600/30 border border-green-400/20 hover:border-green-400/40"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-500/20">
                      <svg
                        className="h-10 w-10 text-green-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Play Store</p>
                      <p className="text-sm text-slate-400">Android Beta</p>
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:from-purple-500/30 hover:to-purple-600/30 border border-purple-400/20 hover:border-purple-400/40"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-500/20">
                      <svg
                        className="h-10 w-10 text-purple-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Direct APK</p>
                      <p className="text-sm text-slate-400">Android Package</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/BlixtWallet/noah"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-slate-800/50 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70 border border-slate-700/50 hover:border-slate-600"
              >
                <svg
                  className="h-6 w-6 text-slate-300 transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-medium text-slate-200">
                  View on GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
