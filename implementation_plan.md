# Implementation Plan - NFR Portal Revamp

We will revamp the "No Follow-Up Required" (NFR) Leadership Portal to create a state-of-the-art, premium digital experience. The revamp will turn the empty directory `c:\No Reminder Website` into a modern Single Page Application (SPA) with a sleek dark glassmorphism theme, smooth animations, interactive charts, and a fully functional workbook with local storage persistence.

## User Review Required

> [!IMPORTANT]
> **Tech Stack Selection:**
> - We will build this application using **HTML5, Vanilla CSS3 (for custom themes/animations), and Vanilla JavaScript**.
> - An SPA architecture will keep the state (especially the Interactive Workbook) alive and seamless as the user moves between pages.
> - No complex build pipelines are needed, making local development and deployment instant.
>
> **Design Philosophy (Dark Glassmorphism):**
> - **Primary Background:** `#090e1a` (deep space navy).
> - **Glass Cards:** Semi-transparent containers (`backdrop-filter: blur(16px)`) with glowing borders.
> - **Accents:** Electric Teal (`#0df2c9`), Neon Cyan (`#00d2ff`), and Coral Red (`#ff5252` for highlighting follow-up burdens).
> - **Typography:** "Space Grotesk" for headers (modern and tech-focused) and "Outfit" for high-legibility body text.

## Proposed Changes

We will create three core files in `c:\No Reminder Website`:

### NFR Portal Application

#### [NEW] [index.html](file:///c:/No%20Reminder%20Website/index.html)
- Main SPA shell containing the navigation header, layout container, footer, and the view templates for all 5 sections:
  1. **Overview**: Introduction to the NFR movement, leadership tax metrics, and core disciplines.
  2. **Journey**: The 3-week, 9-chapter leader curriculum with expandable chapter details and reading times.
  3. **Workbook (Interactive)**: A client-side dashboard containing the Leader Profile form, Live Loop Capture form, dynamic metrics (Mapped Loops, Weekly burden, Monthly burden), progress bars, Top 3 priority loops, and a Loop Register list.
  4. **Charter**: The NFR guiding principles, leader/department commitments, and interactive "BP Ratio Shift" visualizer.
  5. **Levels**: The NFR Levels grid (NFRL, NFRT, NFRD, NFRC, NFRE) and certification evidence requirements.

#### [NEW] [styles.css](file:///c:/No%20Reminder%20Website/styles.css)
- Core design system:
  - Custom scrollbars, glassmorphism card variables, and typography rules.
  - Responsive grids (flexbox and modern grid-layout) optimized for desktop, tablet, and mobile displays.
  - Hover effects: subtle scales, neon glows, button hover animations.
  - Interactive elements: custom checkboxes, toggle elements, and alert panels.
  - Dynamic animations: fade-in-up entries for cards, pulse animation for burden meters.

#### [NEW] [app.js](file:///c:/No%20Reminder%20Website/app.js)
- Routing logic (managing active state in the DOM with custom hash-routing or view tabs).
- **Interactive Workbook Controller**:
  - Save/Load Leader Profile from `localStorage`.
  - Add and delete follow-up loops.
  - Dynamically calculate and render metrics (Mapped Loops, Weekly/Monthly count summaries).
  - Render progress bars indicating burden direction (You follow up vs. Others follow up with you).
  - Dynamically update the Top 3 most expensive loops (sorted by frequency).
  - Support exporting loop data as a JSON file (in lieu of the spreadsheet downloads).

---

## Verification Plan

### Automated Tests
- Since it is a vanilla web application, we can verify syntax and code validity by testing in the browser.
- We will configure a local dev server to check console logs and ensure there are no JavaScript errors.

### Manual Verification
- **Navigation:** Click all navbar and footer links to verify view transitions and ensure active styles update correctly.
- **Profile Persistence:** Fill out the Leader Profile, refresh, and confirm the data is restored.
- **Workbook Mechanics:**
  - Add multiple follow-up loops with varying frequencies.
  - Verify that the metrics update immediately.
  - Verify that the "Top 3 loops" section displays the most expensive entries.
  - Delete a loop and confirm metrics and list adapt correctly.
- **Responsiveness:** Test on simulated mobile and desktop screen sizes.
