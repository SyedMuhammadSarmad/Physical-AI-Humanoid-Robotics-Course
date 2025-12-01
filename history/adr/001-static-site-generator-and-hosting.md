# ADR 001: Choice of Static Site Generator (Docusaurus) and Hosting (GitHub Pages)

**Date**: 2025-11-30

## Context

The "Physical AI & Humanoid Robotics Course" book requires an online platform for content delivery that is easy to author, maintain, and deploy, targeting tech enthusiasts and technical stakeholders. The platform must be performant, accessible, and support modular content.

## Decision

The platform will be built using **Docusaurus** as the static site generator and deployed to **GitHub Pages** for hosting.

## Alternatives Considered

*   **Other Static Site Generators (e.g., Next.js Static Export, Hugo, Jekyll, GitBook):**
    *   Next.js offers more flexibility but comes with a larger learning curve and setup overhead for a purely documentation-focused site.
    *   Hugo/Jekyll are faster but might require more custom theming for documentation-specific features like sidebars, search, and versioning.
    *   GitBook is a good alternative but Docusaurus provides strong native support for documentation features.
*   **Other Hosting Platforms (e.g., Netlify, Vercel, AWS S3):**
    *   Netlify/Vercel offer more advanced build/deploy pipelines and features but add another layer of complexity compared to direct GitHub Pages integration for a simple static site.
    *   AWS S3 requires more manual setup for hosting and CDN.

## Rationale

*   **Docusaurus**:
    *   **Documentation-focused**: Provides out-of-the-box features essential for a technical book: markdown-based content, sidebars, versioning, search, and a clean, responsive theme.
    *   **React-based**: Leverages familiar modern web development paradigms (React, Node.js, TypeScript) for easy customization and extensibility.
    *   **Community & Support**: Active community and well-maintained project.
    *   **Markdown/MDX**: Supports rich content creation with embedded React components for interactivity.
*   **GitHub Pages**:
    *   **Free & Integrated**: Free hosting for public repositories, tightly integrated with the Git repository for content source.
    *   **Simplicity**: Simplifies the deployment pipeline significantly for a static site.
    *   **Version Control**: Leverages Git for content versioning and collaboration.
    *   **Scalability**: Static sites served via CDN on GitHub Pages scale well for high traffic.

## Consequences

*   **Positive**:
    *   Rapid setup and deployment of a professional-looking documentation site.
    *   Simplified content authoring and version control via Markdown/MDX and Git.
    *   Low operational overhead (no server management).
    *   Excellent support for accessibility and responsive design via Docusaurus theme.
*   **Negative**:
    *   Limited dynamic features (requires workarounds for backend interactions like advanced feedback forms).
    *   Dependence on Docusaurus framework for major feature changes.
    *   GitHub Pages has some limitations compared to dedicated static site hosts (e.g., custom plugins).
