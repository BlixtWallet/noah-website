export const SITE_CONFIG = {
  name: "Noah",
  tagline: "Your Gateway to Bitcoin's Ark Protocol",
  description: {
    short:
      "Noah is a Lightning wallet built on Ark, a second-layer protocol for Bitcoin that enables instant, low-cost, and private transactions.",
    long: "Ark provides a trustless mixing service with unilateral exit capabilities, allowing users to send and receive bitcoin instantly without the complexity of managing Lightning channels. Experience the future of Bitcoin scaling with self-custodial simplicity.",
  },
  logo: {
    src: "/1024.png",
    alt: "Noah Logo",
    width: 180,
    height: 180,
  },
} as const;

export const DOWNLOAD_LINKS = {
  testflight: {
    url: "#",
    label: "TestFlight",
    subtitle: "iOS Beta",
    color: "blue",
  },
  playstore: {
    url: "#",
    label: "Play Store",
    subtitle: "Android Beta",
    color: "green",
  },
  apk: {
    url: "#",
    label: "Direct APK",
    subtitle: "Android Package",
    color: "purple",
  },
} as const;

export const EXTERNAL_LINKS = {
  github: "https://github.com/BlixtWallet/noah",
  arkProtocol: "https://ark-protocol.org",
} as const;
