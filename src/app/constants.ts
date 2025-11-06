export const SITE_CONFIG = {
  name: "Noah",
  tagline: "Your Gateway to Bitcoin's Ark Protocol",
  description: {
    short:
      "Noah is a Lightning wallet built on Ark, a second-layer protocol for Bitcoin that enables instant and low-cost transactions.",
    long: "The Ark protocol is a second layer on the bitcoin network. It offers: simple onboarding, low and predictable fees, instant payments, Lightning interoperability, and full control over your bitcoin.",
  },
  logo: {
    src: "/1024_no_background.png",
    alt: "Noah Logo",
    width: 180,
    height: 180,
  },
} as const;

export const DOWNLOAD_LINKS = {
  testflight: {
    url: "https://testflight.apple.com/join/E4P44dXF",
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
    url: "https://github.com/BlixtWallet/noah/releases/download/v0.0.1.signet/noah-android-apk-2025-11-06-08-22.apk",
    label: "Direct APK",
    subtitle: "Android Package",
    color: "purple",
  },
} as const;

export const EXTERNAL_LINKS = {
  github: "https://github.com/BlixtWallet/noah",
  arkProtocol: "https://ark-protocol.org",
} as const;
