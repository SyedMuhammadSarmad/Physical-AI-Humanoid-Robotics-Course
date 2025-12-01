# Research Findings for Physical AI & Humanoid Robotics Course Book Platform

**Feature Branch**: `001-physical-ai-course`  
**Created**: 2025-11-30  
**Spec**: [link to spec.md]

## Node.js Version for Docusaurus

**Research Task**: Research recommended Node.js versions for Docusaurus projects.

**Decision**: Node.js 20.x LTS
**Rationale**: Node.js 20.x is the current Long Term Support (LTS) version, providing stability and active maintenance, making it suitable for new Docusaurus projects.
**Alternatives considered**: Node.js 18.x (older LTS, still compatible), latest non-LTS versions (less stability for production).

---

## Web Analytics Library for Docusaurus/GitHub Pages

**Research Task**: Research suitable web analytics libraries for Docusaurus/GitHub Pages.

**Decision**: Google Analytics (GA4)
**Rationale**: GA4 offers comprehensive data collection and reporting, with built-in integration support within Docusaurus, simplifying setup and maintenance.
**Alternatives considered**: Plausible Analytics (privacy-focused, custom integration), Fathom Analytics (privacy-focused, custom integration), Matomo (open-source, self-hosting option).

---

## E2E Testing Frameworks for Docusaurus/React

**Research Task**: Research E2E testing frameworks for Docusaurus/React applications.

**Decision**: Playwright
**Rationale**: Playwright is a modern, powerful framework offering excellent cross-browser compatibility (Chromium, Firefox, WebKit) and robust automation capabilities, ideal for ensuring the Docusaurus site's functionality across different environments.
**Alternatives considered**: Cypress (developer-friendly, but less cross-browser native), Selenium WebDriver (very flexible, but often more verbose setup).

---

## Content Volume and User Scale for Online Textbook

**Research Task**: Determine typical content volume and user scale for an online textbook to inform CDN/analytics sizing.

**Decision**:
*   **Content Volume**: Target 5-10 parts/modules, with 5-10 chapters per module (totaling 25-100 chapters). Each chapter estimated at 10-20 screen-equivalent pages.
*   **User Scale**: Platform should handle thousands of concurrent users if content becomes popular, relying on static site hosting (GitHub Pages) and CDN capabilities. Initial concurrent users expected to be dozens to hundreds.
**Rationale**: These estimates provide a baseline for planning the Docusaurus site structure and anticipating traffic, ensuring the chosen technologies (GitHub Pages, Docusaurus, GA4) can scale appropriately for the target audience.
**Alternatives considered**: Smaller/larger content volumes and user scales, but chosen ranges balance typical textbook scope with initial project feasibility.
