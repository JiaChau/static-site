# SocialScreen - Screen Time Companion

SocialScreen turns Apple's Screen Time APIs into a collaborative experience for families and individuals who want healthier digital habits. The GitHub Pages site shares the current vision, roadmap, and contact details for the project.

## Why SocialScreen Exists
- Translate raw Screen Time data into a shared, trustworthy source of truth.
- Reduce friction when parents/guardians need to set boundaries.
- Encourage ongoing conversations rooted in data instead of arguments.

## Mission
SocialScreen helps individuals and families build healthier digital habits by surfacing daily insights, highlighting trends, and enabling collaborative controls for limits, downtime, and shared goals.

## Core Features
- **Live Screen Time insights** with daily/weekly totals, categories, and streaks.
- **Shared limits and downtime** that sync directly with Apple's Screen Time settings.
- **Family Activity Picker** for selecting apps, categories, and sites per policy.
- **Device Activity schedules** driven by ManagedSettings and DeviceActivity for precise enforcement.
- **Progress sharing (coming soon)** so trusted contacts can celebrate wins.

## How It Works
1. Authorize Screen Time using Apple's entitlement flow.
2. Select activities via FamilyActivityPicker and store them securely on-device.
3. Apply policies that ManagedSettingsStore and DeviceActivitySchedule enforce.
4. Review live insights together inside the SocialScreen dashboard.

## Privacy & Data
- Screen Time data stays tied to the user's account or Family Sharing group.
- No third-party ad networks or ad-blocking behavior.
- Opt-in backend syncing (when available) uses encrypted transport and GitHub Education cloud databases.

## Status & Roadmap
- MVP demo (SwiftUI + mocked data) shipped in December 2025.
- Pending Apple approval for the `com.apple.developer.family-controls` entitlement.
- Next milestone: backend beta that shares highlights with trusted contacts.

## Contact
- Email: [jiarongchau@gmail.com](mailto:jiarongchau@gmail.com)
- GitHub: [github.com/ja](https://github.com/ja)
