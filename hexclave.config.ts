import type { HexclaveConfig } from "@hexclave/next";

export const config: HexclaveConfig = {
  "emails": {
    "selectedThemeId": "1df07ae6-abf3-4a40-83a5-a1a2cbe336ac"
  },
  "auth": {
    "password": {
      "allowSignIn": true
    },
    "otp": {
      "allowSignIn": true
    },
    "passkey": {
      "allowSignIn": true
    },
    oauth: {
      providers: {
        google: {
          type: "google",
          allowSignIn: true,
          allowConnectedAccounts: false,
        },
      },
    },
  },
  "apps": {
    "installed": {
      "authentication": {
        "enabled": true
      },
      "fraud-protection": {
        "enabled": false
      },
      "onboarding": {
        "enabled": false
      },
      "teams": {
        "enabled": false
      },
      "rbac": {
        "enabled": false
      },
      "api-keys": {
        "enabled": false
      },
      "payments": {
        "enabled": true
      },
      "emails": {
        "enabled": true
      },
      "support": {
        "enabled": false
      },
      "email-api": {
        "enabled": false
      },
      "data-vault": {
        "enabled": false
      },
      "webhooks": {
        "enabled": false
      },
      "tv-mode": {
        "enabled": false
      },
      "launch-checklist": {
        "enabled": false
      },
      "catalyst": {
        "enabled": false
      },
      "neon": {
        "enabled": false
      },
      "convex": {
        "enabled": false
      },
      "vercel": {
        "enabled": false
      },
      "tanstack-start": {
        "enabled": false
      },
      "analytics": {
        "enabled": true
      },
      "session-replays": {
        "enabled": false
      }
    }
  }
};
